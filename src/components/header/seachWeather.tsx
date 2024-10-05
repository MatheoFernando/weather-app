import { useState, useEffect } from "react"

interface WeatherData {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export default function SeachWeather() {
    const [search, setSearch] = useState<string>('')
    const [weather, setWeather] = useState<WeatherData | null>(null)

    useEffect(() => {
        async function getWeather() {
            try{
                const responseWather = await fetch<WeatherData[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=3f431e93dc825e1ee875ceb6a2d8f572`)
                const data = await responseWather.json()
                setWeather(data[0] || null)
            }catch(err){
                console.log(err)
            }
        }
        getWeather()
    }, [search])
  return (
    <div className="mt-3 flex justify-center items-center flex-col">
      <input
        type="text"
        className="bg-transparent border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500 hover:border-blue-500 transition duration-200 w-1/2 "
        placeholder="Search weather"
        onChange={(e) => setSearch(e.target.value as string)}

      />
      {weather?.name && 
      <div className="bg-white w-1/2 text-slate-700 p-2 rounded-b-md">
     
          <p>City: {weather.name}</p>
          <p>Country: {weather.country}</p>
          <p>Latitude: {weather.lat}</p>
          <p>Longitude: {weather.lon}</p>
    
      </div>
      }
    </div>
  )
}

