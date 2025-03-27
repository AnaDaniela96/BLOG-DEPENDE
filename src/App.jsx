import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Movies from "./pages/Movies"

import Navbar from "./components/navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
