import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import './index.css';
import Mist from "./mist.jpg";
import Sunny from "./sunny.jpg";
import Clear from "./clear.jpg";
import Fog from "./fog.jpg";
import Rain from "./rain.jpg";
import Snow from "./snow.jpg";
import Overcast from "./overcast.jpg";
import Cloudy from "./cloudy.jpg";
import axios from 'axios';
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('delhi')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = async(e) => {
    if (e.key === 'Enter') {
      const res = await axios.get(url);
      setData(res.data);
      setLocation('')
      
    }

    
  }
  var date=new Date();

      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var day=date.getDay();
      var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
      var month=date.getMonth();
      var num=date.getDate();
      var year=date.getFullYear();
       

 
  return (

<>
<div className="appp" style={ 
        (data?.weather?data.weather[0].main:null)==="Mist"? {backgroundImage: `url(${Mist})` } 
                                     :  (data?.weather?data.weather[0].main:null)?.includes("Cloud")
                                     ? { backgroundImage: `url(${Cloudy})` }
                                     :  (data?.weather?data.weather[0].main:null)?.includes("Clear")
                                     ? { backgroundImage: `url(${Clear})` }
                                     :  (data?.weather?data.weather[0].main:null)?.includes("Rain")
                                     ? { backgroundImage: `url(${Rain})` }
                                     :  (data?.weather?data.weather[0].main:null)?.includes("Snow")
                                     ? { backgroundImage: `url(${Snow})` }
                                     :  (data?.weather?data.weather[0].main:null)?.includes("Sunny")
                                     ? { backgroundImage: `url(${Sunny})` }
                                     :  (data?.weather?data.weather[0].main:null)?.includes("Fog")
                                     ? { backgroundImage: `url(${Fog})` }
                                     : { backgroundImage: `url(${Overcast})` }
                                     

     }>   


     

      <div className='app'>
      <div className="search">
      <input
      value={location}
      onChange={e => setLocation(e.target.value)}
      onKeyPress={searchLocation}
      placeholder='Search your city...'
      type ="text" />
      </div>
      <div className="container">

      <div className="cityName">{data.name}</div>
      <div className="country">{data.sys?data.sys.country:null}</div>
      <div className="date">{days[day]}, {months[month]} {num}, {year}</div>
      <div className="temp">{data.main?data.main.temp: null}</div>
     
      <div className="desc">{data.weather?<p>{data.weather[0].main}</p>: null}</div>
      <div className="two-columns">
      <p className="two-info">
      Humidity <br />
    {data.main?data.main.humidity: null}
      </p>
      <p className="two-info">
      Pressure<br />
    {data.main?data.main.pressure: null}
      </p>

      <p className="two-info">
      Speed <br />
    {data.wind?data.wind.speed.toFixed(): null}MPH
      </p>
      </div>

      </div>
      </div>
       </div> 
    </>
  );
}

export default App;