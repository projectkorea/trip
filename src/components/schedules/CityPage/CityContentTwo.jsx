import CityContentTwoDomestic from "./CityContentTwoDomestic";
import CityContentTwoForeign from "./CityContentTwoForeign";

function CityContentTwo({ stepStatus, setStepStatus }) {
	const { option } = stepStatus;

	return (
		<>
			{option === "domestic" && (
				<CityContentTwoDomestic setStepStatus={setStepStatus} />
			)}
			{option === "foreign" && (
				<CityContentTwoForeign setStepStatus={setStepStatus} />
			)}
		</>
	);
}

export default CityContentTwo;
