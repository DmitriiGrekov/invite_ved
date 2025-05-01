import React, { useState, useEffect } from 'react';
import './style.scss';

export default function DotaAcceptModal() {
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dota-modal">
      <div className="dota-modal-title">ВАША ИГРА ГОТОВА</div>
      <div className="dota-timer">{timeLeft}</div>
      <button className="dota-accept-button">
        <span className="dota-button-icon">✓</span>
        ПРИНЯТЬ ИГРУ
      </button>
    </div>
  );
}