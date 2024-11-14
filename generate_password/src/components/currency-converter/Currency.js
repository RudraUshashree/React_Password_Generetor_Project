import React, { useState } from 'react'
import useCurrencyInfo from '../../custom-hooks/useCurrencyInfo';
import Curencyinput from './Curencyinput';
import './Currency.css'

function Currency() {
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [convertedAmt, setConvertedAmt] = useState(0);
    const [fromCurrencyInput, setFromCurrencyInput] = useState("inr");
    const [toCurrencyInput, setToCurrencyInput] = useState("usd");
  
    const currencyInfo = useCurrencyInfo(fromCurrencyInput);
    const currencyOptions = Object.keys(currencyInfo);
  
    const onSwapBtnClick = () => {
      setToCurrencyInput(fromCurrencyInput);
      setFromCurrencyInput(toCurrencyInput);
      setEnteredAmount(convertedAmt);
      setConvertedAmt(enteredAmount);
    }
  
    const onConvertBtnClick = () => {
      // console.log(' currencyInfo[toCurrencyInput]: ', currencyInfo[toCurrencyInput]);
      setConvertedAmt(enteredAmount * currencyInfo[toCurrencyInput]);
    }
  
    return (
      <div className='currency-main p-4'>
          <div className='currency-box'>
              <h2>Currency Converter</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                onConvertBtnClick();
              }}>
                <div>
                  <Curencyinput
                    label="From"
                    amount={enteredAmount}
                    onAmountChange={(amt) => {
                      setEnteredAmount(amt)
                    }}
                    onCurrencyChange={(currency) => {
                      setEnteredAmount(currency)
                    }}
                    selectedCurrency={fromCurrencyInput}
                    currencyOptions={currencyOptions}
                  />
                </div>
                <div className='d-flex align-items-center justify-content-center p-2'>
                  <button className='btn btn-primary' onClick={() => onSwapBtnClick()}>Swap</button>
                </div>
                <div>
                  <Curencyinput
                    label="To"
                    amount={enteredAmount}
                    onAmountChange={(amt) => {
                      setEnteredAmount(amt)
                    }}
                    onCurrencyChange={(currency) => {
                      setEnteredAmount(currency)
                    }}
                    selectedCurrency={toCurrencyInput}
                    currencyOptions={currencyOptions}
                  />
                </div>
                <div className='d-flex align-items-center justify-content-center p-2'>
                  <button className='btn btn-success'>Convert</button>
                </div>
              </form>
          </div>
      </div>
    )
}

export default Currency