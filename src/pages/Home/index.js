import React from 'react';
import Sambutan from "./Sambutan";
import Fasilitas from "./Fasilitas";
import InformasiBerita from './InformasiBerita';
import BoardOfAdvisors from "./BoardOfAdvisors";
import ProgramStudi from "./ProgramStudi";
import StaffPengajar from "./StaffPengajar";
import GaleriKegiatan from "./GaleriKegiatan";

const Home = props => {
  return <div id="home" className="w-full">
    <Sambutan className="p-5" />
    <Fasilitas className="p-5" />
    <ProgramStudi className="p-5" />
    <StaffPengajar className="p-5" />
    <BoardOfAdvisors className="p-5" />
    <InformasiBerita className="p-5" />
    <GaleriKegiatan className="p-5" />
  </div>
}

export default Home
