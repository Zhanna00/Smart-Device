const pages = [
  {
    id: 'index',
    title: 'Главная страница',
  },
  {
    id: 'callback',
    title: 'Страница заказа звонка',
  },
];

if (process.env.NODE_ENV === 'development') { // eslint-disable-line
  pages.push({
    id: 'modal-dev',
    title: 'Страница проверки модального окна',
  });
}

export default {
  pages,
};
