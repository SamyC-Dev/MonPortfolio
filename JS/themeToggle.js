const iconTheme = document.getElementById('iconTheme');
let toggleTheme = 0;

iconTheme.addEventListener('click', () => {
    if (toggleTheme === 0) {
        document.documentElement.style.setProperty('--first-color', '#000000');
        iconTheme.className = "bx bx-sun bx-tada";
        toggleTheme++;
    } else {
        document.documentElement.style.setProperty('--first-color', '#70a1ff');
        iconTheme.className = "bx bx-moon bx-tada";
        toggleTheme--;
    };
});