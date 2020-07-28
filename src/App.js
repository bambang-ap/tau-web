/* eslint-disable import/no-webpack-loader-syntax */
import React from "react";
import Routes from "./routes";
import Header from "./pages/Header";
import Flexbox from "flexbox-react";

const App = () => {
  return <Flexbox className="app" flexDirection="column" minHeight="100vh">
    <Header />
    <Routes />
  </Flexbox>
}

export default App