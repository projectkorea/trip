import Style from "@styles/CityProgress.module.css";
import usePlan from "@store/usePlan";
// import Style from "./NavBarStyle";

function CityProgress() {
	const { progress } = usePlan();
	return (
		<div className={Style.nav_bar}>
			<div className={Style.nav_number}>{progress}/6</div>
		</div>
	);
}

export default CityProgress;
