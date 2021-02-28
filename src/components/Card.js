import React from 'react';


export default function Card(props) {
    const { card, onCardClick } = props;

    function handleClick() {
        onCardClick(card);
    }

    return (
        <article className="card">
            {/* card__button-delete_hidden"*/}
            <button className="card__button-delete" type="button"></button>
            <img className="card__foto" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="card__footer">
                <h2 className="card__heading">{card.name}</h2>
                <div className="card__button-like_wrap">
                    <button className="card__button-like" type="button"></button>
                    <div className="card__button-like_count">{card.likes.length}</div>
                </div>
            </div>
        </article>
    );
}