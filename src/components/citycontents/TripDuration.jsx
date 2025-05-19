import Button from '@components/cityplan/Button';
import ButtonWrapper, { ContainerTextbox, Title, Text, Image } from '@components/cityplan/ButtonWrapper';
import usePlan from '@store/usePlan';

function TripDuration() {
  const { handleSingleClick, isSingleSelected } = usePlan();

  return (
    <>
      <ContainerTextbox>
        <Image src="/images/calendar.png" style={{ width: '50px' }} alt="Calendar" />
        <Title>여행기간은?</Title>
        <Text>원하는 기간을 선택해 주세요</Text>
      </ContainerTextbox>

      <ButtonWrapper direction="row">
        <Button text="당일치기" id="daytrip" handleClick={handleSingleClick} active={isSingleSelected('daytrip')} />
        <Button
          text="1박2일"
          id="overnight_trip"
          handleClick={handleSingleClick}
          active={isSingleSelected('overnight_trip')}
        />
        <Button
          text="2박3일"
          id="2night_3day"
          handleClick={handleSingleClick}
          active={isSingleSelected('2night_3day')}
        />
        <Button
          text="3박4일"
          id="3night_4day"
          handleClick={handleSingleClick}
          active={isSingleSelected('3night_4day')}
        />
        <Button
          text="4박5일"
          id="4night_5day"
          handleClick={handleSingleClick}
          active={isSingleSelected('4night_5day')}
        />
        <Button
          text="5박6일"
          id="5night_6day"
          handleClick={handleSingleClick}
          active={isSingleSelected('5night_6day')}
        />
      </ButtonWrapper>
    </>
  );
}

export default TripDuration;
