# Change log

Newest first. One line per action, with where it happened.

## 21/11/2026
- 06:00 Meta: Jeremy re-exported the Kitchens statics at 05:46. New ads created for E (v2) and F from the 21/11 artwork; the 20/11 E paused; G unchanged (same files); 20/11 D left running. New D not loaded, label and price mismatch (see STATE.md). Prices checked against Shopify.
- 05:55 Check: all 10 ads from 20/11 approved and active. Spend since midnight: Kitchens $114, Dual Fuel + 5 Burner $73, Retargeting $24, old combined ad set $4.

## 20/11/2026
- 23:40 Meta: new ad sets and the retargeting campaign switched on; 10 new ads submitted for review. Floors set at $920 (Kitchens) and $460 (Dual Fuel + 5 Burner); Meta refused $930 and $465 against the $1,400 budget. Old ad sets left on.
- 23:35 Meta: 10 ads built through the API from The Hatch components 3, 6, 7, 11 and 14 (20/11 exports): Kitchens D, E, G; Dual Fuel v2; 5 Burner v2 B and C; Still thinking it over A and B; Kitchens cut 12s video twice (prospecting and retargeting). Store line added to every primary text.
- 23:30 Meta: three audiences created on pixel `1912256846793050` (site visitors 30d, purchasers 30d, hero spot viewers); retargeting campaign ($350 a day) and ad set created; two prospecting ad sets created in the existing campaign.
- 23:25 Meta: 27 statics and 3 Kitchens video files uploaded to the ad account library. API creative creation tested and found working (test creative deleted).
- 22:18 Google Ads 608-068-0425: seven broad negatives added to Brand Search (propane, camping, tent, stove, lantern, ziegler, cobb). "cooler" left out on purpose because the store sells the Heller beverage cooler.
- 22:12 Meta: prospecting campaign `120254782792610655` daily budget $640 to $1,400 (API, same route as the 16/11 step). Read back as $1,400; status showed "In process" straight after.
- 22:11 Scheduled tasks: budget step 2 rewritten as a read-only Tuesday check at 07:30 on 24/11; budget step 3 (27/11) switched off.
- 22:10 Google Ads 608-068-0425: PMax budget $670 to $850 a day; Brand Search budget $85 to $130 a day. Both read back correct.
- Repo: PLAN.md flat phasing added, DECISIONS.md updated, STATE.md updated.
- 22:00 Review (read only, nothing changed in Meta, Google, Shopify or The Hatch): spend about $15,450 of $43,200; Shopify 37 orders and about $90,500 since 08/11; sales slowed from 17/11; combined Add to cart ad set losing click rate; Purchase ad sets now show 10x on their 11/11 to 13/11 spend; PMax 2.4x; Brand Search 18x; retargeting still not built. Last-week plan recommended to Jeremy, awaiting his OK.
- Repo: STATE.md brought up to date. 16/11 budget step (Meta $640, PMax $670) and the 17/11 end of video views recorded from what the platforms show.

## 15/11/2026
- 15:50 Review (read only, nothing changed in Meta, Google or The Hatch): Meta combined Add to cart ad set confirmed live and out of learning; three Purchase copy ad sets still on but starved; retargeting not built; PMax and Brand Search serving since 13/11; PMax spending over its daily budget; Brand Search copy in 128-217-5264 not readable. Launch week about $1,680 under the $9,100 plan.
- Repo: STATE.md brought up to date (status table, spend against plan, ad set IDs). Entries below for 11/11 and 13/11 added from what the platforms show.

## 13/11/2026
- 22:53 Meta: Jeremy created the combined ad set "iGAF13265 | BF26 | Combined | Metro + store towns | Add to cart" (`120254853520690655`), optimising for Add to cart, to replace the three Purchase ad sets.
- Google Ads 608-068-0425: PMax and Brand Search recorded their first impressions and first sales (4 purchases, $15,318).

## 11/11/2026
- 09:50 Meta: the three prospecting ad sets were copied onto the Incubator pixel `1912256846793050` ("- Copy") and the originals on pixel `1052619822823359` paused.

## 12/11/2026
- 01:55 Google Ads 128-217-5264: Brand Search copy published as a serving test (ad group "Brand | Coleman BBQ", 11 campaign negatives added). Original in 608-068-0425 not paused.
- 01:50 Google Ads 128-217-5264: GA4 `purchase` imported as a primary conversion; Purchases is now an account default goal.
- 01:30 GA4 check: 3 of 13 purchases since 01/11 have no source (about $6,058, server-side events with no session); 54 "Cross-network" sessions on 11/11 that GA4 cannot tie to an Ads account while 608-068-0425 still reports no impressions; event data retention is 2 months. Nothing changed in GA4.
- 01:14 GA4: Jeremy linked property 408580183 to Google Ads 128-217-5264.
- Google Support chat (Jeremy, about 01:20 to 01:55): case raised on no impressions for Search and PMax in 608-068-0425; forwarded to the technical team, follow-up by email.

