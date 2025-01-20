import React from 'react';
import Button from '@common/CityPage/Button';
import useStep from '@hooks/useStep';

function TripCompanion({ stepStatus, setStepStatus }) {
  const { handleClick, getCurrentId } = useStep(setStepStatus);
  return (
    <>
      <div className="container_textbox">
        <img src="/images/with.png" style={{ width: '50px' }} alt="" />
        <h2 className="title">누구와 함께 떠나나요?</h2>
        <span className="text">다중 선택이 가능해요.</span>
      </div>
      <div>
        <Button text="혼자" id="alone" handleClick={handleClick} active={getCurrentId(stepStatus) === 'alone'} />
        <Button text="친구와와" id="friend" handleClick={handleClick} active={getCurrentId(stepStatus) === 'friend'} />
        <Button
          text="연인or배우자와"
          id="couple"
          handleClick={handleClick}
          active={getCurrentId(stepStatus) === 'couple'}
        />
        <Button text="아이와" id="child" handleClick={handleClick} active={getCurrentId(stepStatus) === 'child'} />
        <Button
          text="부모님과"
          id="parents"
          handleClick={handleClick}
          active={getCurrentId(stepStatus) === 'parents'}
        />
        <Button text="기타" id="other" handleClick={handleClick} active={getCurrentId(stepStatus) === 'other'} />
      </div>
    </>
  );
}

export default TripCompanion;
