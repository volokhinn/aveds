import React from 'react';
import online from '../../assets/images/cards/online.svg';
import emergency from '../../assets/images/cards/emergency.svg';
import rack from '../../assets/images/cards/rack.svg';

const Content = () => {
    return <div className="container">
        <div className="row">
            <span className="content__title col-md-8 col-sm-1">Место для получения медицинской помощи</span>
        </div>
        <div className="row">
            <button className="content__login">Войти</button>
            <button className="content__contacts">Контакты</button>
        </div>
        <div className="row">
                <div className="content__card col-md-4">
                    <div className="card__head">
                        <img src={online} alt="Online logo" className="card__logo" />
                    </div>
                    <span className="card__title">Онлайн-прием</span>
                    <div className="card__line"></div>
                    <span className="card__text">Рыба текст</span>
                </div>
                <div className="content__card col-md-4">
                <div className="card__head">
                        <img src={emergency} alt="Emergency logo" className="card__logo" />
                    </div>
                    <span className="card__title">Экстренный случай</span>
                    <div className="card__line"></div>
                    <span className="card__text">Рыба текст</span>
                </div>
                <div className="content__card col-md-4">
                <div className="card__head">
                        <img src={rack} alt="Rack logo" className="card__logo" />
                    </div>
                    <span className="card__title">Лечение рака</span>
                    <div className="card__line"></div>
                    <span className="card__text">Рыба текст</span>
                </div>
        </div>
</div>
}
export default Content;