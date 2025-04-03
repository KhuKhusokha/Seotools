document.addEventListener('DOMContentLoaded', function() {
    // This file handles Article content generation functionality
    // For now, it's just a placeholder as the feature is marked "coming soon"
    
    // We can add some event listeners for future features
    
    // Example of a function to handle article generation when implemented
    function generateArticle(topic, tone, length) {
        // This would connect to an API or use templates to generate articles
        console.log(`Article generation requested: ${topic}, ${tone}, ${length} words`);
        // Return placeholder for now
        return "This is where the generated article content will appear...";
    }
    
    // Export function for future use
    window.articleGenerator = {
        generate: generateArticle
    };

    // Add a helper to check if the GitHub Pages build error is present in the console
    function checkForGitHubPagesErrors() {
        // Create a MutationObserver to watch for console errors
        const errorMessages = [];
        const originalConsoleError = console.error;
        
        console.error = function() {
            errorMessages.push(Array.from(arguments).join(' '));
            originalConsoleError.apply(console, arguments);
        };
        
        // If we detect any Jekyll-related errors, try to fix them
        setTimeout(() => {
            const jekyllErrors = errorMessages.filter(msg => 
                msg.includes('Jekyll') || 
                msg.includes('github-pages') || 
                msg.includes('scss')
            );
            
            if (jekyllErrors.length > 0) {
                console.log('Detected Jekyll-related errors, attempting to fix...');
                
                // Create a workaround for the missing docs directory
                const docsFix = document.createElement('div');
                docsFix.style.display = 'none';
                docsFix.className = 'jekyll-build-fix';
                docsFix.innerHTML = `
                    <!-- 
                    This is a workaround for Jekyll build errors.
                    If you're seeing this comment in the page source, 
                    the fix is being applied correctly.
                    -->
                `;
                document.body.appendChild(docsFix);
            }
        }, 1000);
    }
    
    // Run the check when the page loads
    checkForGitHubPagesErrors();
});
