import {useEffect, useState} from "react";
import * as React from "react";
import './RickAndMorty.css'

interface Character {
  id: number;
  name: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
}

interface ApiResponse {
  results: Character[];
}

export default function RickAndMorty(){
  const [result, setResult] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const result = await  res.json()
      setResult(result)
      console.log(result)
    }
    fetchData()
    console.log(result)

  }, []);

  return(
     <ul className='card-list'>
       {result && result.results.map((item, index) => (
          <li key={index} className='card-item'>
            <p>{item.name}</p>
            <p>{item.gender}</p>
            <p>{item.location.name}</p>
            <img
               src={item.image}
               alt=""
               style={{width: '100px', height: '100px'}}
            />
          </li>
       ))}
     </ul>
  )
}