const FilterCar = () => {
  return (
    <div>
      <form className="search-form filter-car">
        <input type="text" placeholder="Pick-up Location" />
        <input type="date" placeholder="Pick-up Date" />
        <input type="date" placeholder="Drop-off Date" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FilterCar;
