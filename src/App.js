import React from "react";
import Header from "./pages/Header";
import Routes from "./routes";
import Kontak from "./pages/Kontak";

const App = () => {
  return <div className="app">
    <Header className="pl-10 pr-10 pt-5 pb-5" />
    <div className="container">
      <Routes className="bg-white pt-25" />
      <Kontak className="p-15" />
    </div>
  </div>
}

export default App