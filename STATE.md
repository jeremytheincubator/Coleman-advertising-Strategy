# Where we're at

Last updated: 10/11/2026 06:50 (Melbourne)

## Status at a glance

| Line | Platform | Status | Daily budget now |
|---|---|---|---|
| BF26 PMax (Kitchens, Dual Fuel, Gas BBQs) | Google | **Live** since 09/11 night, learning, all 144 assets approved, no impressions yet at 06:50 10/11 | $540 |
| BF26 Brand Search | Google | **Live** since 09/11 night, ad approved, no impressions yet at 06:50 10/11 | $85 |
| BF26 Hero spot video views | Meta | **Stopped since 23:00 on 09/11**: ad paused with an error after the API targeting edit | $2,500 lifetime, $2,194 left, ends 17/11 |
| BF26 Prospecting (3 pack ad sets) | Meta | **Paused, blocked**: no ads yet | $520 (set, not spending) |
| BF26 Retargeting | Meta | Not built yet, starts 12/11 | $4,000 total |
| December to January lines | Meta and Google | Planned only | see `PLAN.md` |

## Blockers

0. **Video views ad stopped.** The targeting edit made through the dev-mode Composio app at 23:10 on 09/11 put the live ad (`120254770835630655`) into WITH_ISSUES and paused it (error 1885183, same dev-mode error). Fix in Ads Manager by hand: turn the ad back on, or duplicate it inside the ad set and turn the copy on. Do not edit Meta objects through the Composio app until it is Live.
1. **Meta prospecting ads.** The Composio Meta connection (`metaads_driven-swede`, user "Composio API") now has Advertise access on the Coleman Page, but its Meta app is in **development mode**, and Meta refuses to create ad creatives from a dev-mode app (error subcode 1885183). Fix: switch the app to Live in Meta for Developers (needs a privacy policy URL), or build the 16 ads by hand in Ads Manager. The ad copy for all 16 is in `PLAN.md`; the 48 images are already in the ad account image library.
2. **PMax logo.** Asset groups still carry a soft 200 px logo pulled from the website. Clean 1200x1200 and 1200x300 files were cut from Jeremy's `COL_LOGO.pdf` on 09/11 but could not be pushed through the API. Swap by hand in Google Ads (each asset group, Logos).

## Next dates

- **12/11** Meta retargeting goes live. Needs the "Still thinking it over" (3 sizes) and "Pick your complete kitchen" (2 sizes) statics, still placeholders in The Hatch.
- **13/11** Product video cuts. Kitchens and Dual Fuel cuts are in; the Revolution 5 Burner cut is missing.
- **15/11** Check week one cost per purchase. If people are holding off for the day, move reserve and Build money into 25 to 28 Nov.
- **16/11 00:05** Scheduled task: Meta prospecting $640, PMax $670.
- **17/11** Video views campaign ends (plan said 22/11; Jeremy shortened it in Meta).
- **20/11** Early access email. Wording still says "early access" though the sale has been public since 08/11.
- **25/11 00:05** Scheduled task: Meta prospecting $1,200, PMax $1,250. Also reports best cost per purchase for the $2,400 reserve.
- **27/11 00:05** Scheduled task: Meta prospecting $2,260, PMax $2,350.
- **28/11 23:59** All Black Friday ads stop (end dates set on PMax and Meta prospecting).

## Open items

- Retargeting campaign to build in Meta (5 ads, warm audiences: visitors, engagers, video viewers).
- Hero spot ad inside Meta prospecting not built (no budget of its own).
- Old Google campaigns "INC ToF Video Views", "INC MoF Frequency" and the iGAF13267 Display test are ENABLED but ended, so not spending.
- Brand Search ends 28/11. Decide whether a small budget runs through Christmas and Boxing Day.
- Landing page: Dual Fuel collection for Pack 2, countdown check, `/collections/black-friday` excluding REV2, REV3 and the Heller cooler.
- Customer Match (10k competition subscribers, past customers) waits on privacy policy consent wording.
- The Hatch Paid has one budget per concept; the phasing only lives on the canvas and in `PLAN.md`.

## IDs and settings

### People and jobs

- Client: Eitan Kwiat (GAF/Coleman). Weekly catch-up Friday 10am with David Court and Ed Court. Kang (K-Trade) is the Shopify tech.
- Season plan job: iGAF12895, Teamwork project 1281252, PM task 49026826.
- Black Friday job: iGAF13265, Teamwork project 1343135, brief task 49590811.
- Tracking test job: iGAF13267 (ran 07/11 to 08/11 on Meta and Google Display).

### The Hatch

- Supabase project `flmvxbtmvgcobtjylfco`, Coleman client id `649e6162-b125-4b70-9edc-f0121ce865ef`, slug `coleman`.
- Black Friday brief id `df7751ef-00de-4a02-a498-45c6608bca56` (21 components).
- Paid campaigns: `u2oty9a9` Meta prospecting, `bfmrt001` Meta retargeting, `bfmvv001` Meta video views, `bfgpm001` PMax, `bfgbs001` Brand Search, `nsdgou7x` 2026-27 Season (December to January only, $16,800).
- Asset rough canvas: https://claude.ai/artifact/Ffx8STd5frH9hgAY2uo626 (includes the Spend phasing and strategy board).

### Meta

- Ad account `act_6773131799420865` (Coleman BBQs, AUD, Melbourne time).
- Page `119154227957449`, Instagram `17841462838046643`.
- Pixels: `1052619822823359` "Coleman BBQs" (used for purchase optimisation), `1912256846793050` "Coleman BBQs 2026 (Incubator)".
- Video views: campaign `120254770835620655`, ad set `120254770835640655` (ThruPlay), ad `120254770835630655`.
- Prospecting: campaign `120254782792610655` "iGAF13265 | BF26 | Sales | Prospecting | Metro" (CBO, purchase, ends 28/11 23:59). Ad sets: Kitchens `120254782794400655`, Dual Fuel `120254782795080655`, Gas BBQs `120254782795730655`.

### Google

- Ads account 608-068-0425 (`6080680425`) under The Incubator MCC 858-747-9186. API calls need header `login-customer-id: 8587479186`, API v26.
- Merchant Center `5389799596`, linked and accepted. 90 products approved.
- Primary purchase conversion: "Google Shopping App Purchase".
- PMax: campaign `24453830824` "iGAF13265 | BF26 | PMax | Metro + store towns", budget `16023864847`, Maximise conversion value, presence only, ends 28/11 23:59, URL suffix `utm_source=google&utm_medium=cpc&utm_campaign=bf26-pmax`.
  - Asset group Kitchens `6771090819`: listing group product type "outdoor bbq kitchen".
  - Asset group Dual Fuel `6770974633`: listing group the 25 Dual Fuel item ids.
  - Asset group Gas BBQs `6771018548`: listing group product type "bbqs".
- Brand Search: campaign `24440165243` "iGAF13265 BF26 | Search | Brand", budget `16012047969` ($85/day), lands on /pages/black-friday.

### Scheduled tasks (Claude, cloud, run without approval, push a summary)

- `trig_01NfYfBxcFK6ChusDzXeDp5N` 16/11 00:05 budget step 1
- `trig_01P9QavGvNxHtgLpYgSnJbRF` 25/11 00:05 budget step 2
- `trig_013Qo5aATtPpP3ceRcn2qyig` 27/11 00:05 budget step 3
