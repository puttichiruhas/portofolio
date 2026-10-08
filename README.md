# Putti Chiruhas - Portfolio Website

A modern, responsive portfolio website built with semantic HTML, Tailwind CSS, custom glassmorphism design tokens, Lucide icons, and vanilla JavaScript.

## 📁 Project Structure

```
portofolio website/
├── index.html                   # Standard web root entrypoint (Clean & commented)
├── putti_chiruhas_portfolio (6).html # Synchronized entrypoint for direct file opening
├── css/
│   └── style.css                # Color variables, theme definitions, cursor, cards, animations
├── js/
│   └── main.js                  # Theme switching, interactive cursor, filters, and modal lightbox
├── assets/                      # Media assets (images, posters, CAD concepts, videos)
│   ├── poster-designs/
│   ├── ui-ux/
│   ├── ad-animations/
│   ├── photo-animation/
│   ├── photographs/
│   └── videography/
└── README.md                    # Project documentation & debugging guide
```

---

## 🛠️ How to Debug & Customize

### 1. Modifying Styles & Themes (`css/style.css`)
- **Theme Colors**: Modify `:root` (for Dark Mode) and `[data-theme="light"]` (for Light Mode).
  - `--accent`: Accent color (default: `#C5A880` Champagne in dark, `#9E7B4F` in light)
  - `--bg-canvas`: Background base color (`#0B0C10` in dark, `#F4F5F8` in light)
  - `--bg-card`: Card surface background (`#1F2833` in dark, `#FFFFFF` in light)
- **Glassmorphism**: Adjust `.glass-card` and `.glass-gloss` for backdrop filters and reflections.

### 2. Modifying Interactive Logic (`js/main.js`)
- `initTheme()`: Controls the Light/Dark mode state and saves preference to `localStorage`.
- `initCursor()`: Manages the cursor dot and trailing circle. Automatically disables on touch screens.
- `initMobileMenu()`: Handles mobile navigation drawer toggle.
- `initPortfolioFilter()`: Category filter logic for showing and hiding portfolio cards.
- `openModal(title, category, mediaPath)` / `closeModal()`: Controls lightbox preview with Esc key support.

### 3. Adding or Updating Portfolio Items (`index.html`)
To add a new project card, add a block within `#portfolio-grid` in `index.html`:
```html
<div class="portfolio-item glass-card rounded-2xl overflow-hidden group cursor-pointer" 
     data-category="poster" 
     onclick="openModal('Your Title', 'Poster Design', './assets/poster-designs/your-image.jpg')">
    <div class="relative aspect-[4/3] overflow-hidden bg-[var(--bg-canvas)]">
        <img src="./assets/poster-designs/your-image.jpg" alt="Your Title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
    </div>
    <div class="p-6">
        <h3 class="text-lg font-bold group-hover:text-[var(--accent)] transition-colors heading-font">Your Title</h3>
        <p class="text-xs text-[var(--text-muted)] mt-1">Short description here.</p>
    </div>
</div>
```

---

## 🚀 How to Run Locally

You can open either:
- `index.html` directly in any web browser, OR
- Run with a local development server (e.g., VS Code Live Server, `npx serve .`, or Python `python -m http.server 8000`).
