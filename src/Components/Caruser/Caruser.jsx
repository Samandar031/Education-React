import React from 'react';
import "./Caruser.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngry, faCoffee } from '@fortawesome/free-solid-svg-icons';
import img from "../../img/woliul-hasan-atNNDyP-3hE-unsplash.jpg"
import img1 from "../img/woliul-hasan-atNNDyP-3hE-unsplash.jpg"




const Caruser = ({img}) => {
  return (
    <div className="Caruser">
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faAngry}></FontAwesomeIcon>
          <img src={img}/>
          <img src={img1} />

       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..."/>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">          
          </span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  
  );
};

export default Caruser;