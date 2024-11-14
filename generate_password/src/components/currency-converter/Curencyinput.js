import React from 'react'
import './Curencyinput.css'

function Curencyinput(
    {label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectedCurrency = "usd", className=''}
) {
    console.log('selectedCurrency: ',selectedCurrency);
    console.log('currencyOptions: ',currencyOptions);

    return (
      <div className='currency-input-main'>
        <div className="currency-input-box">
          <div className="d-flex justify-content-between p-2">
            <label>{label}</label>
            <label>Currency Type</label>
          </div>
          <div className="d-flex justify-content-between gap-5">
            <input className="form-control form-control-sm" type="number" value={amount} onChange={(e) => onAmountChange && onAmountChange(e.target.value)}/>
            <select className="form-select form-select-sm" value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange((e) => onCurrencyChange && onCurrencyChange(e.target.value))}>
              {currencyOptions.map((currency) => {
                <option key={currency} value={currency}>
                  {currency}
                </option>
              })}
            </select>
          </div>
        </div>
      </div>
    )
}

export default Curencyinput