import styled from 'styled-components';
import {useState} from "react"

const Label = styled.label`
  display: flex;
  width: 256px;
  height: 50px;
  cursor: pointer;
  background-color: #f5f4f4;
  border-radius: 25px;
  border: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  color: #181818;
`;

function Button({ text, id, handleClick, active }) {
  const [state, setState] = useState('');
  return (
    <div
      onClick={() => {
        const activeId = handleClick(id);
        console.log('3. 버튼 안에서 리턴값', activeId);
        setState(activeId);
      }}
    >
      <input type="checkbox" name={id} id={id} />
      <Label htmlFor={id} className={`citytext ${id === state && 'active'}`}>
        {text}
      </Label>
    </div>
  );
}

export default Button;
