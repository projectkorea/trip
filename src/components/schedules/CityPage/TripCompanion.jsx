import React from 'react';
import Button from '@common/CityPage/Button';
import usePlan from "@store/usePlan"

function TripCompanion() {
  const { handleMultiClick, isMultiSelected } = usePlan()
  return (
    <>
      <div className="container_textbox">
        <img src="/images/with.png" style={{ width: '50px' }} alt="" />
        <h2 className="title">누구와 함께 떠나나요?</h2>
        <span className="text">다중 선택이 가능해요.</span>
      </div>
      <div>
        <Button text="혼자" id="alone" handleClick={handleMultiClick} active={isMultiSelected('alone')} />
        <Button text="친구와" id="friend" handleClick={handleMultiClick} active={isMultiSelected('friend')} />
        <Button
          text="연인or배우자와"
          id="couple"
          handleClick={handleMultiClick}
          active={isMultiSelected('couple')}
        />
        <Button text="아이와" id="child" handleClick={handleMultiClick} active={isMultiSelected('child')} />
        <Button
          text="부모님과"
          id="parents"
          handleClick={handleMultiClick}
          active={isMultiSelected('parents')}
        />
        <Button text="기타" id="other" handleClick={handleMultiClick} active={isMultiSelected('other')} />
      </div>
    </>
  );
}

export default TripCompanion;
