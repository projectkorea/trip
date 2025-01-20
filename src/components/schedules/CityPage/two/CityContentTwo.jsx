import Domestic from "./Domestic";
import Foreign from "./Foreign";

function CityContentTwo({ stepStatus, setStepStatus }) {

	const { option: {one} } = stepStatus;

	return (
    <>
      {one === 'domestic' && <Domestic stepStatus={stepStatus} setStepStatus={setStepStatus} />}
      {one === 'foreign' && <Foreign stepStatus={stepStatus} setStepStatus={setStepStatus} />}
    </>
  );
}

export default CityContentTwo;
