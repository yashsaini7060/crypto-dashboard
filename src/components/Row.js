const Row = (props) => {
  console.log(props)
  return (
    <>
      <div className="row" key={props?.data?.id}>
        <div className="crypto_name">
          <img src={props?.data?.image} alt="" />
          <p>{props?.data?.name}</p>
        </div>
        <p>{props?.data?.symbol.toUpperCase()}</p>
        <p>${props?.data?.current_price}</p>
        <p>${props?.data?.fully_diluted_valuation}</p>
        <p className={props?.data?.price_change_percentage_24h< 0 ? 'red' : 'green'} >{Math.round(props?.data?.price_change_percentage_24h * 100) / 100}%</p>
        <p>Mkt Cap: ${props?.data?.market_cap}</p>
      </div>
    </>
  )
}

export default Row;