function Nav({ modalState, setModalState }) {
	console.log("modalState", modalState);
	return (
		modalState && (
			<nav className="gnb">
				<ul className="gnb_list">
					<button
						onClick={() => setModalState(false)}
						className="btn-close"
						type="button"
					>
						<i className="fa-solid fa-xmark"></i>
					</button>
					<li className="login">
						<a href="./schedule/citypage/login/index.html">
							로그인/회원가입
						</a>
					</li>
					<ul className="lnb">
						<li>
							<a href="./schedule/citypage/login/index.html">
								내예약
							</a>
						</li>
						<li>
							<a href="schedule/index.html">AI 추천 일정보기</a>
						</li>
						<li>
							<a href="#">투어 가이드 보기</a>
						</li>
						<li className="travel-nav-item">
							<a href="#">여행 상품</a>
							<ul className="sub_menu">
								<li>항공</li>
								<li>숙소</li>
								<li>투어,티켓</li>
							</ul>
						</li>
					</ul>
				</ul>
			</nav>
		)
	);
}

export default Nav;
