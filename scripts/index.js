// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_new-card");
const cardAddButton = document.querySelector(".profile__add-button");
const imagePopup = document.querySelector(".popup_type_image");
const popInputName = document.querySelector(".popup__input_type_name");
const popInputDesk = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");
const profileEdit = document.querySelector(".profile__edit-button");
const profileFormElement = document.forms["edit-profile"];
const popUpCloseButton = document.querySelectorAll(".popup__close");

document.querySelectorAll(".popup").forEach((popup) => {
  popup.classList.add("popup_is-animated");
});

function openModal(popup) {
  popup.classList.toggle("popup_is-opened");
}

profileEdit.addEventListener("click", () => {
  inputInfo();
  openModal(profilePopup);
});

popUpCloseButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal(btn.closest(".popup"));
  });
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popInputName.value;
  profileDesc.textContent = popInputDesk.value;
  openModal(profilePopup);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function inputInfo() {
  popInputName.value = profileTitle.textContent;
  popInputDesk.value = profileDesc.textContent;
}

// -------------------------------------
const inputCardName = document.querySelector(".popup__input_type_card-name");
const inputCardUrl = document.querySelector(".popup__input_type_url");
const appendNewCard = document.forms["new-place"];

cardAddButton.addEventListener("click", () => {
  openModal(cardPopup);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardInfo = { name: inputCardName.value, link: inputCardUrl.value };
  openModal(cardPopup);
  const cardList = document.querySelector(".places__list");

  const cardAppend = createCard(newCardInfo);
  cardList.prepend(cardAppend);
}
appendNewCard.addEventListener("submit", handleCardFormSubmit);
