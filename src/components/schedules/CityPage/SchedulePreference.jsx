import React from "react";
// import Style from "../../../styles/SchedulePreference.module.css";

function SchedulePreference() {
	return (
		<>
			<div className="container_textbox">
				<img
					src="/images/schedule.png"
					style={{ width: "50px" }}
					alt=""
				/>
				<h2 className="title">내가 선호하는 여행 일정은?</h2>
				<span className="text">
					선택해주신 스타일로 일정을 만들어 드려요.
				</span>
			</div>
			<div className="schedule_preference">
				<div className="schedule_option">
					<div className="checkbox_item">
						<input
							type="checkbox"
							name="packed_schedule"
							id="packed_schedule"
						/>
						<label htmlFor="packed_schedule" className="citytext">
							뺴곡한 일정 선호
						</label>
					</div>
					<div className="checkbox_item">
						<input
							type="checkbox"
							name="spacious_schedule"
							id="spacious_schedule"
						/>
						<label htmlFor="spacious_schedule" className="citytext">
							널널한 일정 선호
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default SchedulePreference;
