import { useNavigate } from 'react-router'

function Schedule() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/schedule/citypage')
  }
  return (
    <main>
      <section class="main-container">
        <div class="header_inner">
          <h1 class="sub_logo">
            <a href="#">
              <img src="images/schedules/logo.png" alt="" />
            </a>
          </h1>
        </div>
        <div class="main-wrap">
          <div class="container_textbox">
            <div class="title">
              취향에 맞게 일정을
              <br />
              추천해 드려요!
            </div>
            <div class="text">순식간에 여행 준비 끝</div>
          </div>

          <div class="main-visual">
            <img src="images/schedules/main-visual.png" alt="" />
          </div>

          <div class="next-button">
            <button onClick={handleClick} type="button">
              바로 추천받기
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Schedule
