import Button from '@components/cityplan/Button';
import usePlan from '@store/usePlan';
import ButtonWrapper, { ContainerTextbox, Title, Text, Wrapper, Image } from '@components/cityplan/ButtonWrapper';

function TravelStyle() {
  const { handleMultiClick, isMultiSelected } = usePlan();
  return (
    <>
      <ContainerTextbox>
        <Image src="/images/bag.png" style={{ width: '50px' }} alt="bag" />
        <Title>내가 선호하는 여행 스타일은?</Title>
        <Text>다중 선택이 가능해요.</Text>
      </ContainerTextbox>

      <ButtonWrapper direction="row">
        <Button id="activity" text="체험액티비티" handleClick={handleMultiClick} active={isMultiSelected('activity')} />
        <Button
          id="hotplace"
          text="SNS 핫플레이스"
          handleClick={handleMultiClick}
          active={isMultiSelected('hotplace')}
        />
        <Button id="nature" text="자연과 함께" handleClick={handleMultiClick} active={isMultiSelected('nature')} />
        <Button
          id="tourist"
          text="유명 관광지는 필수"
          handleClick={handleMultiClick}
          active={isMultiSelected('tourist')}
        />
        <Button id="healing" text="여유롭게 힐링" handleClick={handleMultiClick} active={isMultiSelected('healing')} />
        <Button id="culture" text="문화예술역사" handleClick={handleMultiClick} active={isMultiSelected('culture')} />
        <Button
          id="travel_destination"
          text="여행지 느낌 물씬"
          handleClick={handleMultiClick}
          active={isMultiSelected('travel_destination')}
        />
        <Button
          id="shopping"
          text="쇼핑은 열정적으로"
          handleClick={handleMultiClick}
          active={isMultiSelected('shopping')}
        />

        <Button id="food" text="관광보다 먹방" handleClick={handleMultiClick} active={isMultiSelected('food')} />
      </ButtonWrapper>
    </>
  );
}

export default TravelStyle;
