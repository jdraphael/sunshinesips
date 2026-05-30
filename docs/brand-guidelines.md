# Sunshine Sips Brand Guidelines

Sunshine Sips is a cozy lemonade, drink inspiration, and pastel lifestyle brand built around bright rituals, gentle optimism, and boutique-worthy sweetness. The brand should feel warm, cheerful, polished, and approachable: more elevated lemonade stand than novelty drink shop.

These guidelines are based on the current project assets, page copy, UI components, and design tokens.

## Brand Essence

**Positioning:** Bright drinks, cozy recipes, happy hearts.

**Core idea:** Make ordinary days feel softer and brighter through simple drinks, small rituals, and cheerful lifestyle details.

**Brand promise:** Sunshine Sips helps people create small, beautiful moments: a citrus drink, a cozy mug, a handwritten note, a brunch table, a kind reminder.

**Audience:** People who enjoy pastel lifestyle content, cozy home rituals, easy recipes, cute drinkware, stationery, casual hosting, and small-shop product aesthetics.

**Personality:**

- Warm, kind, and optimistic.
- Soft and cozy without feeling sleepy.
- Cute and playful without feeling childish.
- Polished enough for boutique products and future ecommerce.
- Practical enough for easy recipes and everyday rituals.

## Voice And Copy

The voice should sound like a thoughtful friend with good taste: cheerful, gentle, and specific.

**Use:**

- Short, inviting phrases: "Brighten Your Day.", "Sweet finds for your sunny rituals."
- Cozy sensory details: lemon, honey, vanilla, warm windowsill, porch sunlight, pastel mugs, brunch boards.
- Everyday optimism: little sunshine, tiny celebrations, happy rituals, bright moments.
- Clear product language for commerce actions: "Add to Cart", "View Recipe", "Shop Favorites".

**Avoid:**

- Snark, sarcasm, or edgy humor.
- Overly corporate wellness language.
- High-pressure sales copy.
- Childish phrasing that weakens the boutique feel.
- Long inspirational paragraphs when a concrete detail would work better.

**Preferred words:** bright, cozy, sunny, soft, sweet, gentle, happy, little, simple, warm, pastel, citrus, ritual, sparkle.

**Use sparingly:** magical, dreamy, bliss, glow. These fit the brand but can feel generic if repeated too often.

## Logo And Marks

The primary logo uses script lettering, a pastel rainbow, soft clouds, hearts, stars, and a warm cream app-icon shape. It communicates friendliness, sweetness, and lightness.

Primary logo assets:

- `sunshine_sips_logo.png`
- `public/icons/sunshine-sips-logo.png`
- `public/apple-touch-icon.png`
- `public/icons/icon-192.png`
- `public/icons/icon-512.png`

**Logo guidance:**

- Keep the full logo on warm cream, white, or very light pastel backgrounds.
- Preserve generous breathing room around the mark.
- Use the compact in-app brand logo from `src/components/brand-logo.tsx` for navigation and small UI contexts.
- Keep the script wordmark purple or berry-purple; do not recolor it to yellow because contrast drops quickly.
- Do not place the logo on busy photos without a light cream or white backing.
- Do not use harsh drop shadows, neon effects, black outlines, or saturated rainbow colors.

## Color System

The palette is warm pastel citrus with berry-purple contrast. Cream and warm white should dominate. Yellow, pink, peach, and lavender should support the cheerful tone. Purple should anchor text, logo, and key accents.

### Core Palette

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| Background | Lemon Cream | `#FFF9F1` | Main page background, soft sections, cards with warmth |
| Surface | Warm White | `#FFFFFF` | Cards, inputs, nav surfaces, readable content areas |
| Primary | Sunshine Yellow | `#FFD65A` | Primary buttons, badges, selection, active states |
| Primary Hover | Golden Lemon | `#F2C647` | Hover for yellow controls |
| Hero CTA | Deep Sunshine | `#F7B500` | High-energy CTA on hero and promotional areas |
| Secondary | Blush Pink | `#FFDCE5` | Soft panels, hearts, supporting backgrounds |
| Peach | Creamsicle Peach | `#FFC6A5` | Warm decorative highlights and soft shadows |
| Accent | Lavender Pop | `#B18BD9` | Secondary CTA, rainbow accent, decorative contrast |
| Accent Hover | Rich Lavender | `#9D74C8` | Hover for lavender controls |
| Brand Purple | Berry Script | `#8E478A` | Logo text, emphasis, success notes, small accents |
| Heading | Plum Cocoa | `#5A354E` | Main headings, primary foreground on yellow |
| Body | Soft Raisin | `#6F5D67` | Paragraphs and supporting copy |
| Deep Text | Cocoa Ink | `#3A3038` | Card titles, high-contrast body text |
| Border | Biscuit | `#F2D7A6` | Borders, rings, dividers, input borders |
| Muted | Lemon Chiffon | `#FFF3D0` | Product chips, warm panels, image placeholders |
| Error | Soft Berry Red | `#C85252` | Destructive/error states only |

### Color Ratios

- Use cream, warm white, and lemon chiffon for about 65-75% of the interface.
- Use yellow and peach for 15-20% as warmth and calls to action.
- Use pink and lavender for 10-15% as charm and contrast.
- Use purple/brown text colors consistently for readability.

### Do Not

- Do not turn the product into a single-color yellow theme.
- Do not use stark black as a primary text color unless required for a specific accessibility fallback.
- Do not introduce cold blues, grays, or neon colors into primary UI.
- Do not use saturated rainbow gradients outside brand marks or small decorative moments.

