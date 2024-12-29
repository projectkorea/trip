function Korea() {
	return (
		<main>
			<div className="main-container">
				<div className="nav_bar">
					<div className="nav_number">2/6</div>
				</div>
				<div className="main-wrap">
					<div className="container_textbox">
						<img src="images/airplane.png" alt="" />
						<h2 className="title">국내에서 떠나고 싶은 곳은?</h2>
						<span className="text">1곳을 선택해주세요.</span>
					</div>
					<div className="korea">
						<p>대한민국</p>
						<div className="korea_area">
							<div className="area">
								<input
									type="checkbox"
									name="gapyeong"
									id="gapyeong"
								/>
								<label htmlFor="gapyeong" className="citytext">
									가평'양평
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="gangneung"
									id="gangneung"
								/>
								<label htmlFor="gangneung" className="citytext">
									강릉'속초
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="gyeongju"
									id="gyeongju"
								/>
								<label htmlFor="gyeongju" className="citytext">
									경주
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="busan"
									id="busan"
								/>
								<label htmlFor="busan" className="citytext">
									부산
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="yeosu"
									id="yeosu"
								/>
								<label htmlFor="yeosu" className="citytext">
									여수
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="incheon"
									id="incheon"
								/>
								<label htmlFor="incheon" className="citytext">
									인천
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="jeonju"
									id="jeonju"
								/>
								<label htmlFor="jeonju" className="citytext">
									전주
								</label>
							</div>
							<div className="area">
								<input type="checkbox" name="jeju" id="jeju" />
								<label htmlFor="jeju" className="citytext">
									제주
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="chuncheon"
									id="chuncheon"
								/>
								<label htmlFor="chuncheon" className="citytext">
									춘천'홍천
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="taean"
									id="taean"
								/>
								<label htmlFor="taean" className="citytext">
									태안
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="tongyeong"
									id="tongyeong"
								/>
								<label htmlFor="tongyeong" className="citytext">
									통영'거제'남해
								</label>
							</div>
							<div className="area">
								<input
									type="checkbox"
									name="pohang"
									id="pohang"
								/>
								<label htmlFor="pohang" className="citytext">
									포항'안동
								</label>
							</div>
						</div>
					</div>

					<div className="next-button">
						<button type="button">다음</button>
					</div>
				</div>
			</div>
		</main>
	);
}
export default Korea;
