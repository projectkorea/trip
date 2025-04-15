import { useNavigate } from 'react-router';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  position: relative;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
    padding-top: 6rem;
    height: auto;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 1100px) {
    margin-top: 40px;
    text-align: center;
  }
`;

const SubTitle = styled.h3`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 18px;
  color: #3b90f9;
  font-weight: bold;
  animation: FadeInTitle 1s ease 0.75s forwards;
`;

const MainTitle = styled.h2`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 45px;
  line-height: 60px;
  margin-top: 20px;
  animation: FadeInTitle 1s ease 0.75s forwards;

  @media (max-width: 1100px) {
    font-size: 32px;
    line-height: 45px;
    text-align: center;
  }
`;

const BottomText = styled.div`
  padding-top: 180px;
  padding-left: 50px;
  margin-bottom: 300px;
  animation: FadeInSub 1.3s ease 0.95s forwards;

  @media (max-width: 1100px) {
    padding-top: 60px;
    padding-left: 0;
    margin-bottom: 100px;
    text-align: center;
  }
`;

const BottomDescription = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: #474747;
  margin-bottom: 25px;
  letter-spacing: -1px;

  @media (max-width: 1100px) {
    font-size: 18px;
  }
`;

const BottomTitle = styled.h3`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  word-break: keep-all;
  color: #787878;
  margin-bottom: 35px;

  @media (max-width: 1100px) {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 10px;
  }
`;

const Logo = styled.h1`
  position: absolute;
  top: 20px;
  left: 170px;
  font-size: 2rem;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  color: #000;
  text-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media (max-width: 1100px) {
    left: 20px;
    font-size: 1.5rem;
  }
`;

const ContainerTextbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.2;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 1100px) {
    font-size: 1.4rem;
  }
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #a2a1a1;
`;

const ScheduleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;

    @media (max-width: 1100px) {
      width: 80%;
    }
  }
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

  @media (max-width: 1100px) {
    width: 160px;
    height: 35px;
    position: static;
    margin: 2rem auto 1rem;
    font-size: 0.9rem;
  }
`;

function Schedule() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  function handleClick() {
    navigate('/schedule/citypage');
  }
  return (
    <MainContainer>
      <Logo onClick={handleOnClick}>TRIPLIBERTY</Logo>

      <SubContainer>
        <div className="schedule-textbox">
          <SubTitle>일정 생성 관리</SubTitle>
          <MainTitle>
            나만의 여행 일정,
            <br />
            AI로 간편해졌어요
          </MainTitle>
        </div>

        <div className="schedule_content_img">
          <BottomText>
            <BottomDescription>어떤 취향이든, 다 맞춰주니까</BottomDescription>
            <BottomTitle>
              어떤 여행 취향이든 간단히 알려만 주세요.
              <br />
              AI는 여러분의 취향에 꼭 맞는 일정을 추천해 드립니다.
            </BottomTitle>
          </BottomText>
        </div>
      </SubContainer>

      <SubContainer>
        <ContainerTextbox>
          <Title>
            취향에 맞게 일정을
            <br />
            추천해 드려요!
          </Title>
          <div className="text">
            <Text>순식간에 여행 준비 끝</Text>
          </div>
        </ContainerTextbox>

        <ScheduleImage>
          <img src="images/schedules/main-visual.png" alt="" />
        </ScheduleImage>
      </SubContainer>

      <Button onClick={handleClick}>AI 추천 일정보기</Button>
    </MainContainer>
  );
}

export default Schedule;
