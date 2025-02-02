import { create } from "zustand"

const state = {
  progress: 1,
  canNext: false,
  selections: {
    step1: null, // 국내, 해외
    step2: null, // 지역
    step3: null, // 기간
    step4: null, // 인원
    step5: null, // 선호사항
    step6: null, // 일정
  },
};

const createActions = (set) => ({
  setNextProgress: () => set((prevState) => (
    { ...prevState,
       progress: prevState.progress + 1
    })),
  setCanNext: (canNext) => {
    set({ canNext });
  },
  setSelections: (selections) => {
    set({ selections });
  },
});

const usePlan = create((set) => ({
  ...state,
  ...createActions(set)
}));

export default usePlan;