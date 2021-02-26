import React from 'react';

export default function ImagePopup(props) {
    let popupClassName = `popup popup_img-open`;
    if (props.card) {
        popupClassName += ' popup_is-opened';
    }

    return (
        <>
            <section className={popupClassName}>
                <div className="popup__img-wrap">
                    <button className="popup__button-close" type="button" onClick={props.onClose}></button>
                    <img className="popup__img" src={props.card && props.card.link} />
                    <h2 className="popup__img-label"></h2>
                </div>
            </section>
        </>
    );
}
