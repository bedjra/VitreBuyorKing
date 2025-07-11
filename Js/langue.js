// Gestion du menu hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Gestion du sélecteur de langue
const languageSelector = document.getElementById("languageSelector");
const languageButton = document.getElementById("languageButton");
const languageDropdown = document.getElementById("languageDropdown");
const currentFlag = document.getElementById("currentFlag");
const currentLang = document.getElementById("currentLang");
const languageOptions = document.querySelectorAll(".language-option");

languageButton.addEventListener("click", (e) => {
  e.stopPropagation();
  languageSelector.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!languageSelector.contains(e.target)) {
    languageSelector.classList.remove("active");
  }
});

// Textes pour chaque langue
const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contact",
    heroTitle: `Envoyez,<br>épargnez, gagnez.<br><span style="color: #2563eb;">Facilement</span>`,
    heroDescription: "Envoyez de l'argent à vos proches, mettez de côté quand vous le souhaitez, ou faites grandir votre argent avec des intérêts. Rapide et sécurisé!",
    ctaButton: "Nos Services",
    testimonialText: `<span class="testimonial-number">+200</span> clients <br> satisfaits`
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    heroTitle: `Send,<br>save, earn.<br><span style="color: #2563eb;">Easily</span>`,
    heroDescription: "Send money to your loved ones, save anytime, or grow your money with interest. Fast and secure!",
    ctaButton: "Our Services",
    testimonialText: `<span class="testimonial-number">+200</span> satisfied <br> clients`
  }
};

// Appliquer les traductions lors du clic
languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedLang = option.dataset.lang;

    // Marquer l'option comme active
    languageOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    // Changer le drapeau et le texte
    if (selectedLang === "fr") {
      currentFlag.className = "flag-icon flag-fr";
      currentLang.textContent = "Français";
    } else {
      currentFlag.className = "flag-icon flag-en";
      currentLang.textContent = "English";
    }

    // Mettre à jour le contenu
    updatePageContent(selectedLang);

    // Fermer le dropdown
    languageSelector.classList.remove("active");
  });
});

// Fonction de mise à jour dynamique
function updatePageContent(lang) {
  const t = translations[lang];

  document.getElementById("welcomeText").textContent = t.welcome;
  document.getElementById("descriptionText").textContent = t.description;

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks[0].textContent = t.home;
  navLinks[1].textContent = t.about;
  navLinks[2].textContent = t.services;
  navLinks[3].textContent = t.contact;

  document.querySelector(".hero-title").innerHTML = t.heroTitle;
  document.querySelector(".hero-description").textContent = t.heroDescription;
  document.querySelector(".cta-button").textContent = t.ctaButton;
  document.querySelector(".testimonial-text").innerHTML = t.testimonialText;

  document.documentElement.lang = lang;
}
