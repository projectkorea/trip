function CityProgress({ stepStatus }) {
  return (
    <div className="nav_bar">
      <div className="nav_number">{stepStatus.progress}/6</div>
    </div>
  )
}

export default CityProgress
