import CryptoCard from "../../layout/CryptoCard/CryptoCard";
import "./CryptoList.scss";

function CryptoList() {
  return (
    <section className="crypto-list">
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
      <CryptoCard />
    </section>
  );
}

export default CryptoList;
