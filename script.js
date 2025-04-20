// ========== DARK MODE TOGGLE ==========
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.body;

darkModeToggle?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});

window.addEventListener("load", () => {
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
    }
});

// ========== SCROLL TO TOP ==========
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerHTML = "↑";
scrollToTopButton.classList.add("scroll-to-top");
scrollToTopButton.style.display = "none";
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    scrollToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
});

// ========== SMOOTH NAVIGATION ==========
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// ========== TOOLTIP ON DOWNLOAD BUTTON ==========
const downloadBtns = document.querySelectorAll(".btn");
downloadBtns.forEach(btn => {
    if (btn.textContent.includes("Download")) {
        btn.addEventListener("mouseover", () => {
            btn.setAttribute("title", "Click to download my resume");
        });
    }
});

// ========== CONTACT FORM SUBMIT & VALIDATION ==========
const contactForm = document.querySelector("#contact-form");
const messageBox = document.getElementById("form-message");

contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    if (!name.value || !email.value || !message.value) {
        alert("Please fill in all required fields.");
        return;
    }

    const formData = new FormData(contactForm);

    fetch("https://formsubmit.co/ajax/jhar74145@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        messageBox.innerHTML = `<p style="color: green;">✅ Thank you! Your message has been sent successfully.</p>`;
        contactForm.reset();
    })
    .catch(err => {
        messageBox.innerHTML = `<p style="color: red;">❌ Oops! Something went wrong. Please try again later.</p>`;
    });
});
