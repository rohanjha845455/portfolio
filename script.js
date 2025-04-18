// Dark Mode Toggle
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});

// Check for dark mode preference on page load
window.addEventListener("load", () => {
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
    }
});

// Scroll to Top Button functionality
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerHTML = "↑";
scrollToTopButton.classList.add("scroll-to-top");
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show Scroll to Top Button when Scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');
    
    if (!name.value || !email.value || !message.value) {
        event.preventDefault();
        alert("Please fill in all fields.");
    }
});

// Tooltip on Download Resume Button
const downloadBtn = document.querySelector(".btn");
downloadBtn.addEventListener("mouseover", () => {
    downloadBtn.setAttribute("title", "Click to download my resume");
});
