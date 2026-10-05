# Ooveva Café Website

## Goal
Build the selected “Frosted stone depth” direction as a polished, mobile-first café website while publishing only verified business information.

## What will be built
- A sticky responsive header using the supplied circular Ooveva café logo, working mobile navigation, and direct section links. The same logo will appear in the footer and provide the source for a matching favicon.
- A full-height photographic hero using original editorial café imagery, a restrained dark overlay, the verified location, and prominent Menu and Directions actions.
- An “Explore Our Menu” section directly after the hero using the uploaded 13-page menu as the source of truth. It will reproduce the supplied categories, item names, available descriptions, prices, and multi-option labels; descriptions visibly truncated in the source will be omitted rather than completed by guesswork.
- A short, factual About section using only the verified café type and location.
- A responsive gallery with four clearly disclosed editorial placeholder images and an accessible lightbox. The images will not be represented as real Ooveva photos.
- A Visit section with the exact supplied address, a keyless Google map embed, and the supplied directions link.
- A Contact section with the independently corroborated phone number and Instagram link. Opening hours will remain unpublished because available sources conflict. WhatsApp will only be included if the same verified phone endpoint works as a WhatsApp link.
- A final CTA and compact footer with working navigation and current copyright year.

## Design and interaction
- Keep the dark charcoal, warm orange-gold, glass-and-stone visual language from the chosen direction.
- Use Playfair Display for editorial headings, Inter for body copy, and JetBrains Mono for small labels.
- Improve spacing, borders, shadows, tap targets, image crops, focus states, and responsive typography without adding excessive animation.
- Respect reduced-motion preferences and avoid horizontal overflow at phone widths.

## Verification
- Check the page at 390px mobile and 1280px desktop widths.
- Test all supplied menu categories and cards, mobile navigation, lightbox, section links, phone, Instagram, Maps, and Directions actions.
- Compare the rendered menu against all 13 uploaded pages and confirm no unverified menu items, prices, reviews, awards, hours, or claims are present.
- Confirm page metadata, heading order, alt text, loading behavior, and current preview build health.

## Technical details
- Keep the single-page section structure requested, with content and editable data isolated in a dedicated content module.
- Use existing React/TanStack and UI primitives; no new runtime library is needed.
- Store visual colors, fonts, shadows, and animation values as semantic tokens in the global design system.
