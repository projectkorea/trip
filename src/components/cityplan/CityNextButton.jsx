import usePlan from '@store/usePlan';
import { useNavigate } from 'react-router';

function CityNextButton() {
  const { progress, canNext, setNextProgress, setCanNextByProgressValue } = usePlan();
  const navigate = useNavigate();
  const handleClick = () => {
    if (!canNext) {
      alert('이동할 수 없습니다.');
      return;
    }

    // 현재 프로그레스 6번이면 종료하고 라우트 이동하고 ai결과물 보여준다.
    if (progress === 6) {
      navigate('/schedule/result');
    }

    setNextProgress();
    setCanNextByProgressValue();
  };

  return (
    <div className={canNext ? 'city-next-button active' : 'city-next-button'}>
      <button onClick={handleClick} type="button">
        다음
      </button>
    </div>
  );
}

export default CityNextButton;
