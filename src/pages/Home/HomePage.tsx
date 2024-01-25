import CryptoList from "../../components/CryptoList/CryptoList";
import Hero from "../../modules/Hero/Hero";
import RegisterHere from "../../modules/RegisterHere/RegisterHere";
import WhyTrade from "../../modules/WhyTrade/WhyTrade";

function HomePage() {
  return (
    <>
      <Hero />
      <CryptoList />
      <WhyTrade />
      <RegisterHere />
    </>
  );
}

export default HomePage;
