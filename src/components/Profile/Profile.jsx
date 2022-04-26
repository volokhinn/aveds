import React from 'react';

const Profile = () => {
    return <div className="container">
        <div className="row">
            <span className="profile__title">Привет, Сергей</span>
        </div>
        <div className="row">
            <button className="profile__exit">Выйти из аккаунта</button>
            <button className="profile__contacts">Перейти в контакты</button>
        </div>
        </div>
}
export default Profile;