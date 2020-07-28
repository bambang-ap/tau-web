import "./Home.scss"
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

const Home = props => {
  return <ScrollView className="home">
    <Banner />
    <Sambutan />
    <Fasilitas />
    <ProgramStudi />
    <StaffPengajar />
    <BoardOfAdvisors />
    <InformasiBerita />
    <GaleriKegiatan />
    <Kontak />
  </ScrollView>
}

export default Home
