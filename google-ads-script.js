/**
 * The Hatch: push Google Ads results into Digital > Campaign reporting.
 *
 * Where it goes: in the client's Google Ads account, Tools > Bulk actions > Scripts > + New script.
 * Paste this whole file, set INGEST_KEY, Authorise, Preview once, then Save and set Frequency to Hourly.
 *
 * What it sends: the last 3 days (Google revises recent days) of spend, impressions, clicks,
 * conversions and conversion value, per asset group for Performance Max and per ad group for
 * everything else. The Hatch matches it to the client by this account's customer ID, so the
 * account has to be linked in The Hatch's ad_accounts table first (platform "google").
 *
 * The key is a write-only push key kept in The Hatch (ad_secrets, platform "google_ingest").
 * It is not stored in this repo. Ask Jeremy or read it from The Hatch.
 */
const HATCH_URL = 'https://flmvxbtmvgcobtjylfco.supabase.co/functions/v1/ad-metrics';
const INGEST_KEY = 'PASTE_THE_KEY_HERE';
const DAYS = 3;

function main() {
  const acc = AdsApp.currentAccount();
  const tz = acc.getTimeZone();
  const until = Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');
  const since = Utilities.formatDate(new Date(Date.now() - (DAYS - 1) * 864e5), tz, 'yyyy-MM-dd');
  const M = 'metrics.cost_micros, metrics.impressions, metrics.clicks, metrics.conversions, metrics.conversions_value';
  const C = 'campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type, segments.date';
  const rows = [];
  collect(`SELECT ${C}, asset_group.id, asset_group.name, asset_group.status, ${M} FROM asset_group ` +
          `WHERE segments.date BETWEEN '${since}' AND '${until}'`, 'asset_group', 'assetGroup', rows);
  collect(`SELECT ${C}, ad_group.id, ad_group.name, ad_group.status, ${M} FROM ad_group ` +
          `WHERE segments.date BETWEEN '${since}' AND '${until}' AND campaign.advertising_channel_type != 'PERFORMANCE_MAX'`,
          'ad_group', 'adGroup', rows);

  const res = UrlFetchApp.fetch(HATCH_URL, {
    method: 'post',
    contentType: 'application/json',
    headers: { 'x-ingest-key': INGEST_KEY },
    muteHttpExceptions: true,
    payload: JSON.stringify({
      action: 'ingest',
      account_id: acc.getCustomerId().replace(/-/g, ''),
      account_name: acc.getName(),
      currency: acc.getCurrencyCode(),
      timezone: tz,
      rows: rows,
    }),
  });
  Logger.log(`Sent ${rows.length} rows for ${since} to ${until}. The Hatch said ${res.getResponseCode()}: ${res.getContentText()}`);
  if (res.getResponseCode() !== 200) throw new Error('The Hatch did not accept the push: ' + res.getContentText());
}

function collect(query, kind, key, rows) {
  const it = AdsApp.search(query);
  while (it.hasNext()) {
    const r = it.next(), g = r[key] || {}, m = r.metrics || {}, c = r.campaign || {};
    rows.push({
      date: r.segments.date,
      campaign_id: String(c.id),
      campaign_name: c.name,
      campaign_status: c.status,
      channel: c.advertisingChannelType,
      group_kind: kind,
      group_id: String(g.id),
      group_name: g.name,
      group_status: g.status,
      cost_micros: m.costMicros || 0,
      impressions: m.impressions || 0,
      clicks: m.clicks || 0,
      conversions: m.conversions || 0,
      conversions_value: m.conversionsValue || 0,
    });
  }
}
