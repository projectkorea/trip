import { useNavigate } from 'react-router-dom';

function StartButton({ text = 'text', to }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(to);
  };

  return (
    <button
      type="button"
      className="w-48 h-40 bg-[#036fdc] py-4 px-7 text-base text-white rounded-3xl font-bold cursor-pointer
      flex justify-center items-center transition-all duration-300 ease relative overflow-hidden font-['Roboto']
      shadow-sm hover:bg-[#5ba4fc] hover:shadow-2xl"
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
}

export default StartButton;
