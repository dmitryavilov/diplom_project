const servicesSlider = () => {
    const slider = document.querySelector('.services-slider'),
          sliderWrapper = document.getElementById('services-slider-wrapper'),
          wrapper = document.getElementById('serv-slider-wrapper'),
          slides = slider.querySelectorAll('.slide'),
          yellow = '#ffd11a';

    let sliderTransform = 0,
        baseSlideWidth = 210,
        slideCounter = 0;

    const changeStyles = () => {
        sliderWrapper.style.cssText = `
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1110px;
        `;

        wrapper.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        `;

        slider.style.cssText = `
            padding: 0;
            transition: 0.4s;
        `;

        slides.forEach(item => {
            item.style.minWidth = `${baseSlideWidth}px`;
        });
    };

    const createArrows = () => {
        const arrowStyles = `
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: ${yellow};
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 25px;
            border: none;
        `

        const arrowPrev = document.createElement('button'),
              arrowNext = document.createElement('button');

        arrowPrev.style.cssText = arrowStyles + 'left: -50px';
        arrowNext.style.cssText = arrowStyles + 'right: -50px';

        arrowPrev.id = 'serv-prev';
        arrowNext.id = 'serv-next';

        arrowPrev.textContent = '<';
        arrowNext.textContent = '>';

        wrapper.insertAdjacentElement('afterbegin', arrowPrev);
        wrapper.insertAdjacentElement('afterbegin', arrowNext);
        
    };

    createArrows();

    const prevBtn = document.getElementById('serv-prev'),
          nextBtn = document.getElementById('serv-next');

    const toNextSlide = () => {
        if (slideCounter + 5 !== slides.length) {
            sliderTransform += baseSlideWidth + 12;
            slider.style.transform = `translateX(${-sliderTransform}px)`;
            slideCounter++;
        };
    };

    const toPrevSlide = () => {
        if (sliderTransform > 0) {
            sliderTransform -= baseSlideWidth + 12;
            slider.style.transform = `translateX(${-sliderTransform}px)`;
            slideCounter--;
        };
    };

    changeStyles();

    nextBtn.addEventListener('click', toNextSlide);
    prevBtn.addEventListener('click', toPrevSlide);

    wrapper.addEventListener('mouseenter', () => {
        const checkKeyNumber = e => {
            if (e.keyCode === 37) {
                toPrevSlide();
            } else if (e.keyCode === 39) {
                toNextSlide();
            }
        };

        document.addEventListener('keydown', checkKeyNumber);

        wrapper.addEventListener('mouseleave', () => {
            document.removeEventListener('keydown', checkKeyNumber);
        });
    });
};

export default servicesSlider;