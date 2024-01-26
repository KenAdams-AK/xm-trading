import { FETCH_STATUS, useCtypto } from "../../hooks/useCrypto";
import CryptoCard from "../../layout/CryptoCard/CryptoCard";
import "./CryptoList.scss";

function CryptoList() {
  const { crypto, status, error } = useCtypto();
  const isLoading = status === FETCH_STATUS.LOADING;
  const isSuccess = status === FETCH_STATUS.SUCCESS;
  const isError = status === FETCH_STATUS.ERROR;

  if (isError)
    console.warn(`Failure to fetch ctypro data with error: ${error}`);

  return (
    <section className="crypto-list">
      {isLoading && <div>Loading...</div>}

      {isSuccess &&
        crypto?.map((item) => (
          <CryptoCard
            key={item.id}
            name={item.name}
            symbol={item.symbol}
            change={item.percent_change_1h}
            price={item.price_usd}
          />
        ))}

      {isError && (
        <>
          <CryptoCard />
          <CryptoCard
            name="Ethereum"
            symbol="ETH"
            price="2204.33"
            change="-10.36"
          />
          <CryptoCard
            name="Ripple"
            symbol="XRP"
            price="0.511311"
            change="-7.19"
          />
          <CryptoCard
            name="Litecoin"
            symbol="LTC"
            price="65.88"
            change="-4.09"
          />
          <CryptoCard
            name="Bitcoin Cash"
            symbol="BCH"
            price="235.45"
            change="-1.28"
          />
        </>
      )}
    </section>
  );
}

export default CryptoList;
