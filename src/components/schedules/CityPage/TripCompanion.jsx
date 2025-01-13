import React from "react";
import Button from "@common/CityPage/Button"
import useStep from "@hooks/useStep"

function TripCompanion({ setStepStatus }) {
	const { handleClick } = useStep(setStepStatus)
	return (
		<>
			<div className="container_textbox">
				<img src="/images/with.png" style={{ width: "50px" }} alt="" />
				<h2 className="title">누구와 함께 떠나나요?</h2>
				<span className="text">다중 선택이 가능해요.</span>
			</div>
			<div>
				<Button text="혼자" id="alone" handleClick={handleClick} />
				<Button text="친구와와" id="friend" handleClick={handleClick} />
				<Button text="연인or배우자와" id="couple" handleClick={handleClick} />
				<Button text="아이와" id="child" handleClick={handleClick} />
				<Button text="부모님과" id="parents" handleClick={handleClick} />
				<Button text="기타" id="other" handleClick={handleClick} />
			</div>
		</>
	);
}

export default TripCompanion;
