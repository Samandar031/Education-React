import React from 'react';

const Contact = () => {
  return (
    <div>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">

        

          <div class="col-md-10 mx-auto col-lg-5">
            <form class="p-4 p-md-5 border rounded-3 bg-light">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                <textarea class="form-control" width="200px" height="200px" />
                </label>
              </div>
              <button type="button" className="btn btn-success btn-lg px-4 gap-3">Send</button>
             
            </form>
          </div>

          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
            <p class="col-lg-10 fs-4">Below is an example form built en</p>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

              <div className="col-4  align-items-start">
                <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                <div>
                
                  <p>Paragraph of text beneath the heading to explain the heading.</p>
                </div>
              </div>

              <div className="col-4 align-items-start">
                <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                <div>
           
                  <p>Paragraph of text beneath the heading to explain the heading.</p>
                </div>
              </div>

              <div className="col-4 align-items-start">
                <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
                <div>
                 
                  <p>Paragraph of text beneath the heading to explain the heading.</p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;