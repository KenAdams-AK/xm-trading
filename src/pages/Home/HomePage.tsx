import CryptoList from "../../components/CryptoList/CryptoList";
import BigFair from "../../modules/BigFair/BigFair";
import EventGallery from "../../modules/EventGallery/EventGallery";
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
      <EventGallery />
      <BigFair />
    </>
  );
}

export default HomePage;
