import React from 'react';
import logo from './logo.svg'

const Header = () => {
    return <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <div className="header__buttons">
            <a className="header__contacts" href="#s">Контакты</a>
            <button className="header__login">Войти</button>
        </div>
    </header>
}

export default Header;