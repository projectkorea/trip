import Button from '@components/cityplan/Button';
import usePlan from '@store/usePlan';
import ButtonWrapper, { ContainerTextbox, Title, Text, Wrapper, Image } from '@components/cityplan/ButtonWrapper';

function TripCompanion() {
  const { handleMultiClick, isMultiSelected } = usePlan();
  return (
    <>
      <ContainerTextbox>
        <Image src="/images/with.png" style={{ width: '50px' }} alt="With" />
        <Title>누구와 함께 떠나나요?</Title>
        <Text>다중 선택이 가능해요.</Text>
      </ContainerTextbox>

      <ButtonWrapper direction="row">
        <Button text="혼자" id="alone" handleClick={handleMultiClick} active={isMultiSelected('alone')} />
        <Button text="친구와" id="friend" handleClick={handleMultiClick} active={isMultiSelected('friend')} />
        <Button text="연인or배우자와" id="couple" handleClick={handleMultiClick} active={isMultiSelected('couple')} />
        <Button text="아이와" id="child" handleClick={handleMultiClick} active={isMultiSelected('child')} />
        <Button text="부모님과" id="parents" handleClick={handleMultiClick} active={isMultiSelected('parents')} />
        <Button text="기타" id="other" handleClick={handleMultiClick} active={isMultiSelected('other')} />
      </ButtonWrapper>
    </>
  );
}

export default TripCompanion;
