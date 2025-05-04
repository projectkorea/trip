import TripSelection from './TripSelection';
import TripPlace from './TripPlace';
import TripDuration from './TripDuration';
import TripCompanion from './TripCompanion';
import TripStyle from './TripStyle';
import TripSchedule from './TripSchedule';
import usePlan from '@store/usePlan';

function CityContents() {
  const { progress } = usePlan();
  return (
    <div className="main-wrap">
      {progress === 1 && <TripSelection />}
      {progress === 2 && <TripPlace />}
      {progress === 3 && <TripDuration />}
      {progress === 4 && <TripCompanion />}
      {progress === 5 && <TripStyle />}
      {progress === 6 && <TripSchedule />}
    </div>
  );
}
export default CityContents;
