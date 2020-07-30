import React from 'react';
import ScrollView from 'src/components/ScrollView';
import Banner from './Banner';
import Sambutan from "./Sambutan";
import Fasilitas from "./Fasilitas";
import InformasiBerita from './InformasiBerita';
import BoardOfAdvisors from "./BoardOfAdvisors";
import ProgramStudi from "./ProgramStudi";
import Kontak from "./Kontak";
import StaffPengajar from "./StaffPengajar";
import GaleriKegiatan from "./GaleriKegiatan";
import Flexbox from "flexbox-react";

const Home = props => {
  return <div className="home bg-yellow-500">
    <div className="home-wrapper b-1" flexDirection="column">
      <Sambutan />
      <Fasilitas />
      <ProgramStudi />
      <StaffPengajar />
      <BoardOfAdvisors />
      <InformasiBerita />
      <GaleriKegiatan />
    </div>
    <Kontak />
  </div>
  return <ScrollView className="home">
    {/* <Banner /> */}
    <div className="home-wrapper b-1" flexDirection="column">
      <Sambutan />
      <Fasilitas />
      <ProgramStudi />
      <StaffPengajar />
      <BoardOfAdvisors />
      <InformasiBerita />
      <GaleriKegiatan />
    </div>
    <Kontak />
  </ScrollView>
}

export default Home