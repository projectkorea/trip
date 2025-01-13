import Button from '@common/CityPage/Button';
import useStep from '@hooks/useStep';

function TripSelection({ setStepStatus, stepStatus }) {
  const { handleClick, getCurrentSelection } = useStep(setStepStatus);
  const currentSelection = getCurrentSelection(stepStatus);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button text="국내" id="domestic" active={currentSelection === 'domestic'} handleClick={handleClick} />
        <Button text="해외" id="foreignCountry" active={currentSelection === 'foreignCountry'} handleClick={handleClick} />
      </div>
    </>
  );
}

export default TripSelection;
