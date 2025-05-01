import React, { useState, useEffect } from 'react';
import './style.scss';


const August2025Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date('2025-08-01T00:00:00');
      const difference = targetDate - now;
  
      if (difference > 0) {
        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 7);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
  
        setTimeLeft({ weeks, days, hours, minutes, seconds });
      }
    };
  
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.weeks).padStart(2, '0')}</div>
          <div className="countdown-label">недель</div>
        </div>

        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="countdown-label">дней</div>
        </div>

        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="countdown-label">часов</div>
        </div>

        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="countdown-label">минут</div>
        </div>

        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="countdown-label">секунд</div>
        </div>
      </div>
    </div>
  );
};

export default August2025Countdown;