## Typography

The app currently loads fonts in `src/app/layout.tsx` and maps them in `src/app/globals.css`.

| Role | Font | Usage |
| --- | --- | --- |
| Primary sans | Quicksand | Body copy, navigation, buttons, forms, labels |
| Editorial serif | Playfair Display | Page titles, section headings, product names |
| Script accent | Pacifico | Logo-style word accents only |

**Hierarchy guidance:**

- Use Playfair Display for emotional headlines and section titles.
- Use Quicksand for anything functional or scannable.
- Use Pacifico only for brand/logo moments. It should not be used for paragraphs, buttons, prices, form labels, or long headings.
- Keep headings confident but soft. Avoid overly tight tracking.
- Buttons can use uppercase with modest letter spacing for hero-level CTAs, but normal casing is better for dense UI.

## Imagery And Art Direction

Imagery should show the actual product, drink, recipe, or lifestyle moment whenever possible. The current image direction is warm, pastel, bright, and tactile.

**Use:**

- Lemonade, citrus, honey, flowers, ice, cozy mugs, journals, pastries, candles, brunch settings.
- Warm natural light, clean tabletops, cream backdrops, pastel props.
- Product collages that feel like a styled small-shop catalog.
- Images that are clear enough to inspect products and recipes.

**Avoid:**

- Dark cafe moodiness.
- Heavy blur, heavy grain, or vague atmospheric stock images.
- Overly glossy luxury styling.
- Childish cartoon art for core product pages.
- Generic wellness imagery that loses the lemonade and cozy lifestyle signal.

## UI And Layout Themes

The interface should feel like a polished pastel boutique, not a generic SaaS dashboard or a loud ecommerce site.

**Shape language:**

- Rounded surfaces are part of the current brand. Existing cards use large soft radii around `1.25rem` to `2rem`.
- Use circles for icons, logo marks, wishlist buttons, and small decorative highlights.
- Keep cards light and airy, with warm shadows and biscuit-colored borders.

**Common UI treatments:**

- Section backgrounds alternate between Lemon Cream and Warm White.
- Hero imagery gets a soft rounded frame and warm yellow glow.
- Eyebrow labels use small uppercase Quicksand with sparkles and warm outlines.
- Product badges use Sunshine Yellow with Plum Cocoa text.
- Primary buttons use yellow with purple text, except hero CTAs where white text on Deep Sunshine is allowed.
- Lavender buttons are secondary brand moments, useful for story or about-page actions.

**Motion:**

- Motion should be gentle and brief: slight fade, lift, scale, or float.
- Hover lifts should feel light, as in the current product cards.
- Avoid bouncy, chaotic, or game-like motion.

## Content Pillars

1. **Recipes:** Easy, bright drinks and simple pairings.
2. **Cozy rituals:** Morning routines, cafe corners, journaling, small home moments.
3. **Lifestyle notes:** Hosting, brunch boards, kindness-first inspiration.
4. **Shop:** Drinkware, apparel, stationery, home goods, stickers, candles, and digital recipes.

Each new page or product should clearly fit at least one of these pillars.

## Product Naming

Product and recipe names should be descriptive, cheerful, and sensory.

**Good patterns:**

- `Honey Lemon Sunshine Elixir`
- `Choose Happy Mug`
- `Sunshine Ideas Journal`
- `Lavender Lemon Dream`
- `Peachy Keen Lemonade`

**Avoid:**

- Names that are too technical: `Citrus Beverage 01`
- Names that are too ironic: `Sad Desk Lemonade`
- Names that are too luxury-coded: `Reserve No. 12 Citrus Infusion`

## Accessibility And Contrast

- Use Plum Cocoa (`#5A354E`) or Cocoa Ink (`#3A3038`) for text on light backgrounds.
- Use Plum Cocoa on Sunshine Yellow buttons for readable contrast.
- Use white text only on deeper accents such as Lavender Pop (`#B18BD9`) or Deep Sunshine (`#F7B500`) when size and weight are sufficient.
- Do not place pale pink, peach, or yellow text on cream backgrounds.
- Keep focus rings visible and warm, using Sunshine Yellow or a darker purple outline when needed.

## Implementation References

Current brand implementation lives primarily in:

- `src/app/globals.css` for color tokens, radii, font mappings, and body background.
- `src/app/layout.tsx` for Quicksand, Playfair Display, and Pacifico font loading.
- `src/components/brand-logo.tsx` for the compact web logo.
- `src/components/hero-section.tsx` for the strongest first-screen expression of the brand.
- `src/lib/data.ts` for product, recipe, feature, blog, FAQ, and navigation copy.
- `public/images/generated/` for current visual direction.

When adding new UI, start from the existing tokens and components before introducing new colors or styles.

## Brand Checklist

Before shipping a new page, component, image, or campaign, check:

- Does it feel bright, cozy, kind, and lightly polished?
- Is cream or warm white still the dominant surface color?
- Are yellow, pink, peach, and lavender used as accents rather than visual noise?
- Is important text in Plum Cocoa, Soft Raisin, or Cocoa Ink?
- Does the copy include concrete sensory detail instead of generic positivity?
- Would the page still make sense as part of lemonade, recipes, cozy rituals, or a small lifestyle shop?
- Is the logo clear, readable, and placed on a calm background?
- Are interactions gentle and readable on mobile?

