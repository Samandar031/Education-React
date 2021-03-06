import "./Blog.css"
import Title from "../Title/Title";
import "./Blog.scss"

const Blog = () => {
  return (
    <div className='Blog bg-light'>
      <Title title={"Blog"} />
      <div className="album py-5 ">
        <div className="container text-center">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 text-center ">

            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                <div className="card-body">
                <p className="fs-3">Web Design</p>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                <div className="card-body">
                <p className="fs-3">Web Design</p>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                <div className="card-body">
                <p className="fs-3">Web Design</p>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                <div className="card-body">
                <p className="fs-3">Web Design</p>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  
                </div>
              </div>
            </div>



          </div>

          

        </div>
      </div> 

      <div className='Button_container text-center'> 
        <button type="button" className="btn btn-success Blog_button">Primary button</button>
      </div>

    
    </div>
  );
};

export default Blog;