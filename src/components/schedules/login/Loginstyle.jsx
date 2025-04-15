import styled from "styled-components";

//.main-container
export const MainContainer = styled.div`
	width: 100%;
	height: 100%;
`;

//.main-container .main-wrap
export const MainWrap = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 80px auto;
`;

//.main-wrap .main-visual
export const MainVisual = styled.div`
	width: 211px;
	height: 170px;
	margin: 0 auto;
	margin-bottom: 30px;
`;
//.main-container .main-wrap .main-visual img
export const MainVisualImg = styled.div`
	width: 100%;
	font-size: 0;
`;
//.container_textbox
export const ContainerTextbox = styled.div`
	text-align: center;
`;
//.container_textbox .title
export const Title = styled.h1`
	font-family: "Nanum Gothic", sans-serif;
	font-size: 22px;
	font-weight: 700;
	color: #232323;
	margin-bottom: 8px;
`;
// .text
export const Text = styled.p`
	font-family: "Nanum Gothic", sans-serif;
	font-size: 15px;
	color: #787878;
`;

//.sec_login
export const SecLogin = styled.div`
	width: 320px;
	height: 45px;
	margin: 0 auto;
`;

//.sec_login form .input_form
export const SecLoginForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
`;

//.input_form input
export const SecLoginInput = styled.input`
	width: 320px;
	height: 40px;
	padding: 0 5px;
`;

//.sec_login form .input_form #loginid
export const LoginId = styled.div`
	margin-bottom: 15px;
`;
//.sec_login form .input_form #password
export const password = styled.div`
	margin-bottom: 15px;
`;

//.sec_login .login-btn
export const LoginBtn = styled.div`
	width: 320px;
	height: 40px;
	margin-top: 20px;
`;

//.sec_login .login-btn::after
export const LoginBtnAfter = styled.div`
	position: relative;

	&::after {
		content: "";
		clear: both;
		width: 320px;
		height: 2px;
		background-color: #eaeaea;
		display: block;
		margin-top: 22px;
	}
`;
//.sec_login .login-btn button
export const LoginBtnBtn = styled.div`
	width: 100%;
	height: 100%;
	background-color: #eaeaea;
	border: none;
	cursor: pointer;
`;
//.ect-login
export const EctLogin = styled.div`
	width: 320px;
	margin: 190px auto 0;
`;
//.ect-login .sns-login
export const SnsLogin = styled.div`
	display: flex;
	justify-content: center;
`;

//.ect-login button
export const EctLoginBtn = styled.div`
	border: none;
	background: none;
	padding: 0 15px 0 15px;
	cursor: pointer;
`;
const LoginStyle = {
	MainContainer,
	MainWrap,
	MainVisual,
	MainVisualImg,
	ContainerTextbox,
	Title,
	Text,
	SecLogin,
	SecLoginForm,
	SecLoginInput,
	LoginId,
	password,
	LoginBtn,
	LoginBtnAfter,
	LoginBtnBtn,
	EctLogin,
	SnsLogin,
	EctLoginBtn,
};
export default LoginStyle;
