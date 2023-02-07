import React from "react";
import Header from "./components/header/Header";
import { GlobalStyle } from "./styles/globalStyles";
import SlideApp from "./components/slideCarrousell/Carrousell";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
