import React, { useEffect } from "react";
import Routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import actionUi from "./redux/actions/ui";
import Header from "./pages/Header";
import Kontak from "./pages/Kontak";
import Banner from "./pages/Home/Banner";
const App = () => {
  const dispatch = useDispatch()
  const Web = useSelector(state => state.Web)
  useEffect(() => {
    dispatch(actionUi())
  }, [dispatch])

  return <div className="flex flex-wrap w-full app">
    <Header className="pl-10 pr-10 h-30 bb-1 pt-5 pb-5" />
    <div className="bg-white wrapper w-full pt-30">
      {!Web.noBanner && <Banner />}
      <Routes />
    </div>
    {!Web.noFooter && <Kontak className="w-full p-15" />}
  </div>
}

export default App