const throttle = _.throttle 

const players = Array.from(document.querySelectorAll('.img-thumbnail'));

const elementIsOnScreen = (el) => {
    const rect = el.getBoundingClientRect();
    // rect top é em relação ao tamanho da tela(viewport), não ao documento
    console.log(rect.top > 0 && rect.bottom < window.innerHeight);
    return rect.top > 0 && rect.top < window.innerHeight;
}

const playAnimation = (el) => {
    if(elementIsOnScreen(el)) {
        el.classList.add('animate');
    }
}

const render = throttle(() => players.forEach(playAnimation), 150);


window.addEventListener('scroll', render);