import { useState } from "react";
// import CityProgress from "./CityProgress";
// import CityProgress from "../../../common/CityPage/CityProgress"
import CityProgress from '@common/CityPage/CityProgress';
import CityNextButton from '@common/CityPage/CityNextButton'
import CityContents from "./CityContents";
import { useEffect } from "react";

function CityPage() {
	const [stepStatus, setStepStatus] = useState({
		option: {
			one:null, // optionKey에 해당하는 id값
			two:null,
			three:null,
			four:null,
			five:null, // string || Array 
			six:null,
		}, // 각 단계별 객체로 받을 것
	});

	useEffect(() => {
    console.log(`[Debug] stepStatus 값: ${JSON.stringify(stepStatus)}`)
  }, [stepStatus])

	return (
		<div className="main-container">
			<CityProgress />
			<CityContents
				stepStatus={stepStatus}
				setStepStatus={setStepStatus}
			/>
			<CityNextButton />
		</div>
	);
}

export default CityPage;
