import React from 'react';
import { api } from './../utils/Api';

export default function Main(props) {
    let [userName, setUserName] = React.useState();
    let [userDescription, setUserDescription] = React.useState();
    let [userAvatar, setUserAvatar] = React.useState();
    let [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getUser(),
            api.getInitialCards()
        ])
            .then(([user, data]) => {
                // userInfo.saveUserInfo({ name: user.name, bio: user.about, id: user._id });
                // userInfo.saveUserAvatar(user.avatar);
                // section.renderCards(data);
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(data);
            })
            .catch(err => {
                console.log(err, 'Ошибка при сохранении данных');
            });
    });
    const cardsJSX = cards.map(card =>
        <article class="card">
            <button class="card__button-delete card__button-delete_hidden" type="button"></button>
            <img class="card__foto" src={card.link} alt={card.name} />
            <div class="card__footer">
                <h2 class="card__heading">{card.name}</h2>
                <div class="card__button-like_wrap">
                    <button class="card__button-like" type="button"></button>
                    <div class="card__button-like_count">1</div>
                </div>
            </div>
        </article>);

    return (
        <>
            <main className="main">
                <section className="profile">
                    <div className="profile__container">
                        <div className="profile__avatar-wrap" onClick={props.onEditAvatar}>
                            <img className="profile__avatar" alt="Фото пользователя: " src={userAvatar} />
                        </div>
                        <div className="profile__info">
                            <div className="profile__wrap">
                                <h1 className="profile__name">{userName}</h1>
                                <button className="profile__edit-button" type="button"
                                    onClick={props.onEditProfile}
                                ></button>
                            </div>
                            <p className="profile__bio">{userDescription}</p>
                        </div>
                        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
                    </div>
                </section>

                <section className="content">
                    {cardsJSX}
                </section>

            </main >
        </>
    );
}