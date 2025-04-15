import { useNavigate } from 'react-router';

function Nav({ modalState, setModalState }) {
  console.log('modalState', modalState);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/schedule');
  };

  return (
    modalState && (
      <nav className="gnb">
        <ul className="gnb_list">
          <button onClick={() => setModalState(false)} className="btn-close" type="button">
            <i className="fa-solid fa-xmark"></i>
          </button>

          <li className="lnb" onClick={handleClick}>
            <a href="">AI 추천 일정보기</a>
          </li>
        </ul>
      </nav>
    )
  );
}

export default Nav;
