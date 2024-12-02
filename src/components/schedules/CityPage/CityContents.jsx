import CityContentOne from './CityContentOne'
import CityContentTwo from './CityContentTwo'
import CityContentThree from './CityContentThree'
import CityContentFour from './CityContentFour'
import CityContentFive from './CityContentFive'
import CityContentSix from './CityContentSix'

function CityContents({ progressNumber }) {
  return (
    <div class="main-wrap">
      {progressNumber === 1 && <CityContentOne />}
      {progressNumber === 2 && <CityContentTwo />}
      {progressNumber === 3 && <CityContentThree />}
      {progressNumber === 4 && <CityContentFour />}
      {progressNumber === 5 && <CityContentFive />}
      {progressNumber === 6 && <CityContentSix />}
    </div>
  )
}

export default CityContents
