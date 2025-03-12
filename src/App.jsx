import './style.css';
import './schedule.css';
import './common.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    async function call() {
      const genAI = new GoogleGenerativeAI('API키');
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const prompt = '너 작동되니? 되면 귀엽게 대답해봐.';

      const result = await model.generateContent(prompt);
      console.log(result.response.text());
    }
    // call();
  }, []);

  return (
    <>
      <Header setModalState={setModalState} />
      <Nav modalState={modalState} setModalState={setModalState} />
      <Main />
    </>
  );
}

export default App;
