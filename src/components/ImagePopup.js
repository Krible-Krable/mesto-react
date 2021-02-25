
export default function ImagePopup(props) {
    return (
        <>
            <section className="popup popup_img-open">
                <div className="popup__img-wrap">
                    <button className="popup__button-close" type="button" onClick={props.onClose}></button>
                    <img className="popup__img" src={props.card} />
                    <h2 className="popup__img-label"></h2>
                </div>
            </section>
        </>
    );
}

// onClick = { props.onClose }