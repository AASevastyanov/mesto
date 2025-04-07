// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const profilePopup = document.querySelector('.popup_type_edit')
const cardPopup = document.querySelector('.popup_type_new-card')
const cardAddButton = document.querySelector('.profile__add-button')
const imagePopup = document.querySelector('.popup_type_image')
const popInputName = document.querySelector('.popup__input_type_name') 
const popInputDesk = document.querySelector('.popup__input_type_description')
const profileTitle = document.querySelector('.profile__title')
const profileDesc = document.querySelector('.profile__description')
const profileEdit = document.querySelector('.profile__edit-button')
const profileFormElement = document.forms['edit-profile']
const popUpCloseButton = document.querySelectorAll('.popup__close')

document.querySelectorAll('.popup').forEach((popup)=> {
  popup.classList.add('popup_is-animated')
})

function openModal(popup) {      
  popup.classList.toggle('popup_is-opened');
}

profileEdit.addEventListener('click', () => {
  inputInfo();
  openModal(profilePopup);
});

popUpCloseButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    openModal(btn.closest('.popup'))
  })
})

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popInputName.value
  profileDesc.textContent = popInputDesk.value
  openModal(profilePopup);
};

profileFormElement.addEventListener('submit', handleProfileFormSubmit); 

function inputInfo() {
  popInputName.value = profileTitle.textContent
  popInputDesk.value = profileDesc.textContent
}

// -------------------------------------
const inputCardName = document.querySelector('.popup__input_type_card-name')
const inputCardUrl = document.querySelector('.popup__input_type_url')
const appendNewCard = document.forms['new-place']

cardAddButton.addEventListener('click', () => {
  openModal(cardPopup);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const massNewCardInfo = {name: inputCardName.value, link: inputCardUrl.value};
  openModal(cardPopup);
  const cardList = document.querySelector('.places__list')

  const cardAppend = createCard(massNewCardInfo);
  cardList.prepend(cardAppend);
}
appendNewCard.addEventListener('submit', handleCardFormSubmit); 


// --------------------------------------
const likeCardButtons = document.querySelectorAll('.card__like-button')
const deleteCardButton = document.querySelectorAll('.card__delete-button')
const popupTypeImage = document.querySelector('.popup__image')
const popupTypeCaption = document.querySelector('.popup__caption')
const cards = document.querySelectorAll('.card')
likeCardButtons.forEach((like)=> {
  like.addEventListener('click', () => like.classList.toggle('card__like-button_is-active'))
})

deleteCardButton.forEach((deleteCard)=> {
  deleteCard.addEventListener('click', () => deleteCard.closest('.card').remove())
})

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const cardImage = card.querySelector('.card__image')
    const cardCaption = card.querySelector('.card__title')
    popupTypeImage.src = cardImage.src;
    popupTypeImage.alt = cardCaption.textContent;
    popupTypeCaption.textContent = cardCaption.textContent;
    openModal(imagePopup);
  });
})

