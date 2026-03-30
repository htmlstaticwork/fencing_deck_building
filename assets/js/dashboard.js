/**
 * IronBark Outdoors - Dashboard JavaScript
 * Handles: Tabbed navigation, Timeline state, Material selection
 */

document.addEventListener('DOMContentLoaded', () => {
    initDashboardTabs();
});

function initDashboardTabs() {
    const tabs = document.querySelectorAll('.dashboard-nav-link');
    const sections = document.querySelectorAll('.dashboard-section');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute('data-section');
            
            // Remove active class from all tabs and sections
            tabs.forEach(t => t.classList.remove('active', 'bg-accent', 'text-white'));
            sections.forEach(s => s.classList.add('d-none'));
            
            // Add active class to clicked tab and targeted section
            tab.classList.add('active', 'bg-accent', 'text-white');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('d-none');
            }
        });
    });
}

/** 
 * Example: Homeowner marking material preference
 * (Visual only, no backend)
 */
function selectMaterial(btn, materialName) {
    const parent = btn.closest('.row');
    const allBtns = parent.querySelectorAll('.btn-select');
    allBtns.forEach(b => {
        b.innerHTML = 'Select Preference';
        b.classList.replace('btn-dark', 'btn-outline-dark');
    });
    
    btn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Preferred';
    btn.classList.replace('btn-outline-dark', 'btn-dark');
}
