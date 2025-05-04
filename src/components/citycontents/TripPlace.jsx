import Domestic from './place/Domestic';
import Foreign from './place/Foreign';
import usePlan from '@store/usePlan';

function TripPlace() {
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

export default TripPlace;
