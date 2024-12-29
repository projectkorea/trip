import PlaceSelection from "./PlaceSelection";
import CityContentTwo from "./CityContentTwo";
import TripDuration from "./TripDuration";
import TripCompanion from "./TripCompanion";
import TravelStyle from "./TravelStyle";
import SchedulePreference from "./SchedulePreference";

function CityContents({ stepStatus, setStepStatus }) {
	return (
		<div className="main-wrap">
			{stepStatus.progress === 1 && (
				<PlaceSelection setStepStatus={setStepStatus} />
			)}
			{stepStatus.progress === 2 && (
				<CityContentTwo
					stepStatus={stepStatus}
					setStepStatus={setStepStatus}
				/>
			)}
			{stepStatus.progress === 3 && (
				<TripDuration setStepStatus={setStepStatus} />
			)}
			{stepStatus.progress === 4 && <TripCompanion />}
			{stepStatus.progress === 5 && <TravelStyle />}
			{stepStatus.progress === 6 && <SchedulePreference />}
		</div>
	);
}

export default CityContents;
