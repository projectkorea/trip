import Style from "@styles/CityProgress.module.css";
import usePlan from '@store/usePlan';

function CityProgress() {
  const { progress, setPreviousProgress } = usePlan();
  return (
    <>
      <div className={Style.nav_bar}>
        <div className={Style.nav_number}>{progress}/6</div>
      </div>

      {progress > 1 && <div onClick={setPreviousProgress}>뒤로가기</div>}
    </>
  );
}

export default CityProgress;
