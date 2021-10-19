import { Coin } from './Coin';

export const CoinsList = ({ coins, search }) => {
  const titles = ['#', 'Img', 'Symbol', 'Name', 'Price', '% last 24h'];

  const filtededItems = coins.filter(
    (c) => c.name.toLowerCase().includes(search) || c.symbol.toLowerCase().includes(search)
  );
  console.log(filtededItems);
  return (
    <table className='table table-dark table-striped table-hover text-center bg-gradient'>
      <thead>
        <tr>
          {titles.map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filtededItems?.map((coin, i) => (
          <Coin key={i} coin={coin} i={i} />
        ))}
      </tbody>
    </table>
  );
};
