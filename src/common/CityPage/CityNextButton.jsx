import usePlan from '@store/usePlan';

function CityNextButton() {
  const { canNext, setNextProgress, setCanNext } = usePlan();

  const handleClick = () => {
    if (!canNext) {
      alert('이동할 수 없습니다.');
      return;
    }

    setNextProgress();
    setCanNext(false);
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
