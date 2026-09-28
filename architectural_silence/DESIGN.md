---
name: Architectural Silence
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  gallery-white: '#FFFFFF'
  obsidian-gray: '#1A1A1A'
  monolith-black: '#000000'
  concrete-light: '#F2F2F2'
  muted-sage: '#718466'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '200'
    lineHeight: 90px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '300'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 34px
    fontWeight: '300'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  label-xs:
    fontFamily: Hanken Grotesk
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.2em
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 24px
  margin-tablet: 48px
  margin-desktop: 80px
  section-gap-mobile: 80px
  section-gap-desktop: 160px
---

## Brand & Style

The design system is a manifestation of "Quiet Luxury"—a philosophy where value is communicated through restraint, material honesty, and spatial precision rather than ornamentation. It targets a high-discerning audience, evoking an emotional response of serenity, exclusivity, and intellectual depth. 

The style is a pure **Minimalism** approach, treated with the rigor of Italian architectural craftsmanship. It utilizes massive "voids" of whitespace to frame content as if it were a gallery piece. Every interaction is intentional, slow, and purposeful, reflecting a premium mobile-first experience where the UI serves as a silent, structural frame for cinematic imagery.

## Colors

The palette is strictly monochromatic, drawing power from extreme contrast. **Gallery White** is the primary canvas, acting as the expansive "air" in the design. **Monolith Black** is used for structural elements and primary typography to ensure razor-sharp legibility.

**Obsidian Gray** provides a secondary level of depth for interactive states or subtle dividers. **Muted Sage** is the sole chromatic departure, reserved exclusively for heritage callouts or high-end status indicators, ensuring the architectural silence is never disrupted by excessive color noise.

## Typography

Using **Hanken Grotesk**, the typography mirrors the precision of technical architectural drawings. For the mobile experience, emphasis is placed on extreme vertical rhythm and generous line heights to maintain a "premium" feel even in constrained viewports.

Display and large headlines use light weights to feel airy and cinematic. Utility labels are intentionally small and tracked-out, mimicking the annotations found on blueprints. This contrast between the expansive headlines and the technical labels creates a sophisticated hierarchy.

## Layout & Spacing

The layout follows a **Fluid Grid** logic on mobile and a **Fixed Grid** logic on larger screens, but with a philosophy of "Architectural Voids." On mobile, the 24px side margins are strictly protected. 

Spacing is used to enforce a slow, deliberate scroll. Sections are separated by large gaps (80px on mobile) to ensure only one "concept" or image is visible at a time. The motion language reinforces this: slow, purposeful fade-ins and subtle parallax on full-width images create a sense of depth and luxury as the user moves through the "space."

## Elevation & Depth

This design system avoids all traditional drop shadows and blurs to maintain architectural purity. Depth is achieved through:

- **Tonal Layering:** Using high-contrast overlaps (e.g., black text volumes sitting on white backgrounds).
- **Hard Planes:** Components are treated as solid, physical slabs. 
- **Subtle Parallax:** As the user scrolls, background images move at a slightly different speed than the foreground type, creating a 3D architectural experience without the use of artificial styling.
- **Micro-borders:** 1px solid lines in Obsidian Gray are used to define boundaries only when absolutely necessary for functional clarity.

## Shapes

The shape language is **Strictly Sharp**. Every element, from primary buttons to image containers and selection controls, uses a 0px corner radius. This reflects the hard-edged precision of luxury materials like cut stone, steel beams, and glass panes. Circles are permitted only for specific functional iconography (like a play button) to provide a geometric counterpoint to the otherwise rectangular world.

## Components

### Buttons & Interactive Zones
Buttons are sharp, rectangular blocks. On mobile, interactive zones are expanded to a minimum of 48px height for touch precision, though the visual container may appear slimmer. The primary button is a solid Monolith Black block with White text; the secondary is a 1px border "ghost" style.

### Navigation
The navigation is a "Technical Hamburger"—a minimalist icon or the word "MENU" in `label-sm` style. Tapping it triggers a full-screen, silent takeover in Gallery White with large-scale, centered navigation links.

### Input Fields & Controls
Fields are defined by a single 1px baseline. Error states utilize the same 1px line but in a high-contrast dark gray or subtle muted sage (avoiding traditional "error red" to maintain the palette). Selection controls like checkboxes are sharp squares that fill solid black when active.

### Cards & Imagery
Cards have no borders or shadows. They are defined by their content and the whitespace surrounding them. Images should be treated as "windows" into a space, often utilizing full-bleed widths on mobile to maximize impact.

### Technical Elements
Data points or technical specifications should be styled with `label-xs`, emphasizing the "blueprint" aesthetic of the brand.