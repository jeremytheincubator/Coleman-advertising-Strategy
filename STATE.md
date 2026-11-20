# Where we're at

Last updated: 21/11/2026 06:05 (Melbourne), times on 21/11 are approximate

## Status at a glance

| Line | Platform | Status | Daily budget now |
|---|---|---|---|
| BF26 PMax (Kitchens, Dual Fuel, Gas BBQs) | Google | **Live, limited by budget.** $5,932 spent 13/11 to 20/11, 6 purchases, $14,482 (2.4x). Kitchens $2,318 for 2 sales, Gas BBQs $2,218 for 3, Dual Fuel $1,396 for 1 | **$850 flat from 20/11** |
| BF26 Brand Search (original, account 608-068-0425) | Google | **Live.** $789 spent, 6 purchases, $14,576 (18x). Regularly spends over its daily budget. Leaks to camping terms (propane, drink coolers) and competitor terms (Ziegler and Brown, Cobb); bare "coleman" $167 for no sales. Seven negatives added 20/11 (propane, camping, tent, stove, lantern, ziegler, cobb). Ends 06/12, not 28/11 | **$130 flat from 20/11** |
| BF26 Brand Search (copy, Coleman-owned account 128-217-5264) | Google | **Not readable through the Composio connection** (403), status and spend unknown. Check by hand | $85 |
| BF26 Hero spot video views | Meta | **Finished 17/11.** $2,497 spent, 559,420 impressions, 178,818 people reached | done |
| BF26 Prospecting, combined Add to cart ad set | Meta | **Live, out of learning.** $4,148 spent, 264 adds to cart, 10 purchases, $20,129 (4.9x). Click rate falling (4.85% on 15/11 to 2.70% on 20/11) and cost per thousand rising. "Kitchens from $1,949 B" has taken $2,393 of it | **$1,400 flat from 20/11** (campaign budget; Meta showed "In process" straight after the change, confirm it is delivering on 21/11) |
| BF26 Prospecting, three Purchase ad sets ("- Copy") | Meta | **Still switched on but starved** since 14/11. 11/11 to 13/11 spend $1,730 now shows 5 purchases, $17,426 (10x) as later sales attributed back | shares the $1,400 |
| BF26 Prospecting, three original Purchase ad sets | Meta | **Paused 11/11** (old pixel), $356 spent, no tracked results | none |
| BF26 Retargeting | Meta | **Live and approved, spending from 21/11.** New campaign, one ad set optimising for Purchase on warm audiences (site visitors 30 days, hero spot viewers, Facebook and Instagram engagers; purchasers excluded). 4 ads: "Your new BBQ awaits" (A) v2 and "Slow burn, nearly ready" (B) v2 with copy rewritten 21/11 to match each visual, Kitchens cut 12s video, Dual Fuel cut 12s video | $350 a day |
| BF26 Prospecting, Kitchens group (new 20/11) | Meta | **Live, spending from 21/11.** Add to cart. Ads at 06:05 on 21/11: Kitchens from $1,949 D v2, E v3 and F v2 (third export of 21/11, in review), G and the Kitchens cut 12s video (approved). Earlier D, E and F versions paused. D v2 uses the 4:5 file in Stories and Reels because its 9:16 file still reads "This Dual Fuel kitchen $3899" | floor $920 a day inside the $1,400 |
| BF26 Prospecting, Dual Fuel + 5 Burner group (new 20/11) | Meta | **Live and approved, spending from 21/11.** Add to cart. 4 ads: Dual Fuel from $1,949 v2, New Revolution 5 Burner v3 B and C (21/11 artwork, replacing v2), and the Dual Fuel cut 12s video (9:16 and 1:1 only because the 4:5 render is 147 seconds long). Revolution 5 Burner video not loaded: all three renders are 3 seconds long | floor $460 a day inside the $1,400 |
| December to January lines | Meta and Google | Planned only | see `PLAN.md` |

## Spend against plan (to 22:00 on 20/11)

Black Friday budget $43,200. Spent about $15,450: Meta prospecting $6,234, Meta video views $2,497, PMax $5,932, Brand Search $789. Remaining about $27,750. The scheduled steps (25/11 and 27/11) plus Brand Search use about $20,040 of that, leaving about $7,700 unallocated: the $4,000 retargeting line, the $2,400 reserve and about $1,300 of launch shortfall.

Shopify 08/11 to 20/11: 37 orders, about $90,500, already past last year's Black Friday ($74,661) and the $85,000 target. 13/11 to 16/11 averaged about $13,900 a day; 17/11 to 20/11 about $5,900 a day on the same spend. Platforms claim 27 purchases and about $66,600 (Meta 15 for $37,554, Google 12 for $29,058).

