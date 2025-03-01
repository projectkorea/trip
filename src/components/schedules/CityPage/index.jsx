import CityProgress from '@common/CityPage/CityProgress';
import CityNextButton from '@common/CityPage/CityNextButton';
import CityContents from './CityContents';
import { useEffect } from 'react';
import usePlan from '@store/usePlan';

function CityPage() {
  const { progress, canNext, selections } = usePlan();

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
