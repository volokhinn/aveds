import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const Profile = () => {
    const nav = useNavigate();
    const {profileName} = useLocation();
    console.log(profileName);
    const exit = async () => {
        await localStorage.setItem("isAuth", "false");
        nav('/');
        window.location.reload()
    }
    return <div className="container">
        <div className="row">
            <span className="profile__title">Привет, {profileName} </span>
        </div>
        <div className="row">
            <button className="profile__exit" onClick={() => exit()}>Выйти из аккаунта</button>
            <Link className="profile__contacts" to="/contacts">Перейти в контакты</Link>
        </div>
        </div>
}
export default Profile;