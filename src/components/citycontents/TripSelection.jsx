import Button from '@components/cityplan/Button';
import ButtonWrapper, { ContainerTextbox, Title, Text, Image } from '@components/cityplan/ButtonWrapper';
import usePlan from '@store/usePlan';

function TripSelection() {
  const { handleSingleClick, isSingleSelected } = usePlan();
  const key = {
    domestic: 'domestic',
    foreign: 'foreign',
  };

  return (
    <>
      <ContainerTextbox>
        <Image src="/images/earth.png" style={{ width: '50px' }} alt="Earth" />
        <Title>떠나고 싶은 도시는?</Title>
        <Text>1곳을 선택해주세요.</Text>
      </ContainerTextbox>

      <ButtonWrapper direction="row">
        <Button text="국내" id="domestic" active={isSingleSelected(key.domestic)} handleClick={handleSingleClick} />
        <Button text="해외" id="foreign" active={isSingleSelected(key.foreign)} handleClick={handleSingleClick} />
      </ButtonWrapper>
    </>
  );
}

export default TripSelection;
