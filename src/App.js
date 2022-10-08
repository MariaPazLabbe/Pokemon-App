import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImgProvider from "./context";
import Navbar from "./Components/Navbar";
import Home from "./views/Home";
import SearchPkm from "./views/SearchPkm"
import DetailsPkm from "./Components/DetailsPkm";
import Footer from "./Components/Footer";
import AllPoke from "./views/AllPoke";
import Favorites from "./views/Favorites";

export default function App() {
  return (
    <ImgProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<SearchPkm />} />
          <Route path="/pokemones/:name" element={<DetailsPkm />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ImgProvider>
  );
}
