import { useNavigate } from 'react-router';

function Header({ setModalState }) {
  const handleButtonClick = () => {
    setModalState((prevState) => !prevState);
    //menuBtnOpen.classNameList.toggle('active')
    //navMenu.classNameList.toggle('active')
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

	return (
		<header>
			<div className="header_inner">
				<h1 className="logo" onClick={handleClick}>
					<a href="">TRIPLIBERTY</a>
				</h1>
				<div className="header-right-menu">
					<p>
						<a href="#">내 예약</a>
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
	);
}

export default Header;
