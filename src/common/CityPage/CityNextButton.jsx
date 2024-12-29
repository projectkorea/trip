function CityNextButton({ setStepStatus, stepStatus }) {
	const handleClick = () => {
		if (!stepStatus.canNext) {
			alert("이동할 수 없습니다.");
			return;
		}

		setStepStatus((prev) => {
			return {
				...prev,
				progress: prev.progress + 1,
			};
		});
	};
	return (
		<div
			className={
				stepStatus.canNext
					? "city-next-button active"
					: "city-next-button"
			}
		>
			<button onClick={handleClick} type="button">
				다음
			</button>
		</div>
	);
}

export default CityNextButton;
