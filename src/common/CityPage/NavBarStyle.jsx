import styled from 'styled-components';

//.nav_bar
export const NavBar = styled.div`
  width: 800px;
  margin: 0 auto;
`;

// .nav_bar .nav_number
export const NavBarNumber = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 14px;
  font-weight: 700;
  position: relative;
  top: 10px;
  left: 0;
  margin: 0 auto;
`;

const NavBarStyle = {
  NavBar,
  NavBarNumber,
};
export default NavBarStyle;
