/**
 * Putti Chiruhas - Portfolio Main JavaScript
 * Handles interactive cursor, theme switching, mobile drawer navigation,
 * portfolio filtering, and media lightbox modal.
 */

document.addEventListener('DOMContentLoaded', () => {
    initCurrentYear();
    initIcons();
    initTheme();
    initCursor();
    initMobileMenu();
    initPortfolioFilter();
    initModal();
});

/**
 * 1. Current Year Footer Update
 */
function initCurrentYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

/**
 * 2. Lucide Icons Initialization
 */
function initIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

/**
 * 3. Theme Toggle (Light / Dark Mode with Persistence)
 */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Load saved preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme') || 'dark';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', nextTheme);
            localStorage.setItem('theme', nextTheme);

            // Re-render Lucide icons if sun/moon icons update
            initIcons();
        });
    }
}

/**
 * 4. Interactive Cursor Follower Animation
 */
function initCursor() {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    // Check for touch / coarse pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
        return;
    }

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Instant dot positioning
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth outline follower animation
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { 
            duration: 400, 
            fill: "forwards" 
        });
    });

    // Fade out when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '0.6';
    });
}

/**
 * 5. Mobile Navigation Drawer Logic
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking any nav link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

/**
 * 6. Portfolio Category Filtering
 */
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('#portfolio-filters .filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (!filterBtns.length || !portfolioItems.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state styling
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hidden-item');
                } else {
                    item.classList.add('hidden-item');
                }
            });
        });
    });
}

/**
 * 7. Lightbox Media Modal
 */
let modal, modalTitle, modalCategory, modalMediaContainer;

function initModal() {
    modal = document.getElementById('portfolio-modal');
    modalTitle = document.getElementById('modal-title');
    modalCategory = document.getElementById('modal-category');
    modalMediaContainer = document.getElementById('modal-media-container');

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

/**
 * Open Modal - exposed to window for inline onclick compatibility
 */
window.openModal = function(title, category, mediaPath) {
    if (!modal) {
        modal = document.getElementById('portfolio-modal');
        modalTitle = document.getElementById('modal-title');
        modalCategory = document.getElementById('modal-category');
        modalMediaContainer = document.getElementById('modal-media-container');
    }

    if (!modal || !modalTitle || !modalCategory || !modalMediaContainer) return;

    modalTitle.textContent = title;
    modalCategory.textContent = category;

    if (mediaPath && mediaPath.endsWith('.mp4')) {
        modalMediaContainer.innerHTML = `
            <video src="${mediaPath}" controls autoplay class="w-full h-full object-contain"></video>
        `;
    } else {
        const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%231F2833'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23C5A880' font-family='sans-serif' font-size='20' font-weight='bold'>${encodeURIComponent(title)}</text></svg>`;
        
        modalMediaContainer.innerHTML = `
            <img src="${mediaPath}" alt="${title}" class="w-full h-full object-contain" onerror="this.onerror=null; this.src='${fallbackSvg}';">
        `;
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

/**
 * Close Modal - exposed to window for inline onclick compatibility
 */
window.closeModal = function() {
    if (!modal) {
        modal = document.getElementById('portfolio-modal');
        modalMediaContainer = document.getElementById('modal-media-container');
    }

    if (modal) {
        modal.classList.add('hidden');
    }
    if (modalMediaContainer) {
        modalMediaContainer.innerHTML = '';
    }
    document.body.style.overflow = 'auto';
};
