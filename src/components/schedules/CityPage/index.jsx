import CityProgress from '@common/CityPage/CityProgress';
import CityNextButton from '@common/CityPage/CityNextButton';
import CityContents from './CityContents';
import { useEffect } from 'react';
import usePlan from '@store/usePlan';
import CityBackButton from '@common/CityPage/CityBackButton';

function CityPage() {
  const { progress, canNext, selections } = usePlan();

  useEffect(() => {
    console.log(`[Debug] usePlan : 
			progress : ${progress}
			canNext : ${canNext}
			selection : ${JSON.stringify(selections)}`);
  }, [progress, canNext, selections]);
  return (
    <div className="schedule-container">
      <div style={{ position: 'absolute', top: '0.5rem', left: '16vw', display: 'flex', gap: '0.5rem' }}>
        <CityBackButton />
        <CityProgress />
      </div>
      <CityContents />
      <CityNextButton />
    </div>
  );
}

export default CityPage;
