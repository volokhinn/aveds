import React, {useState} from 'react';
import logo from '../../assets/images/logo.svg';
import Modal from '../Modal/Modal';
import {Link} from 'react-router-dom';

const HeaderNotAuth = () => {
    const [modalActive, setModalActive] = useState(false);
    return <div className="containerHead">
        <header className="header">
            <Link to="/"><img src={logo} alt="logo" className="header__logo col-md-2 col-sm-1" /></Link>
            <div className="header__buttons col-md-3 col-lg-3 col-sm-1">
                <Link className="header__contacts" to="/contacts">Контакты</Link>
                <button className="header__login" onClick={() => setModalActive(true)}>Войти</button>
            </div>
        </header>
        <Modal active={modalActive} setActive={setModalActive}/>
    </div>
}

export default HeaderNotAuth;