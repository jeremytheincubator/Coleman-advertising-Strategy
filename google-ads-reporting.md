# Google Ads in The Hatch reporting

Set up 10/11/2026. Digital > Campaign reporting reads the `ad_metrics` table. Google rows go in with `platform = 'google'`, one row per day per asset group (PMax) or ad group (everything else). In the view, the asset group or ad group sits in both the ad set and ad slots.

## Route 1: Google Ads script (live)

- `ad-metrics` edge function (version 2) has an `ingest` step. It only accepts a push carrying the `x-ingest-key` header that matches `ad_secrets` platform `google_ingest`.
- Coleman's Google account is linked: `ad_accounts` id `google:6080680425`, client Coleman.
- The script is `google-ads-script.js` in this repo, with the key left out. It goes in Google Ads > Tools > Bulk actions > Scripts, set to run hourly.
- Adding another client: insert an `ad_accounts` row (`id 'google:<customer id>'`, `platform 'google'`, the client id), then paste the same script into that client's Google Ads account. The same key works.

## Route 2: direct Google Ads API (waiting on Basic access)

The function already has the code. It switches itself on for Google accounts once `ad_secrets` platform `google_api` holds:

```
{"developer_token": "...", "client_id": "...", "client_secret": "...", "refresh_token": "...", "login_customer_id": "8587479186"}
```

When that row exists, the hourly job pulls Google directly and the script can be switched off. Until then the hourly job skips Google and says it's fed by the script.

### Steps

1. **Apply for Basic access.** In The Incubator MCC (858-747-9186): Tools > API Centre. The developer token is at Explorer level, which only reads test accounts. Click "Apply for Basic access". Google asks for a design document and use case; use the text below. Approval usually takes a few working days.
2. **OAuth client.** In Google Cloud, in the project that owns the token, create an OAuth client (type Web application or Desktop) and enable the Google Ads API.
3. **Refresh token.** Sign in once as a user with access to the MCC and the `https://www.googleapis.com/auth/adwords` scope to get a refresh token.
4. **Store it.** Put the JSON above into `ad_secrets` (platform `google_api`). Do not paste it into chat or this repo.

### Application text (for the Basic access form)

**Company:** Incubator Pty Ltd trading as The Incubator, a creative and marketing agency in South Melbourne managing Google Ads for its clients through manager account 858-747-9186.

**What the tool does:** The Hatch is The Incubator's internal agency platform. Its campaign reporting page shows each client's Google Ads and Meta results side by side so the team can see which campaigns, asset groups and ad groups are performing and decide what to switch on or off.

**How it uses the API:** Read-only reporting. Once an hour a server function runs GoogleAdsService.SearchStream against each linked client account under our manager account, for the last three days, selecting campaign and asset group or ad group names, statuses and channel type, plus cost, impressions, clicks, conversions and conversion value, segmented by date. Results are stored in our own database and shown only to The Incubator's signed-in staff. No campaigns, budgets or ads are created or changed through the API.

**Users:** The Incubator's account managers and directors only. Clients do not log in.

**Volume:** Around 2 queries per client account per hour, under 1,000 operations a day.
