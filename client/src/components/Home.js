import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Menu from './minorComponents/Menu';
import HomeHeader from './minorComponents/HomeHeader';
import LaptopAndSkills from './minorComponents/LaptopAndSkills';
import Skills from './minorComponents/Skills';
import LastWorks from './minorComponents/LastWorks';
import Footer from './minorComponents/Footer';
import Cookie from './minorComponents/Cookie';
import Alert from './components/layout/alert';

const Home = () => {

  return (
    <div className="container-fluid px-0">
      <Menu />
      <HomeHeader />
      <Alert/>
      <LaptopAndSkills />
      <Skills />
      <LastWorks />
      <Footer/>
      <div className="fixed-bottom col-12 p-0 bg-dark">
                <Cookie />
            </div>
      {/*   <div>

        <h2>
          Sites
          </h2>
        {sites.length && sites.map(function (site) {
          return (
            <div key={site._id}>
              <div>
                <h4>{site.title}</h4>
                <small>id: {site._id}</small>

              </div>
              {site.imgCollection.length && site.imgCollection.map((img, i) => {
                return (
                  <div key={i}>
                    <img src={img} alt="Girl in a jacket" width="100" height="100" />
                  </div>
                )
              })
              }
            </div>);
        })}
      </div>*/}
    </div>
  )
}

export default Home;