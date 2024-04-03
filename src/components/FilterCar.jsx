

const FilterCar = () => {
  return (
    <div>
      <h2>Find Your Perfect Car</h2>
                <form className="search-form">
                    <input type="text" placeholder="Pick-up Location" />
                    <input type="date" placeholder="Pick-up Date" />
                    <input type="date" placeholder="Drop-off Date" />
                    <button type="submit">Search</button>
                </form>
    </div>
  )
}

export default FilterCar
