import TripSelection from './TripSelection';
import CityContentTwo from './two/CityContentTwo';
import TripDuration from './TripDuration';
import TripCompanion from './TripCompanion';
import TravelStyle from './TravelStyle';
import SchedulePreference from './SchedulePreference';

function CityContents({ stepStatus, setStepStatus }) {
  return (
    <div className="main-wrap">
      {stepStatus.progress === 1 && <TripSelection stepStatus={stepStatus} setStepStatus={setStepStatus} />}
      {stepStatus.progress === 2 && <CityContentTwo stepStatus={stepStatus} setStepStatus={setStepStatus} />}
      {stepStatus.progress === 3 && <TripDuration stepStatus={stepStatus} setStepStatus={setStepStatus} />}
      {stepStatus.progress === 4 && <TripCompanion stepStatus={stepStatus} setStepStatus={setStepStatus} />}
      {stepStatus.progress === 5 && <TravelStyle stepStatus={stepStatus} setStepStatus={setStepStatus} />}
      {stepStatus.progress === 6 && <SchedulePreference stepStatus={stepStatus} setStepStatus={setStepStatus} />}
    </div>
  );
}

export default CityContents;
