import React from 'react';
import Sambutan from "./Sambutan";
import Fasilitas from "./Fasilitas";
import InformasiBerita from './InformasiBerita';
import BoardOfAdvisors from "./BoardOfAdvisors";
import ProgramStudi from "./ProgramStudi";
import StaffPengajar from "./StaffPengajar";
import GaleriKegiatan from "./GaleriKegiatan";
import { useEffect } from 'react';

const Home = props => {
  const effect = () => {
    window.scrollTo({ top: 0 })
  }
  useEffect(effect, [])
  return <div id="home" className="w-full">
    <Sambutan className="xl:p-5" />
    <Fasilitas className="xl:p-5" />
    <ProgramStudi className="xl:p-5" />
    <StaffPengajar className="xl:p-5" />
    <BoardOfAdvisors className="xl:p-5" />
    <InformasiBerita className="xl:p-5" />
    <GaleriKegiatan className="xl:p-5" />
  </div>
}

export default Home
