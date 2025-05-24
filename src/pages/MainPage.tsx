import { useNavigate } from 'react-router';
import ScheduleButton from '@common/ScheduleButton';
import styled from 'styled-components';
import type { ReactNode } from 'react';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(/images/main.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  width: 80%;
`;

function MainPage(): ReactNode {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/schedule');
  };

  return (
    <MainPageContainer>
      <Title>취향에 맞게 똑똑한 AI가 일정을 추천해 드려요!</Title>
      <ScheduleButton text="AI 추천 일정보기" onClick={handleOnClick} to="/schedule" />
    </MainPageContainer>
  );
}

export default MainPage;
