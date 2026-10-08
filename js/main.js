/**
 * Putti Chiruhas - Portfolio Main JavaScript
 * Handles interactive cursor, theme switching, mobile drawer navigation,
 * portfolio filtering, and media lightbox modal.
 *
 * All portfolio items are dynamically generated from the portfolioData array.
 */

/* =========================================================================
   PORTFOLIO ASSET DATA
   Each item: { src, title, category, label }
   category values: photo, poster, uiux, video, photoanim
   ========================================================================= */
const portfolioData = [
    // ── Photographs (46 items) ──────────────────────────────────────────
    { src: './assets/photographs/20241031_210318.jpg',              title: 'Night Ambience',                  category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/20250205_163657.jpg',              title: 'Golden Hour Portrait',             category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/20260104_151358.jpg',              title: 'Campus Architecture',              category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/20260202_122254(1)(1) (2).jpg',    title: 'Urban Perspective',                category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/20260414_061056.jpg',              title: 'Morning Light',                    category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/20260517_134806(1).jpg',           title: 'Afternoon Shadows',                category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG20241130175030.jpg',            title: 'Sunset Silhouette',                category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG20241231180613 (1).jpg',        title: 'New Year Eve',                     category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG20250916193432.jpg',            title: 'Campus Evening Walk',              category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20240718_164716.jpg',          title: 'Monsoon Vibes I',                  category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20240718_164744.jpg',          title: 'Monsoon Vibes II',                 category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20240902_192348.jpg',          title: 'Twilight Frame',                   category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20240929_181635.jpg',          title: 'Dusk Palette',                     category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20241004_183308.jpg',          title: 'Ambient Light Study',              category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20241019_172055.jpg',          title: 'Street Perspective',               category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20241029_004946.jpg',          title: 'Late Night Capture',               category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20250131_184441.jpg',          title: 'Winter Evening I',                 category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20250131_184540 (1).jpg',      title: 'Winter Evening II',                category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20250908_013249.jpg',          title: 'Midnight Composition',             category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251001_210452.jpg',          title: 'October Mood',                     category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251002_184218.jpg',          title: 'Warm Tones',                       category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251021_093311.jpg',          title: 'Morning Campus I',                 category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251021_093510.jpg',          title: 'Morning Campus II',                category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251021_093814.jpg',          title: 'Morning Campus III',               category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251021_094350.jpg',          title: 'Morning Campus IV',                category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251201_081659.jpg',          title: 'December Dawn I',                  category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251201_082107.jpg',          title: 'December Dawn II',                 category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251201_082413.jpg',          title: 'December Dawn III',                category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251201_082656.jpg',          title: 'December Dawn IV',                 category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251201_082805.jpg',          title: 'December Dawn V',                  category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251201_083604.jpg',          title: 'December Dawn VI',                 category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20251226_232406.jpg',          title: 'Christmas Night',                  category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260115_211001.jpg',          title: 'January Night Shot',               category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260116_182627.jpg',          title: 'Evening Blues',                    category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260123_235447.jpg',          title: 'Late Night Atmosphere',            category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260127_220647.jpg',          title: 'Night Walk I',                     category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260127_221449.jpg',          title: 'Night Walk II',                    category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260202_221208.jpg',          title: 'February Night',                   category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260216_185424.jpg',          title: 'Valentine Haze I',                 category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260216_190344.jpg',          title: 'Valentine Haze II',                category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260306_105323.jpg',          title: 'Spring Morning',                   category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/IMG_20260321_215821.jpg',          title: 'Equinox Evening',                  category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/Snapchat-1767697410(1).jpg',      title: 'Candid Moment I',                  category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/Snapchat-337881673.jpg',           title: 'Candid Moment II',                 category: 'photo', label: 'Photographs' },
    { src: './assets/photographs/Street_489_PL_2.jpg',              title: 'Street Photography',               category: 'photo', label: 'Photographs' },

    // ── Poster Designs (13 items) ───────────────────────────────────────
    { src: './assets/poster-designs/GENESIS.jpg',                                                               title: 'GENESIS Event Poster',             category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/RHAPSODY Presents.jpg',                                                     title: 'RHAPSODY Presents',                category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/Xperienxe+.jpg',                                                            title: 'Xperience+ Poster',                category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/13 SEP, 2025 IIT DH.jpg',                                                   title: 'IIT DH Event – 13 Sep',            category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/13 SEPTEMBER, 2025. 07 PM until Late.jpg',                                   title: 'September Night Event',            category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/13th sep, 2025 - at 1900.jpg',                                               title: '13th Sep at 1900',                 category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/13th SEPTEMBER.jpg',                                                         title: '13th September Poster',            category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/9 p.m..jpg',                                                                 title: '9 PM Event Flyer',                 category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/At 9.00 pm.jpg',                                                             title: 'At 9 PM – Invite',                 category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/Weekly Event.jpg',                                                           title: 'Weekly Event Series',              category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/Olivia Wilson on May 2026.jpg',                                              title: 'Olivia Wilson – May 2026',         category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/Beige and Red Bold Illustrative Prom Night Event Flyer.jpg',                 title: 'Prom Night Event Flyer',           category: 'poster', label: 'Poster Design' },
    { src: './assets/poster-designs/Blue and White Modern Lets Talk Podcast Announcement Instagram Post.jpg',    title: 'Podcast Announcement Post',        category: 'poster', label: 'Poster Design' },

    // ── UI/UX Designs (2 items) ─────────────────────────────────────────
    { src: './assets/ui-ux/1.png',                                  title: 'UI/UX Design Concept',             category: 'uiux',  label: 'UI/UX Design' },
    { src: './assets/ui-ux/general media school.png',               title: 'General Media School UI',          category: 'uiux',  label: 'UI/UX Design' },

    // ── Photo Animation (6 items) ───────────────────────────────────────
    { src: './assets/photo-animation/HiPaint_1789306711914.jpg',    title: 'HiPaint Art I',                    category: 'photoanim', label: 'Photo Animation' },
    { src: './assets/photo-animation/HiPaint_1789400739037.jpg',    title: 'HiPaint Art II',                   category: 'photoanim', label: 'Photo Animation' },
    { src: './assets/photo-animation/HiPaint_1789468421943.jpg',    title: 'HiPaint Art III',                  category: 'photoanim', label: 'Photo Animation' },
    { src: './assets/photo-animation/IMG-20261008-WA0028.jpg',      title: 'Photo Animation Frame I',          category: 'photoanim', label: 'Photo Animation' },
    { src: './assets/photo-animation/IMG-20261008-WA0029.jpg',      title: 'Photo Animation Frame II',         category: 'photoanim', label: 'Photo Animation' },
    { src: './assets/photo-animation/IMG_20260915_151230.jpg',       title: 'Cinematic Still Motion',           category: 'photoanim', label: 'Photo Animation' },

    // ── Videography (4 items) ───────────────────────────────────────────
    { src: './assets/videography/VID-20260628-WA0011.mp4',          title: 'Event Aftermovie I',               category: 'video', label: 'Videography' },
    { src: './assets/videography/VID-20260628-WA0013.mp4',          title: 'Event Aftermovie II',              category: 'video', label: 'Videography' },
    { src: './assets/videography/VID-20260628-WA0017.mp4',          title: 'Event Aftermovie III',             category: 'video', label: 'Videography' },
    { src: './assets/videography/VID_20260111_202214_512.mp4',      title: 'Campus Cinematic Reel',            category: 'video', label: 'Videography' },

    // ── Ad Animation (External Link) ────────────────────────────────────
    { src: 'ad-animation', title: 'FROOTI Motion AD Commercial', category: 'video', label: 'Ad Animation', isExternal: true, link: 'https://drive.google.com/file/d/1I46EN24tXHI94izMFYDnJBUCgb80ypTV/view' }
];


/* =========================================================================
   APP INITIALIZATION
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    initCurrentYear();
    initIcons();
    initTheme();
    initCursor();
    initMobileMenu();
    renderPortfolioGrid();   // render all cards first
    initPortfolioFilter();   // then attach filter listeners
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


/* =========================================================================
   6. DYNAMIC PORTFOLIO GRID RENDERER
   ========================================================================= */

/**
 * Returns the thumbnail path for a given full-resolution asset path.
 * Thumbnails live in assets/thumbs/<subfolder>/<filename>.jpg
 * Videos get a static SVG placeholder instead.
 */
function getThumbPath(src) {
    if (src === 'ad-animation') return null; // handled separately
    if (src.endsWith('.mp4')) return null; // videos handled separately
    // e.g. ./assets/photographs/IMG_123.jpg  →  ./assets/thumbs/photographs/IMG_123.jpg
    // e.g. ./assets/ui-ux/1.png             →  ./assets/thumbs/ui-ux/1.jpg
    const parts = src.replace('./assets/', '').split('/');
    const folder = parts[0];
    const filename = parts[1];
    const thumbName = filename.replace(/\.(png|jpeg)$/i, '.jpg');
    return `./assets/thumbs/${folder}/${thumbName}`;
}

/**
 * Renders every asset in portfolioData as a card inside #portfolio-grid.
 * Uses compressed thumbnails for the grid, full-res only in lightbox.
 */
function renderPortfolioGrid() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = portfolioData.map((item, idx) => {
        const isVideo = item.src.endsWith('.mp4');
        const isExternal = item.isExternal === true;
        const escapedTitle = item.title.replace(/'/g, "\\'").replace(/&/g, '&amp;');
        const thumbSrc = isExternal ? null : getThumbPath(item.src);

        let mediaHtml = '';
        
        if (isExternal) {
            mediaHtml = `<div class="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                   <div class="text-center">
                       <div class="w-16 h-16 rounded-full bg-[var(--accent)]/20 backdrop-blur-sm flex items-center justify-center border border-[var(--accent)]/40 mx-auto mb-3">
                           <svg class="w-7 h-7 text-[var(--accent)] ml-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                       </div>
                       <span class="text-xs text-[var(--text-muted)] font-medium">Open in Google Drive</span>
                   </div>
               </div>`;
        } else if (isVideo) {
            // For video thumbnails, use a stylish SVG poster (no video download!)
            mediaHtml = `<div class="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                   <div class="text-center">
                       <div class="w-16 h-16 rounded-full bg-[var(--accent)]/20 backdrop-blur-sm flex items-center justify-center border border-[var(--accent)]/40 mx-auto mb-3">
                           <svg class="w-7 h-7 text-[var(--accent)] ml-1" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>
                       </div>
                       <span class="text-xs text-[var(--text-muted)] font-medium">Click to Play</span>
                   </div>
               </div>`;
        } else {
            mediaHtml = `<img src="${thumbSrc}" alt="${item.title}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">`;
        }

        const onClickAction = isExternal 
            ? `window.open('${item.link}', '_blank')`
            : `openModal('${escapedTitle}', '${item.label}', '${item.src}')`;

        return `
            <div class="portfolio-item glass-card rounded-2xl overflow-hidden group cursor-pointer" data-category="${item.category}" onclick="${onClickAction}">
                <div class="relative aspect-[4/3] overflow-hidden bg-[var(--bg-canvas)]">
                    ${mediaHtml}
                    <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-60"></div>
                    <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--bg-canvas)]/80 text-[var(--accent)] text-xs font-bold backdrop-blur-md">
                        ${item.label}
                    </span>
                </div>
                <div class="p-5">
                    <h3 class="text-base font-bold group-hover:text-[var(--accent)] transition-colors heading-font">${item.title}</h3>
                </div>
            </div>`;
    }).join('');
}


/* =========================================================================
   7. PORTFOLIO CATEGORY FILTERING
   ========================================================================= */
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('#portfolio-filters .filter-btn');
    const getItems = () => document.querySelectorAll('.portfolio-item');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state styling
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            getItems().forEach(item => {
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


/* =========================================================================
   8. LIGHTBOX MEDIA MODAL
   ========================================================================= */
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
            <img src="${mediaPath}" alt="${title}" 
                 class="w-full h-full object-contain cursor-zoom-in hover:scale-[1.02] transition-transform duration-300" 
                 title="Click to view full screen"
                 onclick="if(document.fullscreenElement) document.exitFullscreen(); else this.requestFullscreen();"
                 onerror="this.onerror=null; this.src='${fallbackSvg}';">
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium pointer-events-none backdrop-blur-md opacity-70">
                Click image for Full Screen
            </div>
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
