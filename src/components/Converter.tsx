import {useState} from "react";
import Button from "./Button";

export default function Converter() {
  const apiConfig = {
    key: 'fca_live_fCuXdLSDeCeIwwJU0sLqTCutBkrRv0Mp2fGWJH9J',
    url: 'https://api.freecurrencyapi.com/v1/',
  };

  const [valueBase, setValueBase] = useState('')
  const [valueRub, setValueRub] = useState('')
  const [valute, setValute] = useState<Record<string, number> | null>(null);
  const [rub, setRub] = useState<number | null>(null);
  const [show, setShow] = useState(false)

  function changeValueBase(event: React.ChangeEvent<HTMLInputElement>) {
    setValueBase(event.target.value.toUpperCase())
  }
  function changeValueRub(event: React.ChangeEvent<HTMLInputElement>) {
    setValueRub(event.target.value.toUpperCase())
  }

  async function apiValute(){
    const response = await fetch(`${apiConfig.url}latest?apikey=${apiConfig.key}&base_currency=${valueBase}`)
    const data = await response.json()
    console.log(data.data)
    setValute(data.data)
  }
  async function apiValuteRub(){
    const response = await fetch(`${apiConfig.url}latest?apikey=${apiConfig.key}&base_currency=${valueRub}&currencies=RUB`)
    const data = await response.json()
    console.log(data.data.RUB)
    setRub(data.data.RUB)
    setShow(true)
    if (valueRub === '') {
      setShow(false)
    }
  }

  return (
     <div className="app-container">
       <h1 className="app-title">Конвертер валют</h1>

       <div className="currency-block">
         <label>
           <input
              type="text"
              placeholder="Введите базовую валюту (USD, EUR...)"
              value={valueBase}
              onChange={changeValueBase}
              maxLength={3}
           />
           <Button onClick={apiValute}>Найти</Button>
           <Button onClick={() => setValute(null)}>Скрыть</Button>
         </label>

         {valute && (
            <ul>
              {Object.entries(valute).map(([currency, rate]) => (
                 <li key={currency} className={currency === 'RUB' ? 'highlight' : ''}>
                   {currency}: {rate.toFixed(4)}
                 </li>

              ))}
            </ul>
         )}
       </div>

       <div className="currency-block">
         <label>
           <input
              type="text"
              placeholder="Введите валюту для конвертации в RUB"
              value={valueRub}
              onChange={changeValueRub}
              maxLength={3}
           />
           <Button onClick={apiValuteRub}>Конвертировать</Button>
         </label>

         {show && rub !== null && (
            <ul>
              <li className="highlight">
                {rub.toFixed(4)} RUB
              </li>
            </ul>
         )}
       </div>
     </div>
  )
}