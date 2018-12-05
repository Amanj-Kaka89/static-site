import qs from 'qs';
import axios from 'axios';
import '../stylesheets/style.scss';
import * as config from '../../config/config.json';

const form = document.querySelector('.form');

// ðŸ‘‡ Write homework code here
const formData = {
  name: 'Amanj',
  email: 'your@email.com',
  comment: 'This is my comment',
  priority: 'Medium',
  topic: ['HTML', 'CSS', 'Javascriot', 'Design'],
};
// ðŸ‘† Write homework code here

const handleSubmit = e => {
  e.preventDefault();
  axios
    .post(config.site.url, qs.stringify({ 'form-name': 'Comments', ...formData }, { arrayFormat: 'brackets' }))
    .then(_ => console.log('success'))
    .catch(_ => console.log('failed'));
};

form.addEventListener('submit', handleSubmit);
