// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Row from './components/Row.js';
import Shimmer from './components/Shimmer.js';
function App() {

  const [apiData, setApiData] = useState([]);

  const fetchData = async()=>{

    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const  json = await data.json();
    setApiData(json)
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return apiData.length === 0 ? <Shimmer /> : (
    <div className='cryptoContainer'>
    {apiData.map((crypto) => (
        <Row data={crypto}/>
      ))}
    </div>
  );
}

export default App;
