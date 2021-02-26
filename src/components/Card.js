import React from 'react';


export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="card">
            <button className="card__button-delete card__button-delete_hidden" type="button"></button>
            <img className="card__foto" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <div className="card__footer">
                <h2 className="card__heading">{props.card.name}</h2>
                <div className="card__button-like_wrap">
                    <button className="card__button-like" type="button"></button>
                    <div className="card__button-like_count">1</div>
                </div>
            </div>
        </article>
    );
}