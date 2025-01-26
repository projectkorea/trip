import React from "react";
// import Style from "../../../styles/TripDuration.module.css";
import Button from "@common/CityPage/Button"
import useStep from "@hooks/useStep.js";

function TripDuration({ stepStatus, setStepStatus }) {
	const { handleClick, isSingleSelected } = useStep(setStepStatus);

  return (
    <>
      <div className="container_textbox">
        <img src="/images/calendar.png" style={{ width: '50px' }} alt="" />
        <h2 className="title">여행기간은?</h2>
        <span className="text">원하는 기간을 선택해 주세요.</span>
      </div>
      <div className="trip">
        <div className="trip_duration">
          <Button
            text="당일치기"
            id="daytrip"
            handleClick={handleClick}
            active={isSingleSelected(stepStatus, 'daytrip')}
          />
          <Button
            text="1박2일"
            id="overnight_trip"
            handleClick={handleClick}
            active={isSingleSelected(stepStatus, 'overnight_trip')}
          />
          <Button
            text="2박3일"
            id="2night_3day"
            handleClick={handleClick}
            active={isSingleSelected(stepStatus, '2night_3day')}
          />
          <Button
            text="3박4일"
            id="3night_4day"
            handleClick={handleClick}
            active={isSingleSelected(stepStatus, '3night_4day')}
          />
          <Button
            text="4박5일"
            id="4night_5day"
            handleClick={handleClick}
            active={isSingleSelected(stepStatus, '4night_5day')}
          />
          <Button
            text="5박6일"
            id="5night_6day"
            handleClick={handleClick}
            active={isSingleSelected(stepStatus, '5night_6day')}
          />
        </div>
      </div>
    </>
  );
}

export default TripDuration;
