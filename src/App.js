import React from "react";
import Header from "./pages/Header";
import Routes from "./routes";

const App = () => {
  return <div className="app">
    <Header />
    <Routes className="pt-20 pl-20 pr-20" />
  </div>
}

export default App