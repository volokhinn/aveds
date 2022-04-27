import React from 'react';

const Modal = ({active, setActive, children}) => {
    return <div className={active ? "signIn active" : "signIn"} onClick={() => setActive(false)}>
        <div className="signIn__content" onClick={e => e.stopPropagation()}>
            <span className="signIn__title">Вход</span>
            <div className="signIn__inputs">
                <input type="text" className="signIn__login" placeholder='Введите логин' />
                <input type="password" className="signIn__pass" placeholder='Введите пароль'/>
            </div>
            <button className="signIn__button">Войти</button>
            {children}
        </div>
    </div>
}

export default Modal;