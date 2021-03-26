const mobileMenu = () => {
    const menuBtn = document.getElementById('menu-btn'),
          closeBtn = document.getElementById('close-btn'),
          menu = document.getElementById('hidden-menu');

    const showMenu = () => {
        menu.style.display = 'flex';
    };

    const hideMenu = () => {
        menu.style.display = 'none';
    };

    menuBtn.addEventListener('click', showMenu);
    menu.addEventListener('click', e => {
        let target = e.target;

        if (target.closest('#close-btn') || target.closest('.scroll')) {
            hideMenu();
        };
    });
};

export default mobileMenu;