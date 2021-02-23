//импорт апп цсс
import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

export default function App(props) {
    function handleEditAvatarClick() {
        const popup = document.querySelector('.popup_edit-avatar');
        popup.classList.add('popup_is-opened');
    }

    function handleEditProfileClick() {
        const popup = document.querySelector('.popup_profile');
        popup.classList.add('popup_is-opened');
    }

    function handleAddPlaceClick() {
        const popup = document.querySelector('.popup_card');
        popup.classList.add('popup_is-opened');
    }

    return (
        <div className="root">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
            />
            <PopupWithForm
                name="profile"
                title="Редактировать профиль"
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
            >{props.children}
                <input type="text" className="popup__input popup__input_type_place" id="current-place"
                    placeholder="Название" name="popup__place" required minLength="2" maxLength="30" />
                <span id="current-place-error"></span>
                <input type="url" className="popup__input popup__input_type_link" id="sign-in-link"
                    placeholder="Ссылка на картинку" name="popap__link" required />
                <span id="sign-in-link-error"></span>
                <button type="submit" value="Создать" className="popup__button popup__button-save">Создать</button>
            </PopupWithForm>
            <PopupWithForm
                name="edit-avatar"
                title="Обновить аватар"
            >
                <input type="url" className="popup__input popup__input_type_src" id="current-avatar"
                    placeholder="ссылка/источник" name="popup__avatar" required />
                <span id="current-avatar-error"></span>
                <button type="submit" value="Сохранить" className="popup__button popup__button-save">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm
                name="get-delete"
                title="Вы уверены?"
            >
                <button type="submit" value="Да" className="popup__button popup__button-delete">Да</button>
            </PopupWithForm>
            <Footer />
            <ImagePopup />
        </div>
    );
}

