// ===== Scroll spy (highlight active section) =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== Contact form handler (Updated to use fetch API with server.js) =====
document.querySelector("#kontakt form").addEventListener("submit", async e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        // IMPORTANT: Update 'http://localhost:3000' with your live domain when deployed
        const response = await fetch('http://localhost:3000/contact', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
            form.reset();
        } else {
            alert(`Fehler beim Senden: ${result.message || 'Bitte versuchen Sie es später erneut.'}`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert("Es gab ein Problem mit der Verbindung zum Server. Bitte versuchen Sie es später erneut.");
    }
});


// ===== Dark/Light Mode Toggle =====
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
} else {
  toggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
    localStorage.setItem("theme", "light");
  }
});

// ===== Slideshow logic (Note: Requires HTML structure not included in this review) =====
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow .slide");

if (slides.length > 0) {
  slides[slideIndex].classList.add("active");
}

function showSlides() {
  // Ensure slides exist before trying to access them
  if (slides.length === 0) return;
  
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

// Only start the interval if slides are present
if (slides.length > 0) {
  setInterval(showSlides, 2000);
}


// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Toggle menu open/close when clicking the hamburger
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu automatically when a link is clicked
const navMenuLinks = navMenu.querySelectorAll('a');
navMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// ===== Initialize AOS (Animate On Scroll) =====
// Ensures the scroll animations trigger correctly
AOS.init({
  duration: 1200, // Global duration for all animations
  once: true      // Animations should only happen once on scroll down
});