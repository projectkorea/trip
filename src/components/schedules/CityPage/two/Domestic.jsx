import Style from './DomesticStyle';
import Button from '@common/CityPage/Button';
import usePlan from '@store/usePlan';
import ButtonWrapper, { ContainerTextbox, Title, Text, Wrapper, Image } from '@common/CityPage/ButtonWrapper';

function Domestic() {
  const { handleSingleClick, isSingleSelected } = usePlan();
  const cityList = [
    { text: "가평'양평", id: 'gapyeong' },
    { text: "강릉'속초", id: 'gangneung' },
    { text: '경주', id: 'gyeongju' },
    { text: '부산', id: 'busan' },
    { text: '여수', id: 'yeosu' },
    { text: '인천', id: 'incheon' },
    { text: '전주', id: 'jeonju' },
    { text: '제주', id: 'jeju' },
    { text: "춘천'홍천", id: 'chuncheon' },
    { text: '태안', id: 'taean' },
    { text: "통영'거제'남해", id: 'tongyeong' },
    { text: "포항'안동", id: 'pohang' },
  ];

  return (
    <>
      <ContainerTextbox>
        <Image src="/images/airplane.png" style={{ width: '50px' }} alt="Airplane" />
        <Title>국내에서 떠나고 싶은 곳은?</Title>
        <Text>1곳을 선택해주세요.</Text>
      </ContainerTextbox>

      <div className="korea">
        <ButtonWrapper titleText="대한민국" direction="row">
          {cityList.map((city, index) => {
            return (
              <Button
                key={city.id}
                text={city.text}
                id={city.id}
                handleClick={handleSingleClick}
                active={isSingleSelected(city.id)}
              />
            );
          })}
        </ButtonWrapper>
      </div>
    </>
  );
}

export default Domestic;
