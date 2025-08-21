// Datos de los verbos
const verbData = {
    go: { infinitive: "go", past: "went", participle: "gone", translation: "ir" },
    eat: { infinitive: "eat", past: "ate", participle: "eaten", translation: "comer" },
    have: { infinitive: "have", past: "had", participle: "had", translation: "tener" },
    be: { infinitive: "be", past: "was/were", participle: "been", translation: "ser / estar" },
    make: { infinitive: "make", past: "made", participle: "made", translation: "hacer / fabricar" }
};

// Elementos del DOM para el verbo seleccionado
const verbSelect = document.getElementById("verbSelect");
const verbInfo = document.getElementById("verbInfo");
const verbTitle = document.getElementById("verbTitle");
const infinitive = document.getElementById("infinitive");
const past = document.getElementById("past");
const participle = document.getElementById("participle");
const translation = document.getElementById("translation");

// Mostrar información del verbo seleccionado
verbSelect.addEventListener("change", () => {
    const selectedVerb = verbSelect.value;
    if (selectedVerb && verbData[selectedVerb]) {
        const verb = verbData[selectedVerb];
        verbTitle.textContent = selectedVerb.toUpperCase();
        infinitive.textContent = verb.infinitive;
        past.textContent = verb.past;
        participle.textContent = verb.participle;
        translation.textContent = verb.translation;
        verbInfo.classList.remove("hidden");
    } else {
        verbInfo.classList.add("hidden");
    }
});

// Control del tema claro/oscuro
const themeButton = document.getElementById("toggleTheme");
const languageSelector = document.getElementById("languageSelector");

// Inicializa modo claro
document.body.classList.add("light-mode");

// Cambiar tema al hacer clic
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    const isDark = document.body.classList.contains("dark-mode");
    const lang = languageSelector.value;

    themeButton.textContent = isDark
        ? (lang === "en" ? "Switch to Light Mode" : "Cambiar a Modo Claro")
        : (lang === "en" ? "Switch to Dark Mode" : "Cambiar a Modo Oscuro");
});

// Traducciones de textos
const translations = {
    es: {
        title: "Aprende los Verbos en Inglés",
        "section1-title": "¿Qué es un verbo?",
        "section1-text": "Un verbo es una palabra que describe una acción, un estado o un proceso.",
        "types-title": "Tipos de verbos",
        "regular-desc": "Regulares: Forman el pasado simple con -ed.",
        "irregular-desc": "Irregulares: No siguen reglas fijas.",
        "examples-title": "Ejemplos comunes",
        "interactive-title": "Consulta un verbo irregular",
        "select-label": "Selecciona un verbo:",
        "toggleTheme": "Cambiar a Modo Oscuro"
    },
    en: {
        title: "Learn English Verbs",
        "section1-title": "What is a verb?",
        "section1-text": "A verb is a word that describes an action, a state, or a process.",
        "types-title": "Types of verbs",
        "regular-desc": "Regular: They form the past simple by adding -ed.",
        "irregular-desc": "Irregular: They don’t follow fixed rules.",
        "examples-title": "Common examples",
        "interactive-title": "Check an irregular verb",
        "select-label": "Choose a verb:",
        "toggleTheme": "Switch to Dark Mode"
    }
};

// Función para traducir toda la página
function translatePage(lang) {
    const trans = translations[lang];
    for (const key in trans) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = trans[key];
        }
    }

    // Actualiza el texto del botón de tema según el idioma y modo actual
    const isDark = document.body.classList.contains("dark-mode");
    themeButton.textContent = isDark
        ? (lang === "en" ? "Switch to Light Mode" : "Cambiar a Modo Claro")
        : trans["toggleTheme"];
}

// Detecta cambio de idioma
languageSelector.addEventListener("change", (e) => {
    translatePage(e.target.value);
});

// Traduce al cargar la página según el idioma inicial (español)
translatePage(languageSelector.value);
// Formulario de contacto
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío real del formulario

    const name = document.getElementById("nameInput").value.trim();

    if (name) {
        alert(`Gracias por tu mensaje, ${name}!`);
        contactForm.reset(); // Limpia el formulario
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});
