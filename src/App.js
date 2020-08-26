import React, { useEffect } from "react";
import Routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import actionUi from "./redux/actions/ui";
import Header from "./pages/Header";
import Kontak from "./pages/Kontak";
import Banner from "./pages/Home/Banner";
import useWindowSize from "src/utils/windowSize";
import { useState } from "react";
const App = () => {
  const dispatch = useDispatch()
  const Web = useSelector(state => state.Web)
  useEffect(() => {
    dispatch(actionUi())
  }, [dispatch])
  const [maxWidth] = useWindowSize()
  const [height, setHeight] = useState('30')
  useEffect(() => {
    if (maxWidth >= 720) {
      setHeight('30')
    } else {
      setHeight('0')
    }
  }, [maxWidth])
  return <div className="flex flex-col w-full app">
    <Header className={`pl-10 pr-10 h-${height} bb-1 pt-5 pb-5`} />
    <div className={`bg-white wrapper w-full pt-${height}`}>
      {!Web.noBanner && <Banner />}
      <Routes />
    </div>
    {!Web.noFooter && <Kontak className="xl:p-15" />}
  </div>
}

export default App