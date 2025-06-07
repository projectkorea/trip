import { useNavigate } from 'react-router';
import Header from '@common/Header';
import {
  MainContainer,
  SectionContainer,
  TextContentArea,
  SubTitle,
  MainTitle,
  DescriptionArea,
  DescriptionTitle,
  DescriptionContent,
  ContentTextArea,
  ContentTitle,
  ContentSubText,
  ImageContainer,
  CTAButton,
} from '@/components/schedule-page';

function SchedulePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/schedule/cityplan');
  }

  return (
    <>
      <Header isBlack />
      <MainContainer>
        <SectionContainer>
          <TextContentArea>
            <SubTitle>일정 생성 관리</SubTitle>
            <MainTitle>
              나만의 여행 일정,
              <br />
              AI로 간편해졌어요
            </MainTitle>
            <DescriptionArea>
              <DescriptionTitle>어떤 취향이든, 다 맞춰주니까</DescriptionTitle>
              <DescriptionContent>
                어떤 여행 취향이든 간단히 알려만 주세요.
                <br />
                AI는 여러분의 취향에 꼭 맞는 일정을 추천해 드립니다.
              </DescriptionContent>
            </DescriptionArea>
          </TextContentArea>
        </SectionContainer>

        <SectionContainer>
          <ContentTextArea>
            <ContentTitle>
              취향에 맞게 일정을
              <br />
              추천해 드려요!
            </ContentTitle>
            <ContentSubText>순식간에 여행 준비 끝</ContentSubText>
          </ContentTextArea>

          <ImageContainer>
            <img
              src="images/schedules/main-visual.png"
              alt="스케줄 관리 이미지"
              className="w-full h-auto object-contain"
            />
          </ImageContainer>
        </SectionContainer>

        <CTAButton onClick={handleClick}>AI 추천 일정보기</CTAButton>
      </MainContainer>
    </>
  );
}

export default SchedulePage;
