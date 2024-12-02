function CityContentOne() {
  return (
    <>
      <div class="container_textbox">
        <img src="/images/earth.png" style={{ width: '50px' }} alt="" />
        <h2 class="title">떠나고 싶은 도시는?</h2>
        <span class="text">1곳을 선택해주세요.</span>
      </div>
      <div class="city">
        <input type="checkbox" name="domestic" id="domestic" />
        <label for="domestic" class="citytext">
          국내
        </label>
        <input type="checkbox" name="foreignCountry" id="foreignCountry" />
        <label for="foreignCountry" class="citytext">
          해외
        </label>
      </div>
    </>
  )
}

export default CityContentOne
