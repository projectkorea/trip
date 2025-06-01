import { create } from 'zustand';

interface PlanState {
  progress: number;
  canNext: boolean;
  selections: {
    step1: 'domestic' | 'foreign';
    step2: string;
    step3: 'daytrip' | '2night_3day' | '3night_4day' | '4night_5day' | '5night_6day';
    step4: 'alone' | 'friend' | 'couple' | 'child' | 'parents' | 'other';
    step5: 'activity' | 'hotplace' | 'nature' | 'tourist' | 'shopping' | 'food';
    step6: 'packed_schedule' | 'spacious_schedule';
  };
}

const state: PlanState = {
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

interface PlanActions {
  setNextProgress: () => void;
  setPreviousProgress: () => void;
  setCanNext: (canNext: boolean) => void;
  setSelections: (selections: PlanState['selections']) => void;
  setCanNextByProgressValue: () => void;
  handleSingleClick: (id: string) => void;
  handleMultiClick: (id: string) => void;
  isSingleSelected: (id: string) => boolean;
  isMultiSelected: (id: string) => boolean;
}

const createActions = (set, get): PlanActions => ({
  setNextProgress: () =>
    set((prevState) => ({
      ...prevState,
      progress: prevState.progress + 1,
    })),
  setPreviousProgress: () =>
    set((prevState) => ({
      ...prevState,
      progress: prevState.progress - 1,
      canNext: true,
    })),
  setCanNext: (canNext) => {
    set({ canNext });
  },
  setCanNextByProgressValue: () => {
    const { progress, selections } = get();
    const currentSelection = selections[`step${progress}`];

    if (currentSelection === null) {
      set({ canNext: false });
    } else {
      set({ canNext: true });
    }
  },

  setSelections: (selections) => {
    set({ selections });
  },
  // 1. canNext: true
  // 2. 해당하는 프로그레스에 옵션을 넣어준다
  handleSingleClick: (id) => {
    // progress의 상태 값을 가져온다
    // 상태값에 따라 step1, step2, ..., step6 해당하는 키 값을 가져온다
    // 해당하는 키값에 id 업데이트한다
    const { progress: currentProgress, selections } = get();
    set({
      canNext: true,
      selections: {
        ...selections,
        [`step${currentProgress}`]: id,
      },
    });
  },
  handleMultiClick: (id) => {
    const { progress, selections } = get();
    const optionKeyName = `step${progress}`;
    // step4에 해당하는 값
    const selection = selections[optionKeyName];
    const currentSelection = Array.isArray(selection) ? selection : [];
    const newSelection = currentSelection.includes(id)
      ? currentSelection.filter((item) => item !== id)
      : [...currentSelection, id];

    set({
      canNext: newSelection.length > 0,
      selections: {
        ...selections,
        [optionKeyName]: newSelection,
      },
    });
  },
  isSingleSelected: (id) => {
    const { progress: currentProgress, selections } = get();
    const currentSelection = selections[`step${currentProgress}`];
    return currentSelection === id;
  },
  isMultiSelected: (id) => {
    const { progress, selections } = get();
    const optionKeyName = `step${progress}`;
    const selection = selections[optionKeyName];
    return Array.isArray(selection) && selection.includes(id);
  },
});

const usePlan = create<PlanState & PlanActions>((set, get) => ({
  ...state,
  ...createActions(set, get),
}));

export default usePlan;
