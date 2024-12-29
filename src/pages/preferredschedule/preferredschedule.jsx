function Preferredschedule() {
	return (
		<main>
			<div className="main-container">
				<div className="nav_bar">
					<div className="nav_number">6/6</div>
				</div>
				<div className="main-wrap">
					<div className="container_textbox">
						<img src="./images/schedule.png" alt="" />
						<h2 className="title">내가 선호하는 여행 일정은?</h2>
						<span className="text">
							선택해주신 스타일로 일정을 만들어 드려요.
						</span>
					</div>
					<div className="schedule-preference">
						<div className="schedule-option">
							<div className="checkbox-item">
								<input
									type="checkbox"
									name="packed_schedule"
									id="packed_schedule"
								/>
								<label
									htmlFor="packed_schedule"
									className="citytext"
								>
									뺴곡한 일정 선호
								</label>
							</div>
							<div className="checkbox-item">
								<input
									type="checkbox"
									name="spacious_schedule"
									id="spacious_schedule"
								/>
								<label
									htmlFor="spacious_schedule"
									className="citytext"
								>
									널널한 일정 선호
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
export default Preferredschedule;
