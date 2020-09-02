import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from "../actions"
import Menu from './minorComponents/Menu';
import HomeHeader from './minorComponents/HomeHeader';
import LaptopAndSkills from './minorComponents/LaptopAndSkills';
import Skills from './minorComponents/Skills';
import LastWorks from './minorComponents/LastWorks';
import Footer from './minorComponents/Footer';
import Cookie from './minorComponents/Cookie';
import Alert from './minorComponents/layout/alert';

const Home = () => {

  const dispatch = useDispatch()
  const language = useSelector(state => state.language);

  const selectedLang = e => {
    console.log(e.target.value)
    dispatch(setLang(e.target.value))
  }

  return (
    <div className="container-fluid px-0">
      <div>
        <select name="lang" onChange={selectedLang} >
          <option value="fr">Français</option>
          <option value="en">Anglais</option>
        </select>

      </div>
      {language === "fr" && (
        <Fragment>
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
        </Fragment>
      )}

    </div>
  )
}

export default Home;