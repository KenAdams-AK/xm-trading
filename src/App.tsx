import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
