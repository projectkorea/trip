// import Style from "../../../styles/TravelStyle.module.css";
import Button from '@common/CityPage/Button';
import useStep from '@hooks/useStep';

function TravelStyle({ stepStatus, setStepStatus }) {
  const { handleMultiClick, getCurrentId } = useStep(setStepStatus);

  return (
    <>
      <div className="container_textbox">
        <img src="/images/bag.png" style={{ width: '50px' }} alt="" />
        <h2 className="title">내가 선호하는 여행 스타일은?</h2>
        <span className="text">다중 선택이 가능해요.</span>
      </div>
      <div className="trip">
        <div className="trip_style">
          <Button
            id="activity"
            text="체험액티비티"
            handleClick={handleMultiClick}
            active={getCurrentId(stepStatus) === 'activity'}
          />
          <Button
            id="hotplace"
            text="SNS 핫플레이스"
            handleClick={handleMultiClick}
            active={getCurrentId(stepStatus) === 'hotplace'}
          />
          <Button
            id="nature"
            text="자연과 함께"
            handleClick={handleMultiClick}
            active={getCurrentId(stepStatus) === 'nature'}
          />
          <Button
            id="shopping"
            text="쇼핑은 열정적으로"
            handleClick={handleMultiClick}
            active={getCurrentId(stepStatus) === 'shopping'}
          />
          <Button
            id="healing"
            text="여유롭게 힐링"
            handleClick={handleMultiClick}
            active={getCurrentId(stepStatus) === 'healing'}
          />
          <Button
            id="culture"
            text="문화예술역사"
            handleClick={handleMultiClick}
            active={getCurrentId(stepStatus) === 'culture'}
          />
          <Button
            id="tourist"
            text="여행지 느낌 물씬"
            handleClick={handleMultiClick}
            active={getCurrentId(stepStatus) === 'tourist'}
          />
          <Button
            id="food"
            text="관광보다 먹방"
            handleClick={handleMultiClick}
            active={getCurrentId(stepStatus) === 'food'}
          />
        </div>
      </div>
    </>
  );
}

export default TravelStyle;
