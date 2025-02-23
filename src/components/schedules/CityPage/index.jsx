import { useState } from "react";
import CityProgress from "@common/CityPage/CityProgress";
import CityNextButton from "@common/CityPage/CityNextButton";
import CityContents from "./CityContents";
import { useEffect } from "react";
import usePlan from "@store/usePlan";

function CityPage() {
	const { progress, canNext, selections } = usePlan();

	const [stepStatus, setStepStatus] = useState({
		progress: 1,
		canNext: false,
		option: {
			one: null, // optionKey에 해당하는 id값
			two: null,
			three: null,
			four: null,
			five: null, // string || Array
			six: null,
		}, // 각 단계별 객체로 받을 것
	});
	useEffect(() => {
		console.log(`[Debug] usePlan : 
			progress : ${progress}
			canNext : ${canNext}
			selection : ${JSON.stringify(selections)}`);
	}, [progress, canNext, selections]);
	return (
		<div className="main-container">
			<CityProgress />
			<CityContents />
			<CityNextButton />
		</div>
	);
}

export default CityPage;
