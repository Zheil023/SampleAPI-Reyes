import './style.css'
import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react';


function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
   axios.get('https://api.sampleapis.com/beers/ale')
    .then(response => {
      setDatas(response.data);
      console.log(datas);
    } )
  }, []);
 

  return (
   <div className='center'>{datas.map((data) => (
    <div>
      <h1>{data.price}</h1>
      <h1>{data.name}</h1>
      <img src={data.image} alt="" />

    </div>
   ))}</div>
  )
}

export default App
