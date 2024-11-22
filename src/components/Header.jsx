import { useState } from 'react'

function Header() {
  // react에서 이벤트 리스너를 활용하는 방법 -> onClick
  const [state, setState] = useState(0)

  const handleClick = () => {
    setState(state + 1)
  }
  const handleOpen = () => {
    //menuBtnOpen.classList.toggle('active')
    //navMenu.classList.toggle('active')
    // react 에서는 querySelector를 사용하지 않고 state를 사용한다.
  }
  return (
    <header>
      <div class="header_inner">
        {/*  */}
        <div>{state}</div>
        <button
          style={{ width: '50px', height: '50px', backgroundColor: 'red' }}
          onClick={handleClick}
        ></button>
        {/*  */}
        <h1 class="logo">
          <a href="./index.html">TRIPLE</a>
        </h1>
        <div class="header-right-menu">
          <p>
            <a href="./schedule/citypage/login/index.html">내 예약</a>
          </p>
          <button onClick={handleOpen} class="btn-open" type="button">
            <div class="hamburger">
              <span class="hamburger_bar"></span>
              <span class="hamburger_bar"></span>
              <span class="hamburger_bar"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
