const servicesSlider = () => {
    const slider = document.querySelector('.services-slider'),
          slides = slider.querySelectorAll('.slide'),
          prevBtn = document.getElementById('serv-prev'),
          nextBtn = document.getElementById('serv-next');

    let slideCounter = 0;

    const activeSlides = () => {
        slides.forEach(item => {
            item.style.display = 'none'
        });

        const comeSlides = () => {
            slides[slideCounter].style.display = 'block';
            slides[slideCounter + 1].style.display = 'block';
            slides[slideCounter + 2].style.display = 'block';
            slides[slideCounter + 3].style.display = 'block';
            slides[slideCounter + 4].style.display = 'block';
        };

        if (slideCounter + 4 !== slides.length && slideCounter !== -1) {
            comeSlides();
        } else if (slideCounter + 4 === slides.length) {
            slideCounter = 0;
            comeSlides();
        } else {
            slideCounter = slides.length - 5;
            comeSlides();
        }

    };

    const turnPages = e => {
        let target = e.target;

        if (target.closest('#serv-next')) {
            slideCounter++;
            activeSlides();
        } else {
            slideCounter--;
            activeSlides();
        };
    };

    prevBtn.addEventListener('click', turnPages);
    nextBtn.addEventListener('click', turnPages);

    activeSlides();
};

export default servicesSlider;