import React from "react";
// import Style from "../../../styles/TravelStyle.module.css";
function TravelStyle() {
	return (
		<>
			<div className="container_textbox">
				<img src="/images/bag.png" style={{ width: "50px" }} alt="" />
				<h2 className="title">내가 선호하는 여행 스타일은?</h2>
				<span className="text">다중 선택이 가능해요.</span>
			</div>
			<div className="trip">
				<div className="trip_style">
					<div className="checkbox_item">
						<input type="checkbox" name="activity" id="activity" />
						<label htmlFor="activity" className="citytext">
							체험액티비티
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="hotplace" id="hotplace" />
						<label htmlFor="hotplace" className="citytext">
							SNS 핫플레이스
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="nature" id="nature" />
						<label htmlFor="nature" className="citytext">
							자연과 함께
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="tourist" id="tourist" />
						<label htmlFor="tourist" className="citytext">
							유명 관광지는 필수
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="healing" id="healing" />
						<label htmlFor="healing" className="citytext">
							여유롭게 힐링
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="culture" id="culture" />
						<label htmlFor="culture" className="citytext">
							문화예술역사
						</label>
					</div>
					<div className="checkbox_item">
						<input
							type="checkbox"
							name="travel_destination"
							id="travel_destination"
						/>
						<label
							htmlFor="travel_destination"
							className="citytext"
						>
							여행지 느낌 물씬
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="shopping" id="shopping" />
						<label htmlFor="shopping" className="citytext">
							쇼핑은 열정적으로
						</label>
					</div>
					<div className="checkbox_item">
						<input type="checkbox" name="food" id="food" />
						<label htmlFor="food" className="citytext">
							관광보다 먹방
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default TravelStyle;
