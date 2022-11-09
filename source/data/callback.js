import html from '../js/utils/html.js';
import {getFormContent} from './index.js';

export default {
  callback: {
    content: html`<h2>Закажите звонок</h2>
      <p>
        Оставьте контакты, мы проконсультируем вас бесплатно в удобное время
      </p>
      ${getFormContent('callback')}`,
    image: {
      default: 'img/paper-airplane.png',
      default2x: 'img/paper-airplane@2x.png',
      webp: 'img/paper-airplane.webp',
      webp2x: 'img/paper-airplane@2x.webp',
    },
  },
  callbackLink: null, // Переопределяем общие данные из _common.js
};
