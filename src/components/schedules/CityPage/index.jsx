import { useState } from "react";
// import CityProgress from "./CityProgress";
// import CityProgress from "../../../common/CityPage/CityProgress"
import CityProgress from '@common/CityPage/CityProgress';
import CityNextButton from '@common/CityPage/CityNextButton'
import CityContents from "./CityContents";
import { useEffect } from "react";

function CityPage() {
	// const [progressState, setProgressState] = useState(1)
	// const [canNextState, setCanNextState] = useState(false)
	const [stepStatus, setStepStatus] = useState({
		progress: 1,
		canNext: false,
		option: {
			one:null,
			two:null,
			three:null,
			four:null,
			five:null,
			six:null,
		}, // 각 단계별 객체로 받을 것
	});

	useEffect(() => {
    console.log(`[Debug] stepStatus: ${JSON.stringify(stepStatus)}`)
  }, [stepStatus])

	return (
		<div className="main-container">
			<CityProgress stepStatus={stepStatus} />
			<CityContents
				stepStatus={stepStatus}
				setStepStatus={setStepStatus}
			/>
			<CityNextButton
				setStepStatus={setStepStatus}
				stepStatus={stepStatus}
			/>
		</div>
	);
}

export default CityPage;
