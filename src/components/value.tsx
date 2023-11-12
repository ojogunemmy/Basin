import React from "react";

function ValueOne(props:any){

    return(
   
    // <div className="row justify-content-center m-2" >
    //   <div className="col-md-3 col-sm-12 m-2 value-one" >
    //   Column
    //   </div>
    //   <div className="col-md-3 col-sm-12 m-2 value-one" >
    //   Column
    //   </div>
    //   <div className="col-md-3 col-sm-12 m-2 value-one" >
    //   Column
    //   </div>
    // </div>
<div className="col-md-3 col-sm-12 m-2 value-one" style={{width: "18rem;"}}>
  <div className="card-body m-3">
    <h5 className="card-title mb-3">{props.title || "Title"}</h5>
    <p className="card-text">{props.text || "Text-contents"}</p>
    <a href="/" className="card-link">{props.link || "Links"}</a>
  </div>

</div>
    )

}

function ValueContent(){
    return(
        <div className="row justify-content-center m-2">
        <h1 className="col-12 m-2 value-one" > Who are we? </h1>
        
        <ValueOne title="Our Values" text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae similique. Quaerat vitae quibusdam debitis iusto nisi ea, laboriosam voluptas nostrum dolorem voluptatibus soluta, eligendi natus dolorum corrupti officia voluptates." />
        <ValueOne title="Your Expectations" text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae similique. Quaerat vitae quibusdam debitis iusto nisi ea, laboriosam voluptas nostrum dolorem voluptatibus soluta, eligendi natus dolorum corrupti officia voluptates." />
        <ValueOne title="Our Team" text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae similique. Quaerat vitae quibusdam debitis iusto nisi ea, laboriosam voluptas nostrum dolorem voluptatibus soluta, eligendi natus dolorum corrupti officia voluptates."/>

         
        
        
        </div>
    )

}

export default ValueContent
