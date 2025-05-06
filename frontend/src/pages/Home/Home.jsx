import React, { useContext } from 'react';
import './style.scss';
import August2025Countdown from '../../components/DateTimer/DateTimer';


const weddingDate = new Date('2025-01-01T00:00:00');

const Home = () => {


    return (
        <div className='home' id='home'>
            <div className="content-home ">
                <div className="contentPhoto ">
                    <div className='ourWed'>
                        <img className='ourWedPhoto' src="/img/ourWed.png" alt="ourWed" />
                    </div>
                    <div className='ourWed'>
                        <h1 className='ourWedName'>Кирилл & <br /> Валерия</h1>
                    </div>
                    <img className='mainPhoto' src="/img/home3.jpg" alt="home3" />
                </div>
                <div className="description">
                    <h2>1 АВГУСТА 2025</h2>
                    <p1>БУДЕМ СЧАСТЛИВЫ РАЗДЕЛИТЬ С ВАМИ <br />НАШ САМЫЙ СЧАСТЛИВЫЙ ДЕНЬ</p1>
                    <August2025Countdown />
                </div>
            </div>

        </div>
    );
};

export default Home;