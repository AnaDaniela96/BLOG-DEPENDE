import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogPost from "@/features/blog/pages/BLogPost";
import BlogList from "@/features/blog/pages/BlogList";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Movies from "@/features/play/movies/pages/Movies";
import MovieDetail from "@/features/play/movies/pages/MovieDetail";
import PlayIndex from "@/features/play/pages/PlayIndex";

import Navbar from "@/components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="/play" element={<PlayIndex />} />
        <Route path="/play/movies" element={<Movies />} />
        <Route path="/play/movies/:id" element={<MovieDetail />} />

        <Route path="/about" element={<About />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
