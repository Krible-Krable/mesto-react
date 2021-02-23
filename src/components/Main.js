export default function Main(props) {
    return (
        <>
            <main className="main">
                <section className="profile">
                    <div className="profile__container">
                        <div className="profile__avatar-wrap" onClick={props.onEditAvatar}> <img className="profile__avatar" alt="Фото пользователя: " />
                        </div>
                        <div className="profile__info">
                            <div className="profile__wrap">
                                <h1 className="profile__name"></h1>
                                <button className="profile__edit-button" type="button"
                                    onClick={props.onEditProfile}
                                ></button>
                            </div>
                            <p className="profile__bio"></p>
                        </div>
                        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
                    </div>
                </section>

                <section className="content">
                </section>

            </main >
        </>
    );
}