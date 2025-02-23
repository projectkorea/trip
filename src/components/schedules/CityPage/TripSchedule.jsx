import Style from "@styles/TripSchedule.css";
import Button from "@common/CityPage/Button";
import usePlan from "@store/usePlan";

function TripSchedule() {
	const { handleSingleClick, isSingleSelected } = usePlan();
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
					<Button
						id="packed_schedule"
						text="빼곡한 일정 선호"
						handleClick={handleSingleClick}
						active={isSingleSelected("packed_schedule")}
					/>
					<Button
						id="spacious_schedule"
						text="널널한 일정 선호"
						handleClick={handleSingleClick}
						active={isSingleSelected("spacious_schedule")}
					/>
				</div>
			</div>
		</>
	);
}

export default TripSchedule;
