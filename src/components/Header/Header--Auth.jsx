import React from 'react';
import logo from '../../assets/images/logo.svg';
import {Link} from 'react-router-dom';

const HeaderAuth = () => {
    return <div className="containerHead">
        <header className="header">
            <Link to="/"><img src={logo} alt="logo" className="header__logo col-md-2 col-sm-1" /></Link>
            <div className="header__buttons col-md-3 col-lg-3 col-sm-1">
                <Link className="header__contacts" to="/contacts">Контакты</Link>
                <button className="header__exit">Выйти</button>
            </div>
        </header>
    </div>
}

export default HeaderAuth;