import styled from "styled-components";

const Label = styled.label`
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

function AreaButton({ text, id }) {
	return (
		<div className="area">
			<input type="checkbox" name={id} id={id} />
			<Label htmlFor={id} className="citytext">
				{text}
			</Label>
		</div>
	);
}

export default AreaButton;
