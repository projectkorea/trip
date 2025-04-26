import styled from 'styled-components';

// .foreign
export const Foreign = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  justify-content: center;
`;

// .foreign_area .country
export const Country = styled.div`
  max-width: 800px;
  width: 100%;
  left: 20px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #232323;
`;

// .foreign .area input
export const AreaInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
`;

// .foreign label
export const ForeignLabel = styled.label`
  display: flex;
  width: 256px;
  height: 50px;
  cursor: pointer;
  background-color: #f5f4f4;
  border-radius: 25px;
  border: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  color: #181818;
`;

// .foreign .citytext.active
export const CityTextActive = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  background-color: #e7e7e7;
  border: 2px solid #368fff;
  color: var(--color_button_box);
`;

const ForeignStyle = {
  Text,
  Foreign,
  Country,
  AreaInput,
  ForeignLabel,
  CityTextActive,
};

export default ForeignStyle;