**Flat budgets approved by Jeremy 20/11 and set the same night:** Meta prospecting $1,400, Meta retargeting $350 (once built), PMax $850, Brand Search $130, total $2,730 a day to Saturday 28/11 ($21,840 over eight days). About $5,900 held for a decision on Tuesday 24/11: top up the last four days or roll into December.

Jeremy's instruction 20/11 23:07: two prospecting groups, Kitchens two thirds and Dual Fuel plus 5 Burner one third, built from the approved Hatch components; videos in retargeting and as ads. Built and switched on the same night through the API, which now creates ad creative. The two floors add to $1,380 of the $1,400, so the old combined and Purchase ad sets are left on but can take at most about $20 a day once the new ads are approved. This replaces the head-to-head idea.

Not loaded: Kitchens version F (artwork says "to $4494", the others and the ad text say $4899); Dual Fuel cut 12s video (vertical renders are from 08/11, only 16:9 was re-rendered 20/11); Revolution 5 Burner cut 12s video (no render in The Hatch). Kitchens E artwork shows a Dual Fuel kitchen labelled "This 5 burner kitchen $4299", for Jeremy to confirm. Live ad "Kitchens from $1,949 B" in the old combined ad set carries six primary texts including 5 Burner and Pro Series copy, site links and a product set.

Still to do: pause the Gas BBQs asset group on 24/11 if it has not improved.

## Blockers

0. **Video views ad (likely fixed).** The targeting edit made through the dev-mode Composio app at 23:10 on 09/11 put the live ad (`120254770835630655`) into WITH_ISSUES. Jeremy republished it in Ads Manager about 09:30 on 10/11 and the delivery error cleared. Check impressions resume. Do not edit Meta objects through the Composio app until it is Live.
1. **Meta prospecting ads (worked around 10/11).** All 16 built by hand in Ads Manager as drafts. Each ad: 4:5 in Feeds, 9:16 in Stories/Reels, 1:1 in right column, all at Original with Meta AI crop and expand off; one primary text and one headline from `PLAN.md`, AI text strategies off; Personalised destinations 0/4; Format display options 1/3 (carousel and collection off); Ad sources 1/3; multi-advertiser off; CTA Shop now; `utm_content` per ad. Meta switches several of these back on when media is swapped or ads are pasted, so recheck after any edit. The API route below is still blocked. Original note: the Composio Meta connection (`metaads_driven-swede`, user "Composio API") now has Advertise access on the Coleman Page, but its Meta app is in **development mode**, and Meta refuses to create ad creatives from a dev-mode app (error subcode 1885183). Fix: switch the app to Live in Meta for Developers (needs a privacy policy URL), or build the 16 ads by hand in Ads Manager. The ad copy for all 16 is in `PLAN.md`; the 48 images are already in the ad account image library.
2. **Meta purchase pixel (sorted 10/11).** Jeremy confirmed 13:02 that Meta is using the Incubator pixel `1912256846793050`. Tracking check 10/11: Shopify 11 orders about $18.6k since 01/11, GA4 11 purchases about $19.7k, Google Ads 0 (no clicks yet, so nothing to attribute).
3. **PMax logo.** Asset groups still carry a soft 200 px logo pulled from the website. Clean 1200x1200 and 1200x300 files were cut from Jeremy's `COL_LOGO.pdf` on 09/11 but could not be pushed through the API. Swap by hand in Google Ads (each asset group, Logos).

## Reporting in The Hatch

- Google feeds Digital > Campaign reporting through the Google Ads script (see `google-ads-reporting.md`). Status 10/11 09:05: script running hourly in Google Ads (first push 08:11), Campaign reporting page now shows Google beside Meta (live on thehatch.com.au).
- Direct Google Ads API needs Basic access on the MCC developer token. Application text is in `google-ads-reporting.md`.
- Meta reporting still needs the system user token: Campaign reporting > "Add Coleman's Meta ads too".

## Next dates

