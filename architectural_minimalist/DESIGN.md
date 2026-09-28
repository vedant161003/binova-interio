---
name: Architectural Minimalist
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#516448'
  on-secondary: '#ffffff'
  secondary-container: '#d1e6c3'
  on-secondary-container: '#56684c'
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
  secondary-fixed: '#d4e9c6'
  secondary-fixed-dim: '#b8cdab'
  on-secondary-fixed: '#101f09'
  on-secondary-fixed-variant: '#3a4c32'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
  monolith-black: '#000000'
  gallery-white: '#FFFFFF'
  obsidian-gray: '#1A1A1A'
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
    fontSize: 32px
    fontWeight: '300'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

This design system embodies the essence of high-end Italian architectural design: precision, restraint, and intentionality. It is built for a sophisticated audience that values spatial quality and material honesty. The aesthetic is strictly minimalist, favoring the absence of noise over the presence of decoration.

The visual language draws from the **Minimalism** movement, utilizing expansive whitespace as a structural element rather than a void. Every component is treated as an architectural volume, characterized by sharp lines, geometric clarity, and a "less is more" philosophy. The atmosphere is quiet yet powerful, designed to act as a neutral frame for cinematic high-definition imagery of luxury interiors.

## Colors

The palette is rooted in a monochromatic foundation to maintain architectural purity. **Gallery White** serves as the primary canvas, providing the "extreme whitespace" required for the minimalist aesthetic. **Monolith Black** provides the structural weight, used for razor-sharp typography and primary brand marks.

A muted, desaturated green (**Muted Sage**) is retained as a subtle heritage accent, used sparingly for specific interactive states or high-end callouts to avoid breaking the monochromatic serenity. Grays are used only for subtle structural definition or as secondary text to maintain hierarchy without introducing visual clutter.

## Typography

The typography system utilizes **Hanken Grotesk** to achieve a sharp, grotesque-inspired look that mirrors the precision of modern architecture. The hierarchy is extreme: display type is set with very light weights and tight tracking for a cinematic feel, while utility labels are set in small, uppercase, tracked-out bold weights to mimic architectural blueprints.

Line heights are generous in body copy to facilitate readability within the large whitespace containers. Vertical rhythm is strictly enforced to maintain the sense of "razor-sharp" alignment across the layout.

## Layout & Spacing

This design system employs a **Fixed Grid** model on desktop to ensure content occupies intentional, centered "volumes" within the viewport. The grid is a 12-column system with wide 32px gutters to prevent visual density.

Spacing is used as a primary design tool. Sections are separated by massive "voids" (**160px+**), forcing the user to focus on one architectural concept or image at a time. On mobile, the margins tighten to 24px, but the vertical "breath" is maintained to preserve the high-end feel. Navigation should remain hidden behind a minimalist trigger or localized to the absolute edges of the screen to maximize the impact of visual content.

## Elevation & Depth

To maintain the architectural aesthetic, the design system rejects traditional shadows and blurs. Depth is conveyed exclusively through **Tonal Layers** and **Structural Overlays**.

- **Flat Planes:** Elements exist on flat X/Y axes. Contrast is used to separate the foreground from the background.
- **Low-contrast outlines:** Very thin (1px) borders in a light gray or obsidian gray may be used to define structural zones or input fields without adding the "weight" of a shadow.
- **Image-as-Base:** Large-scale photography often serves as the "ground" layer, with text and UI elements placed directly upon it using high-contrast color shifts.

## Shapes

The shape language is **strictly sharp**. There are no rounded corners in this design system. Every button, container, and image frame must have 0px corner radii to reflect the hard-edged precision of architectural materials like stone, glass, and steel. The only exception is the natural geometry found within photography itself.

## Components

### Buttons
Primary buttons are rectangular blocks with no rounding. They should either be solid black with white text or transparent with a 1px black border. Hover states should be a subtle, instantaneous fill change or the introduction of the Sage accent.

### Input Fields
Fields consist of a single 1px bottom border (underline style) or a fully enclosed sharp rectangle. Labels should use the `label-sm` style, positioned above the field with generous padding.

### Cards & Imagery
Cards are "frameless." Content is separated by whitespace rather than borders. Imagery should be cinematic, often spanning the full width of the grid, with typography overlaid in corners to maintain a "lookbook" or "editorial" feel.

### Navigation
Navigation is hidden within a minimalist "hamburger" or "menu" text trigger. When active, it should occupy a full-screen overlay of pure color (White or Obsidian Gray) with large-scale, centered links.

### Selection Controls
Checkboxes and radio buttons are sharp squares and diamonds. The "checked" state is indicated by a solid fill rather than a checkmark, maintaining the geometric purity.