'use strict';

//Выпадающий список
import dropList from './modules/dropList';
//Модалка бесплатного визита
import toggleForm from './modules/toggleForm';
//Слайдер в главном блоке
import heroSlider from './modules/heroSlider';


//Выпадающий список
dropList();
//Открытие и закрытие модалок
toggleForm(document.getElementById('free_visit_form'), document.querySelector('.open-popup'));
toggleForm(document.getElementById('callback_form'), document.querySelector('.callback-btn'));
toggleForm(
    document.getElementById('gift'), 
    document.querySelector('.fixed-gift'),
    () => {
        document.querySelector('.fixed-gift').style.display = 'none';
    }
);
//Слайдер в главном блоке
heroSlider();
