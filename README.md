# Project Gutenberg Redesign

## Design Goals
- **Modern, clean**: Cards, gradients, better typography vs original's dated layout
- **Mobile-first**: Responsive grid, sticky nav
- **Better UX**: Prominent search/downloads, collapsible info, hover effects

## HTML Structure Changes (vs original)

1. **Homepage** (`index.html`)
   - Original: Text-heavy lists → New: Hero + featured books grid
   - Added: Prominent search bar (original buried in nav)

2. **About** (`about.html`)  
   - Original: Long scrolling page → New: Collapsible FAQ-style sections
   - Simplified legal/volunteer content into scannable chunks

3. **Browse** (`books.html`)
   - Original: Complex category trees → New: Visual category cards
   - Mock categories with gradients (no backend needed)

4. **Book page** (`book.html`)
   - Original: Downloads scattered → New: Download table above fold  
   - Added: Large cover image + author grid layout
   - Collapsible metadata vs original's static blocks

## Technical Implementation
- **CSS**: Single `style.css`, semantic classes, CSS Grid/Flexbox
- **JavaScript**: Reusable toggle function for ALL `.faq-toggle` elements
- **Accessibility**: Semantic HTML, keyboard-navigable toggles

## Responsive Features
- Mobile: Navbar stacks, cards reflow
- Desktop: Full grids, hover effects
