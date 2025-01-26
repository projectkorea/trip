import React from "react";
// import Style from "../../../styles/SchedulePreference.module.css";
import Button from "@common/CityPage/Button"
import useStep from "@hooks/useStep"


function SchedulePreference({ stepStatus, setStepStatus }) {
	const { handleClick, isSingleSelected } = useStep(setStepStatus);
	return (
    <>
      <div className="container_textbox">
        <img src="/images/schedule.png" style={{ width: '50px' }} alt="" />
        <h2 className="title">내가 선호하는 여행 일정은?</h2>
        <span className="text">선택해주신 스타일로 일정을 만들어 드려요.</span>
      </div>
      <div className="schedule_preference">
        <div className="schedule_option">
          <Button
            text="빼곡한 일정 선호"
            id="packed_schedule"
            handleClick={handleClick}
            active={isSingleSelected(stepStatus, 'packed_schedule')}
          />
          <Button
            text="널널한 일정 선호"
            id="spacious_schedule"
            handleClick={handleClick}
            active={isSingleSelected(stepStatus, 'spacious_schedule')}
          />
        </div>
      </div>
    </>
  );
}

export default SchedulePreference;
