//импорт апп цсс
import React from 'react';

export default function App() {
    return (
        <div class="root">
            <header class="header">
                <img src={"../images/logoMesto.svg"} alt="Логотип сайта место" class="header__logo" />
            </header>

            <main class="main">
                <section class="profile">
                    <div class="profile__container">
                        <div class="profile__avatar-wrap"><img class="profile__avatar" alt="Фото пользователя: " />
                        </div>
                        <div class="profile__info">
                            <div class="profile__wrap">
                                <h1 class="profile__name"></h1>
                                <button class="profile__edit-button" type="button"></button>
                            </div>
                            <p class="profile__bio"></p>
                        </div>
                        <button class="profile__add-button" type="button"></button>
                    </div>
                </section>

                <section class="content">
                </section>

            </main>

            <section class="popup popup_profile">

                <div class="popup__container">
                    <button class="popup__button-close" type="button"></button>
                    <form class="popup__form" name="edit_profile" novalidate>
                        <h2 class="popup__title">Редактировать профиль</h2>
                        <input type="text" class="popup__input popup__input_type_name" id="current-name"
                            placeholder="Ваше имя и фамилия" name="profile__name" required minlength="2" maxlength="40" />
                        <span id="current-name-error"></span>
                        <input type="text" class="popup__input popup__input_type_bio" id="current-bio" placeholder="О себе"
                            name="profile__bio" required minlength="2" maxlength="200" />
                        <span id="current-bio-error"></span>
                        <button type="submit" value="Сохранить" class="popup__button popup__button-save">Сохранить</button>
                    </form>
                </div>
            </section>

            <section class="popup popup_card">

                <div class="popup__container">
                    <button class="popup__button-close" type="button"></button>
                    <form class="popup__form" name="edit_card" novalidate>
                        <h2 class="popup__title">Новое место</h2>
                        <input type="text" class="popup__input popup__input_type_place" id="current-place"
                            placeholder="Название" name="popup__place" required minlength="2" maxlength="30" />
                        <span id="current-place-error"></span>
                        <input type="url" class="popup__input popup__input_type_link" id="sign-in-link"
                            placeholder="Ссылка на картинку" name="popap__link" required />
                        <span id="sign-in-link-error"></span>
                        <button type="submit" value="Создать" class="popup__button popup__button-save">Создать</button>
                    </form>
                </div>
            </section>


            <section class="popup popup_get-delete">

                <div class="popup__container">
                    <button class="popup__button-close" type="button"></button>
                    <form class="popup__form popup__form_type_delete" name="form_get-delete">
                        <h2 class="popup__title">Вы уверены?</h2>
                        <button type="submit" value="Да" class="popup__button popup__button-delete">Да</button>
                    </form>
                </div>
            </section>


            <section class="popup popup_edit-avatar">
                <div class="popup__container popup__avatar">
                    <button class="popup__button-close" type="button"></button>
                    <form class="popup__form" name="edit_avatar">
                        <h2 class="popup__title">Обновить аватар</h2>
                        <input type="url" class="popup__input popup__input_type_src" id="current-avatar"
                            placeholder="ссылка/источник" name="popup__avatar" required />
                        <span id="current-avatar-error"></span>

                        <button type="submit" value="Сохранить" class="popup__button popup__button-save">Сохранить</button>
                    </form>
                </div>
            </section>

            <section class="popup popup_img-open">
                <div class="popup__img-wrap">
                    <button class="popup__button-close" type="button"></button>
                    <img class="popup__img" />
                    <h2 class="popup__img-label"></h2>
                </div>
            </section>


            <footer class="footer">
                <p class="footer__info">&copy; 2020 Mesto Russia</p>
            </footer>

        </div>
    );
}

