import React from "react";
// import Style from "../../../styles/TripCompanion.module.css";
function TripCompanion() {
	return (
		<>
			<div className="container_textbox">
				<img src="/images/with.png" style={{ width: "50px" }} alt="" />
				<h2 className="title">누구와 함께 떠나나요?</h2>
				<span className="text">다중 선택이 가능해요.</span>
			</div>
			<div className="trip">
				<div className="trip_together">
					<div className="checkbox_item">
						<input type="checkbox" name="alone" id="alone" />
						<label htmlFor="alone" className="citytext">
							혼자
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="friend" id="friend" />
						<label htmlFor="friend" className="citytext">
							친구와
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="couple" id="couple" />
						<label htmlFor="couple" className="citytext">
							연인or배우자와
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="child" id="child" />
						<label htmlFor="child" className="citytext">
							아이와
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="parents" id="parents" />
						<label htmlFor="parents" className="citytext">
							부모님과
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="other" id="other" />
						<label htmlFor="other" className="citytext">
							기타
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default TripCompanion;
