import React from "react";
// import Style from "../../../styles/TripDuration.module.css";

function TripDuration() {
	return (
		<>
			<div className="container_textbox">
				<img
					src="/images/calendar.png"
					style={{ width: "50px" }}
					alt=""
				/>
				<h2 className="title">여행기간은?</h2>
				<span className="text">원하는 기간을 선택해 주세요.</span>
			</div>
			<div className="trip">
				<div className="trip_duration">
					<div className="checkbox_item">
						<input type="checkbox" name="daytrip" id="daytrip" />
						<label htmlFor="daytrip" className="citytext">
							당일치기
						</label>
					</div>
					<div className="checkbox_item">
						<input
							type="checkbox"
							name="overnight_trip"
							id="overnight_trip"
						/>
						<label htmlFor="overnight_trip" className="citytext">
							1박2일
						</label>
					</div>
					<div className="checkbox_item">
						<input
							type="checkbox"
							name="2night_3day"
							id="2night_3day"
						/>
						<label htmlFor="2night_3day" className="citytext">
							2박3일
						</label>
					</div>
					<div className="checkbox_item">
						<input
							type="checkbox"
							name="3night_4day"
							id="3night_4day"
						/>
						<label htmlFor="3night_4day" className="citytext">
							3박4일
						</label>
					</div>
					<div className="checkbox_item">
						<input
							type="checkbox"
							name="4night_5day"
							id="4night_5day"
						/>
						<label htmlFor="4night_5day" className="citytext">
							4박5일
						</label>
					</div>
					<div className="checkbox_item">
						<input
							type="checkbox"
							name="5night_6day"
							id="5night_6day"
						/>
						<label htmlFor="5night_6day" className="citytext">
							5박6일
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default TripDuration;
