import axios from 'axios';
import { useEffect, useState } from 'react';
import { CoinsList } from './components/CoinsList';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const getCoins = async () => {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    setCoins(data);
  };
  useEffect(() => {
    getCoins();
  }, []);
  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };
  return (
    <div className='container mt-5'>
      <input
        type='text'
        onChange={handleChange}
        value={search}
        className='form-control mb-3 text-center bg-dark text-white'
        placeholder='Search a coin'
      />
      <CoinsList coins={coins} search={search} />
    </div>
  );
}

export default App;
