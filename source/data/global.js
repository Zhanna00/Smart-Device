export default {
  addressLinks: {
    heading: 'Наш офис',
    id: 'contacts',
    list: [
      {
        title: 'г. Мытищи, Олимпийский проспект, д.10',
        url: 'https://www.google.com/maps/place/%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80-%D1%82.,+10,+%D0%9C%D1%8B%D1%82%D0%B8%D1%89%D0%B8,+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+141006/@55.9232536,37.759158,17z/data=!3m1!4b1!4m6!3m5!1s0x46b53195838bffff:0x8be3a5db7970d6ce!8m2!3d55.9232536!4d37.759158!16s%2Fg%2F11j004lpsb',
      },
      {
        title: '+7 (495) 589-40-50',
        url: 'tel:+74955894050',
      },
      {
        title: '+7 (925) 389-58-29',
        url: 'tel:+79253895829',
      },
      {
        title: '+7 (925) 364-78-13',
        url: 'tel:+79253647813',
      },
    ],
  },
  callbackLink: {
    title: 'Заказать звонок',
    url: 'callback.html',
  },
  contacts: [
    {
      id: 'mailto',
      url: '#!',
      text: 'info@sd.ru',
    },
    {
      id: 'tel',
      url: 'tel:+74950005252',
      text: '+7 (495) 000 52 52',
    },
  ],
  sitemapLinks: {
    heading: 'Разделы сайта',
    id: 'sitemap',
    list: [
      'О Компании',
      'Продукты',
      'Производство печатных плат',
      'Монтаж печатных плат',
      'Комплектующие',
      'Доставка',
      'Контакты',
    ].map((title) => ({
      title,
      url: '#!',
    })),
  },
  socials: [
    {
      id: 'classmates',
      value: 'https://ok.ru',
      title: 'Мы в Одноклассники',
    },
    {
      id: 'vk',
      value: 'https://vk.com',
      title: 'Мы в Вконтакте',
    },
    {
      id: 'pinterest',
      value: 'https://ru.pinterest.com',
      title: 'Мы в Пинтерест',
    },
  ],
  navTogglerText: 'Список ссылок.',
};
