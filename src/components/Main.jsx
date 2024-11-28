import { NavLink, useNavigate } from 'react-router'

function Main() {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate('/schedule')
  }

  return (
    <main>
      <section className="main-container">
        <div className="main-wrap">
          <div className="main_textbox">
            <p>계획부터 예약까지, 여행이 쉬워지는</p>
            <h2>
              나를 아는 여행 앱 <br />
              트리플
            </h2>
          </div>
          <img src="images/main.jpg" alt="main_img" />
        </div>
      </section>

      <section className="schedule-container">
        <article className="schedule-inner">
          <div className="schedule-textbox">
            <h3 className="subTitle">일정 생성 관리</h3>
            <h2 className="bigTitle">
              나만의 여행 일정,
              <br />
              AI로 간편해졌어요
            </h2>
          </div>

          <div className="schedule_content_img">
            <div className="bottom_text">
              <p>어떤 취향이든, 다 맞춰주니까</p>
              <h3 className="bottom_title">
                어떤 여행 취향이든 간단히 알려만 주세요.
                <br />
                AI는 여러분의 취향에 꼭 맞는 일정을 추천해 드립니다.
              </h3>
              <button
                type="button"
                className="schedule-button"
                onClick={handleOnClick}
              >
                AI 추천 일정보기
              </button>
              {/* <NavLink to="/schedule" className="schedule-button">
                AI 추천 일정보기
              </NavLink> */}
            </div>

            <article className="schedule_imgbox">
              <div className="schedule_img">
                <img src="images/trip/img01.png" alt="travel_itinerary_img" />
              </div>
            </article>
          </div>
        </article>
      </section>

      <section className="trip-container">
        <article className="trip-inner">
          <div className="trip-textbox">
            <h3 className="subTitle">여행 정보</h3>
            <h2 className="bigTitle">즉시 투어 가이드</h2>
          </div>
          <div className="trip_content_img">
            <div className="trip_sub_text">
              <h3 className="bottom_title">
                현지의 매력을 새롭고
                <br />더 깊이있게 경험해 보세요.
              </h3>
              <button type="button" className="tour-button">
                현 위치 가이드 보기
              </button>
            </div>

            <article className="trip_imgbox">
              <div className="trip_img">
                <img src="images/trip/img02.png" alt="StreetView_img" />
              </div>
            </article>
          </div>
        </article>
      </section>
      <div className="popup-container">
        <div className="popup-content">
          <p className="popup-message">위치정보 이용권한 설정이 필요합니다.</p>
          <section className="popup-description">
            <p>내 근처 정보를 추천받고 싶다면</p>
            <span className="popup-notice">
              사용 중인 브라우저의 위치 권한을 허용해주세요.
            </span>
          </section>
          <button className="popup-close">
            <span className="close-text">닫기</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Main
