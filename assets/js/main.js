/**
 * IronBark Outdoors - Main JavaScript
 * Handles: Theme Toggle, RTL Toggle, Before/After Slider, Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRTL();
    initBASliders();
    initFormValidation();
    initPasswordToggles();
    initActiveNav();
});

/* Theme Toggle Support */
function initTheme() {
    const themeToggle = document.querySelectorAll('.theme-toggle');
    const body = document.body;
    
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggle.forEach(btn => {
        btn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
            updateThemeIcons();
        });
    });
    
    updateThemeIcons();
}

function updateThemeIcons() {
    const icons = document.querySelectorAll('.theme-toggle i');
    const isDark = document.body.classList.contains('dark-mode');
    icons.forEach(icon => {
        if (isDark) {
            icon.classList.replace('bi-moon', 'bi-sun');
        } else {
            icon.classList.replace('bi-sun', 'bi-moon');
        }
    });
}

/* RTL Toggle Support */
function initRTL() {
    const rtlToggle = document.querySelectorAll('.rtl-toggle');
    const html = document.documentElement;
    
    // Check local storage for direction
    const savedDir = localStorage.getItem('dir');
    if (savedDir === 'rtl') {
        html.setAttribute('dir', 'rtl');
    } else {
        html.setAttribute('dir', 'ltr');
    }

    rtlToggle.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentDir = html.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
            html.setAttribute('dir', currentDir);
            localStorage.setItem('dir', currentDir);
            window.location.reload(); // Reload to apply CSS overrides correctly
        });
    });
}

/* Before/After Slider Logic */
function initBASliders() {
    const containers = document.querySelectorAll('.ba-slider');
    
    containers.forEach(container => {
        const afterImg = container.querySelector('.ba-after');
        const handle = container.querySelector('.ba-handle');
        let isResizing = false;

        const move = (e) => {
            if (!isResizing) return;
            
            const rect = container.getBoundingClientRect();
            let x = (e.pageX || e.touches[0].pageX) - rect.left;
            let percent = (x / rect.width) * 100;
            
            if (percent < 0) percent = 0;
            if (percent > 100) percent = 100;
            
            // Adjust for direction
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            if (isRTL) {
                afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
                handle.style.right = `${100 - percent}%`;
                handle.style.left = 'auto';
            } else {
                afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
                handle.style.left = `${percent}%`;
            }
        };

        const startResizing = () => { isResizing = true; };
        const stopResizing = () => { isResizing = false; };

        handle.addEventListener('mousedown', startResizing);
        window.addEventListener('mouseup', stopResizing);
        window.addEventListener('mousemove', move);
        
        handle.addEventListener('touchstart', startResizing);
        window.addEventListener('touchend', stopResizing);
        window.addEventListener('touchmove', move);
    });
}

/* Client-side Form Validation */
function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

function initPasswordToggles() {
    const toggles = document.querySelectorAll('.password-toggle');

    toggles.forEach(toggle => {
        const group = toggle.closest('.input-group');
        const input = group ? group.querySelector('input') : null;

        if (!input || input.type !== 'password') return;

        toggle.addEventListener('click', () => {
            const willShow = input.type === 'password';
            input.type = willShow ? 'text' : 'password';

            toggle.setAttribute('aria-pressed', String(willShow));
            toggle.setAttribute('aria-label', willShow ? 'Hide password' : 'Show password');

            const icon = toggle.querySelector('i');
            if (icon) {
                if (willShow) {
                    icon.classList.replace('bi-eye', 'bi-eye-slash');
                } else {
                    icon.classList.replace('bi-eye-slash', 'bi-eye');
                }
            }
        });
    });
}

function initActiveNav() {
    const currentFile = getCurrentPageFileName();
    if (!currentFile) return;

    const linkSelector = 'a.nav-link[href], a.dropdown-item[href]';
    const links = document.querySelectorAll(linkSelector);

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const normalizedHref = normalizePageHref(href);
        if (!normalizedHref) return;

        if (normalizedHref === currentFile) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(dropdown => {
        const activeChild = dropdown.querySelector('.dropdown-menu a.active');
        if (!activeChild) return;

        const toggle = dropdown.querySelector(':scope > a.nav-link.dropdown-toggle');
        if (!toggle) return;

        toggle.classList.add('active');
        if (!toggle.getAttribute('aria-current')) {
            toggle.setAttribute('aria-current', 'page');
        }
    });
}

function getCurrentPageFileName() {
    const pathname = window.location.pathname || '';
    const rawFile = pathname.split('/').filter(Boolean).pop() || '';
    const file = rawFile ? rawFile : 'index.html';

    const normalized = normalizePageHref(file);
    return normalized || 'index.html';
}

function normalizePageHref(href) {
    const trimmed = String(href).trim();
    if (!trimmed) return null;
    if (trimmed === '#') return null;
    if (trimmed.startsWith('#')) return null;
    if (/^(https?:)?\/\//i.test(trimmed)) return null;
    if (/^(mailto:|tel:)/i.test(trimmed)) return null;

    const withoutHash = trimmed.split('#')[0];
    const withoutQuery = withoutHash.split('?')[0];
    const lastSegment = withoutQuery.split('/').filter(Boolean).pop() || '';
    const file = lastSegment || 'index.html';

    return file.toLowerCase();
}
