import React from "react";

function ServiceOne(props:any){

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
<div className="col mb-2 mt-2">
 
    <p className="card-text fs-4 text-center text-decoration-underline">{props.text || "services"}</p>
  

</div>
    )

}

function ServiceContent(){
    return(
        <div className="row row-cols-md-3 row-cols-sm-2 row-cols-xs-1 mt-4">
        <h1 className="col-md-12 col-sm-12 mb-4 d-flex justify-content-center fs-1" > What we do? </h1>
        <ServiceOne  text="Web development" />
        <ServiceOne  text="Web development" />
        <ServiceOne  text="Web development"/>
        <ServiceOne  text="Web development" />
        <ServiceOne  text="Web development"/>
        </div>
    )

}

export default ServiceContent
