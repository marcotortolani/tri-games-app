import { HashRouter, Routes, Route } from "react-router-dom";

import "./app.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MemoTest from "./pages/MemoTest";
import Wpm from "./pages/Wpm";
import Pokemon from "./pages/Pokemon";

export function App() {
  return (
    <HashRouter>
      <div className=" w-12/12 h-screen flex flex-col items-center justify-around">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memotest" element={<MemoTest />} />
          <Route path="/wpm" element={<Wpm />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}
