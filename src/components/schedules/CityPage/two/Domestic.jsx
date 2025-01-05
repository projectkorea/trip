import Button from "@common/CityPage/Button";
import Style from "./Domestic.style";

function Domestic({ setStepStatus }) {
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
  ]
  const handleClick = (id) => {
		setStepStatus((prevState)=>{
			return {
        ...prevState,
        canNext: true,
				option: {
          ...prevState.option,
          two:id,
        }
      }

		})
	}
  return (
    <>
      <div className="container_textbox">
        <img src="images/airplane.png" alt="" />
        <h2 className="title">국내에서 떠나고 싶은 곳은?</h2>
        <span className="text">1곳을 선택해주세요.</span>
      </div>
      <div className="korea">
        <Style.Text>대한민국</Style.Text>
        <div className="korea_area">
          {cityList.map((city, index) => {
            return (
              <Button
                key={city.id}
                text={city.text}
                id={city.id}
                handleClick={handleClick}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Domestic;
