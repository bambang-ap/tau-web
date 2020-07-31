import React from "react";
import Header from "./pages/Header";
import Routes from "./routes";
import Kontak from "./pages/Kontak";

const App = () => {
  return <div className="app">
    <Header className="pl-30 pr-30 pt-5 pb-5" />
    <Routes className="bg-white pt-21 pl-20 pr-20" />
    <Kontak className="ml-20 mr-20 p-15" />
  </div>
}

export default App