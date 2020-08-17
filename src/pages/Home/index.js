import React from 'react';
import Sambutan from "./Sambutan";
import Fasilitas from "./Fasilitas";
import InformasiBerita from './InformasiBerita';
import BoardOfAdvisors from "./BoardOfAdvisors";
import ProgramStudi from "./ProgramStudi";
import StaffPengajar from "./StaffPengajar";
import GaleriKegiatan from "./GaleriKegiatan";
import { useState } from 'react';
import { getManage } from 'src/utils/api';
import { useEffect } from 'react';

const Home = props => {
  const [state, _] = useState({})
  const setState = v => _({ ...state, ...v })
  const getData = async () => {
    const { data } = await getManage()
    setState({
      manage: data.reduce((a, b) => {
        a[b.part] = b
        return a
      }, {})
    })
  }
  const effect = () => {
    getData()
    window.scrollTo({ top: 0 })
  }
  useEffect(effect, [])
  return <div id="home" className="w-full">
    <Sambutan state={state} className="p-5" />
    <Fasilitas state={state} className="p-5" />
    <ProgramStudi className="p-5" />
    <StaffPengajar className="p-5" />
    <BoardOfAdvisors className="p-5" />
    <InformasiBerita className="p-5" />
    <GaleriKegiatan className="p-5" />
  </div>
}

export default Home
