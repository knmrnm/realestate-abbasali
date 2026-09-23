const menuButton = document.querySelector(".menu-button");

const mobileMenu = document.createElement("div");
mobileMenu.className = "mobile-menu";

mobileMenu.innerHTML = `
    <div class="mobile-menu-header">
        <span>Menu</span>
        <button class="menu-close" aria-label="Close menu">×</button>
    </div>

    <nav>
        <a href="#properties">Properties</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
    </nav>

    <a href="#contact" class="mobile-menu-cta">
        Get in touch
    </a>
`;

document.body.appendChild(mobileMenu);

const menuClose = mobileMenu.querySelector(".menu-close");
const menuLinks = mobileMenu.querySelectorAll("nav a");

function openMenu() {
    mobileMenu.classList.add("open");
    menuButton.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    mobileMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

menuButton.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);

menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});
