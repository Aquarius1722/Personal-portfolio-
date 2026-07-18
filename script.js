// Smooth scroll
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// View Projects button
document.getElementById("viewProjects").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});

// Savage Mode random popup messages
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

// Auto-open hamburger drawer for 5 seconds on mobile
window.addEventListener("load", () => {
  if (window.innerWidth <= 768) {
    const menuToggle = document.getElementById("menu-toggle");

    // Open drawer
    menuToggle.checked = true;

    // Close after 5 seconds
    setTimeout(() => {
      menuToggle.checked = false;
    }, 5000);
  }
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
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
