import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogPost from "@/features/blog/pages/BLogPost";
import BlogList from "@/features/blog/pages/BlogList";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Movies from "@/features/play/pages/Movies";
import MovieDetail from "@/features/play/pages/MovieDetail";
import PlayIndex from "./features/play/pages/PlayIndex";

import Navbar from "@/components/navbar";

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

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Daniela — hecho con React + Tailwind
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
