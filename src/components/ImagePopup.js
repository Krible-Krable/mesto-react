export default function ImagePopup() {
    return (
        <>
            <section className="popup popup_img-open">
                <div className="popup__img-wrap">
                    <button className="popup__button-close" type="button"></button>
                    <img className="popup__img" />
                    <h2 className="popup__img-label"></h2>
                </div>
            </section>
        </>
    );
}