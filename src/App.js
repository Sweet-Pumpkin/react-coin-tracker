import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, [coins]);
  return (
    <div>
      <h1>The {loading ? "" : `${coins.length}`} Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin, index) => 
          <option key={index}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
          </option>
        )}
      </select>
    </div>
  );
}

export default App;
