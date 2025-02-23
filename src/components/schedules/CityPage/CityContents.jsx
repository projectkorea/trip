import TripSelection from "./TripSelection";
import CityContentTwo from "./two/CityContentTwo";
import TripDuration from "./TripDuration";
import TripCompanion from "./TripCompanion";
import TravelStyle from "./TravelStyle";
import TripSchedule from "./TripSchedule";
import usePlan from "@store/usePlan";

function CityContents() {
	const { progress } = usePlan();
	return (
		<div className="main-wrap">
			{progress === 1 && <TripSelection />}
			{progress === 2 && <CityContentTwo />}
			{progress === 3 && <TripDuration />}
			{progress === 4 && <TripCompanion />}
			{progress === 5 && <TravelStyle />}
			{progress === 6 && <TripSchedule />}
		</div>
	);
}
export default CityContents;
