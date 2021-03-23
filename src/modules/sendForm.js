const sendForm = (form) => {
    const checkbox = form.querySelector('input[type=checkbox]'),
          thanksMessage = document.getElementById('thanks');

    form.addEventListener('submit', e => {
        e.preventDefault();

        let target = e.target;
        
        if(!checkbox.checked) {
            alert('Поставьте галочку!');
            return; 
        };

        form.closest('.popup').style.display = 'none';
        thanksMessage.style.display = 'block';
    });
};

export default sendForm;