import { FETCH_STATUS, useCtypto } from "../../hooks/useCrypto";
import CryptoCard from "../../layout/CryptoCard/CryptoCard";
import "./CryptoList.scss";

function CryptoList() {
  const { crypto, status, error } = useCtypto();
  const isLoading = status === FETCH_STATUS.LOADING;
  const isSuccess = status === FETCH_STATUS.SUCCESS;
  const isError = status === FETCH_STATUS.ERROR;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) console.warn(error);

  return (
    <section className="crypto-list">
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
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
        </>
      )}
    </section>
  );
}

export default CryptoList;
