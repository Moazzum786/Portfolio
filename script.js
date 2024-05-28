var icon = document.getElementById("icon");

icon, onclick = function () {
    this.document.body.classList.toggle("dark-theme");
    if (this.document.body.classList.contains("dark-theme")) {
        icon.src = "portfolio_site_img/sun.png";
    }
    else {
        icon.src = "portfolio_site_img/moon.png";
    }
    }