# Coleman BBQs: theme editor changes, 13 and 14 Nov 2026

Changes made by hand in the Shopify theme editor on the live **Enterprise** theme
(theme ID 152935071940, store `1qm11e-8t`, colemanbbqs.com.au) on the night of 13 Nov 2026, into the morning of 14 Nov.

Nothing here touched theme code files. Changes 0 to 3 are values pasted into fields in the theme
editor. Change 4 adds a collection metafield and edits one generated code block (the kitchen
selector tiles). Each one can be re-applied or removed by hand in a minute or two. This folder
holds the exact values. Image files are not kept here; they are in the store's Files.

## Summary

| # | Change | Where it lives in Shopify | File in this folder | Remove after sale? |
|---|--------|---------------------------|---------------------|--------------------|
| 0 | Favicon set to the Coleman lantern | Theme settings > Favicon | Shopify Files: `coleman_lantern_logo.png` | No, permanent |
| 1 | Black Friday badge enlarged on the homepage hero | Home page > Custom HTML/Liquid (`bf_home_banner`) > Custom CSS | `01-home-banner.custom.css` | Goes with the banner |
| 2 | Black Friday badge in the kitchen collection banners (768 px and wider only) | "kitchens" collection template > Collection banner > Custom CSS | `02-kitchens-collection-banner.custom.css` | Yes |
| 3 | Countdown bar on collection and product pages, plus clickable badges | Header group > new Custom HTML/Liquid section (`custom_liquid_cLN3Mj`) | `03-header-bf-extras.liquid`, `03-header-bf-extras.custom.css` | Yes |
| 4 | Kitchen selector tiles use their own image per collection | Collection metafield `custom.kitchen_selector_image` + "kitchens" template > Custom HTML/Liquid (`kitchen-barbecues`) | `04-kitchen-selector.liquid` | No, permanent |

Stored locations in the theme files, for anyone scripting this:

- 0: `config/settings_data.json`, `favicon` = `shopify://shop_images/coleman_lantern_logo.png`
- 1: `templates/index.json` > `sections.bf_home_banner.custom_css`
- 2: `templates/collection.kitchens.json` > `sections.collection-banner.custom_css`
- 3: `sections/header-group.json` > `sections.custom_liquid_cLN3Mj` (last in `order`).
  The whole section object as saved is in `03-header-bf-extras.section.json`.
- 4: metafield definition `gid://shopify/MetafieldDefinition/411015807172` (owner: Collection, type `file_reference`,
  images only, pinned); code in `templates/collection.kitchens.json` > `sections.kitchen-barbecues.settings.custom_liquid`

## How to re-apply (if someone reverts or a rebuild wipes them)

Open Online Store > Themes > Enterprise > Customize.

**0. Favicon.** Theme settings (cog) > Favicon > Select > pick `coleman_lantern_logo` from the file library > Done > Save.
Shopify does not accept `.ico` files here, which is why this is a PNG.

**1. Homepage badge size.** Page selector: Home page. Click the first **Custom HTML/Liquid** section
under Template. Scroll to the bottom of its settings, open **Custom CSS**, paste the contents of
`01-home-banner.custom.css`, Save.

**2. Kitchen collection badge.** Page selector: Collections > the **kitchens** template (any of the
five kitchen collections). Click **Collection banner**, open **Custom CSS**, paste the contents of
`02-kitchens-collection-banner.custom.css`, Save.

**3. Countdown bar and badge links.** On any page, under **Header Group** click **Add section**,
search "Custom", choose **Custom HTML/Liquid**. It must sit last, below Promo strip. Then:

- Custom code: paste the contents of `03-header-bf-extras.liquid` (one long line, paste as is)
- Section height: **Tight**
- Make section full width: **on**
- Load the section without animation: **on**
- Custom CSS: paste the contents of `03-header-bf-extras.custom.css`
- Save

**4. Kitchen selector images.** Two parts.

- *Images:* Products > Collections > open the barbecue kitchen collection > **Metafields** > **Kitchen selector image** >
  pick the file. If the metafield itself has been deleted: Settings > Custom data (Metafields) > Collections > Add definition,
  name "Kitchen selector image", namespace and key `custom.kitchen_selector_image`, type File (images only), pin it.
- *Code:* kitchens template > the **Custom HTML/Liquid** section under Template > Custom code: replace everything with the
  contents of `04-kitchen-selector.liquid`, Save.

## How to reverse

Each change reverses on its own.

- **1:** delete everything in that Custom CSS field, Save. The badge returns to the size in the banner code.
- **2:** delete everything in that Custom CSS field, Save. The badge disappears from the kitchen collection banners.
- **3:** click the Header group Custom HTML/Liquid section > **Remove section**, Save. The countdown bar and
  both badge links go together.
- **0:** Theme settings > Favicon > Change > Remove (or pick another image), Save.

- **4:** to put one tile back to the collection image, clear **Kitchen selector image** on that collection. To put all four
  back, clear it on all four. No code change is needed to reverse, because the code falls back to the collection image.
  To take the code back as well, change the two lines shown under "What each change does" below.

To reverse the Black Friday changes: do 1, 2 and 3. Three field clears or removals, about two minutes.

## What each change does

### 1. Homepage hero badge size (`01-home-banner.custom.css`)

Overrides the badge size and position set in the generated banner code, by screen width:

