import React, { Fragment } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {setLang} from "../actions"
import Menu from './minorComponents/Menu';
import HomeHeader from './minorComponents/HomeHeader';
import LaptopAndSkills from './minorComponents/LaptopAndSkills';
import Skills from './minorComponents/Skills';
import LastWorks from './minorComponents/LastWorks';
import Footer from './minorComponents/Footer';
import Cookie from './minorComponents/Cookie';
import Alert from './minorComponents/layout/alert';

const Home = () => {

  return (
    <div className="container-fluid px-0">
      <Menu />
      <Alert />
      <HomeHeader />
      <LaptopAndSkills />
      <Skills />
      <LastWorks />
      <Footer />
      <div className="fixed-bottom col-12 p-0 bg-dark">
        <Cookie />
      </div>
    </div>
  )
}

export default Home;