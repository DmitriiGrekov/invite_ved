import React, { useContext } from 'react';
import './style.scss';

const Invite = () => {


    return (
        <div className='invite' id='invite'>
            <div className="invite-content">
                <h2>Дорогой Гость!</h2>
                <p1>Мы рады сообщить Вам, что 01.08.2025 состоится самое главное торжество в нашей жизни - день нашей свадьбы! Приглашаем Вас разделить с нами радость этого незабываемого дня.</p1>
                <div className='invite-content-photo'>
                    <img className='photo-1' src="/img/invite1.jpg" alt="inviteJpg" />
                    <img className='photo-2' src="/img/home2.jpg" alt="inviteJpg" />
                </div>
                <h3>Там, где посеяна любовь, растёт радость</h3>
            </div>
        </div>
    );
};

export default Invite;