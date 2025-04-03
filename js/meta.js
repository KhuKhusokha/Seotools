document.addEventListener('DOMContentLoaded', function() {
    // This file handles Meta description generation functionality
    // For now, it's just a placeholder as the feature is marked "coming soon"
    
    // Listen for deploy button click
    const deployBtn = document.getElementById('deployBtn');
    if (deployBtn) {
        deployBtn.addEventListener('click', function() {
            alert('Deployment feature will be available in the next update!');

            // Add fix for GitHub Pages Jekyll build
            tryToFixGitHubPages();
        });
    }

    function tryToFixGitHubPages() {
        // Check if we're in a GitHub Pages environment
        if (window.location.hostname.includes('github.io')) {
            console.log('GitHub Pages environment detected. Applying fixes...');
            
            // Create necessary elements for Jekyll to process correctly
            const head = document.head || document.getElementsByTagName('head')[0];
            
            // Add a meta tag for Jekyll
            const jekyllMeta = document.createElement('meta');
            jekyllMeta.name = 'generator';
            jekyllMeta.content = 'jekyll';
            head.appendChild(jekyllMeta);
            
            console.log('Jekyll compatibility fixes applied.');
        }
    }

    // Run GitHub Pages fix on load
    tryToFixGitHubPages();
});
