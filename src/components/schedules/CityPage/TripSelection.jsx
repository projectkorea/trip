import Button from '@common/CityPage/Button';
import usePlan from '@store/usePlan'

function TripSelection() {
  const { handleSingleClick, isSingleSelected } = usePlan();
  const key = {
    domestic: 'domestic',
    foreign: 'foreign',
  }

  return (
    <>
      <div className="container_textbox">
        <img src="/images/earth.png" style={{ width: '50px' }} alt="" />
        <h2 className="title">떠나고 싶은 도시는?</h2>
        <span className="text">1곳을 선택해주세요.</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button text="국내" id="domestic"
          active={isSingleSelected(key.domestic)} 
          handleClick={handleSingleClick} />
        <Button text="해외" id="foreign" 
          active={isSingleSelected(key.foreign)}
          handleClick={handleSingleClick} />
      </div>
    </>
  );
}

export default TripSelection;
