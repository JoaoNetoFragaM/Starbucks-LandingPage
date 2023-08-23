// Linguagens

const languageSelect = document.getElementById('languageSelect');
const title = document.getElementById('title');
const menuLinks = document.querySelectorAll('.menulink');
const paragraph = document.querySelector('[data-text="textStar"]');
const learnMoreButton = document.querySelector('.btnlearn');

function loadLanguage(language) {
    fetch(`languages/${language}.json`)
        .then(response => response.json())
        .then(data => {
            title.innerHTML = data.title;
            menuLinks.forEach(link => {
                const textKey = link.getAttribute('data-text');
                link.textContent = data[textKey];
            });
            paragraph.textContent = data.textStar; // Traduz o parágrafo
            learnMoreButton.textContent = data.learnMore; // Traduz o botão "Learn More"
        });
}

// Carregar o idioma padrão 'en' ou ingles quando a página for carregada
loadLanguage('en');

languageSelect.addEventListener('change', function() {
    const selectedLanguage = languageSelect.value;
    loadLanguage(selectedLanguage);
});
 