# SpendWise Dashboard Shell

A responsive dashboard layout built using CSS Grid and Flexbox for the SpendWise capstone project.

## Project Structure
- `index.html`: Contains the structural HTML markup for the dashboard layout, navigation menu, header, and six financial category cards.
- `style.css`: Contains custom properties (`:root`), CSS Grid layout definitions, Flexbox alignments, responsive rules, micro-interactions, and dark mode support.

## Technical Details

### 1. CSS Grid & Flexbox Usage
- **CSS Grid**: Used for the macro dashboard structure (`grid-template-areas` separating sidebar, header, and main content) and for arranging category cards in a responsive multi-column grid (`repeat(auto-fit, minmax(280px, 1fr))`).
- **Flexbox**: Used for micro-layouts inside components, such as the sidebar navigation list, header user section, and internal alignment inside category cards.

### 2. Custom Properties (Theme Variables)
All color values are declared as CSS variables under `:root` (`--brand-color`, `--accent-color`, `--bg-color`, `--surface-color`, `--text-primary`, `--text-secondary`), providing consistency across components.

### 3. Responsive Design
A `@media (max-width: 768px)` breakpoint stacks the grid layout into a single column. The sidebar shifts below the header, transforming navigation items into a horizontally scrollable bar.

### 4. Micro-interactions
Category cards feature a `200ms` CSS transition on hover and `:focus-visible` states using `transform: translateY(-4px)` and `box-shadow` elevation adjustments.

### 5. Dark Theme (Stretch Goal)
Included system-driven dark mode support using `@media (prefers-color-scheme: dark)`, overriding root variable colors seamlessly without modifying HTML layout elements.