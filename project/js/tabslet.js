$(document).ready(function() {
    $('.tabs').tabslet({
        mouseevent: 'click',
        attribute: 'href',
        animation: true,
        next: '#nextBtn',
    });

    function switchTab(tabId) {
        // Remove 'active' class from all tab links and contents
        document.querySelectorAll('.tab-link').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none'; // Ensure all tabs are hidden
        });
        
        // Add 'active' class to the target tab link and content
        document.querySelector('.tab-link[data-tab="' + tabId + '"]').classList.add('active');
        const targetTab = document.getElementById(tabId);
        targetTab.classList.add('active');
        targetTab.style.display = 'block'; // Ensure the target tab is visible
    }

    // Event listener for the "Next" button
    document.getElementById('nextBtn').addEventListener('click', function() {
        switchTab('tab-2');
    });

    // Event listeners for the tab links
    document.querySelectorAll('.tab-link').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
});