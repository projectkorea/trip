import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import usePlan from '@store/usePlan';
import { HawaiiData } from '@data/gemini';

const KEY = process.env.REACT_APP_GEMINI_API_KEY + 1;

export default function useGemini() {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const { selections } = usePlan();

  // 이미지 생성 코드
  const genImageAI = new GoogleGenerativeAI(KEY);
  const contents = `${selections.step2}을 여행지 추천 관광상품 패키지 홍보 사진처럼 생성해주세요.`;
  const imageModel = genImageAI.getGenerativeModel({
    model: 'gemini-2.0-flash-exp-image-generation',
    generationConfig: {
      responseModalities: ['Image', 'Text'],
    },
  });

  // 글자 생성 코드
  const systemInstruction =
    '당신은 사용자가 입력한 내용을 바탕으로 취향에 꼭 맞는 일정을 추천해주는 여행 계획 추천 프로그램입니다.';
  const genAI = new GoogleGenerativeAI(KEY, systemInstruction);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
  const stepValues = Object.values(selections);
  const stringSelections = JSON.stringify(stepValues);
  const prompt = `반드시 아래 제공하는 JSON 포맷으로 백틱없이 {title, course, tips} 형식으로 답변하세요.
      ${stringSelections} 조합으로 여행 계획을 작성해주세요.`;

  const fetchData = async () => {
    try {
      setLoading(true);

      // 이미지 생성 코드
      const responseImage = await imageModel.generateContent(contents);
      for (const part of responseImage.response.candidates[0].content.parts) {
        if (part.text) {
          console.log(part.text);
        } else if (part.inlineData) {
          // Base64 이미지 데이터를 직접 사용
          const imageData = part.inlineData.data;
          // Base64 이미지 URL 생성
          const imageUrl = `data:image/png;base64,${imageData}`;
          // 이미지 결과 저장
          setImageURL(imageUrl);
        }
      }

      // 글자 생성 코드
      const response = await model.generateContent(prompt);
      const responseString = response.response.text();
      const parsedString = responseString.replace('```json', '').replace('```', '');
      const parsedResult = JSON.parse(parsedString);

      // 글자 결과 저장
      setResult(parsedResult);
    } catch (err) {
      setError(err.message || '에러가 발생했습니다');
      setResult(JSON.parse(HawaiiData));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { result, loading, error, imageURL };
}
