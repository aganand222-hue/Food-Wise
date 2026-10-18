// Renders a row of college tabs into the element with id=containerId and returns the
// currently selected value (from ?college= in the URL, or the first tab).
// Pass includeAll=true to add an "All canteens" tab (its value is "All").
// The 4th argument is used internally to remember which tab was clicked.
function renderCollegeTabs(containerId, onChange, includeAll, chosen) {
    const options = includeAll ? ['All'].concat(colleges) : colleges.slice();
    let selected = chosen;
    if (options.indexOf(selected) === -1) {
        selected = new URLSearchParams(window.location.search).get('college');
        if (options.indexOf(selected) === -1) selected = options[0];
    }

    const container = document.getElementById(containerId);
    container.innerHTML = '';
    container.className = 'college-tabs';

    options.forEach(function (c) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = c === 'All' ? 'All canteens' : c;
        btn.className = 'college-tab' + (c === selected ? ' active' : '');
        btn.setAttribute('aria-pressed', c === selected ? 'true' : 'false');
        btn.onclick = function () {
            try {
                const url = new URL(window.location.href);
                url.searchParams.set('college', c);
                window.history.replaceState({}, '', url);
            } catch (err) {
                // Some browsers refuse this on file:// pages. The tab still works, it just won't be in the address bar.
            }
            renderCollegeTabs(containerId, onChange, includeAll, c);
            onChange(c);
        };
        container.appendChild(btn);
    });

    return selected;
}
