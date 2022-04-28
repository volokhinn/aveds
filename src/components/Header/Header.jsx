import React, {useState} from 'react';
import logo from '../../assets/images/logo.svg';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Header = () => {
    const nav = useNavigate();
    const exit = async () => {
        await localStorage.setItem("isAuth", "false");
        nav('/');
        window.location.reload();
    }
    const isAuth = localStorage.getItem("isAuth") || 'false';

    const [modalActive, setModalActive] = useState(false);
    return <div className="containerHead">
        <header className="header">
            <Link to="/"><img src={logo} alt="logo" className="header__logo col-md-2 col-sm-1" /></Link>
            <div className="header__buttons">
                <Link className="header__contacts" to="/contacts">Контакты</Link>
                { isAuth === 'false' ?
                    (<button className="header__login" onClick={() => setModalActive(true)}>Войти</button>) :
                    (<button className="header__exit" onClick={() => exit()}>Выйти</button>)
                }
            </div>
        </header>
        <Modal active={modalActive} setActive={setModalActive}/>
    </div>
}

export default Header;