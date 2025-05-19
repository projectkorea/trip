import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  animation: ${fadeInUp} 1s ease 0.75s forwards;
`;

const MainTitle = styled.h2`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  font-size: 45px;
  line-height: 60px;
  margin-top: 20px;
  animation: ${fadeInUp} 0.3s ease 0.4s forwards;

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
  animation: ${fadeInUp} 0.6s ease 0.4s forwards;

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

const ContainerTextbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  animation: ${fadeInUp} 0.9s ease 0.4s forwards;
`;

const ScheduleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 1.2s ease 0.4s forwards;

  img {
    max-width: 100%;
    height: auto;

    @media (max-width: 1100px) {
      width: 80%;
    }
  }
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

export {
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
};
