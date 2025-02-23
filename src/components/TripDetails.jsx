import { useNavigate } from "react-router-dom";

function TripDetails() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/Tourguide");
	};

	return (
		<section className="trip-container">
			<article className="trip-inner">
				<div className="trip-textbox">
					<h3 className="subTitle">여행 정보</h3>
					<h2 className="bigTitle">즉시 투어 가이드</h2>
				</div>
				<div className="trip_content_img">
					<div className="trip_sub_text">
						<h3 className="bottom_title">
							현지의 매력을 새롭고
							<br />더 깊이있게 경험해 보세요.
						</h3>
						<button
							type="button"
							className="tour-button"
							onClick={handleClick}
						>
							현 위치 가이드 보기
						</button>
					</div>

					<article className="trip_imgbox">
						<div className="trip_img">
							<img
								src="/images/trip/img02.png"
								alt="StreetView_img"
							/>
						</div>
					</article>
				</div>
			</article>
		</section>
	);
}

export default TripDetails;
