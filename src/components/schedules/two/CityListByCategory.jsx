import Button from '@components/cityplan/Button';

function CityListByCategory({ category, cityList, handleClick }) {
  return (
    <div className="foreign_area">
      {cityList
        .filter(({ category: cityCategory }) => cityCategory === category)
        .map((city) => (
          <Button handleClick={handleClick} key={city.id} text={city.text} id={city.id} />
        ))}
    </div>
  );
}

export default CityListByCategory;
