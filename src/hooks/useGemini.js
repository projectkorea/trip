import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import usePlan from '@store/usePlan';

const cacheResult = `
{
  "title": "부모님과 함께하는 하와이 5박 6일 여유로운 가족 여행",
  "course": [
    {
      "day": 1,
      "location": "호놀룰루 도착 & 와이키키 해변",
      "activities": ["호놀룰루 국제공항 도착 후 호텔 이동", "와이키키 해변 산책 및 저녁 식사"],
      "notes": "시차 적응을 위해 가벼운 활동 위주로 진행"
    },
    {
      "day": 2,
      "location": "오아후 섬 일주",
      "activities": ["다이아몬드 헤드 전망대 방문", "할로나 블로우홀 & 샌디 비치", "선셋 비치에서 석양 감상"],
      "notes": "렌터카를 이용해 자유롭게 이동"
    },
    {
      "day": 3,
      "location": "진주만 & 폴리네시안 문화 센터",
      "activities": ["진주만 역사 유적지 방문 (USS Arizona Memorial 예약 필수)", "폴리네시안 문화 센터에서 다양한 폴리네시아 문화 체험 및 저녁 식사 쇼 관람"],
      "notes": "진주만은 사전 예약 필수, 폴리네시안 문화 센터는 다양한 액티비티 참여 가능"
    },
    {
      "day": 4,
      "location": "쿠알로아 랜치 & 쇼핑",
      "activities": ["쿠알로아 랜치에서 영화 촬영지 투어 (승마, ATV 등 액티비티 선택 가능)", "알라모아나 센터 또는 와이켈레 프리미엄 아울렛에서 쇼핑"],
      "notes": "쿠알로아 랜치는 다양한 액티비티 선택 가능, 부모님 컨디션에 맞춰 조절"
    },
    {
      "day": 5,
      "location": "여유로운 휴식 & 해양 액티비티",
      "activities": ["와이키키 해변에서 휴식 및 수영", "선택적인 해양 액티비티 (스노클링, 서핑 강습 등)", "로컬 레스토랑에서 저녁 식사"],
      "notes": "부모님의 취향에 맞춰 액티비티 선택, 충분한 휴식 시간 확보"
    },
    {
      "day": 6,
      "location": "출국",
      "activities": ["호텔 체크아웃 후 호놀룰루 국제공항으로 이동", "한국으로 출발"],
      "notes": "공항 도착 시간 여유롭게 확보"
    }
  ],
  "tips": [
    "부모님의 건강 상태를 고려하여 무리한 일정은 피해주세요.",
    "렌터카를 이용하면 이동이 편리하지만, 운전이 익숙하지 않다면 택시 또는 대중교통을 이용하세요.",
    "하와이는 자외선이 강하므로 선크림, 선글라스, 모자를 꼭 챙기세요.",
    "호텔 예약 시 부모님과 함께 묵기에 넓고 편안한 객실을 선택하세요.",
    "여행자 보험 가입은 필수입니다."
  ]
}
`;

const useGemini = () => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const { selections } = usePlan();

  const KEY = process.env.REACT_APP_GEMINI_API_KEY;

  // 이미지 생성 코드
  const genImageAI = new GoogleGenerativeAI(KEY);
  const contents = `${selections.step2}을 여행지 추천 관광상품 패키지 홍보 사진처럼 생성해주세요.`;
  console.log('contents', contents);
  const imageModel = genImageAI.getGenerativeModel({
    model: 'gemini-2.0-flash-exp-image-generation',
    generationConfig: {
      responseModalities: ['Image', 'Text'],
    },
  });

  const systemInstruction =
    '당신은 사용자가 입력한 내용을 바탕으로 취향에 꼭 맞는 일정을 추천해주는 여행 계획 추천 프로그램입니다.';
  const genAI = new GoogleGenerativeAI(KEY, systemInstruction);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const stepValues = Object.values(selections);
  const stringSelections = JSON.stringify(stepValues);
  const prompt = `
    반드시 아래 제공하는 JSON 포맷으로 백틱없이 {title, course, tips} 형식으로 답변하세요.
  ${stringSelections} 조합으로 여행 계획을 작성해주세요.`;

  useEffect(() => {
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
            setImageURL(imageUrl);
          }
        }
        // 최종 프롬프트 사용
        // ```json{내용물}```
        const response = await model.generateContent(prompt);
        const responseString = response.response.text();
        const parsedString = responseString.replace('```json', '').replace('```', '');
        console.log('response TEST', parsedString);
        const parsedResult = JSON.parse(parsedString);
        setResult(parsedResult);

        // 임시 캐시 사용
        // setResult(parsedResult);
        // const parsedResult = JSON.parse(cacheResult);
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

  return { result, loading, error, imageURL };
};

export default useGemini;
