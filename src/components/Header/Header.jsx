import React from 'react';
import logo from '../../assets/images/logo.svg'

const Header = () => {
    return <div className="containerHead">
        <header className="header">
            <a href="#s"><img src={logo} alt="logo" className="header__logo" /></a>
            <div className="header__buttons">
                <a className="header__contacts" href="#s">Контакты</a>
                <button className="header__login">Войти</button>
            </div>
        </header>
    </div>
}

export default Header;