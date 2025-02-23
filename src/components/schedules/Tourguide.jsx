function Tourguide() {
	const buttons = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"];

	return (
		<main>
			<section className="main-container">
				<div className="header_inner">
					<h1 className="sub_logo">
						<a href="#">
							<img src="images/schedules/logo.png" alt="" />
						</a>
					</h1>
				</div>
				<div className="main-wrap">
					<div className="container_textbox">
						<div className="title">
							일본 1박2일 <br />
							추천일정 입니다.
						</div>
						<div className="text">
							맞춤일정으로 여행을 떠나보세요.
						</div>
					</div>

					<div className="main-visual">
						<img src="images/schedules/main-visual.png" alt="" />
					</div>
					<div className="next-button">
						{buttons.map((text, i) => {
							return (
								<button type="button" key={i}>
									{text}
								</button>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Tourguide;
