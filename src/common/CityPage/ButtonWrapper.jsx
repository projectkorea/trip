import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px;
`;

function ButtonWrapper({ children, direction = 'row' }) {
  return <Wrapper direction={direction}>{children}</Wrapper>;
}

export default ButtonWrapper;
