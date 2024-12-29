import { useNavigate } from "react-router";

function Schedule() {
	const navigate = useNavigate();

	function handleClick() {
		navigate("/schedule/citypage");
	}
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
							취향에 맞게 일정을
							<br />
							추천해 드려요!
						</div>
						<div className="text">순식간에 여행 준비 끝</div>
					</div>

					<div className="main-visual">
						<img src="images/schedules/main-visual.png" alt="" />
					</div>

					<div className="next-button">
						<button onClick={handleClick} type="button">
							바로 추천받기
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Schedule;
