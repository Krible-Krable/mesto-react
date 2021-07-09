//импорт апп цсс
import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "./../context/CurrentUserContext.js";

export default function App() {
  const [isEditProfileOpen, setEditProfileOpen] = React.useState(false);
  const [isEditAvatarOpen, setEditAvatarOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()]) //api.getUser()
      .then(([data]) => {
        //user
        // setUserName(user.name);
        // setUserDescription(user.about);
        // setUserAvatar(user.avatar);
        setCards(data);
      })
      .catch((err) => {
        console.log(err, "Ошибка при сохранении данных");
      });
  }, []);

  React.useEffect(() => {
    api.getUser().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(name, about) {
    api.editDataProfile(name, about).then((user) => {
      setCurrentUser(user);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(avatar) {
    api.editAvatar(avatar).then(() => {
      setCurrentUser({
        ...currentUser,
        avatar,
      });
      closeAllPopups();
    });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;

    api.changeCardDelete(card._id, isOwn).then((newCard) => {
      setCards((card) =>
        [...card].filter((c) => (c._id === card._id ? newCard : c))
      );
    });
  }

  function closeAllPopups() {
    setEditAvatarOpen(false);
    setEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        ></Main>
        <EditProfilePopup
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input popup__input_type_place"
            id="current-place"
            placeholder="Название"
            name="popup__place"
            required
            minLength="2"
            maxLength="30"
          />
          <span id="current-place-error"></span>
          <input
            type="url"
            className="popup__input popup__input_type_link"
            id="sign-in-link"
            placeholder="Ссылка на картинку"
            name="popap__link"
            required
            src={selectedCard}
          />
          <span id="sign-in-link-error"></span>
          <button
            type="submit"
            value="Создать"
            className="popup__button popup__button-save"
          >
            Создать
          </button>
        </PopupWithForm>
        <EditAvatarPopup
          isOpen={isEditAvatarOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <PopupWithForm
          name="get-delete"
          title="Вы уверены?"
          onClose={closeAllPopups}
        >
          <button
            type="submit"
            value="Да"
            className="popup__button popup__button-delete"
          >
            Да
          </button>
        </PopupWithForm>
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}
