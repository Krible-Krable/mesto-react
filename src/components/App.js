//импорт апп цсс
import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

export default function App(props) {

    let [isEditProfileOpen, setEditProfileOpen] = React.useState(false);
    let [isEditAvatarClick, setEditAvatarClick] = React.useState(false);
    let [ishandleAddPlaceClick, sethandleAddPlaceClick] = React.useState(false);

    let [selectedCard, setSelectedCard] = React.useState();


    function handleEditAvatarClick() {
        setEditAvatarClick(true);
    }

    function handleEditProfileClick() {
        setEditProfileOpen(true);
    }

    function handleAddPlaceClick() {
        sethandleAddPlaceClick(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setEditAvatarClick(false);
        setEditProfileOpen(false);
        sethandleAddPlaceClick(false);
        setSelectedCard(null);
    }

    return (
        <div className="root">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <PopupWithForm
                name="profile"
                title="Редактировать профиль"
                isOpen={isEditProfileOpen}
                onClose={closeAllPopups}
            >
                <input type="text" className="popup__input popup__input_type_name" id="current-name"
                    placeholder="Ваше имя и фамилия" name="profile__name" required minLength="2" maxLength="40" />
                <span id="current-name-error"></span>
                <input type="text" className="popup__input popup__input_type_bio" id="current-bio" placeholder="О себе"
                    name="profile__bio" required minLength="2" maxLength="200" />
                <span id="current-bio-error"></span>
                <button type="submit" value="Сохранить" className="popup__button popup__button-save">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm
                name="card"
                title="Новое место"
                isOpen={ishandleAddPlaceClick}
                onClose={closeAllPopups}
            >{props.children}
                <input type="text" className="popup__input popup__input_type_place" id="current-place"
                    placeholder="Название" name="popup__place" required minLength="2" maxLength="30" />
                <span id="current-place-error"></span>
                <input type="url" className="popup__input popup__input_type_link" id="sign-in-link"
                    placeholder="Ссылка на картинку" name="popap__link" required src={selectedCard} />
                <span id="sign-in-link-error"></span>
                <button type="submit" value="Создать" className="popup__button popup__button-save">Создать</button>
            </PopupWithForm>
            <PopupWithForm
                name="edit-avatar"
                title="Обновить аватар"
                isOpen={isEditAvatarClick}
                onClose={closeAllPopups}
            >
                <input type="url" className="popup__input popup__input_type_src" id="current-avatar"
                    placeholder="ссылка/источник" name="popup__avatar" required />
                <span id="current-avatar-error"></span>
                <button type="submit" value="Сохранить" className="popup__button popup__button-save">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm
                name="get-delete"
                title="Вы уверены?"
                onClose={closeAllPopups}
            >
                <button type="submit" value="Да" className="popup__button popup__button-delete">Да</button>
            </PopupWithForm>
            <Footer />
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </div>
    );
}

