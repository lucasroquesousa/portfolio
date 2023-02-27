import React from "react";
import Header from "./components/header/Header";
import { GlobalStyle } from "./styles/globalStyles";
import SlideApp from "./components/slideCarrousell/Carrousell";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
