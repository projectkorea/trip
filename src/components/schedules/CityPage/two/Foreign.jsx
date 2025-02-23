import Button from "@common/CityPage/Button";
import Style from "./ForeignStyle";
import usePlan from "@store/usePlan";

function Foreign() {
	const { handleSingleClick, isSingleSelected } = usePlan();

  const cityList = [
    { text: '도쿄', id: 'tokyo', category: 'japan' },
    { text: '후쿠오카', id: 'fukuoka', category: 'japan' },
    { text: '오사카', id: 'osaka', category: 'japan' },
    { text: '시즈오카', id: 'shizuoka', category: 'japan' },
    { text: '나고야', id: 'nagoya', category: 'japan' },
    { text: '삿포로', id: 'sapporo', category: 'japan' },
    { text: '오키나와', id: 'okinawa', category: 'japan' },

    { text: '가오슝', id: 'kaohsiung', category: 'china' },
    { text: '칭다오', id: 'qingdao', category: 'china' },
    { text: '홍콩', id: 'hongkong', category: 'china' },
    { text: '타이베이', id: 'taipei', category: 'china' },
    { text: '상하이', id: 'shanghai', category: 'china' },
    { text: '베이징', id: 'beijing', category: 'china' },

    { text: '그라나다', id: 'granada', category: 'europe' },
    { text: '두브로브니크', id: 'dubrovnik', category: 'europe' },
    { text: '리스본', id: 'lisbon', category: 'europe' },
    { text: '밀라논', id: 'milan', category: 'europe' },
    { text: '브뤼셀', id: 'brussels', category: 'europe' },
    { text: '세비야', id: 'seville', category: 'europe' },
    { text: '파리', id: 'paris', category: 'europe' },
    { text: '프라하', id: 'prague', category: 'europe' },
    { text: '로마', id: 'rome', category: 'europe' },
    { text: '런던', id: 'london', category: 'europe' },
    { text: '바르셀로나', id: 'barcelona', category: 'europe' },
    { text: '빈', id: 'vienna', category: 'europe' },
    { text: '피렌체', id: 'florence', category: 'europe' },
    { text: '인터라켄', id: 'interlaken', category: 'europe' },
    { text: '마드리드', id: 'madrid', category: 'europe' },
    { text: '부다페스트', id: 'budapest', category: 'europe' },
    { text: '블라디보스토크', id: 'vladivostok', category: 'europe' },
    { text: '취리히', id: 'zurich', category: 'europe' },
    { text: '프랑크푸르트', id: 'frankfurt', category: 'europe' },
    { text: '뮌헨', id: 'munich', category: 'europe' },
    { text: '암스테르담', id: 'amsterdam', category: 'europe' },
    { text: '베를린', id: 'berlin', category: 'europe' },

    { text: '나트랑', id: 'nhatrang', category: 'southeastAsia' },
    { text: '치앙마이', id: 'chiangmai', category: 'southeastAsia' },
    { text: '푸꾸옥', id: 'phuquoc', category: 'southeastAsia' },
    { text: '라오스', id: 'laos', category: 'southeastAsia' },
    { text: '쿠알라룸푸르', id: 'kualalumpur', category: 'southeastAsia' },
    { text: '달랏', id: 'dalat', category: 'southeastAsia' },
    { text: '다낭', id: 'danang', category: 'southeastAsia' },
    { text: '방콕', id: 'bangkok', category: 'southeastAsia' },
    { text: '세부', id: 'cebu', category: 'southeastAsia' },
    { text: '코타키나발루', id: 'kotaKinabalu', category: 'southeastAsia' },
    { text: '싱가포르', id: 'singapore', category: 'southeastAsia' },
    { text: '하노이', id: 'hanoi', category: 'southeastAsia' },
    { text: '호치민', id: 'hochiminh', category: 'southeastAsia' },
    { text: '발리', id: 'bali', category: 'southeastAsia' },
    { text: '푸켓', id: 'phuket', category: 'southeastAsia' },
    { text: '보라카이', id: 'boracay', category: 'southeastAsia' },

    { text: '두바이', id: 'dubai', category: 'westAsia' },

    { text: '벤쿠버', id: 'vancouver', category: 'america' },
    { text: '샌프란시스코', id: 'sanfrancisco', category: 'america' },
    { text: '토론토', id: 'toronto', category: 'america' },
    { text: '하와이', id: 'hawaii', category: 'america' },
    { text: '뉴욕', id: 'newyork', category: 'america' },
    { text: '로스앤젤레스', id: 'losangeles', category: 'america' },

    { text: '시드니', id: 'sydney', category: 'southPacific' },
    { text: '멜버른', id: 'melbourne', category: 'southPacific' },
    { text: '괌', id: 'guam', category: 'southPacific' },
    { text: '사이판', id: 'saipan', category: 'southPacific' },
  ];

	return (
		<>
			<div className="container_textbox">
				<img
					src="/images/airplane.png"
					style={{ width: "50px" }}
					alt=""
				/>
				<h2 className="title">해외에서 떠나고 싶은 곳은?</h2>
				<span className="text">1곳을 선택해주세요.</span>
			</div>
			<div className="foreign">
				<div className="foreign_area">
					<p className="country">일본</p>
					<Style.Text>일본</Style.Text>

					{cityList
						.filter(({ category }) => category === "japan")
						.map((city, index) => {
							return (
								<Button
									handleClick={handleSingleClick}
									key={city.id}
									text={city.text}
									id={city.id}
									active={isSingleSelected(city.id)}
								/>
							);
						})}
				</div>

				<div className="foreign_area">
					<p className="country">중화/중국</p>
					{cityList
						.filter(({ category }) => category === "china")
						.map((city, index) => {
							return (
								<Button
									handleClick={handleSingleClick}
									Key={city.id}
									text={city.text}
									id={city.id}
									active={isSingleSelected(city.id)}
								/>
							);
						})}
				</div>

        <div className="foreign_area">
          <p className="country">유럽</p>

					{cityList
						.filter(({ category }) => category === "europe")
						.map((city, index) => {
							return (
								<Button
									handleClick={handleSingleClick}
									Key={city.id}
									text={city.text}
									id={city.id}
									active={isSingleSelected(city.id)}
								/>
							);
						})}
				</div>

        <div className="foreign_area">
          <p className="country">동남아시아</p>

					{cityList
						.filter(({ category }) => category === "southeastAsia")
						.map((city, index) => {
							return (
								<Button
									handleClick={handleSingleClick}
									Key={city.id}
									text={city.text}
									id={city.id}
									active={isSingleSelected(city.id)}
								/>
							);
						})}
				</div>

        <div className="foreign_area">
          <p className="country">서아시아</p>

					{cityList
						.filter(({ category }) => category === "westAsia")
						.map((city, index) => {
							return (
								<Button
									handleClick={handleSingleClick}
									key={city.id}
									text={city.text}
									id={city.id}
									active={isSingleSelected(city.id)}
								/>
							);
						})}
				</div>

        <div className="foreign_area">
          <p className="country">미주</p>

					{cityList
						.filter(({ category }) => category === "america")
						.map((city, index) => {
							return (
								<Button
									handleClick={handleSingleClick}
									key={city.id}
									text={city.text}
									id={city.id}
									active={isSingleSelected(city.id)}
								/>
							);
						})}
				</div>

        <div className="foreign_area">
          <p className="country">남태평양</p>

					{cityList
						.filter(({ category }) => category === "southPacific")
						.map((city, index) => {
							return (
								<Button
									handleClick={handleSingleClick}
									key={city.id}
									text={city.text}
									id={city.id}
									active={isSingleSelected(city.id)}
								/>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default Foreign;
