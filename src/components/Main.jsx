function Main() {
  return (
    <main>
      <section class="main-container">
        <div class="main-wrap">
          <div class="main_textbox">
            <p>계획부터 예약까지, 여행이 쉬워지는</p>
            <h2>
              나를 아는 여행 앱 <br />
              트리플
            </h2>
          </div>
          <img src="images/main.jpg" alt="main_img" />
        </div>
      </section>

      <section class="schedule-container">
        <article class="schedule-inner">
          <div class="schedule-textbox">
            <h3 class="subTitle">일정 생성 관리</h3>
            <h2 class="bigTitle">
              나만의 여행 일정,
              <br />
              AI로 간편해졌어요
            </h2>
          </div>

          <div class="schedule_content_img">
            <div class="bottom_text">
              <p>어떤 취향이든, 다 맞춰주니까</p>
              <h3 class="bottom_title">
                어떤 여행 취향이든 간단히 알려만 주세요.
                <br />
                AI는 여러분의 취향에 꼭 맞는 일정을 추천해 드립니다.
              </h3>
              <button type="button" class="schedule-button">
                AI 추천 일정보기
              </button>
            </div>

            <article class="schedule_imgbox">
              <div class="schedule_img">
                <img src="images/trip/img01.png" alt="travel_itinerary_img" />
              </div>
            </article>
          </div>
        </article>
      </section>

      <section class="trip-container">
        <article class="trip-inner">
          <div class="trip-textbox">
            <h3 class="subTitle">여행 정보</h3>
            <h2 class="bigTitle">즉시 투어 가이드</h2>
          </div>
          <div class="trip_content_img">
            <div class="trip_sub_text">
              <h3 class="bottom_title">
                현지의 매력을 새롭고
                <br />더 깊이있게 경험해 보세요.
              </h3>
              <button type="button" class="tour-button">
                현 위치 가이드 보기
              </button>
            </div>

            <article class="trip_imgbox">
              <div class="trip_img">
                <img src="images/trip/img02.png" alt="StreetView_img" />
              </div>
            </article>
          </div>
        </article>
      </section>
      <div class="popup-container">
        <div class="popup-content">
          <p class="popup-message">위치정보 이용권한 설정이 필요합니다.</p>
          <section class="popup-description">
            <p>내 근처 정보를 추천받고 싶다면</p>
            <span class="popup-notice">
              사용 중인 브라우저의 위치 권한을 허용해주세요.
            </span>
          </section>
          <button class="popup-close">
            <span class="close-text">닫기</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Main
