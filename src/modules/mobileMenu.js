const mobileMenu = () => {
    const menuBtn = document.getElementById('menu-btn'),
          menu = document.getElementById('hidden-menu'),
          head = document.querySelector('.head'),
          menuWrapper = document.querySelector('.menu-button');

    const showMenu = () => {
        menu.style.display = 'flex';
    };

    const hideMenu = () => {
        menu.style.display = 'none';
    };

    const slickMenu = () => {
        let height = head.clientHeight + menuWrapper.clientHeight;

        if (document.documentElement.scrollTop >= height) {
            menuBtn.style.cssText = `
                position: fixed;
                backgroud-color: black;
                right: 10px;
                top: 30px;
                z-index: 10;
                padding: 5px;
                background: rgba(0, 0, 0, 0.5);
            `;
        } else {
            menuBtn.style.cssText = `
                position: relative;
            `;
        };
    };

    menuBtn.addEventListener('click', showMenu);
    menu.addEventListener('click', e => {
        let target = e.target;

        if (target.closest('#close-btn') || target.closest('.scroll')) {
            hideMenu();
        };
    });
    document.addEventListener('scroll', slickMenu);
};

export default mobileMenu;