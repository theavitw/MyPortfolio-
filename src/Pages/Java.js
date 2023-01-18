import React from 'react'
import Footer from '../footer'
import './abc.css'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

import roo from "./CV Avit_Desai_page-0001.jpg"
import Avbar from '../navbar/Navbar'


function Java() {
  return (
    <>

    <Avbar />
    <div className='divv'><img src={roo} alt="Resume" className='ggg'/>
    <button type="submit" className='A45 '><a href="https://drive.google.com/file/d/1RhCpRdNRl129_L7kgG61hrVEq-Ohj93O/view?usp=sharing" className='text-decoration-none'>Download</a></button></div>
    <Footer/>
    </>
    
  )
}

export default Java