function openSlideMenu() {
    // Only run this function in the browser
    if (typeof document === 'undefined') return;
    
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');
    const overlay = document.getElementById('menu-overlay');
    
    if (menu.style.width === '250px') {
        menu.style.width = '0';
        content.style.marginLeft = '0';
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    } else {
        menu.style.width = '250px';
        content.style.marginLeft = '250px';
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
    }
}

// Only run this code in the browser
if (typeof document !== 'undefined') {
    // Create and insert the menu HTML
    document.addEventListener('DOMContentLoaded', function() {
        const menuHTML = `
            <span class="slide">
                <a onclick="openSlideMenu()">
                    <i class="fas fa-bars"></i>
                </a>
            </span>

            <div id="menu" class="nav">

                <span class="nav-item">
                    <i class="fas fa-home"></i>
                    <a href="/html/home.html">Home</a>
                </span>
                
                <span class="nav-item">
                    <i class="fas fa-user"></i>
                    <a href="/html/profile.html">Profile</a>
                </span>
                
                <span class="nav-item">
                    <i class="fas fa-file-alt"></i>
                    <a href="/html/portfolio.html">Portfolio</a>
                </span>

                <span class="nav-item">
                    <i class="fas fa-book"></i>
                    <a href="/html/pastExam.html">Past Exam</a>
                </span>

                <span class="nav-item">
                    <i class="fas fa-calendar"></i>
                    <a href="/html/schedule.html">Schedule</a>
                </span>
                
                <span class="nav-item">
                    <i class="fas fa-cog"></i>
                    <a href="/html/settings.html">Settings</a>
                </span>

                <span class="nav-item">
                    <i class="fas fa-question-circle"></i>
                    <a href="/html/faq.html">FAQ</a>
                </span>
                
                <span class="nav-item">
                    <i class="fas fa-sign-out-alt"></i>
                    <a href="/html/logout.html">Log out</a>
                </span>

            </div>
        `;
        
        // Create overlay HTML
        const overlayHTML = `
            <div id="menu-overlay" class="menu-overlay" onclick="openSlideMenu()"></div>
        `;
        
        // Insert menu and overlay into the page
        document.getElementById('content').insertAdjacentHTML('afterbegin', menuHTML);
        document.body.insertAdjacentHTML('beforeend', overlayHTML);
    });
} 