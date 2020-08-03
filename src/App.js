import React, { useEffect } from "react";
import Routes from "./routes";
import { useDispatch } from "react-redux";
import actionsUi from "./redux/actions/ui";
import Header from "./pages/Header";
import Kontak from "./pages/Kontak";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionsUi())
  }, [dispatch])

  return <div className="flex flex-wrap w-full app">
    <Header className="pl-10 pr-10 pt-5 pb-5" />
    <div className="bg-white w-full pt-25">
      <Routes />
    </div>
    <Kontak className="p-15" />
  </div>
}

export default App