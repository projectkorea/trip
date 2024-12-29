import { useState } from "react";
import CityProgress from "./CityProgress";
import CityNextButton from "./CityNextButton";
import CityContents from "./CityContents";

function CityPage() {
	// const [progressState, setProgressState] = useState(1)
	// const [canNextState, setCanNextState] = useState(false)
	const [stepStatus, setStepStatus] = useState({
		progress: 1,
		canNext: false,
		option: "", // 일단 문자열로 구분
	});
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
