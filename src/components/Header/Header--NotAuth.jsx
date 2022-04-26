import React from 'react';
import logo from '../../assets/images/logo.svg'

const HeaderNotAuth = () => {
    return <div className="containerHead">
        <header className="header">
            <a href="#s"><img src={logo} alt="logo" className="header__logo col-md-2 col-sm-1" /></a>
            <div className="header__buttons col-md-3 col-lg-3 col-sm-1">
                <a className="header__contacts" href="#s">Контакты</a>
                <button className="header__login">Войти</button>
            </div>
        </header>
    </div>
}

export default HeaderNotAuth;