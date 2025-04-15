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
      </div>
    </header>
  );
}

export default Header;
