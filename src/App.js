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
  const [maxWidth, , isMobile] = useWindowSize()
  const [height, setHeight] = useState('30')
  const effect = () => {
    if (isMobile) {
      setHeight('0')
    } else {
      setHeight('30')
    }
  }
  useEffect(effect, [maxWidth])
  return <div className="flex flex-col w-full app">
    <Header className={`pl-10 pr-10 h-${height} bb-1 pt-3 pb-3`} />
    <div className={`bg-white wrapper w-full pt-${height}`}>
      {!Web.noBanner && <Banner />}
      <Routes />
    </div>
    <div className="absolute" style={{ bottom: 0, left: 0 }}>

    </div>
    <div className="absolute" style={{ background: 'blue', bottom: 0, right: 0 }}>
      <div className="flex flex-col">
        <i className="f-6 ml-5 fa fa-facebook-official" />
        <i className="fa fa-whatsapp" aria-hidden="true" />
        <i className="f-6 ml-5 fa fa-comments" />
      </div>
    </div>
    {!Web.noFooter && <Kontak className={isMobile ? 'p-3' : 'p-10 pr-20 pl-20'} />}
  </div>
}

export default App