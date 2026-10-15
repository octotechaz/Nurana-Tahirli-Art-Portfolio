# Implementation Plan: Prelude Refinements (Left-Aligned Small Header & Citation Removal)

Refine the 5 Curatorial Prelude dividers above each discipline panel to remove the bottom citation line and style the prelude label as a refined, small, left-aligned metadata header, while keeping the central 2-line quote with its 40% narrower centered second line and natural word spacing.

## User Requirements & Clarifications
1. **Remove Bottom Citations**:
   - Completely remove the bottom citation line (`— Nurana th / ...`) from all 5 curatorial preludes.
2. **Small & Left-Aligned Top Header**:
   - The top label (e.g., `Curatorial Prelude I · Digital Illustration` / `Kurator Girişi ...`) should no longer be stretched edge-to-edge across the entire width with large font sizes.
   - Instead, style it as a refined, small (`text-xs`), left-aligned, uppercase monospace metadata label (`text-left`, `tracking-widest`, `font-mono`).
3. **Hero Quote Preservation**:
   - Retain the elegant 2-line quote layout where Line 1 spans the container and Line 2 is 40% narrower (60% width) and centered.
   - Maintain tight, natural word spacing (no artificial gaps).

---

## Proposed Changes

### `src/components/CuratorialPrelude.tsx`
- **Remove Bottom Citation Row**:
  - Delete the 3rd row rendering `{citationText}`.
  - Remove `bottomFitted` calculation and related measurements.
- **Update Top Header Layout & Styling**:
  - Replace the edge-to-edge stretched container for `labelText` with a clean, left-aligned layout:
    - `text-left w-full font-mono uppercase text-xs sm:text-[13px] font-semibold tracking-widest`.
    - Retain appropriate discipline accent color (`text-accent` or `text-tag`).
  - Eliminate canvas measurement for the header since it is now fixed small and left-aligned.
- **Maintain Quote Typesetting**:
  - Continue computing responsive, balanced font size for the 2-line quote so Line 1 fills the width and Line 2 is centered at 60% width with normal word spacing.
  - Adjust vertical padding and spacing for a balanced, spacious catalog look now that the bottom citation is removed.

---

## Verification Plan

### Automated Checks
- Run `compile_applet` to confirm zero TypeScript compilation errors.
- Run `lint_applet` to ensure code hygiene and zero unused variables.

### Visual & Interactive Review
- Verify all 5 category preludes in both English and Azerbaijani:
  1. *Curatorial Prelude I · Digital Illustration*
  2. *Curatorial Prelude II · Traditional Art*
  3. *Curatorial Prelude III · Graphic Design*
  4. *Curatorial Prelude IV · Printmaking*
  5. *Curatorial Prelude V · Sketchbook*
- Confirm that the top label sits cleanly on the left in small uppercase monospace type.
- Confirm the bottom citation line is absent.
- Confirm the 2-line quote remains beautifully centered, with the second line 40% narrower and normal word spacing.
