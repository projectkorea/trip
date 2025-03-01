import { useNavigate } from "react-router";
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 230px;
  height: 50px;
  background-color: var(--color_button_box);
  border-radius: 30px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 4rem;
`;

function Schedule() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/schedule/citypage');
  }
  return (
    <MainContainer>
      <SubContainer>
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
          </div>
        </div>
      </SubContainer>
      <SubContainer>
        <div className="header_inner">
          <h1 className="logo black" onClick={handleClick}>
            <a href="">TRIPLIBERTY</a>
          </h1>
        </div>
        <div className="main-wrap">
          <div className="container_textbox">
            <div className="title">
              취향에 맞게 일정을
              <br />
              추천해 드려요!
            </div>
            <div className="text">순식간에 여행 준비 끝</div>
          </div>

          <div className="main-visual">
            <img src="images/schedules/main-visual.png" alt="" />
          </div>
        </div>
      </SubContainer>
      <Button onClick={handleClick}>AI 추천 일정보기</Button>
    </MainContainer>
  );
}

export default Schedule;
