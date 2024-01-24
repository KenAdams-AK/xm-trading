import CryptoList from "../../components/CryptoList/CryptoList";
import Hero from "../../modules/Hero/Hero";
import WhyTrade from "../../modules/WhyTrade/WhyTrade";

function HomePage() {
  return (
    <>
      <Hero />
      <CryptoList />
      <WhyTrade />
    </>
  );
}

export default HomePage;
