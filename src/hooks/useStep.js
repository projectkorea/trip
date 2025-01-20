/**
 * @summary stepStatus 상태를 받아서 각 단계(progressNumber)별로 필요한 option을 업데이트한다.
 * @param {*} setState
 * @returns handleClick
 * 1. 현재 progress에 따라서 option을 업데이트한다.
 * 2. canNext: true를 시켜 다음 버튼을 누를 수 있게한다.
 */
const useStep = (setStepStatus) => {
  const optionKeyName = ['one', 'two', 'three', 'four', 'five', 'six'];

  // 현재 스탭에 해당되는 option값(id) 을 가져온다
  const getCurrentId = (stepStatus) => {
    console.log('TEST1', stepStatus);
    const currentKey = optionKeyName[stepStatus.progress - 1];
    console.log('TEST2', currentKey);
    console.log('TEST3', stepStatus.option[currentKey]);

    return stepStatus.option[currentKey];
  };

  // 1. canNext:true
  // 2. 현재 progress에 id를 업데이트
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
    return id;
  };

  const handleMultiClick = (id) => {
    console.log('TEST', 'handleMultiClick');

    setStepStatus((prevState) => {
      const { progress } = prevState;
      const optionKey = optionKeyName[progress - 1]
    
      //"내가 누른 것중에 있나?"
      const isArray = Array.isArray(prevState.option[optionKey]); 
    if (isArray && prevState.option[optionKey].includes(id)) {
      // 기존 게 눌리면 제거한다.
      const duplicate = prevState.option[optionKey];
      const result = duplicate.filter((item) => item !== id);
      return {
        ...prevState,
        canNext: result.length > 0 ? true : false,
        option: {
          ...prevState.option,
          [optionKey]: result,
        },
      };
    } else {
      // 새로운 게 눌리면 추가한다.
      //prevState.option[optionKey]
      const duplicate = Array.isArray(prevState.option[optionKey]) ? prevState.option[optionKey] : [];
      console.log('TEST 5', duplicate, id);
      console.log('TEST 6', optionKey, [...duplicate, id]);

      return {
        ...prevState,
        canNext: true,
        option: {
          ...prevState.option,
          [optionKey]: [...duplicate, id],
        },
      };
    }})
  }

  return {
    handleClick,
    handleMultiClick,
    getCurrentId,
  };
};

export default useStep;
