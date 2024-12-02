function CityNextButton({ setProgressState, canNextState }) {
  const handleClick = () => {
    if (!canNextState) {
      alert('이동할 수 없습니다.')
      return
    }

    setProgressState((prevState) => prevState + 1)
  }
  return (
    <div class="city-next-button">
      <button onClick={handleClick} type="button">
        다음
      </button>
    </div>
  )
}

export default CityNextButton
