import Domestic from './Domestic';
import Foreign from './Foreign';
import usePlan from '@store/usePlan';

function CityContentTwo() {
  const {
    selections: { step1 },
  } = usePlan();

  return (
    <>
      {step1 === 'domestic' && <Domestic />}
      {step1 === 'foreign' && <Foreign />}
    </>
  );
}

export default CityContentTwo;
