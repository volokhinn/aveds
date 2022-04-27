import React, {useState} from 'react';
import Modal from '../Modal/Modal';
import online from '../../assets/images/cards/online.svg';
import emergency from '../../assets/images/cards/emergency.svg';
import rack from '../../assets/images/cards/rack.svg';
import Card from '../Cards/Card';
import {Link} from 'react-router-dom';

const Home = () => {
    const [modalActive, setModalActive] = useState(false);
    return <div className="container">
        <div className="row">
            <span className="content__title col-md-8 col-sm-12">Место для получения медицинской помощи</span>
        </div>
        <div className="row">
            <button className="content__login" onClick={() => setModalActive(true)}>Войти</button>
            <Link to="/contacts" className="content__contacts">Контакты</Link>
        </div>
        <div className="row">
                <Card logo={online} title="Лечение рака" text="Рыба текст" />
                <Card logo={emergency} title="Экстренный случай" text="Рыба текст" />
                <Card logo={rack} title="Лечение рака" text="Рыба текст" />
        </div>
        <Modal active={modalActive} setActive={setModalActive}/>
        </div>
}
export default Home;