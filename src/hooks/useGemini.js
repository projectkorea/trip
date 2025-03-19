import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const useGemini = (prompt) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const systemInstruction = `
  당신은 여행 계획을 작성하는 여행 계획 작성 프로그램입니다.
  사용자가 입력한 정보를 바탕으로 여행 계획을 작성해주세요.
  `;
  const KEY = process.env.REACT_APP_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(KEY, systemInstruction);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await model.generateContent(prompt);
        setResult(response.response.text());
      } catch (err) {
        setError(err.message || '에러가 발생했습니다');
      } finally {
        setLoading(false);
      }
    };

    if (prompt) {
      fetchData();
    }
  }, [prompt]);

  return { result, loading, error };
};

export default useGemini;
