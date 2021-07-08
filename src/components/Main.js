import React from "react";
import { api } from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "./../context/CurrentUserContext.js";

export default function Main(props) {
  // const { card } = props;
  const currentUser = React.useContext(CurrentUserContext);

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

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

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-wrap" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar"
              alt="Фото пользователя: "
              //   src={userAvatar}
              src={currentUser.avatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__wrap">
              {/* <h1 className="profile__name">{userName}</h1> */}
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            {/* <p className="profile__bio">{userDescription}</p> */}
            <p className="profile__bio">{currentUser.about}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={props.onAddPlace}
          ></button>
        </div>
      </section>

      <section className="content">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
