import React from 'react';
import "./Education.css"

const Education = () => {
  return (
    <div className='Education'>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Education</h1>
          <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div class="d-grid gap-5 mt-3  justify-content-md-start">

            <div className=" d-flex align-items-start">
              <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
              </div>
            </div>

            <div className=" d-flex align-items-start">
              <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
              </div>
            </div>

            <div className=" d-flex align-items-start">
              <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
              <div>
                <h4 className="fw-bold mb-0">Featured title</h4>
              </div>
            </div>

          </div>
        </div>

        <div class="col-10 col-sm-8 col-lg-6">
          <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default Education;