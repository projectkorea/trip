/**
 * @summary stepStatus 상태를 받아서 각 단계(progressNumber)별로 필요한 option을 업데이트한다.
 * @param {*} setState
 * @returns handleClick
 * 1. 현재 progress에 따라서 option을 업데이트한다.
 * 2. canNext: true를 시켜 다음 버튼을 누를 수 있게한다.
 */
const useStep = (setState) => {
  const optionKeyName = ['one', 'two', 'three', 'four', 'five', 'six'];

  const getCurrentId = (stepStatus) => {
    const currentKey = optionKeyName[stepStatus.progress - 1];
    return stepStatus.option[currentKey];
  };

  const handleClick = (id) => {
    setState((prevState) => {
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
    return id;
  };

  return {
    handleClick,
    getCurrentId,
  };
};

export default useStep;
