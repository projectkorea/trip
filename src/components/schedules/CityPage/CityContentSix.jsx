function CityContentOne() {
  return (
    <>
      <div className="container_textbox">
        <img src="/images/earth.png" style={{ width: '50px' }} alt="" />
        <h2 className="title">떠나고 싶은 도시는?</h2>
        <span className="text">1곳을 선택해주세요.</span>
      </div>
      <div className="city">
        <input type="checkbox" name="domestic" id="domestic" />
        <label htmlFor="domestic" className="citytext">
          국내
        </label>
        <input type="checkbox" name="foreignCountry" id="foreignCountry" />
        <label htmlFor="foreignCountry" className="citytext">
          해외
        </label>
      </div>
    </>
  )
}

export default CityContentOne
