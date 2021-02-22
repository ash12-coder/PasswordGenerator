import React, {useState} from 'react';
import Generator from './Generator';
import Strongpass from './Strongpassword';
import About from './Aboutgenerator';
import Footer from './footer';
const App = () =>{

    return(
        <>
        <Generator/>
        <Strongpass/>
        <About/>
        <Footer/>
          </>
    )
}
export default App;