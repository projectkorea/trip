import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  position: absolute;
  z-index: 1000;
  background-color: transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3b90f9;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 20px;
  color: #666;
  font-size: 16px;
`;

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner />
      <LoadingText>AI가 여행 일정을 만들고 있어요...</LoadingText>
    </SpinnerContainer>
  );
}

export default LoadingSpinner;
