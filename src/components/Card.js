import React from 'react';

export default function Card(props) {
    return (
        <article className="card">
            <button className="card__button-delete card__button-delete_hidden" type="button"></button>
            <img className="card__foto" src={props.link} alt={props.name} onClick={props.onCardClick} />
            <div className="card__footer">
                <h2 className="card__heading">{props.name}</h2>
                <div className="card__button-like_wrap">
                    <button className="card__button-like" type="button"></button>
                    <div className="card__button-like_count">1</div>
                </div>
            </div>
        </article>
    );
}