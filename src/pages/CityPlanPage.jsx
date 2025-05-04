import CityProgress from '@components/cityplan/CityProgress';
import CityNextButton from '@components/cityplan/CityNextButton';
import CityBackButton from '@components/cityplan/CityBackButton';
import CityContents from '@components/citycontents';
import { useEffect } from 'react';
import usePlan from '@store/usePlan';
import Header from '@common/Header';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  margin-top: 100px;
  position: relative;
`;

const CityHeader = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 16vw;
  display: flex;
  gap: 0.5rem;
`;

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
      <Container>
        <CityHeader>
          <CityBackButton />
          <CityProgress />
        </CityHeader>
        <CityContents />
        <CityNextButton />
      </Container>
    </>
  );
}

export default CityPlanPage;
