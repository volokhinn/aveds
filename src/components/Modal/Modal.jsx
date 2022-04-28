import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({active, setActive, children}) => {
    const nav = useNavigate();
    let login = '';
    let password = '';

    const validate = async () => {
        let res = await fetch('./users.json');
        res = await res.json().then((data) => data);
        let currentUser = null;
        let profileName = '';
        if ((currentUser = res.find((user) => (user.login === login) && (user.password = password)))) {
            profileName = currentUser.name;
            localStorage.setItem("isAuth", "true");
            setActive(false);
            nav('/profile', {profileName});
            window.location.reload();
        }
        else {
            alert("Неверный пароль или имя пользователя!");
        }
        return profileName;
        
    }
    
    return <div className={active ? "signIn active" : "signIn"} onClick={() => setActive(false)}>
        <div className="signIn__content" onClick={e => e.stopPropagation()}>
            <span className="signIn__title">Авторизация</span>
            <div className="signIn__inputs">
                <span className="input__title">Введите логин</span>
                <input type="text" className="signIn__login" placeholder='Логин' onInput={(event) => login = event.target.value} />
                <span className="input__title">Введите пароль</span>
                <input type="password" className="signIn__pass" placeholder='Пароль' onInput={(event) => password = event.target.value}/>
            </div>
            <button className="signIn__button" onClick={() => validate()}>Войти</button>
            {children}
        </div>
    </div>
}

export default Modal;