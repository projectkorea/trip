import { useState } from 'react'
import CityProgress from './CityProgress'
import CityNextButton from './CityNextButton'
import CityContents from './CityContents'

function CityPage() {
  const [progressState, setProgressState] = useState(1)
  const [canNextState, setCanNextState] = useState(false)

  return (
    <div class="main-container">
      <CityProgress progressNumber={progressState} />
      <CityContents progressNumber={progressState} />
      <CityNextButton
        setProgressState={setProgressState}
        canNextState={canNextState}
      />
    </div>
  )
}

export default CityPage
