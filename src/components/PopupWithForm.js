export default function PopupWithForm(props) {
    let popupClassName = `popup popup_${props.name}`;
    if (props.isOpen) {
        popupClassName += ' popup_is-opened';
    }
    return (
        <>
            <section className={popupClassName}>
                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <form className="popup__form" name={props.name} noValidate>
                        <h2 className="popup__title">{props.title}</h2>
                        {/* <input type="text" className="popup__input popup__input_type_name" id="current-name"
                            placeholder="Ваше имя и фамилия" name="profile__name" required minLength="2" maxLength="40" />
                        <span id="current-name-error"></span>
                        <input type="text" className="popup__input popup__input_type_bio" id="current-bio" placeholder="О себе"
                            name="profile__bio" required minLength="2" maxLength="200" />
                        <span id="current-bio-error"></span>
                        <button type="submit" value="Сохранить" className="popup__button popup__button-save">Сохранить</button> */}
                        {props.children}
                    </form>
                </div>
            </section>

            {/* <section className={`popup popup_${props.name}`}>
                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <form className="popup__form" name={props.name} noValidate>
                        <h2 className="popup__title">{props.title}</h2>
                        <input type="text" className="popup__input popup__input_type_place" id="current-place"
                            placeholder="Название" name="popup__place" required minLength="2" maxLength="30" />
                        <span id="current-place-error"></span>
                        <input type="url" className="popup__input popup__input_type_link" id="sign-in-link"
                            placeholder="Ссылка на картинку" name="popap__link" required />
                        <span id="sign-in-link-error"></span>
                        <button type="submit" value="Создать" className="popup__button popup__button-save">Создать</button>
                        {props.children}
                    </form>
                </div>
            </section> */}

            {/* <section className={`popup popup_${props.name}`}>
                <div className="popup__container">
                    <button className="popup__button-close" type="button"></button>
                    <form className="popup__form popup__form_type_delete" name={props.name}>
                        <h2 className="popup__title">{props.title}</h2>
                        <button type="submit" value="Да" className="popup__button popup__button-delete">Да</button>
                    </form>
                </div>
            </section> */}

            {/* <section className={`popup popup_${props.name}`}>
                <div className="popup__container popup__avatar">
                    <button className="popup__button-close" type="button"></button>
                    <form className="popup__form" name={props.name}>
                        <h2 className="popup__title">{props.title}</h2>
                        <input type="url" className="popup__input popup__input_type_src" id="current-avatar"
                            placeholder="ссылка/источник" name="popup__avatar" required />
                        <span id="current-avatar-error"></span>
                        <button type="submit" value="Сохранить" className="popup__button popup__button-save">Сохранить</button>
                    </form>
                </div>
            </section> */}
        </>
    );
}