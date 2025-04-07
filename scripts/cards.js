const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function createCard(initialCards) {
  const template = document.getElementById('card-template').content;
  const card = template.querySelector('.card').cloneNode(true);

  const cardImg = card.querySelector('.card__image');
  const cardName = card.querySelector('.card__title');

  cardImg.src = initialCards.link
  cardImg.alt = initialCards.name
  cardName.textContent = initialCards.name

  return card
}

const cardList = document.querySelector('.places__list')

initialCards.forEach((cardItem) => {
  const cardAppend = createCard(cardItem);
  cardList.append(cardAppend);
})