- **12/11 (missed)** Meta retargeting was due live; still not built at 15/11. Needs the "Still thinking it over" (3 sizes) and "Pick your complete kitchen" (2 sizes) statics, still placeholders in The Hatch.
- **13/11** Product video cuts. Kitchens and Dual Fuel cuts are in; the Revolution 5 Burner cut is missing.
- **15/11 (done)** Week one check: cost per purchase about $488 on Meta prospecting (6 purchases) and about $671 on Google (4 purchases), on orders averaging about $3,500. People are not holding off. Jeremy to decide where the launch shortfall and the reserve go.
- **16/11 (done)** Scheduled step ran: Meta prospecting $640, PMax $670.
- **17/11 (done)** Video views campaign ended.
- **20/11** Early access email was due. Not confirmed as sent at 22:00 on 20/11. Wording still says "early access" though the sale has been public since 08/11.
- **24/11 07:30** Scheduled task (was budget step 2, now read only): reports performance since 21/11 and recommends what to do with the held $5,900.
- **27/11** Budget step 3 switched off 20/11. No budget change is scheduled.
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
- Pixels: `1052619822823359` "Coleman BBQs" is **unreliable**: it fired about 75 to 128 Purchase events a day against about one real order a day until 08/11, then nearly stopped. `1912256846793050` "Coleman BBQs 2026 (Incubator)" matches Shopify (08/11: 3 vs 2 orders, 09/11: 3 vs 2). Meta is using `1912256846793050` (Jeremy confirmed 10/11).
- Video views: campaign `120254770835620655`, ad set `120254770835640655` (ThruPlay), ad `120254770835630655`.
- Prospecting: campaign `120254782792610655` "iGAF13265 | BF26 | Sales | Prospecting | Metro" (CBO, purchase, ends 28/11 23:59, $520 a day). Ad sets:
  - Combined, Add to cart, live: `120254853520690655`.
  - Purchase copies on pixel `1912256846793050`, on but starved: Kitchens `120254806302590655`, Dual Fuel `120254806302720655`, Gas BBQs `120254806302600655`.
  - Original Purchase ad sets on the old pixel, paused 11/11: Kitchens `120254782794400655`, Dual Fuel `120254782795080655`, Gas BBQs `120254782795730655`.

- New 20/11: Kitchens ad set `120255003070440655`, Dual Fuel + 5 Burner ad set `120255003072240655` (both in the prospecting campaign). Retargeting campaign `120255003073230655`, ad set `120255003074280655`. Audiences: site visitors 30d `120255003067990655`, purchasers 30d `120255003068130655`, hero spot viewers `120255003069280655`.
- New ads use placement rules copied from the hand-built ads: 9:16 in Stories and Reels, 4:5 in feeds, 1:1 elsewhere; one text and one headline; every enhancement opted out; no site links or product set. UTM campaign `bf26-meta-prospecting` or `bf26-meta-retargeting`.

### Google

- Ads account 608-068-0425 (`6080680425`) under The Incubator MCC 858-747-9186. API calls need header `login-customer-id: 8587479186`, API v26.
- Merchant Center `5389799596`, linked and accepted. 90 products approved.
- Primary purchase conversion: "Google Shopping App Purchase".
- PMax: campaign `24453830824` "iGAF13265 | BF26 | PMax | Metro + store towns", budget `16023864847`, Maximise conversion value, presence only, ends 28/11 23:59, URL suffix `utm_source=google&utm_medium=cpc&utm_campaign=bf26-pmax`.
  - Asset group Kitchens `6771090819`: listing group product type "outdoor bbq kitchen".
  - Asset group Dual Fuel `6770974633`: listing group the 25 Dual Fuel item ids.
  - Asset group Gas BBQs `6771018548`: listing group product type "bbqs".
- Brand Search: campaign `24440165243` "iGAF13265 BF26 | Search | Brand", budget `16012047969` ($85/day), lands on /pages/black-friday.
- Second Ads account 128-217-5264 (`1282175264`, "Coleman BBQs", set up by Coleman, not readable through the Composio connection). Holds a copy of Brand Search published 12/11: same 8 keywords, ad, 11 negatives, $85/day, Maximise clicks with $2.50 cap, Search network only, presence only, ends 28/11. Differences from the original: Hobart left out and end date 28/11 (original targets Hobart and ends 06/12). GA4 property 408580183 linked 12/11; GA4 `purchase` imported as the primary conversion ("Coleman BBQs Australia (web) purchase"). Also has an unfinished PMax draft "Campaign #1" and an inactive "Page view" conversion action.

### Scheduled tasks (Claude, cloud, run without approval, push a summary)

- `trig_01NfYfBxcFK6ChusDzXeDp5N` 16/11 00:05 budget step 1
- `trig_01P9QavGvNxHtgLpYgSnJbRF` 24/11 07:30 Tuesday check, read only (was budget step 2)
- `trig_013Qo5aATtPpP3ceRcn2qyig` budget step 3, switched off 20/11
