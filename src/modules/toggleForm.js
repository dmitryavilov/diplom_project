const visitModal = (modal, modalLink) => {
    modal.style.height = '100vh';

    const openModal = () => {
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    modalLink.addEventListener('click', openModal);
    modal.addEventListener('click', e => {
        let target = e.target;

        if (target.matches('.overlay') || target.matches('.close_icon')) {
            closeModal();
        };
    });
};

export default visitModal;