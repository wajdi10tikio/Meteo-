import React,{useState} from 'react'
import axios from 'axios';
function App() {
 const [data,setData] = useState({})
 const [location,setLocation] = useState('')

//  mon api 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3d52a45b52e6b5e7791a6bf6d88ece59`


  const searchLocation = (event)=>{
    if (event.key === 'Enter'){

      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data);
      })
      setLocation('')
    }
  }
  return (
    
    <div className="app w-100  text-light ">

      <div className='container'>
        
              <div className='search text-center '>
                <input
                className='input' 
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Enter Location"
                type="text"/>

              </div>

        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
          { data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null  }          
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

{
  data.name != undefined &&
  <div className='bottom d-flex mb-5 justify-content-evenly text-center w-100 p-1 bg-secondary'>
          <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p>: null}
          <p>Feels like</p>
          </div>
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity}%</p>:null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p>:null}
          <p>Wind Speed</p>

          </div>
        </div>

}

        

      </div>
      
    </div>
    
  );
}

export default App;