# Change log

Newest first. One line per action, with where it happened.

## 14/11/2026
- 04:25 Repo: `shopify-theme/2026-11-13-black-friday-editor-changes/` added with the exact values and the apply and reverse steps for every theme editor change below; STATE.md has a new Shopify site section.
- 04:17 Shopify theme editor (kitchens template, Custom HTML/Liquid `kitchen-barbecues`): selector tiles now use the collection metafield `custom.kitchen_selector_image`, falling back to the collection image. Checked live on the Outdoor Module Kitchen page.
- 04:15 Shopify admin: collection metafield definition "Kitchen selector image" created and pinned; set on the four barbecue kitchen collections to the four new 700 px selector images (uploaded to Files 04:13). Collection images left as they were.

## 13/11/2026
- 23:10 Shopify theme editor (Header group section `custom_liquid_cLN3Mj`, Custom CSS): countdown bar text enlarged (17 px label, 24 px digits).
- 22:58 Shopify theme editor (Header group): new Custom HTML/Liquid section added. Countdown bar on collection and product pages to 28/11 23:59:59 AEDT, plus links to `/pages/black-friday` over the homepage hero badge and the kitchen collection badge. Checked live on a kitchen collection, a product page, the homepage and the Black Friday page.
- 22:47 Shopify theme editor (kitchens template, Collection banner, Custom CSS): Black Friday badge shown in the banner's right half at 768 px and wider.
- 22:38 Shopify theme editor (Home page, `bf_home_banner`, Custom CSS): Black Friday badge enlarged on tablet and desktop widths as well; first enlargement for small screens saved about 22:02.
- 22:04 Shopify theme settings: favicon changed to `coleman_lantern_logo.png` (225 px); an earlier 64 px `coleman-favicon.png` went up at 21:57 and is now unused.

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
