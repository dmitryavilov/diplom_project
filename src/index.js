'use strict';

//Выпадающий список
import dropList from './modules/dropList';
//Модалка бесплатного визита
import toggleForm from './modules/toggleForm';


//Выпадающий список
dropList();
//Открытие и закрытие модалок
toggleForm(document.getElementById('free_visit_form'), document.querySelector('.open-popup'));
toggleForm(document.getElementById('callback_form'), document.querySelector('.callback-btn'));
