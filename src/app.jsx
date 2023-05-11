import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MemoTest from "./pages/MemoTest";
import Wpm from "./pages/Wpm";
import Pokemon from "./pages/Pokemon";

export function App() {
  return (
    <BrowserRouter>
      <div className=" w-12/12 h-5/6 flex flex-col items-center justify-center">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/memotest" element={<MemoTest />} />
          <Route path="/wpm" element={<Wpm />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
