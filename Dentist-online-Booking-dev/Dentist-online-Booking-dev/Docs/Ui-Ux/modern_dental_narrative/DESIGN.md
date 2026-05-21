---
name: Modern Dental Narrative
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444651'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#62fae3'
  on-secondary-container: '#007165'
  tertiary: '#5b001a'
  on-tertiary: '#ffffff'
  tertiary-container: '#7f112d'
  on-tertiary-container: '#ff8897'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#ffdadc'
  tertiary-fixed-dim: '#ffb2b9'
  on-tertiary-fixed: '#400010'
  on-tertiary-fixed-variant: '#891933'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  h1:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  h2:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The brand personality of this design system is built on the pillars of **clinical excellence, compassionate care, and absolute transparency**. It targets a diverse demographic ranging from young professionals seeking aesthetic treatments to families requiring long-term oral health maintenance. The UI must evoke an immediate emotional response of "calm relief" and "unwavering trust."

This design system adopts a **Modern Corporate** style with **Minimalist** influences. It avoids the cold, sterile feel of traditional medical interfaces by utilizing generous white space, organic imagery, and soft architectural lines. The aesthetic is "High-End Wellness," bridging the gap between a clinical environment and a premium hospitality experience.

## Colors

The palette is engineered to balance authority with accessibility.

- **Primary (Midnight Navy):** Used for headings and primary navigation to establish a foundation of stability and professional expertise.
- **Secondary (Soft Teal):** Represents cleanliness and fresh breath. It is used for secondary actions, iconography, and background washes to soften the interface.
- **Tertiary (Warm Coral):** Reserved strictly for high-priority Call-to-Actions like "Book Now." This hue provides a warm, human contrast to the cooler blues.
- **Neutral (Slate & Ice):** A range of off-whites and cool grays ensures the interface feels airy and hygienic without being blindingly clinical.

Use white as the primary canvas color. Contrast ratios must exceed WCAG AA standards for all functional text elements.

## Typography

This design system utilizes a sophisticated typographic pairing to signal both tradition and modernization.

**Headlines** use a refined serif to convey the authoritative, "literary" feel of a medical practitioner's expertise. These should be set with slightly tighter tracking in larger sizes to maintain a premium look.

**Body and Functional Text** utilize a neutral sans-serif. This ensures maximum legibility for clinical information, pricing, and scheduling. For instructional text, prioritize the medium weight to ensure clarity against light-colored backgrounds.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop viewports to maintain a controlled, professional presentation, transitioning to a fluid layout for mobile devices.

- **Grid:** A 12-column grid system with 24px gutters.
- **Rhythm:** An 8px base unit governs all padding and margins. 
- **White Space:** Use "XL" spacing (80px+) between major sections (e.g., Services to Testimonials) to allow the design to breathe and reduce "medical anxiety" for the user.
- **Margins:** Page margins should be a minimum of 24px on mobile and scale up to 48px+ on larger screens to center the content narrative.

## Elevation & Depth

To maintain a sense of modern cleanliness, depth is created through **Ambient Shadows** rather than heavy borders.

- **Surface Levels:** The background remains the lowest level (Level 0). Cards and interactive modules sit on Level 1.
- **Shadow Profile:** Shadows should be highly diffused (30px-40px blur) with very low opacity (5-8%). 
- **Tinting:** Incorporate a subtle blue tint (`#1E3A8A` at 5% opacity) into shadows instead of pure black to maintain the color harmony of the clinic's brand.
- **Interactions:** On hover, elements should transition with a subtle lift (moving from a 4px offset to an 8px offset) to provide tactile feedback without breaking the minimalist aesthetic.

## Shapes

The shape language focuses on **Rounded** geometry to evoke a friendly, approachable, and safe environment. 

- **Primary Elements:** Buttons and Input fields use a 0.5rem (8px) radius.
- **Containers:** Service cards and informational modals use a 1rem (16px) radius to feel like "enveloping" containers.
- **Imagery:** Medical photography should feature subtly rounded corners (1rem) or be contained within circular masks to avoid "sharp" clinical edges that can cause subconscious stress.

## Components

### Buttons
- **Primary ("Book Now"):** High-contrast Warm Coral background with white text. Use a slight scale-up effect on hover.
- **Secondary:** Transparent background with a 2px Midnight Navy border.
- **Ghost:** Soft Teal text with no background, used for "Learn More" links.

### Service Cards
- White background with a Level 1 shadow. 
- Feature a Soft Teal icon at the top left and a "Primary" headline.
- Padding should be generous (min 32px) to emphasize the minimalist style.

### Navigation
- Sticky header with a background blur (Backdrop Filter) to maintain a sense of depth.
- Navigation links use Midnight Navy in the "Label-bold" type style.

### Input Fields
- Soft Blue-Gray backgrounds (`#F1F5F9`) with 0.5rem roundedness. 
- Focus states should use a 2px Soft Teal outer glow to signal "active/clean" status.

### Specialized Components
- **Trust Bar:** A horizontal strip featuring insurance logos or certifications in monochrome gray to maintain professional subtlety.
- **Doctor Profile Cards:** Vertical cards combining high-quality portraiture with the serif headline font for the name, emphasizing person-to-person trust.