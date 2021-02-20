export default function Main() {

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
        <>
            <main className="main">
                <section className="profile">
                    <div className="profile__container">
                        <div className="profile__avatar-wrap" onClick={handleEditAvatarClick}> <img className="profile__avatar" alt="Фото пользователя: " />
                        </div>
                        <div className="profile__info">
                            <div className="profile__wrap">
                                <h1 className="profile__name"></h1>
                                <button className="profile__edit-button" type="button"
                                    onClick={handleEditProfileClick}
                                ></button>
                            </div>
                            <p className="profile__bio"></p>
                        </div>
                        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
                    </div>
                </section>

                <section className="content">
                </section>

            </main >

            <section className="popup popup_img-open">
                <div className="popup__img-wrap">
                    <button className="popup__button-close" type="button"></button>
                    <img className="popup__img" />
                    <h2 className="popup__img-label"></h2>
                </div>
            </section>
        </>
    );
}