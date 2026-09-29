// ========================================
// MANSION ESCAPE - THEME TOGGLE
// ========================================

const themeButton = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

// Update button text
updateThemeButton();


// Toggle dark/light mode
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");

    } else {

        localStorage.setItem("theme", "dark");

    }

    updateThemeButton();
});


// Change button text
function updateThemeButton() {

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "🌙 DARK MODE";

    } else {

        themeButton.textContent = "☀ LIGHT MODE";

    }
}