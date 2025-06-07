import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

// 메인 컨테이너 - 전체 페이지 레이아웃
export const MainContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-white lg:py-20">
      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

// 섹션 컨테이너 - 각 섹션을 구분하는 컨테이너
export const SectionContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-16 lg:mb-24">
      {children}
    </div>
  );
};

// 텍스트 콘텐츠 영역
export const TextContentArea: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg lg:max-w-none">
      {children}
    </div>
  );
};

// 서브 타이틀
export const SubTitle: React.FC<ContainerProps> = ({ children }) => {
  return (
    <h3 className="font-['Nanum_Gothic'] text-lg lg:text-xl text-[#3b90f9] font-bold mb-4 tracking-wide">{children}</h3>
  );
};

// 메인 타이틀
export const MainTitle: React.FC<ContainerProps> = ({ children }) => {
  return (
    <h2 className="font-['Nanum_Gothic'] font-bold text-3xl lg:text-5xl xl:text-6xl leading-tight text-[#1a1a1a] mb-8 lg:mb-12">
      {children}
    </h2>
  );
};

// 설명 텍스트 영역
export const DescriptionArea: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full lg:w-auto">{children}</div>;
};

// 설명 제목
export const DescriptionTitle: React.FC<ContainerProps> = ({ children }) => {
  return <p className="text-xl lg:text-2xl font-bold text-[#474747] mb-4 lg:mb-6 tracking-tight">{children}</p>;
};

// 설명 내용
export const DescriptionContent: React.FC<ContainerProps> = ({ children }) => {
  return (
    <h3 className="font-['Nanum_Gothic'] font-normal text-base lg:text-lg leading-relaxed [word-break:keep-all] text-[#787878] max-w-md lg:max-w-lg">
      {children}
    </h3>
  );
};

// 컨텐츠 텍스트박스 영역
export const ContentTextArea: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col items-center text-center max-w-lg lg:max-w-none mb-8 lg:mb-0">{children}</div>
  );
};

// 컨텐츠 타이틀
export const ContentTitle: React.FC<ContainerProps> = ({ children }) => {
  return (
    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-[#333] mb-6 lg:mb-8">
      {children}
    </h2>
  );
};

// 컨텐츠 서브 텍스트
export const ContentSubText: React.FC<ContainerProps> = ({ children }) => {
  return <div className="text-base lg:text-lg font-normal text-[#a2a1a1] mb-4">{children}</div>;
};

// 이미지 컨테이너
export const ImageContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex-1 flex justify-center items-center max-w-lg lg:max-w-none">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">{children}</div>
    </div>
  );
};

// 이미지 래퍼
export const ImageWrapper: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full h-auto">{children}</div>;
};

// CTA 버튼
export const CTAButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className="w-full flex justify-center mt-16 lg:mt-20">
      <button
        onClick={onClick}
        className="w-full max-w-xs lg:max-w-sm h-12 lg:h-14 bg-[var(--color_button_box)] rounded-full font-['Nanum_Gothic'] text-base lg:text-lg font-bold text-white border-none cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
      >
        {children}
      </button>
    </div>
  );
};

// 레거시 컴포넌트들 (하위 호환성을 위해 유지)
export const SubContainer: React.FC<ContainerProps> = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export const BottomText: React.FC<ContainerProps> = ({ children }) => {
  return <DescriptionArea>{children}</DescriptionArea>;
};

export const BottomDescription: React.FC<ContainerProps> = ({ children }) => {
  return <DescriptionTitle>{children}</DescriptionTitle>;
};

export const BottomTitle: React.FC<ContainerProps> = ({ children }) => {
  return <DescriptionContent>{children}</DescriptionContent>;
};

export const ContainerTextbox: React.FC<ContainerProps> = ({ children }) => {
  return <ContentTextArea>{children}</ContentTextArea>;
};

export const ScheduleImage: React.FC<ContainerProps> = ({ children }) => {
  return <ImageContainer>{children}</ImageContainer>;
};

export const Title: React.FC<ContainerProps> = ({ children }) => {
  return <ContentTitle>{children}</ContentTitle>;
};

export const Text: React.FC<ContainerProps> = ({ children }) => {
  return <ContentSubText>{children}</ContentSubText>;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <CTAButton onClick={onClick}>{children}</CTAButton>;
};
