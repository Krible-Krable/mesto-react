import React from 'react';
import { api } from './../utils/Api';

export default function Main(props) {
    let [userName, setUserName] = React.useState();
    let [userDescription, setUserDescription] = React.useState();
    let [userAvatar, setUserAvatar] = React.useState();

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
            })
            .catch(err => {
                console.log(err, 'Ошибка при сохранении данных');
            });
    });

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
                </section>

            </main >
        </>
    );
}