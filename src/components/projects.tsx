
import React from "react";
import im from "./images/p.jpeg"

function CreateTitle(props:any){
  return(
    <div className="row row-cols-md-2 row-cols-sm-2 row-cols-xs-1 mt-4 ">
    <h1 className="col-md-12 col-sm-12 mb-2 d-flex justify-content-center fs-1" > {props.title} </h1>
    <p className="col-md-12 col-sm-12 mb-4 d-flex justify-content-center">{props.sub}</p>
    </div>
  )
}


function Project(props:any){
  return(
    <>
      <img src={props.image} className="project rounded-2 m-3 h-25 w-25" alt={props.alt||"nil"}  />
    </>
  )
}


function ProjectContents(){
    let Translate = () =>{

      

    }
    return(

      // <div className="projects-view">

      //   <Project image={im} />
      //   <Project image={im} />
      //   <Project image={im} />
      //   <Project image={im} />
      //   <Project image={im} />
      //   <Project image={im} />
      //   <Project image={im} />

        
      //  </div>
      <div id="carouselExample" className="carousel slide  ">
  <div className="projects-view">
       <Project image={im} />
       <Project image={im} />
       <Project image={im} />
       <Project image={im} />
       <Project image={im} />
       <Project image={im} />
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" onClick={Translate} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

       
    )

}

export default ProjectContents
export {CreateTitle}
