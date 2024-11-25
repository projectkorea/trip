function Header({ setModalState }) {
  const handleButtonClick = () => {
    setModalState((prevState) => !prevState)
    //menuBtnOpen.classList.toggle('active')
    //navMenu.classList.toggle('active')
  }
  return (
    <header>
      <div className="header_inner">
        <h1 className="logo">
          <a href="./index.html">TRIPLE</a>
        </h1>
        <div className="header-right-menu">
          <p>
            <a href="./schedule/citypage/login/index.html">내 예약</a>
          </p>
          <button
            onClick={handleButtonClick}
            className="btn-open"
            type="button"
          >
            <div className="hamburger">
              <span className="hamburger_bar"></span>
              <span className="hamburger_bar"></span>
              <span className="hamburger_bar"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
