//импорт апп цсс
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function App() {
    return (
        <div className="root">
            <Header />
            <Main
               // onEditAvatar={handleEditAvatarClick}
            // {handleEditProfileClick}
            // {handleAddPlaceClick}
            />
            <Footer />

            {/* <section className="popup popup_profile">

                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <form className="popup__form" name="edit_profile" noValidate>
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <input type="text" className="popup__input popup__input_type_name" id="current-name"
                            placeholder="Ваше имя и фамилия" name="profile__name" required minLength="2" maxLength="40" />
                        <span id="current-name-error"></span>
                        <input type="text" className="popup__input popup__input_type_bio" id="current-bio" placeholder="О себе"
                            name="profile__bio" required minLength="2" maxLength="200" />
                        <span id="current-bio-error"></span>
                        <button type="submit" value="Сохранить" className="popup__button popup__button-save">Сохранить</button>
                    </form>
                </div>
            </section>

            <section className="popup popup_card">

                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <form className="popup__form" name="edit_card" noValidate>
                        <h2 className="popup__title">Новое место</h2>
                        <input type="text" className="popup__input popup__input_type_place" id="current-place"
                            placeholder="Название" name="popup__place" required minLength="2" maxLength="30" />
                        <span id="current-place-error"></span>
                        <input type="url" className="popup__input popup__input_type_link" id="sign-in-link"
                            placeholder="Ссылка на картинку" name="popap__link" required />
                        <span id="sign-in-link-error"></span>
                        <button type="submit" value="Создать" className="popup__button popup__button-save">Создать</button>
                    </form>
                </div>
            </section>


            <section className="popup popup_get-delete">

                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <form className="popup__form popup__form_type_delete" name="form_get-delete">
                        <h2 className="popup__title">Вы уверены?</h2>
                        <button type="submit" value="Да" className="popup__button popup__button-delete">Да</button>
                    </form>
                </div>
            </section>


            <section className="popup popup_edit-avatar">
                <div className="popup__container popup__avatar">
                    <button className="popup__button-close" type="button"></button>
                    <form className="popup__form" name="edit_avatar">
                        <h2 className="popup__title">Обновить аватар</h2>
                        <input type="url" className="popup__input popup__input_type_src" id="current-avatar"
                            placeholder="ссылка/источник" name="popup__avatar" required />
                        <span id="current-avatar-error"></span>

                        <button type="submit" value="Сохранить" className="popup__button popup__button-save">Сохранить</button>
                    </form>
                </div>
            </section>

            <section className="popup popup_img-open">
                <div className="popup__img-wrap">
                    <button className="popup__button-close" type="button"></button>
                    <img className="popup__img" />
                    <h2 className="popup__img-label"></h2>
                </div>
            </section> */}

        </div>
    );
}

