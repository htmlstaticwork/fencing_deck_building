/**
 * IronBark Outdoors - Main JavaScript
 * Handles: Theme Toggle, RTL Toggle, Before/After Slider, Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRTL();
    initBASliders();
    initFormValidation();
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
