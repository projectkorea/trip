import styled from "styled-components";

//.container_textbox
export const ContainerTextbox = styled.div`
	font-family: "Nanum Gothic", sans-serif;
	text-align: center;
	margin-top: 70px;
`;

// .title
export const Title = styled.h1`
	font-size: 30px;
	line-height: 36px;
	font-weight: 700;
	color: #232323;
	margin-top: 15px;
	padding-bottom: 10px;
`;

// .text
export const Text = styled.p`
	font-size: 15px;
	font-weight: 400;
	color: #787878;
`;

// .korea
export const Korea = styled.div`
	position: relative;
	display: flex;
	margin: 40px auto;
	justify-content: center;
	align-items: center;
`;

// .korea p
export const KoreaText = styled.p`
	position: absolute;
	top: 10px;
	left: 20px;
	font-family: "Nanum Gothic", sans-serif;
	font-size: 14px;
	font-weight: 700;
	color: #232323;
`;

// .koreaArea
export const KoreaArea = styled.div`
	justify-content: center;
	max-width: 800px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	padding-top: 35px;
`;

// .koreaArea .area
export const KoreaAreaArea = styled.div`
	max-width: 800px;
	align-items: center;
	display: flex;
	flex-wrap: nowrap;
	box-sizing: border-box;
`;

// .korea .area input
export const AreaInput = styled.input`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	visibility: hidden;
`;

//.korea label
export const KoreaLabel = styled.label`
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
	font-family: "Nanum Gothic", sans-serif;
	font-weight: 400;
	color: #181818;
`;

//.korea .citytext.active
export const CityTextActive = styled.div`
	font-family: "Nanum Gothic", sans-serif;
	font-weight: 700;
	background-color: #e7e7e7;
	border: 2px solid #368fff;
	color: var(--color_button_box);
`;

const DomesticStyle = {
	ContainerTextbox,
	Title,
	Text,
	Korea,
	KoreaText,
	KoreaArea,
	KoreaAreaArea,
	AreaInput,
	KoreaLabel,
	CityTextActive,
};

export default DomesticStyle;
