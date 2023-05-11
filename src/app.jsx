import { Route } from "wouter";


import "./app.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MemoTest from "./pages/Memotest";
import Wpm from "./pages/Wpm";
import Pokemon from "./pages/Pokemon";

export function App() {
  return (
    <div className=" w-12/12 h-full flex flex-col items-center justify-between">
      <Header />

      <Route path="/">
        <Home />
      </Route>

      <Route path="/memotest" component={MemoTest} />
      <Route path="/wpm" component={Wpm} />
      <Route path="/pokemon" component={Pokemon} />

      <Footer />
    </div>
  );
}
