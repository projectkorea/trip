import AreaButton from "../../../common/AreaButton";

function CityContentTwoForeign() {
	const cityList = [
		{ text: "도쿄", id: "tokyo" },
		{ text: "후쿠오카", id: "fukuoka" },
		{ text: "오사카", id: "osaka" },
		{ text: "시즈오카", id: "shizuoka" },
		{ text: "나고야", id: "nagoya" },
		{ text: "삿포로", id: "sapporo" },
		{ text: "오키나와", id: "okinawa" },
		{ text: "가오슝", id: "kaohsiung" },
		{ text: "칭다오", id: "qingdao" },
		{ text: "홍콩", id: "hongkong" },
		{ text: "타이베이", id: "taipei" },
		{ text: "상하이", id: "shanghai" },
		{ text: "베이징", id: "beijing" },
		{ text: "그라나다", id: "granada" },
		{ text: "두브로브니크", id: "dubrovnik" },
		{ text: "리스본", id: "lisbon" },
		{ text: "밀라논", id: "milan" },
		{ text: "브뤼셀", id: "brussels" },
		{ text: "세비야", id: "seville" },
		{ text: "포르투", id: "porto" },
		{ text: "파리", id: "paris" },
		{ text: "프라하", id: "prague" },
		{ text: "로마", id: "rome" },
		{ text: "런던", id: "london" },
		{ text: "바르셀로나", id: "barcelona" },
		{ text: "빈", id: "vienna" },
		{ text: "피렌체", id: "florence" },
		{ text: "인터라켄", id: "interlaken" },
		{ text: "마드리드", id: "madrid" },
		{ text: "부다페스트", id: "budapest" },
		{ text: "블라디보스토크", id: "vladivostok" },
		{ text: "취리히", id: "zurich" },
		{ text: "프랑크푸르트", id: "frankfurt" },
		{ text: "뮌헨", id: "munich" },
		{ text: "암스테르담", id: "amsterdam" },
		{ text: "베를린", id: "berlin" },
		{ text: "나트랑", id: "nhatrang" },
		{ text: "치앙마이", id: "chiangmai" },
		{ text: "푸꾸옥", id: "phuquoc" },
		{ text: "라오스", id: "laos" },
		{ text: "쿠알라룸푸르", id: "kualalumpur" },
		{ text: "달랏", id: "dalat" },
		{ text: "다낭", id: "danang" },
		{ text: "방콕", id: "bangkok" },
		{ text: "세부", id: "cebu" },
		{ text: "코타키나발루", id: "kotaKinabalu" },
		{ text: "싱가포르", id: "singapore" },
		{ text: "하노이", id: "hanoi" },
		{ text: "호치민", id: "hochiminh" },
		{ text: "발리", id: "bali" },
		{ text: "푸켓", id: "phuket" },
		{ text: "보라카이", id: "boracay" },
		{ text: "두바이", id: "dubai" },
		{ text: "벤쿠버", id: "vancouver" },
		{ text: "샌프란시스코", id: "sanfrancisco" },
		{ text: "토론토", id: "toronto" },
		{ text: "하와이", id: "hawaii" },
		{ text: "뉴욕", id: "newyork" },
		{ text: "로스앤젤레스", id: "losangeles" },
		{ text: "시드니", id: "sydney" },
		{ text: "멜버른", id: "melbourne" },
		{ text: "괌", id: "guam" },
		{ text: "사이판", id: "saipan" },
	];
	return (
		<>
			<div className="container_textbox">
				<img src="images/airplane.png" alt="" />
				<h2 className="title">해외에서 떠나고 싶은 곳은?</h2>
				<span className="text">1곳을 선택해주세요.</span>
			</div>
			<div className="foreign">
				<div className="foreign_area">
					<p className="country">일본</p>
					{cityList.map((city, index) => {
						return (
							<AreaButton
								Key={city.id}
								text={city.text}
								id={city.id}
							/>
						);
					})}
				</div>

				<div className="foreign_area">
					<p className="country">중화/중국</p>
				</div>

				<div className="foreign_area">
					<p className="country">유럽</p>
				</div>

				<div className="foreign_area">
					<p className="country">동남아시아</p>
				</div>

				<div className="foreign_area">
					<p className="country">서아시아</p>
				</div>

				<div className="foreign_area">
					<p className="country">미주</p>
				</div>

				<div className="foreign_area">
					<p className="country">미주</p>
				</div>
			</div>
		</>
	);
}

export default CityContentTwoForeign;
