
/* كود تشغيل زر المظهر */
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('theme-icon');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.textContent = 'وضع فاتح';
        if (themeToggleBtn) themeToggleBtn.setAttribute('aria-pressed', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.textContent = 'تغيير المظهر';
        if (themeToggleBtn) themeToggleBtn.setAttribute('aria-pressed', 'false');
    }
}

// تطبيق الحالة المحفوظة عند التحميل
const savedDark = localStorage.getItem('theme') === 'dark';
applyTheme(savedDark);

// ربط حدث النقر على الزر
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isNowDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
        if (themeIcon) themeIcon.textContent = isNowDark ? 'وضع فاتح' : 'تغيير المظهر';
        themeToggleBtn.setAttribute('aria-pressed', isNowDark ? 'true' : 'false');
    });
}

// Menu toggle for mobile
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking a nav link
    navMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

 



