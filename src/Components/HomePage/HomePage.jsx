import React from 'react';
import "./HomePage.css"
import img1 from "../img/woliul-hasan-atNNDyP-3hE-unsplash.jpg"

const HomePage = () => {
  return (
    <div className='HomePage'>
      {/* <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap,  extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-success btn-lg px-4 gap-3">Primary button</button>
          </div>
        </div>
      </div>  */}

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        
      </div>
    </div>
  );
};

export default HomePage;


{/* <div className="px-4 py-5 my-5 text-center">
<h1 className="display-5 fw-bold">Centered hero</h1>
<div className="col-lg-6 mx-auto">
  <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap,  extensive prebuilt components, and powerful JavaScript plugins.</p>
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" className="btn btn-success btn-lg px-4 gap-3">Primary button</button>
  </div>
</div>
</div>   */}



// <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">

// <div class="carousel-indicators">
//   <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
//   <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
//   <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
// </div>

// <div class="carousel-inner">

//   <div class="carousel-item">
//     <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

//     <div class="container">
//       <div class="carousel-caption text-start">
//         <div className="px-4 py-5 my-5 text-center">
//           <h1 className="display-5 fw-bold">Centered hero</h1>

//           <div className="col-lg-6 mx-auto">
//             <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap,  extensive prebuilt components, and powerful JavaScript plugins.</p>
//             <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//               <button type="button" className="btn btn-success btn-lg px-4 gap-3">Primary button</button>
//             </div>
//           </div>
//         </div> 
//       </div>
//     </div>
//   </div>

//   <div class="carousel-item">
//     <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

//     <div class="container">
//       <div class="carousel-caption">
//         <h1>Another example headline.</h1>
//         <p>Some representative placeholder content for the second slide of the carousel.</p>
//         <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
//       </div>
//     </div>
//   </div>

//   <div class="carousel-item active">
//     <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

//     <div class="container">
//       <div class="carousel-caption text-end">
//         <h1>One more for good measure.</h1>
//         <p>Some representative placeholder content for the third slide of this carousel.</p>
//         <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
//       </div>
//     </div>
//   </div>

// </div>


// </div>