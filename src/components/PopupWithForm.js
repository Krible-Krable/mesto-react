export default function PopupWithForm(props) {
    let popupClassName = `popup popup_${props.name}`;
    if (props.isOpen) {
        popupClassName += ' popup_is-opened';
    }
    return (
        <>
            <section className={popupClassName}>
                <div className="popup__container">
                    <button className="popup__button-close" type="button" onClick={props.onClose}></button>
                    <form className="popup__form" name={props.name} noValidate>
                        <h2 className="popup__title">{props.title}</h2>
                        {props.children}
                    </form>
                </div>
            </section>
        </>
    );
}