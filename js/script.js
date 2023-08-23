// function imgSlider(anything){
//     document.querySelector('.starbucks').src = anything;
// }

// function changeCircleColor(color){
//     const circle = document.querySelector('.circle')
//     circle.style.background = color;
// }

// Animações da imagem e circulo
// Função para animar a troca de imagem e cor do círculo
function animateImage(imageSrc, circleColor) {
    const circle = document.querySelector('.circle');
    const image = document.querySelector('.starbucks');

    // Defina o novo src da imagem e a cor do círculo imediatamente
    imgSlider(imageSrc);
    changeCircleColor(circleColor);

    // Adicione a classe de animação para a imagem
    image.classList.add('animate-image');

    // Adicione a classe de animação para o círculo após um pequeno atraso
    setTimeout(() => {
        circle.classList.add('animate-circle');

        // Remova a classe de animação do círculo após um atraso para reverter a animação do círculo
        setTimeout(() => {
            circle.classList.remove('animate-circle');
        }, 300); // Tempo para reverter a animação do círculo (em milissegundos)
    }, 100); // Tempo para iniciar a animação do círculo (em milissegundos)

    // Remova a classe de animação da imagem após um atraso para reverter a animação da imagem
    setTimeout(() => {
        image.classList.remove('animate-image');
    }, 700); // Tempo para reverter a animação da imagem (em milissegundos)
}
 

function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color;
}
// Linguagens --

const languageSelect = document.getElementById('languageSelect');
const title = document.getElementById('title');
const paragraph = document.querySelector('[data-text="textStar"]');
const learnMoreBtn = document.querySelector('[data-text="learnMore"]');

function loadLanguage(language) {
    fetch(`languages/${language}.json`)
        .then(response => response.json())
        .then(data => {
            title.innerHTML = data.title;
            paragraph.textContent = data.textStar;
            learnMoreBtn.textContent = data.learnMore;
        });
}

// Load the default language 'en' when the page loads
loadLanguage('en');

languageSelect.addEventListener('change', function() {
    const selectedLanguage = languageSelect.value;
    loadLanguage(selectedLanguage);
});
