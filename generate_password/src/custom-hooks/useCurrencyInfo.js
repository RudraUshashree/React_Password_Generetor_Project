import { useEffect, useState } from 'react';

function useCurrencyInfo(currencyInfo) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json")
    .then((res)=> res.json())
    .then((res) => setData(res[currencyInfo]))
    .catch((error) => console.log('error: ',error));
  }, [currencyInfo])
  
  return data;
}

export default useCurrencyInfo