import html from '../../js/utils/html.js';
import getFormData from '../modules/form.js';

export default {
  company: {
    content: html`<h2>О компании</h2>
      <p>
        Мы поставляем электронные комплектующие, производим печатные платы и
        предоставляем мировые технологии с 1997 года. Выполняем срочные заказы и
        пилотные образцы до 10 дней.
      </p>
      <p>
        Наши поставщики - мировые производители электронных компонентов: OSRAM,
        CREE, HOLGLITRONIC, REFOND.
        <span class="mobile-hide">
          Печатные платы и комплектующие Service Devices применяются на
          предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ,
          АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие
          Производители светотехники России.
        </span>
      </p>
      <p>
        Smart Device - это команда профессионалов. Через нас прошло более 1 000
        000 клиентов, 70% из которых продолжают сотрудничество по сей день. На
        данный момент насчитывается более 14 офисов по всей стране и 20 городов
        присутствия.
      </p>
      <p>
        Мы стремимся к постоянному развитию и повышению уровня качества
        продукции, производимой внутри компании. Использование инновационных
        технологий помогает экономить деньги и время наших клиентов
      </p>`,
    image: {
      default: 'img/company.jpg',
      default2x: 'img/company@2x.jpg',
      webp: 'img/company.webp',
      webp2x: 'img/company@2x.webp',
    },
  },
  advantages: [
    {
      title: 'Оперативные сроки',
      description: 'Усовершенствованная логистическая система позволяет нам просчитывать стоимость, производить и доставлять заказы плат и&nbsp;комплектующих в самые короткие сроки',
      icon: 'stopwatch',
    },
    {
      title: 'Крупные поставщики',
      description: 'Нашими поставщиками являются такие крупные мировые компании как: OSRAM, CREE, HOLGLITRONIC, REFOND. Сотрудничество с такими компаниями обеспечивает хорошее качество нашей продукции.',
      icon: 'hired',
    },
    {
      title: 'Полная конфиденциальность',
      description: 'По желанию клиента&nbsp;&nbsp;мы обеспечиваем полную конфиденциальность.',
      icon: 'detective',
    },
    {
      title: 'Персонализация стоимости',
      description: 'Мы&nbsp;&nbsp;подбираем определенную фабрику, поставщиков, вид доставки, чтобы установить ту цену, которая Вас устраивает.',
      icon: 'tag',
    },
  ],
  callback: {
    content: html`<h2>Закажите звонок</h2>
      <p>
        Оставьте контакты, мы проконсультируем вас бесплатно в удобное время
      </p>`,
    form: getFormData('callback'),
    modalId: 'callback',
  },
  feedback: {
    content: html`<h2>Остались вопросы? Задайте их нам!</h2>
      <p>Мы проконсультируем Вас бесплатно</p>`,
    form: getFormData('feedback', 'Задать вопрос'),
    id: 'feedback',
    image: {
      default: 'img/paper-airplane.png',
      default2x: 'img/paper-airplane@2x.png',
      webp: 'img/paper-airplane.webp',
      webp2x: 'img/paper-airplane@2x.webp',
    },
  },
  promo: {
    content: html`<h2>Печатные платы</h2>
      <p>производство и монтаж, поставка комплектующих, блоков и модулей</p>`,
    image: {
      default: 'img/main-header.jpg',
      default2x: 'img/main-header@2x.jpg',
      immediately: true,
      webp: 'img/main-header.webp',
      webp2x: 'img/main-header@2x.webp',
      webpMobile: 'img/main-header-mobile.webp',
      webpMobile2x: 'img/main-header-mobile@2x.webp',
    },
    link: {
      mobileTitle: 'бесплатная консультация',
      title: 'Получить бесплатную консультацию',
      url: '#feedback',
    },
  },
  catalog: {
    title: 'Smart Device предлагает следующие товары и услуги',
    list: [
      {
        image: {
          default: 'img/service-1.jpg',
          default2x: 'img/service-1@2x.jpg',
          webp: 'img/service-1.webp',
          webp2x: 'img/service-1@2x.webp',
          webpMobile: 'img/service-1-mobile.webp',
          webpMobile2x: 'img/service-1-mobile@2x.webp',
          webpTablet: 'img/service-1-tablet.webp',
          webpTablet2x: 'img/service-1-tablet@2x.webp',
        },
        link: {
          title: 'Производство печатных плат',
          url: '#!',
        },
      },
      {
        image: {
          default: 'img/service-2.jpg',
          default2x: 'img/service-2@2x.jpg',
          webp: 'img/service-2.webp',
          webp2x: 'img/service-2@2x.webp',
          webpMobile: 'img/service-2-mobile.webp',
          webpMobile2x: 'img/service-2-mobile@2x.webp',
          webpTablet: 'img/service-2-tablet.webp',
          webpTablet2x: 'img/service-2-tablet@2x.webp',
        },
        link: {
          title: 'Монтаж печатных плат',
          url: '#!',
        },
      },
      {
        image: {
          default: 'img/service-3.jpg',
          default2x: 'img/service-3@2x.jpg',
          webp: 'img/service-3.webp',
          webp2x: 'img/service-3@2x.webp',
          webpMobile: 'img/service-3-mobile.webp',
          webpMobile2x: 'img/service-3-mobile@2x.webp',
          webpTablet: 'img/service-3-tablet.webp',
          webpTablet2x: 'img/service-3-tablet@2x.webp',
        },
        link: {
          title: 'Комплектующие для светотехники',
          url: '#!',
        },
      },
    ],
    mobileTitle: 'Товары и услуги Smart Device',
  },
};
