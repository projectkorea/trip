import React from "react";
import Header from "../../Header";
import Style from "./Loginstyle";

function Login() {
	return (
		<>
			<section className="main-container">
				<article className="main-wrap">
					<div className="main-visual">
						<img src="./images/intro_main.png" alt="intro_main" />
					</div>
					<div className="container_textbox">
						<div className="title">
							나를 아는 여행앱
							<br />
							트리플
						</div>
						<div className="text">
							예약부터 일정까지 여행이 더 쉬워집니다
						</div>
					</div>
					<div className="sec_login">
						<form onsubmit="">
							<div className="input_form">
								<input
									type="text"
									id="loginid"
									placeholder="아이디 입력"
									autocomplete="off"
								/>
								<input
									type="password"
									id="password"
									placeholder="비밀번호 입력 (영문,숫자,특수문자 조합)"
									autocomplete="off"
								/>
							</div>
						</form>
						<div className="saveid-btn">
							<input type="checkbox" name="saveid" id="saveid" />
							<label Htmlfor="saveid">아이디저장</label>
						</div>
						<div className="login-btn">
							<button
								type="button"
								id="loginbtn"
								className="loginbtn"
							>
								로그인
							</button>
						</div>
					</div>

					<div className="ect-login">
						<div className="sns-login">
							<button type="button" className="sns-login">
								<img src="./images/kakao.png" alt="kakao" />
							</button>
							<button type="button" className="sns-login">
								<img src="./images/naver.png" alt="naver" />
							</button>
							<button type="button" className="sns-login">
								<img
									src="./images/facebook.png"
									alt="facebook"
								/>
							</button>
							<button type="button" className="sns-login">
								<img src="./images/apple.png" alt="apple" />
							</button>
						</div>
					</div>
				</article>
			</section>
		</>
	);
}
export default Login;
