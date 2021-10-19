export const Coin = ({ coin, i }) => {
  const { name, symbol, image, current_price, price_change_percentage_24h } = coin;
  return (
    <tr className='text-center'>
      <th scope='row'>{i + 1}</th>
      <td>
        <img src={image} alt='coin' style={{ width: '30px' }} className='img-fluid me-1' />
      </td>
      <td className='fw-bold text-muted'>{symbol.toUpperCase()} </td>
      <td>{name} </td>
      <td>{current_price.toLocaleString('us', { style: 'currency', currency: 'COP' })} </td>
      <td className={price_change_percentage_24h < 0 ? 'text-danger' : 'text-success'}>
        % {(price_change_percentage_24h * 100).toFixed(2)}{' '}
        {price_change_percentage_24h < 0 ? (
          <i class='fas fa-arrow-circle-down'></i>
        ) : (
          <i class='fas fa-arrow-circle-up'></i>
        )}
      </td>
    </tr>
  );
};
