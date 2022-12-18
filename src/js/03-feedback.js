/*
1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
 в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. 
В противном случае поля должны быть пустыми.
3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email,
message и текущими их значениями в консоль.
4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
Для этого добавь в проект и используй библиотеку lodash.throttle. */

//== (4)
import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
}

refs.form.addEventListener('input', throttle(onFormData, 500));
refs.form.addEventListener('submit', onSubmitForm);
let formData = {};
const localFeedBackKey = "feedback-form-state";

populateTextarea();

//== (3)
function onSubmitForm(event) {
    event.preventDefault();
    console.log(formData);
    if (formData.message === '' || formData.email === '') {
        alert('I need more "Data" mate');
        return;
    }
    formData = {};
  event.target.reset();
  localStorage.removeItem(localFeedBackKey);
}

//== (1)
function onFormData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localFeedBackKey, JSON.stringify(formData));
}

//== (2)
function populateTextarea() {
    const formData = JSON.parse(localStorage.getItem(localFeedBackKey)) || {};
       if (formData) {
        refs.email.value = formData.email;
           refs.message.value = formData.message;
    }
};