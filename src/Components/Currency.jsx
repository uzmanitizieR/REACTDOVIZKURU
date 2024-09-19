import React, { useState } from 'react'
import '../Currency.css'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_15lVA5veKzMtV55JDU1avNqbK1cvGylX23jc1BqJ";

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setfromCurrency] = useState('USD');
    const [toCurrency, settoCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const Exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(4);
        setResult(result);
    }

    return (
        <div className='currency-div'>
            <div>
                <h3>Exchange Money App</h3>
            </div>
            <div>
                <input type='number' className='amount'
                    value={amount} onChange={(e) => setAmount(e.target.value)} />

                <select className='from-currency-option' onChange={(e) => setfromCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>
                <FaArrowRight />
                <select className='to-currency-option' onChange={(e) => settoCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result' />
            </div>
            <div>
                <button onClick={Exchange}>Cevir</button>
            </div>
        </div>
    )
}

export default Currency;
