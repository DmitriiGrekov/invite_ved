import React from 'react'
import './style.scss';
import DotaAcceptModal from '../../components/DotaAcceptModal/DotaAcceptModal';
import GuestForm from '../../components/GuestForm/GuestForm';


function Accept() {
    return (
        <div className='accept'>
            <div className='accept-content'>
                {/* <DotaAcceptModal /> */}
                <h1>Свадебное расписание</h1>

                <div className="wedding-schedule">
                    <div className="time">13:00
                        <div className="date">01.08.2025</div>
                    </div>

                    <div className="event">
                        <h3>Венчание</h3>
                        <p>Салават, ул. Мира, 1а</p>
                        <p>Приглашаем вас разделить вместе с нами такой трепетный момент!</p>
                    </div>

                    <div className="divider"></div>

                    <div className="time">15:00
                        <div className="date">01.08.2025</div>
                    </div>

                    <div className="event">
                        <h3>Банкет</h3>
                        <p>La cafe. Салават, Бульвар Космонавтов, 14</p>
                        <p>Именно здесь пройдет торжественная часть и банкет!</p>
                    </div>
                </div>
                <div className='accept-description'>
                    <h1>ПОДТВЕРЖДЕНИЕ</h1>
                    <p1>Пожалуйста подтвердите свое присутствие до 01.07.2025</p1>
                    <h2>Ждем вас!</h2>
                    <p1>Будем благодарны, если при выборе нарядов на наше торжество вы придержитесь следующей палитры</p1>
                    <div className='ledy-costums'>
                        <h2>Леди</h2>

                        <div className="circles-container">
                            <div className="circle pink"></div>
                            <div className="circle purple"></div>
                            <div className="circle blue"></div>
                            <div className="circle green"></div>
                            <div className="circle brown"></div>
                        </div>
                        {/* <div className="circle red"></div>
                    <div className="circle orange"></div>
                    <div className="circle yellow"></div>
                    <div className="circle green"></div>
                    <div className="circle blue"></div>
                    <div className="circle blue2"></div>
                    <div className="circle purple"></div> */}
                    </div>
                    <div className='men-costums'>
                        <h2>Мужчины</h2>
                        <div className="circles-container">
                            <div className="circle black"></div>
                            <div className="circle grey"></div>
                            <div className="circle white"></div>
                        </div>
                        {/* <div className="circle red"></div>
                    <div className="circle orange"></div>
                    <div className="circle yellow"></div>
                    <div className="circle green"></div>
                    <div className="circle blue"></div>
                    <div className="circle blue2"></div>
                    <div className="circle purple"></div> */}
                    </div>
                </div>
                <GuestForm />

            </div>
        </div>
    )
}

export default Accept
