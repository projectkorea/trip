import Button from '@common/CityPage/Button';
import usePlan from '@store/usePlan';
import ButtonWrapper, { ContainerTextbox, Title, Text, Wrapper, Image } from '@common/CityPage/ButtonWrapper';

function TripSchedule() {
  const { handleSingleClick, isSingleSelected } = usePlan();
  return (
    <>
      <ContainerTextbox>
        <Image src="/images/schedule.png" style={{ width: '50px' }} alt="Schedule" />
        <Title>내가 선호하는 여행 일정은?</Title>
        <Text>선택해주신 스타일로 일정을 만들어 드려요.</Text>
      </ContainerTextbox>

      <ButtonWrapper direction="row">
        <Button
          id="packed_schedule"
          text="빼곡한 일정 선호"
          handleClick={handleSingleClick}
          active={isSingleSelected('packed_schedule')}
        />
        <Button
          id="spacious_schedule"
          text="널널한 일정 선호"
          handleClick={handleSingleClick}
          active={isSingleSelected('spacious_schedule')}
        />
      </ButtonWrapper>
    </>
  );
}

export default TripSchedule;
