// Adds the shared header and footer to every page.
// Each page just needs: <div id="site-header"></div> ... <div id="site-footer"></div>
// The markup lives right here (no fetch), so pages also work when opened by double-clicking the file.
(function () {
    var HEADER_HTML =
        '<header class="site-header">' +
            '<a href="index.html" class="logo">FoodWise</a>' +
            '<nav aria-label="Main">' +
                '<a href="index.html">Home</a>' +
                '<a href="menu.html">Canteen Menu</a>' +
                '<a href="nutrition.html">Nutrition</a>' +
                '<a href="ingredients.html">Ingredients</a>' +
                '<details class="nav-group"><summary>Learn</summary>' +
                    '<div class="nav-panel">' +
                        '<a href="advantages.html">Advantages of Canteen Food</a>' +
                        '<a href="health.html">Health Awareness</a>' +
                    '</div></details>' +
                '<details class="nav-group"><summary>Tools</summary>' +
                    '<div class="nav-panel">' +
                        '<a href="healthiest.html">Healthiest Items</a>' +
                        '<a href="calculator.html">Calorie Calculator</a>' +
                        '<a href="comparison.html">Food Comparison</a>' +
                        '<a href="canteens.html">Compare Canteens</a>' +
                        '<a href="search.html">Search</a>' +
                    '</div></details>' +
                '<a href="results.html">Survey Results</a>' +
                '<a href="about.html">About Us</a>' +
                '<a href="feedback.html" class="nav-highlight">Feedback</a>' +
            '</nav>' +
        '</header>';

    var FOOTER_HTML =
        '<footer class="site-footer" style="text-align:center; padding:24px; color:var(--muted); font-size:13px;">' +
            '<p>&copy; ' + new Date().getFullYear() + ' FoodWise &mdash; College Canteen Awareness Project</p>' +
        '</footer>';

    // Netlify can serve /menu or /menu.html, and local files end in .html, so compare without the extension.
    function norm(s) {
        s = (s || '').split('?')[0].split('#')[0].replace(/\.html$/, '');
        s = s.split('/').pop();
        return s === '' ? 'index' : s;
    }

    var headerEl = document.getElementById('site-header');
    if (headerEl) {
        headerEl.innerHTML = HEADER_HTML;
        var here = norm(window.location.pathname);
        headerEl.querySelectorAll('nav a').forEach(function (a) {
            if (norm(a.getAttribute('href')) === here) {
                a.setAttribute('aria-current', 'page');
                var group = a.closest('.nav-group');
                if (group) group.classList.add('has-current');
            }
        });
    }

    var footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.innerHTML = FOOTER_HTML;

    // Close an open dropdown when clicking elsewhere or pressing Escape.
    document.addEventListener('click', function (e) {
        document.querySelectorAll('.nav-group[open]').forEach(function (g) {
            if (!g.contains(e.target)) g.removeAttribute('open');
        });
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.nav-group[open]').forEach(function (g) { g.removeAttribute('open'); });
        }
    });
})();
