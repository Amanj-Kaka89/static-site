import qs from 'qs';
import axios from 'axios';
import '../stylesheets/style.scss';
import * as config from '../../config/config.json';

const form = document.querySelector('.form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const comment = document.querySelector('.comment');
const topics = [...document.querySelectorAll('.options input[type="checkbox"]:checked')].map(v => v.value),

// ðŸ‘‡ Write homework code here
const formData = {
  Name: name.value,
  Email: email.value,
  Comment: comment.value,
  Priority: document.querySelector('input[name="priority"]:checked').value,
  Topics: topics
};
const clearForm = () => {
  name.value = '';
  email.value = '';
  comment.value = '';
  document.querySelector('input[name = "priority"]:checked').checked = false;
  [...document.querySelectorAll('input[type = "checkbox"]:checked')].map(v => (v.checked = false));
};
// ðŸ‘† Write homework code here
axios
  .post(config.site.url, qs.stringify({ 'form-name': config.form.name, ...formData }, { arrayFormat: 'brackets' }))
  .then(_ => console.log('success'))
  .catch(_ => console.log('failed'));
    .then(_ => {
  clearForm();
});
const handleSubmit = e => {
  e.preventDefault();
  clearForm();
  formData();

};

form.addEventListener('submit', handleSubmit);
