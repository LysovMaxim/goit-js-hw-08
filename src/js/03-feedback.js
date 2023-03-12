const form = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';
const CURRENT_VALUE = 'feedback-form-state';

const formData = {}

form.addEventListener('input', throttle(e =>{
    formData[e.target.name] = e.target.value; onInputFormValue();
}, 500));

function onInputFormValue() {
    const inputValue = JSON.stringify(formData);
    localStorage.setItem(CURRENT_VALUE, inputValue);
};

saveForm();
function saveForm() {
  const complectedForm = JSON.parse(localStorage.getItem(CURRENT_VALUE));
  if (complectedForm) {
    form.email.value = complectedForm.email;
    form.message.value = complectedForm.message;
  }
}

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(formData)
    event.currentTarget.reset();
    localStorage.removeItem(CURRENT_VALUE);
    Object.keys(formData).forEach(el => delete formData[el]);
});


// const throttle = require('lodash.throttle');
// const STORAGE_KEY = 'feedback-form-state';const formData = {};
// const form = document.querySelector('.feedback-form');
// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(e => { formData[e.target.name] = e.target.value; onInputFormValue(); }, 500));
// populateFormInput();
// function onFormSubmit(e) {  e.preventDefault();
//   console.log(formData);
//     e.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     Object.keys(formData).forEach(el => delete formData[el]);
// }
// function onInputFormValue() {
//     const inputValue = JSON.stringify(formData);
//     localStorage.setItem(STORAGE_KEY, inputValue);
// }
// function populateFormInput() {  const storageData = localStorage.getItem(STORAGE_KEY);
//   if (!storageData) {    return;  }
//   try {    const savedData = JSON.parse(storageData);
//         if (savedData) {
//             Object.entries(savedData).forEach(([name, value]) => {
//                 const input = form.querySelector(`[name="${name}"]`); input.value = value; formData[name] = value;
//             });
//         }
//     } catch (error) { console.error(error); }
// }
