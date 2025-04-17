import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries');
      setCountries(response.data);
      setFilteredCountries(response.data); 
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  };

  const filterData = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = countries.filter((country) =>
      country.common.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filtered);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={filterData}
          placeholder="Search countries..."
          className="border p-2 m-4"
        />
      </div>
      <div className="border border-b-2 flex flex-wrap">
        {filteredCountries.map((country, index) => (
          <div
            key={index}
            className="countryCard flex flex-col items-center justify-center border border-gray-300 p-4 m-2"
          >
            <div className="flex flex-row">
              <img src={country.png} alt={country.common} className="w-10 h-10" />
            </div>
            <h2 className="text-normal font-semibold text-balance">{country.common}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
