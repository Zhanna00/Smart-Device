import html from '../utils/html';

const ButtonText = {
  CLOSED: 'Подробнее',
  OPENED: 'Свернуть',
};
const VISIBLE_PARAGRAPHS_COUNT = 2;
const BTN_SELECTOR = '.company-article__btn';
const BODY_SELECTOR = '.company-article__body';
const CLOSED_CLASS_NAME = 'company-article__body--closed';
const PARAGRAPHS_SELECTOR = '.company-article__body > p';

const buttonTemplate = html`<button class="company-article__btn button">
  ${ButtonText.CLOSED}
</button>`;

export default (articleElement) => {
  let isOpened = false;

  const bodyElement = articleElement.querySelector(BODY_SELECTOR);
  const contentParagraphElements =
    bodyElement.querySelectorAll(PARAGRAPHS_SELECTOR);

  if (contentParagraphElements.length > VISIBLE_PARAGRAPHS_COUNT) {
    bodyElement.classList.add(CLOSED_CLASS_NAME);
    bodyElement.insertAdjacentHTML('beforeend', buttonTemplate);

    const buttonElement = bodyElement.querySelector(BTN_SELECTOR);
    buttonElement.addEventListener('click', () => {
      isOpened = !isOpened;
      bodyElement.classList.toggle(CLOSED_CLASS_NAME);

      buttonElement.textContent = isOpened
        ? ButtonText.OPENED
        : ButtonText.CLOSED;
    });
  }
};
