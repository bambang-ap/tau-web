import React, { useEffect } from "react";
import Routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import actionUi from "./redux/actions/ui";
import Header from "./pages/Header";
import Kontak from "./pages/Kontak";
import Banner from "./pages/Home/Banner";
import useWindowSize, { useToggle } from "src/utils/windowSize";
import { useState } from "react";
import { getManage } from "./utils/api";
import { Link } from "react-router-dom";
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
    <FloatingItem />
    {!Web.noFooter && <Kontak className={isMobile ? 'p-3' : 'p-10 pr-20 pl-20'} />}
  </div>
}

export default App

const FloatingItem = () => {
  const [show, setShow] = useToggle()
  const [manage, setManage] = useState({
    urlRegistrasi: ''
  })
  const btns = [
    ['rgb(18,155,244)', show ? 'times' : 'comments', null],
    ['rgb(77,194,71)', 'whatsapp', manage.kontakWhatsapp],
    ['rgb(0,132,255)', 'facebook-square', manage.kontakFacebook],
  ]
  const getData = async () => {
    const { status, data } = await getManage({ parts: ['urlRegistrasi', 'kontakWhatsapp', 'kontakFacebook'] })
    if (status) {
      setManage(data.reduce((ret, { part, content }) => {
        ret[part] = content
        return ret
      }, {}))
    }
  }
  const UrlRegister = ({ style, className, link = '' }) => {
    const isValid = link.validURL()
    // eslint-disable-next-line jsx-a11y/anchor-has-content, react/jsx-no-target-blank
    return isValid ? <a style={style} className={className} target="_blank" href={link}>KLIK DISINI UNTUK DAFTAR</a> :
      <Link style={style} className={className} to={link}>KLIK DISINI UNTUK DAFTAR</Link>
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <>
    <div className="p-5 fixed" style={{ background: 'rgb(136, 45, 226)', bottom: 0, left: 0 }}>
      <UrlRegister style={{ background: '#f73936' }} className="brd-1 c-light p-3" link={manage.urlRegistrasi} />
    </div>
    <div className="fixed" style={{ bottom: 10, right: 15, zIndex: 9999 }}>
      <div className="flex flex-col-reverse">
        {btns.rMap(([background, icon, link], i) => {
          const props = {
            className: "flex jc-c ai-c pointer p-3 w-15 h-15 brd-10 mt-3",
            style: { background },
            children: <i className={`f-7 c-light fa fa-${icon}`} />
          }
          if (!show && i > 0) return null
          // eslint-disable-next-line jsx-a11y/anchor-has-content, react/jsx-no-target-blank
          return link ? <a href={link} target="_blank" {...props} /> : <div onClick={setShow} {...props} />
        })}
      </div>
    </div>
  </>
}