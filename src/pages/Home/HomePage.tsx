import CryptoList from "../../components/CryptoList/CryptoList";
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
    </>
  );
}

export default HomePage;
