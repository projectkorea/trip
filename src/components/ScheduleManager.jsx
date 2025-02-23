import React from "react";
import { useNavigate } from "react-router-dom";

function ScheduleManager() {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate("/Schedule");
	};
	return (
		<section className="schedule-container">
			<article className="schedule-inner">
				<div className="schedule-textbox">
					<h3 className="subTitle">일정 생성 관리</h3>
					<h2 className="bigTitle">
						나만의 여행 일정,
						<br />
						AI로 간편해졌어요
					</h2>
				</div>

				<div className="schedule_content_img">
					<div className="bottom_text">
						<p>어떤 취향이든, 다 맞춰주니까</p>
						<h3 className="bottom_title">
							어떤 여행 취향이든 간단히 알려만 주세요.
							<br />
							AI는 여러분의 취향에 꼭 맞는 일정을 추천해 드립니다.
						</h3>
						<button
							type="button"
							className="schedule-button"
							onClick={handleOnClick}
						>
							AI 추천 일정보기
						</button>
						{/* <NavLink to="/schedule" className="schedule-button">
                AI 추천 일정보기
                </NavLink> */}
					</div>

					<article className="schedule_imgbox">
						<div className="schedule_img">
							<img
								src="/images/trip/img01.png"
								alt="travel_itinerary_img"
							/>
						</div>
					</article>
				</div>
			</article>
		</section>
	);
}

export default ScheduleManager;
