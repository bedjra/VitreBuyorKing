// Gestion du menu hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Fermer le menu mobile quand on clique ailleurs
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

// Ouvrir/fermer le dropdown
languageButton.addEventListener("click", (e) => {
  e.stopPropagation();
  languageSelector.classList.toggle("active");
});

// Fermer le dropdown quand on clique ailleurs
document.addEventListener("click", (e) => {
  if (!languageSelector.contains(e.target)) {
    languageSelector.classList.remove("active");
  }
});

// Textes pour chaque langue
const translations = {
  fr: {
    welcome: "Bienvenue sur BuyorKing",
    description: "Changez la langue avec le sélecteur en haut à droite.",
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contact",
  },
  en: {
    welcome: "Welcome to BuyorKing",
    description: "Change the language with the selector at the top right.",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  },
};

// Changer la langue
languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedLang = option.dataset.lang;

    // Mettre à jour l'option active
    languageOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    // Mettre à jour le bouton principal
    if (selectedLang === "fr") {
      currentFlag.className = "flag-icon flag-fr";
      currentLang.textContent = "Français";
    } else {
      currentFlag.className = "flag-icon flag-en";
      currentLang.textContent = "English";
    }

    // Mettre à jour le contenu de la page
    updatePageContent(selectedLang);

    // Fermer le dropdown
    languageSelector.classList.remove("active");
  });
});

// Fonction pour mettre à jour le contenu de la page
function updatePageContent(lang) {
  document.getElementById("welcomeText").textContent =
    translations[lang].welcome;
  document.getElementById("descriptionText").textContent =
    translations[lang].description;

  // Mettre à jour les liens de navigation
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks[0].textContent = translations[lang].home;
  navLinks[1].textContent = translations[lang].about;
  navLinks[2].textContent = translations[lang].services;
  navLinks[3].textContent = translations[lang].contact;

  // Mettre à jour la langue du document
  document.documentElement.lang = lang;
}
