// Changer l'année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Traductions
const translations = {
    en: {
        heroTitle: "Full-Stack Developer",
        heroSubtitle: "Building modern web experiences • Osasco, Brazil",
        aboutTitle: "About Me",
        aboutText: "Passionate full-stack developer focused on clean code, performance and great user experience.",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        contactTitle: "Get in Touch",
        contactText: "Open to new opportunities and collaborations.<br>Email: amin.dev@email.com<br>WhatsApp / Telegram : +55 (11) 9xxxx-xxxx<br>Location: Osasco – São Paulo, Brazil"
    },
    fr: {
        heroTitle: "Développeur Full-Stack",
        heroSubtitle: "Création d'expériences web modernes • Osasco, Brésil",
        aboutTitle: "À propos",
        aboutText: "Développeur full-stack passionné, axé sur du code propre, de la performance et une excellente expérience utilisateur.",
        skillsTitle: "Compétences",
        projectsTitle: "Projets",
        contactTitle: "Contactez-moi",
        contactText: "Ouvert aux nouvelles opportunités et collaborations.<br>Email : amin.dev@email.com<br>WhatsApp / Telegram : +55 (11) 9xxxx-xxxx<br>Localisation : Osasco – São Paulo, Brésil"
    },
    ar: {
        heroTitle: "مطور فول ستاك",
        heroSubtitle: "بناء تجارب ويب حديثة • أوساسكو، البرازيل",
        aboutTitle: "عني",
        aboutText: "مطور فول ستاك متحمس، أركز على كود نظيف وعالي الأداء وتجربة مستخدم ممتازة.",
        skillsTitle: "المهارات",
        projectsTitle: "المشاريع",
        contactTitle: "تواصلوا معي",
        contactText: "منفتح على فرص وتعاونات جديدة.<br>البريد: amin.dev@email.com<br>واتساب / تليجرام: +55 (11) 9xxxx-xxxx<br>الموقع: أوساسكو – ساو باولو، البرازيل"
    },
    pt: {
        heroTitle: "Desenvolvedor Full-Stack",
        heroSubtitle: "Criando experiências web modernas • Osasco, Brasil",
        aboutTitle: "Sobre Mim",
        aboutText: "Desenvolvedor full-stack apaixonado, focado em código limpo, performance e excelente experiência do usuário.",
        skillsTitle: "Habilidades",
        projectsTitle: "Projetos",
        contactTitle: "Entre em Contato",
        contactText: "Aberto a novas oportunidades e colaborações.<br>Email: amin.dev@email.com<br>WhatsApp / Telegram: +55 (11) 9xxxx-xxxx<br>Localização: Osasco – São Paulo, Brasil"
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.setAttribute("lang", lang);

    const t = translations[lang];

    document.getElementById("hero-title").textContent    = t.heroTitle;
    document.getElementById("hero-subtitle").textContent = t.heroSubtitle;
    document.getElementById("about-title").textContent   = t.aboutTitle;
    document.getElementById("about-text").innerHTML      = t.aboutText;
    document.getElementById("skills-title").textContent  = t.skillsTitle;
    document.getElementById("projects-title").textContent= t.projectsTitle;
    document.getElementById("contact-title").textContent = t.contactTitle;
    document.getElementById("contact-text").innerHTML    = t.contactText;

    // Gérer le bouton actif
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

// Événements
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => changeLanguage(btn.dataset.lang));
});

// Langue par défaut
changeLanguage("en");
