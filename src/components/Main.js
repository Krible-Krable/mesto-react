import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

export default function Main(props) {
    // const { card } = props;

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getUser(),
            api.getInitialCards()
        ])
            .then(([user, data]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(data);
            })
            .catch(err => {
                console.log(err, 'Ошибка при сохранении данных');
            });
    }, []);

    return (
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
                {cards.map(card => (<Card card={card} key={card._id} onCardClick={props.onCardClick} />))}
            </section>
        </main >
    );
}