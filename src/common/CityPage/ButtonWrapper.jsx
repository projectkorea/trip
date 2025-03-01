import styled from 'styled-components';

const ContainerTextbox = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  text-align: center;
  margin-top: 70px;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  color: #232323;
  margin-top: 15px;
  padding-bottom: 10px;
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #787878;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 800px;
  margin: 50px auto 0;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

function ButtonWrapper({ children, direction = 'row' }) {
  return <Wrapper direction={direction}>{children}</Wrapper>;
}

export { ContainerTextbox, Title, Text, Wrapper, Image };
export default ButtonWrapper;
