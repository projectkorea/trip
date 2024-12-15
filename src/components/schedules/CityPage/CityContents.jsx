import CityContentOne from './CityContentOne'
import CityContentTwo from './CityContentTwo'
import CityContentThree from './CityContentThree'
import CityContentFour from './CityContentFour'
import CityContentFive from './CityContentFive'
import CityContentSix from './CityContentSix'

function CityContents({ stepStatus, setStepStatus }) {
  return (
    <div className="main-wrap">
      {stepStatus.progress === 1 && (
        <CityContentOne setStepStatus={setStepStatus} />
      )}
      {stepStatus.progress === 2 && (
        <CityContentTwo stepStatus={stepStatus} setStepStatus={setStepStatus} />
      )}
      {stepStatus.progress === 3 && <CityContentThree />}
      {stepStatus.progress === 4 && <CityContentFour />}
      {stepStatus.progress === 5 && <CityContentFive />}
      {stepStatus.progress === 6 && <CityContentSix />}
    </div>
  )
}

export default CityContents
