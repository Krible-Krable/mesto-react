//импорт апп цсс
import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

export default function App(props) {
    return (
        <div className="root">
            <Header />
            <Main />
            <PopupWithForm>{props.children}</PopupWithForm>
            <Footer />
            <ImagePopup />
        </div>
    );
}