## 10/11/2026
- 14:05 Google check: the bid strategy report's "Inactive" covers 3 to 9 Nov, before both campaigns were switched on (23:10 on 09/11). Both are Enabled, Serving, Learning; keywords and ads approved; billing fine, no account alerts. Still 0 impressions about 15 hours in. Nothing changed.
- 13:03 Jeremy confirmed Meta is using the Incubator pixel `1912256846793050`; pixel blocker closed.
- 12:58 Tracking check since 01/11: Shopify 11 orders (about $18.6k), GA4 11 purchases (about $19.7k), Google Ads 0 conversions (no ad clicks yet). Meta pixel `1052619822823359` found sending inflated Purchase events until 08/11; Incubator pixel `1912256846793050` matches orders. Prospecting ad sets need switching to `1912…` before publishing. Nothing changed in Meta.
- 12:45 Meta check: video views ad back on since 09:39 with the agreed locations ($40.65, 9,980 impressions, 1,389 ThruPlays so far today). No prospecting or retargeting ads exist in the account yet.
- Meta: all 16 prospecting ads built as unpublished drafts (Gas BBQs 5, Dual Fuel 6, Kitchens 5) from `PLAN.md` copy and the library statics. Switched off on every ad: Optimise website destination and Shop, multi-advertiser ads, AI text strategies, carousel and collection formats, products and site links. Verified all 16 at 12:20. Not published; Jeremy to review and publish.
- Repo: STATE.md updated for the video views fix and the prospecting build route.
- Meta: one unpublished draft ad started in the Gas BBQs ad set ("iGAF13265 | Static | New Revolution 5 Burner", link set, no creative yet). Prospecting ads to be built by hand as drafts from the `PLAN.md` copy.
- Meta: Jeremy republished the hero spot video views ad about 09:30; "Delivery error" cleared and the ad is on.
- The Hatch: Campaign reporting page now shows Google (asset groups and ad groups) beside Meta, Meta connect kept under the results. Live 09:01, backup index-20261110-0901.html.
- Google Ads: The Hatch reporting script saved in the Coleman account on hourly; first push 08:11 (0 rows, no impressions yet).
- The Hatch: deleted the TEST row left in ad_metrics from testing the Google ingest.
- The Hatch: ad-metrics function v2 deployed with Google ingest and dormant direct API pull; Coleman Google account linked (google:6080680425); push key created. Script and Basic access notes added to this repo.
- 06:50 check: Google PMax and Brand Search live and approved, no impressions yet. Meta video views ad found paused with dev-mode error since 23:00 on 09/11 (caused by the API targeting edit). Old Google campaigns confirmed ended.
- Repo set up: CLAUDE.md, STATE.md, PLAN.md, DECISIONS.md, CHANGELOG.md.

## 09/11/2026
- Scheduled tasks created for budget steps on 16/11, 25/11, 27/11 (Claude scheduled tasks).
- Google: PMax and Brand Search switched on. PMax budget set to $540/day.
- Meta: prospecting campaign budget set to $520/day (still paused, no ads).
- Meta: video views ad set targeting changed from all of Australia to the agreed metro, metro-like and store-town locations.
- Meta: 16 prospecting ads failed twice: first no Page Advertise access (fixed by Jeremy), then the Composio app is in development mode (still blocked).
- Google: PMax campaign built paused with three asset groups, 60 images, text sets, logo, listing groups and locations.
- Meta: prospecting campaign and three pack ad sets built paused; 48 statics uploaded to the image library.
- The Hatch: 181 pushed Black Friday assets set to approved; three paused PMax Dual Fuel placeholders deleted.
- The Hatch: 2026-27 Season campaign trimmed to December to January ($16,800, from 07/12); "Delivered for Christmas" concept added ($4,800).
- Jeremy archived the season campaign's Black Friday and search sprints in The Hatch.

## 08/11/2026
- Canvas: Spend phasing and strategy board added.
- Phasing changed to front-loaded (see DECISIONS.md).
- The Hatch: Paid campaigns and concepts built for all Black Friday lines; components set on the ad builder with placement and format in each title.

## 07/11/2026
- Black Friday plan, packs and components set up in The Hatch (iGAF13265). Asset rough canvas published.
