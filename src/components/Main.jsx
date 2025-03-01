import { NavLink, useNavigate } from 'react-router';
import ScheduleButton from '@common/ScheduleButton';

function Main() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/schedule');
  };

  return (
    <main>
      <section className="main-container">
        <div className="main-wrap home">
          <div className="schedule-btn-container">
            <ScheduleButton text="AI 추천 일정보기" onClick={handleOnClick} to="/schedule" />
            <ScheduleButton text="즉시 투어 가이드" onClick={handleOnClick} to="/components/TripDetails" />
          </div>
        </div>
      </section>

      <div className="popup-container">
        <div className="popup-content">
          <p className="popup-message">위치정보 이용권한 설정이 필요합니다.</p>
          <section className="popup-description">
            <p>내 근처 정보를 추천받고 싶다면</p>
            <span className="popup-notice">사용 중인 브라우저의 위치 권한을 허용해주세요.</span>
          </section>
          <button className="popup-close">
            <span className="close-text">닫기</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