| Width | Badge box | Notes |
|-------|-----------|-------|
| under 520 px | 120 to 210 px, scales with width | sits right of the "30% OFF" lockup, clear of it |
| 520 to 989 px | 240 to 300 px | moved up beside the headline |
| 990 to 1,639 px | 218 to 260 px | moved up to the top edge of the hero so it clears the BBQ hood in the photo |
| 1,640 px and up | 320 px | clear of the BBQ to its right |

The visible artwork is about 68 per cent of the box (the image has transparent padding).

**Watch out:** the banner code is generated by `tools/bf_home_banner.py` from
`theme/custom-liquid/black-friday.liquid`. If that tool rewrites the whole `bf_home_banner` section in
`templates/index.json`, this `custom_css` key is dropped and the badge reverts. To make it permanent,
either have the tool preserve `custom_css`, or move these rules into the `<style>` block of the source
file (selectors work unchanged there, as long as they come after the existing `.cbf-hero__badge` rules).

Note the Black Friday landing page (`templates/page.black-friday.json`) has its own, larger badge
sizing in its code and was not changed.

### 2. Kitchen collection banner badge (`02-kitchens-collection-banner.custom.css`)

Shows `black-friday-sale.webp` as a background image in the empty right half of the collection banner,
768 px and wider only. Below 768 px (single column) nothing shows. Size follows the banner height,
capped at 260 px. Applies to the five collections on the `kitchens` template. The default collection
template was left alone because its banner has no second column.

Shopify's Custom CSS field rejects the `content` property, so a `::after` pseudo-element is not an
option there; that is why this is a background image.

### 3. Header group "Black Friday extras" section (`03-header-bf-extras.liquid`)

One Custom HTML/Liquid section in the Header group, so it renders on every page but only outputs
anything on the templates named below.

- **Collection and product templates:** a slim black bar above the SALE ribbon, "Black Friday ends in
  DD days HH hrs MM min SS sec, Shop the deals". The whole bar links to `/pages/black-friday`. It hides
  itself once the end time passes. "Shop the deals" is hidden under 768 px.
- **Home page:** adds an invisible link over the hero badge artwork to `/pages/black-friday`.
- **`kitchens` collection template:** adds an invisible link over the right half of the collection
  banner (where the badge from change 2 sits) to `/pages/black-friday`, 768 px and wider only.
- **Everywhere else** (including the Black Friday page itself): outputs nothing and takes no space.

The end time is hard-coded as `2026-11-28T23:59:59+11:00`, matching the homepage banner and the
ribbon. **If the sale is extended, change it here too.**

`03-header-bf-extras.custom.css` is the later tweak that made the bar text larger (17 px label,
24 px digits). Without it the bar still works at its original smaller size.

### 4. Kitchen selector tile images (`04-kitchen-selector.liquid`)

The "Step 1: Choose the barbecue for your kitchen" tiles used each collection's own image. That image is shared
(Shop menu, collection lists, link previews), so the tiles now read a separate image from a collection metafield and
only fall back to the collection image when the metafield is empty. The collection images were not changed.

| Collection | Collection ID | Kitchen selector image (Shopify Files) |
|------------|---------------|----------------------------------------|
| Revolution 4 Burner Kitchens | 327794360516 | `4-burner-selector.png` |
| Revolution 5 Burner Kitchens | 327794393284 | `5-burner-Selector.png` |
| Revolution Dual Fuel Kitchens | 327794426052 | `dualfuel-selector.png` |
| Pro Series 5 Burner Kitchens | 327794458820 | `Proseries-Selector.png` |

All four are 700 x 700 px PNGs showing the barbecue with ghosted modules either side (Jeremy confirmed 14 Nov that this
replaces the earlier "no modules" direction for these tiles).

The code change, inside the `for` loop. Before:

```liquid
{%- if ckb_c.featured_image -%}
  {{- ckb_c.featured_image | image_url: width: 700 | image_tag: loading: 'lazy', widths: '300, 450, 600, 700', sizes: '(min-width: 990px) 22vw, 45vw', alt: '' -}}
{%- endif -%}
```

After (one `assign` added above the `<li>`, and `ckb_c.featured_image` replaced by `ckb_img` twice):

```liquid
{%- assign ckb_img = ckb_c.metafields.custom.kitchen_selector_image.value | default: ckb_c.featured_image -%}
...
{%- if ckb_img -%}
  {{- ckb_img | image_url: width: 700 | image_tag: loading: 'lazy', widths: '300, 450, 600, 700', sizes: '(min-width: 990px) 22vw, 45vw', alt: '' -}}
{%- endif -%}
```

A dated note was also added to the comment at the top of the block.

**Watch out:** this block is written by `tools/setup_kitchen_collections.py` from its source file. The next run of that
tool will put the old lines back and the tiles will revert to the collection images, even though the metafield values stay.
Make the same change in the source file.

## After the sale (28 Nov 2026, 11:59pm AEDT)

- Remove change 3 (the section). The bar hides itself anyway, but the section and badge links stay until removed.
- Clear change 2. It is not tied to the end date and will keep showing the badge.
- Change 1 can stay or go with the homepage banner; it does nothing once the banner is removed.

## Not changed, for the record

- The Black Friday page: it already had the countdown band and the hero badge.
- The default collection template and all product templates (the bar comes from the Header group).
- An earlier 64 px favicon upload, `coleman-favicon.png`, is still in the store's Files but unused.
- The four barbecue kitchen collections' own images (the shared collection image).
