// 1,2,3,4,5,6 모두 갖다 쓸것임
// stepStatus 상태를 받아서 각 단계(progressNumber)별로 필요한 option을 업데이트한다.
const useStep = (setState) => {

  const optionKeyName = ['one','two','three','four','five','six']
  const handleClick = (id) => {
    setState((prevState) => {
      const {progress} = prevState;
      const optionKey = optionKeyName[progress - 1]
      
      return {
        ...prevState,
        canNext: true,
        option: {
          ...prevState.option,
          [optionKey]: id,
        },
      }
    })
  }

  return {
    handleClick
  }
}

export default useStep;
