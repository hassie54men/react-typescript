import { useState } from 'react'
import './App.css'
import Button from "./components/Button.tsx";

export default function App() {
  const apiConfig = {
    key: 'fca_live_fCuXdLSDeCeIwwJU0sLqTCutBkrRv0Mp2fGWJH9J',
    url: 'https://api.freecurrencyapi.com/v1/',
  };

  const [value, setValue] = useState('')
  const [valute, setValute] = useState<Record<string, number> | null>(null);

 function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value.toUpperCase())
  }
 async function findValute() {
    const data = await apiValute()
   setValute(data.data)
   console.log(data.data.USD)
  }

  async function apiValute(){
    const response = await fetch(`${apiConfig.url}latest?apikey=${apiConfig.key}&base_currency=${value}`)
    return response.json()
  }


  return (
    <>
      <label htmlFor="">
        <input type="text" placeholder={'введите валюту'} value={value} onChange={changeValue}/>
        <Button onClick={findValute} >найти</Button>
      </label>
        <ul>
          {valute && Object.entries(valute).map(([currency, rate]) => (
             <li key={currency}>{currency}: {rate.toFixed(4)}</li>
          ))}
        </ul>
    </>
  )
}




// import { useState } from 'react';
// import './App.css';
// import Button from './components/Button.tsx';
//
// export default function App() {
//   const [baseCurrency, setBaseCurrency] = useState('');
//   const [rates, setRates] = useState<Record<string, number> | null>(null);
//   const [error, setError] = useState<string | null>(null);
//
//   const apiConfig = {
//     key: 'fca_live_fCuXdLSDeCeIwwJU0sLqTCutBkrRv0Mp2fGWJH9J',
//     url: 'https://api.freecurrencyapi.com/v1/',
//   };
//
//   function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setBaseCurrency(event.target.value.toUpperCase());
//     setError(null); // Сбрасываем ошибку при новом вводе
//   }
//
//   async function fetchRates() {
//     if (!baseCurrency) {
//       setError('Введите код валюты (например, USD)');
//       return;
//     }
//
//     try {
//       const response = await fetch(
//          `${apiConfig.url}latest?apikey=${apiConfig.key}&base_currency=${baseCurrency}`
//       );
//       if (!response.ok) {
//         throw new Error('Ошибка при запросе к API');
//       }
//       const data = await response.json();
//       setRates(data.data); // Сохраняем только объект с курсами
//       setError(null);
//     } catch (err) {
//       setError('Не удалось загрузить курсы. Проверьте код валюты или подключение.');
//       console.error(err);
//     }
//   }
//
//   return (
//      <>
//        <label>
//          <input
//             type="text"
//             placeholder="Введите валюту (например, USD)"
//             value={baseCurrency}
//             onChange={handleInputChange}
//          />
//          <Button onClick={fetchRates}>Найти</Button>
//        </label>
//        {error && <p style={{ color: 'red' }}>{error}</p>}
//        {rates && (
//           <div>
//             <h3>Курсы валют для {baseCurrency}:</h3>
//             <ul>
//               {Object.entries(rates).map(([currency, rate]) => (
//                  <li key={currency}>
//                    {currency}: {rate.toFixed(4)}
//                  </li>
//               ))}
//             </ul>
//           </div>
//        )}
//      </>
//   );
// }