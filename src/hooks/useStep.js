/**
 * @summary stepStatus 상태를 받아서 각 단계(progressNumber)별로 필요한 option을 업데이트한다.
 * @param {*} setState
 * @returns handleClick
 * 1. 현재 progress에 따라서 option을 업데이트한다.
 * 2. canNext: true를 시켜 다음 버튼을 누를 수 있게한다.
 */
const useStep = (setStepStatus) => {
  const optionKeyName = ['one', 'two', 'three', 'four', 'five', 'six'];

  // 단일 선택용 현재 선택 확인
  const isSingleSelected = (stepStatus, id) => {
    const currentKey = optionKeyName[stepStatus.progress - 1];
    return stepStatus.option[currentKey] === id;
  };

  // 다중 선택용 포함 여부 확인
  const isMultiSelected = (stepStatus, id) => {
    const currentKey = optionKeyName[stepStatus.progress - 1];
    const currentSelections = stepStatus.option[currentKey];
    return Array.isArray(currentSelections) && currentSelections.includes(id);
  };

  // 단일 선택용
  const handleClick = (id) => {
    setStepStatus((prevState) => {
      const { progress } = prevState;
      const optionKey = optionKeyName[progress - 1];
      return {
        ...prevState,
        canNext: true,
        option: {
          ...prevState.option,
          [optionKey]: id,
        },
      };
    });
  };

  // 다중 선택용
  const handleMultiClick = (id) => {
    setStepStatus((prevState) => {
      const { progress } = prevState;
      const optionKey = optionKeyName[progress - 1];

      const currentSelections = Array.isArray(prevState.option[optionKey]) ? prevState.option[optionKey] : [];

      const newSelections = currentSelections.includes(id)
        ? currentSelections.filter((item) => item !== id)
        : [...currentSelections, id];

      return {
        ...prevState,
        canNext: newSelections.length > 0,
        option: {
          ...prevState.option,
          [optionKey]: newSelections,
        },
      };
    });
  };

  return {
    handleClick,
    handleMultiClick,
    isSingleSelected,
    isMultiSelected,
  };
};

export default useStep;
