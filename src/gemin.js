async function callGeminiAPI(prompt, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}

// 사용 예시:
const GEMINI_API_KEY = 'YOUR_API_KEY';

// async/await 사용
try {
  const result = await callGeminiAPI('Explain how AI works', GEMINI_API_KEY);
  console.log(result);
} catch (error) {
  console.error('Error:', error);
}

// Promise 체이닝 사용
callGeminiAPI('Explain how AI works', GEMINI_API_KEY)
  .then((result) => console.log(result))
  .catch((error) => console.error('Error:', error));
