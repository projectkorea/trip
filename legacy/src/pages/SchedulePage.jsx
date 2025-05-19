import { useNavigate } from 'react-router';
import Header from '@common/Header';
import {
  MainContainer,
  SubContainer,
  SubTitle,
  MainTitle,
  BottomText,
  BottomDescription,
  BottomTitle,
  ContainerTextbox,
  ScheduleImage,
  Title,
  Text,
  Button,
} from './SchedulePageStyle';

function SchedulePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/schedule/cityplan');
  }
  return (
    <>
      <Header isBlack />
      <MainContainer>
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
    </>
  );
}

export default SchedulePage;
