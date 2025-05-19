import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@styles/ScheduleButton.css';

function ScheduleButton({ text = 'text', to }) {
  const navigate = useNavigate(); // navigate 사용

  const handleOnClick = () => {
    navigate(to); // 클릭 시 to로 이동
  };

  return (
    <button type="button" className="schedule-btn" onClick={handleOnClick}>
      {text}
    </button>
  );
}

export default ScheduleButton;
