import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const HeaderInner = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const Logo = styled.h1`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2rem;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
  text-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  cursor: pointer;

  &.black {
    filter: brightness(0);
  }
`;

function Header({ isBlack = false }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <StyledHeader>
      <HeaderInner>
        <Logo onClick={handleClick} className={isBlack ? 'black' : ''}>
          <div>TRIPLIBERTY</div>
        </Logo>
      </HeaderInner>
    </StyledHeader>
  );
}

export default Header;
