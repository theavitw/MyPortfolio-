import React from 'react'
import Footer from '../footer'
import Avbar from '../navbar/Navbar'
import './abc.css'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Python() {
  return (
    <>
    <Avbar />
    <div className="project-card">
      <div className="project-image-container">
        {/* <img src="https://assets.awwwards.com/awards/submissions/2020/02/5e469a5f90b1c614158410.jpg"/> */}
        <div className="project-card-overlay c1">
          <div className="project-card-text">
            <h2 className="project-title">Calculator</h2>
            <p className="project-description">Python Based Calculator </p>
            <p>PYTHON</p>
            <a href="https://github.com/theavitw/Text-editor.git"><button className='bg-danger dd'>Github Link</button></a>
          </div>
         </div>
        </div>
        <div className="project-image-container c2">
        {/* <img src="https://assets.awwwards.com/awards/submissions/2020/02/5e469a5f90b1c614158410.jpg"/> */}
        <div className="project-card-overlay ">
          <div className="project-card-text">
            <h2 className="project-title">CollegeGuardian</h2>
            <p className="project-description">FrontEnd Project </p>
            <p>HTML + CSS + JS</p>
            <a href="https://github.com/theavitw/Text-editor.git"><button className='bg-danger dd'>Github Link</button></a>
          </div>
         </div>
        </div>
        <div className="project-image-container c3">
        {/* <img src="https://assets.awwwards.com/awards/submissions/2020/02/5e469a5f90b1c614158410.jpg"/> */}
        <div className="project-card-overlay ">
          <div className="project-card-text">
            <h2 className="project-title">Text-Editor</h2>
            <p className="project-description">Python Based TextEditor Software </p>
            <p>PYTHON</p>
            <a href="https://github.com/theavitw/Text-editor.git"><button className='bg-danger dd'>Github Link</button></a>
          </div>
         </div>
        </div>
      
    </div>
    
    <Footer />
    </>
    
  )
}

export default Python
