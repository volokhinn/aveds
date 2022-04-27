import React from 'react';
import validate from '../../validate.js'

const Modal = ({active, setActive, children}) => {
    return <div className={active ? "signIn active" : "signIn"} onClick={() => setActive(false)}>
        <div className="signIn__content" onClick={e => e.stopPropagation()}>
            <span className="signIn__title">Авторизация</span>
            <div className="signIn__inputs">
                <span className="input__title">Введите логин</span>
                <input type="text" className="signIn__login" placeholder='Логин' />
                <span className="input__title">Введите пароль</span>
                <input type="password" className="signIn__pass" placeholder='Пароль'/>
            </div>
            <button className="signIn__button" onClick={() => validate()}>Войти</button>
            {children}
        </div>
    </div>
}

export default Modal;