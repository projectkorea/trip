import styled from "styled-components";

//city-next-button
export const CityNextBtn = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	display: block;
	font-size: 14px;
	font-family: "Nanum Gothic", sans-serif;
	font-weight: 400;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 5px 0 30px;
	background-color: rgb(255, 255, 255);
`;

//.city-next-button button
export const Button = styled.div`
	width: 100%;
	height: 40px;
	border: none;
	border-radius: 10px;
	color: #181818;
	text-align: center;
	cursor: pointer;
`;

//.city-next-button.active button
export const NextBtnActive = styled.button`
	background-color: var(--color_button_box);
	color: #e7e7e7;
	font-family: "Nanum Gothic", sans-serif;
	font-weight: 700;
`;

const CityNextBtnStyle = {
	CityNextBtn,
	Button,
	NextBtnActive,
};

export default CityNextBtnStyle;
