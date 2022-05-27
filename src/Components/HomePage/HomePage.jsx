import React from 'react';
import "./HomePage.css"
import img1 from "../img/woliul-hasan-atNNDyP-3hE-unsplash.jpg"

const HomePage = () => {
  return (
    <div className='HomePage'>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap,  extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-success btn-lg px-4 gap-3">Primary button</button>
          </div>
        </div>
      </div> 
    </div>
  )
 }

export default HomePage