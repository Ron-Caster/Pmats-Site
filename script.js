// Initialize Lucide icons
lucide.createIcons();

// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add simple fade-in styles dynamically if not present in built CSS
const style = document.createElement('style');
style.textContent = `
  .animate-fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
`;
document.head.appendChild(style);

document.querySelectorAll('.animate-fade-in').forEach((el) => {
    observer.observe(el);
});
