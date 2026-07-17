// Smooth scroll for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// View Projects button scroll
const viewProjectsBtn = document.getElementById("viewProjects");
viewProjectsBtn.addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});

// Contact form submission
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// Dark mode toggle
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Toggle Dark Mode";
darkModeBtn.style.marginTop = "20px";
document.querySelector("footer").appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dark mode styles
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background: #121212;
    color: #f1f1f1;
  }
  .dark-mode header, .dark-mode footer {
    background: #333;
  }
  .dark-mode button {
    background: #444;
    color: #fff;
  }
`;
document.head.appendChild(style);

// Scroll animations
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Scroll-to-top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn
