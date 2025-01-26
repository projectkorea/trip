import Button from '@common/CityPage/Button';
import useStep from '@hooks/useStep';

function TripSelection({ stepStatus, setStepStatus }) {
  const { handleClick, isSingleSelected } = useStep(setStepStatus);

  return (
    <>
      <div className="container_textbox">
        <img src="/images/earth.png" style={{ width: '50px' }} alt="" />
        <h2 className="title">떠나고 싶은 도시는?</h2>
        <span className="text">1곳을 선택해주세요.</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button text="국내" id="domestic"
          active={isSingleSelected(stepStatus, 'domestic')} 
          handleClick={handleClick} />
        <Button text="해외" id="foreignCountry" 
          active={isSingleSelected(stepStatus, 'foreignCountry')}
          handleClick={handleClick} />
      </div>
    </>
  );
}

export default TripSelection;
