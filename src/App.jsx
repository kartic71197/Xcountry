import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([]);
  
  useEffect(()=>{
    fetchCountries();
  })

  const fetchCountries = async () =>{
    try {
      const response = await axios.get('https://xcountries-backend.azurewebsites.net/all');
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching data:'.error);
    }
  }

  return (
    <>
      <div className='border border-b-2 flex flex-wrap'>
        {
          countries.map((country,index)=>{
            return (
                <div key={index} className="flex flex-col items-center justify-center border border-gray-300 p-4 m-2">
                  <div className='flex flex-row'>
                    <img src={country.flag} alt={country.name} className='w-10 h-10' />
                  </div>
                  <h1 className='text-normal font-semibold text-balance'>{country.name}</h1>
                </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
