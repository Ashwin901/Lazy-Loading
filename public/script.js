let i = 0;
while (i < 100) {
    $('.images').append(`<img class="item" data-src="https://source.unsplash.com/random?sig= ${i}">`);
    i++;
}

const images = [...document.getElementsByClassName('item')];

function lazyLoad(element){
    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                 entry.target.src = entry.target.dataset.src;
                 entry.target.classList.add('visible');
                 observer.disconnect();
            }
        })
    });
intersectionObserver.observe(element);
};

images.forEach(lazyLoad);
