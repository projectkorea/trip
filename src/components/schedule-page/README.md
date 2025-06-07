# Schedule Page Components (Tailwind CSS)

기존 styled-components로 작성된 SchedulePageStyle.jsx를 Tailwind CSS 기반으로 마이그레이션하고 깔끔한 레이아웃으로 개선한 컴포넌트들입니다.

## 컴포넌트 구조

### 레이아웃 컴포넌트
- **MainContainer**: 전체 페이지 컨테이너 (min-height, 중앙 정렬, 반응형)
- **SectionContainer**: 각 섹션을 구분하는 컨테이너 (flex 레이아웃)
- **TextContentArea**: 텍스트 콘텐츠 영역 (왼쪽 정렬 텍스트)
- **DescriptionArea**: 설명 텍스트 영역
- **ContentTextArea**: 컨텐츠 텍스트 영역 (중앙 정렬)
- **ImageContainer**: 이미지 컨테이너 (반응형 이미지)

### 텍스트 컴포넌트
- **SubTitle**: 서브 타이틀 (파란색, 작은 제목)
- **MainTitle**: 메인 타이틀 (대형 제목)
- **DescriptionTitle**: 설명 제목 (중간 크기 볼드)
- **DescriptionContent**: 설명 내용 (일반 텍스트)
- **ContentTitle**: 컨텐츠 제목 (섹션 제목)
- **ContentSubText**: 컨텐츠 서브 텍스트 (회색 텍스트)

### 액션 컴포넌트
- **CTAButton**: 메인 액션 버튼 (호버 효과, 애니메이션)

## 사용법

```tsx
import {
  MainContainer,
  SectionContainer,
  TextContentArea,
  SubTitle,
  MainTitle,
  DescriptionArea,
  DescriptionTitle,
  DescriptionContent,
  ContentTextArea,
  ContentTitle,
  ContentSubText,
  ImageContainer,
  CTAButton,
} from '@/components/schedule-page';

function SchedulePage() {
  const handleClick = () => {
    // 버튼 클릭 처리
  };

  return (
    <MainContainer>
      <SectionContainer>
        <TextContentArea>
          <SubTitle>서브 타이틀</SubTitle>
          <MainTitle>메인 타이틀</MainTitle>
          <DescriptionArea>
            <DescriptionTitle>설명 제목</DescriptionTitle>
            <DescriptionContent>설명 내용</DescriptionContent>
          </DescriptionArea>
        </TextContentArea>
      </SectionContainer>

      <SectionContainer>
        <ContentTextArea>
          <ContentTitle>컨텐츠 제목</ContentTitle>
          <ContentSubText>서브 텍스트</ContentSubText>
        </ContentTextArea>

        <ImageContainer>
          <img src="image.png" alt="설명" className="w-full h-auto object-contain" />
        </ImageContainer>
      </SectionContainer>

      <CTAButton onClick={handleClick}>
        버튼 텍스트
      </CTAButton>
    </MainContainer>
  );
}
```

## 주요 특징

### 🎨 깔끔한 디자인
- **현대적인 레이아웃**: 적절한 여백과 타이포그래피
- **일관된 스타일**: 통일된 색상과 폰트 시스템
- **부드러운 애니메이션**: 버튼 호버/클릭 효과

### 📱 완전한 반응형
- **Desktop (1024px+)**: 가로 레이아웃, 큰 타이포그래피
- **Mobile/Tablet**: 세로 레이아웃, 최적화된 크기
- **lg prefix 사용**: Tailwind의 표준 브레이크포인트

### 🔧 개발자 친화적
- **TypeScript 지원**: 모든 컴포넌트 타입 정의
- **재사용 가능**: 모듈화된 컴포넌트 구조
- **하위 호환성**: 기존 컴포넌트 이름 유지

### 🚀 성능 최적화
- **Pure Tailwind**: 별도 CSS 파일 없음
- **경량 컴포넌트**: 최소한의 DOM 구조
- **빠른 로딩**: 불필요한 의존성 제거

## 스타일링 세부사항

### 색상 시스템
- **Primary Blue**: `#3b90f9` (서브 타이틀)
- **Dark Text**: `#1a1a1a` (메인 타이틀)
- **Medium Text**: `#474747` (설명 제목)
- **Light Text**: `#787878` (설명 내용)
- **Accent Text**: `#a2a1a1` (서브 텍스트)

### 타이포그래피
- **폰트**: Nanum Gothic
- **크기**: 반응형 (모바일: 작게, 데스크톱: 크게)
- **행간**: 읽기 편한 spacing (tight, relaxed)

### 여백 시스템
- **섹션 간격**: 16-24 (4rem-6rem)
- **요소 간격**: 4-12 (1rem-3rem)
- **패딩**: 4-20 (1rem-5rem)

## 레거시 지원

기존 코드와의 호환성을 위해 이전 컴포넌트 이름들도 계속 지원합니다:

```tsx
// 이전 방식 (여전히 작동)
import {
  SubContainer,
  BottomText,
  BottomDescription,
  BottomTitle,
  ContainerTextbox,
  ScheduleImage,
  Title,
  Text,
  Button,
} from '@/components/schedule-page';

// 새로운 방식 (권장)
import {
  SectionContainer,
  DescriptionArea,
  DescriptionTitle,
  DescriptionContent,
  ContentTextArea,
  ImageContainer,
  ContentTitle,
  ContentSubText,
  CTAButton,
} from '@/components/schedule-page';
```

## 실제 사용 예시

### SchedulePage.tsx 구조
```tsx
import { useNavigate } from 'react-router';
import Header from '@common/Header';
import {
  MainContainer,
  SectionContainer,
  TextContentArea,
  SubTitle,
  MainTitle,
  DescriptionArea,
  DescriptionTitle,
  DescriptionContent,
  ContentTextArea,
  ContentTitle,
  ContentSubText,
  ImageContainer,
  CTAButton,
} from '@/components/schedule-page';

function SchedulePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/schedule/cityplan');
  }

  return (
    <>
      <Header isBlack />
      <MainContainer>
        <SectionContainer>
          <TextContentArea>
            <SubTitle>일정 생성 관리</SubTitle>
            <MainTitle>
              나만의 여행 일정,
              <br />
              AI로 간편해졌어요
            </MainTitle>
            <DescriptionArea>
              <DescriptionTitle>어떤 취향이든, 다 맞춰주니까</DescriptionTitle>
              <DescriptionContent>
                어떤 여행 취향이든 간단히 알려만 주세요.
                <br />
                AI는 여러분의 취향에 꼭 맞는 일정을 추천해 드립니다.
              </DescriptionContent>
            </DescriptionArea>
          </TextContentArea>
        </SectionContainer>

        <SectionContainer>
          <ContentTextArea>
            <ContentTitle>
              취향에 맞게 일정을
              <br />
              추천해 드려요!
            </ContentTitle>
            <ContentSubText>순식간에 여행 준비 끝</ContentSubText>
          </ContentTextArea>

          <ImageContainer>
            <img 
              src="images/schedules/main-visual.png" 
              alt="스케줄 관리 이미지"
              className="w-full h-auto object-contain"
            />
          </ImageContainer>
        </SectionContainer>

        <CTAButton onClick={handleClick}>
          AI 추천 일정보기
        </CTAButton>
      </MainContainer>
    </>
  );
}

export default SchedulePage;
```

이제 스타일 코드는 모두 컴포넌트에 캡슐화되어 있고, 페이지 파일은 순수하게 구조만 담당합니다! 