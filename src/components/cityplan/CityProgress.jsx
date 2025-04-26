import usePlan from '@store/usePlan';

function CityProgress() {
  const { progress } = usePlan();
  return (
    <div>
      <div>{progress}/6</div>
    </div>
  );
}

export default CityProgress;
