console.log("Script file loaded!");
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
document.getElementById("viewProjects").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});

// Contact form submission (Savage Mode with random messages)
const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const savageMessages = [
    "😹 You think your message went somewhere? It went to heaven 😛🙈",
    "😂😂 Brooo your message just evaporated into thin air 😹",
    "🤣🤣 Omo you don submit? Na localhost ooo, nothing dey go anywhere 😹",
    "😛 Your message has been delivered… to absolutely nobody 😹",
    "🙈 This form is just vibes, nothing dey send 😹",
    "😹 Your message entered voicemail, nobody will call back 😛",
    "🤣🤣 Message sent successfully… into the abyss 😹",
    "😂😂 You really typed all that? For localhost? 😛🙈"
  ];

  const randomSavage = savageMessages[Math.floor(Math.random() * savageMessages.length)];

  alert(randomSavage);

  contactForm.reset();
});

// Sidebar toggle
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  sidebar.style.right = sidebar.style.right === "0px" ? "-250px" : "0px";
});

// Close sidebar when clicking a link
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.style.right = "-250px";
  });
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
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.textContent = "↑";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display =
    document.documentElement.scrollTop > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
