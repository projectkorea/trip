import { useState, useEffect } from "react";

function PlaceSelection({ setStepStatus }) {
	const [activeDomestic, setActiveDomestic] = useState(false);
	const [activeForeign, setActiveForeign] = useState(false);
	useEffect(() => {
		// 2. 다음 버튼이 눌릴 수 있게 true시켜준다.
		if (activeDomestic || activeForeign) {
			const option = activeDomestic ? "domestic" : "foreign";
			setStepStatus((prev) => {
				return {
					...prev,
					canNext: true,
					option,
				};
			});
		}
	}, [activeDomestic, activeForeign, setStepStatus]);

	function handleChange(e) {
		const targetName = e.target.htmlFor;
		if (targetName === "domestic") {
			// 1. <label>국내</label> 액티브 표시
			setActiveDomestic(true);
			setActiveForeign(false);
		} else {
			setActiveForeign(true);
			setActiveDomestic(false);
		}
	}
	return (
		<>
			<div className="container_textbox">
				<img src="/images/earth.png" style={{ width: "50px" }} alt="" />
				<h2 className="title">떠나고 싶은 도시는?</h2>
				<span className="text">1곳을 선택해주세요.</span>
			</div>
			<div className="city">
				<input type="checkbox" name="domestic" id="domestic" />
				<label
					className={activeDomestic ? "citytext active" : "citytext"}
					onClick={handleChange}
					htmlFor="domestic"
				>
					국내
				</label>
				<input
					type="checkbox"
					name="foreignCountry"
					id="foreignCountry"
				/>
				<label
					onClick={handleChange}
					htmlFor="foreignCountry"
					className={activeForeign ? "citytext active" : "citytext"}
				>
					해외
				</label>
			</div>
		</>
	);
}

export default PlaceSelection;
