document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Navigation function
    function showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page-content').forEach(div => {
            div.style.display = 'none';
        });
        
        // Show selected page
        const pageElement = document.getElementById(pageId);
        if (pageElement) {
            pageElement.style.display = 'block';
        }
        
        // Update active nav link
        document.querySelectorAll('nav a').forEach(a => {
            a.classList.remove('active');
        });
        
        // Update page title
        const pageTitles = {
            'home': 'Evergreen Hotel - Ogbor Hill, Aba',
            'rooms': 'Rooms & Rates - Evergreen Hotel',
            'amenities': 'Amenities - Evergreen Hotel',
            'contact': 'Contact & Location - Evergreen Hotel'
        };
        document.title = pageTitles[pageId] || 'Evergreen Hotel';
        
        // Set URL hash without scrolling
        history.replaceState(null, null, '#' + pageId);
    }
    
    // Navigation click handlers
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').replace('#', '');
            showPage(pageId);
            this.classList.add('active');
        });
    });
    
    // Handle initial page load from URL hash
    function loadPageFromHash() {
        const hash = window.location.hash.replace('#', '');
        const validPages = ['home', 'rooms', 'amenities', 'contact'];
        
        if (validPages.includes(hash)) {
            showPage(hash);
            // Update active nav for the loaded page
            document.querySelectorAll('nav a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === '#' + hash) {
                    a.classList.add('active');
                }
            });
        } else {
            // Default to home page
            showPage('home');
            document.querySelector('a[href="#home"]').classList.add('active');
        }
    }
    
    // Handle browser back/forward buttons
    window.addEventListener('hashchange', loadPageFromHash);
    
    // Initial page load
    loadPageFromHash();
});