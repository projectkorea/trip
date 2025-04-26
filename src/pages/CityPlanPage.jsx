import CityProgress from '@components/cityplan/CityProgress';
import CityNextButton from '@components/cityplan/CityNextButton';
import CityBackButton from '@components/cityplan/CityBackButton';
import CityContents from '@components/schedules/CityContents';
import { useEffect } from 'react';
import usePlan from '@store/usePlan';
import Header from '@components/Header';

function CityPlanPage() {
  const { progress, canNext, selections } = usePlan();

  useEffect(() => {
    console.log(`[Debug] usePlan : 
			progress : ${progress}
			canNext : ${canNext}
			selection : ${JSON.stringify(selections)}`);
  }, [progress, canNext, selections]);
  return (
    <>
      <Header isBlack />
      <div className="schedule-container">
        <div style={{ position: 'absolute', top: '0.5rem', left: '16vw', display: 'flex', gap: '0.5rem' }}>
          <CityBackButton />
          <CityProgress />
        </div>
        <CityContents />
        <CityNextButton />
      </div>
    </>
  );
}

export default CityPlanPage;
