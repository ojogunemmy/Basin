import React from "react";

function TeamMember(props:any){

    return(
        <div className="col-6 d-flex justify-content-end mb-2 mt-2 ">
          <div className="col-12 m-2 text-center ">
          <img src={props.image} className="img-thumbnail mb-3" alt=""/>
             <h5 className="col-12 text-center"> {props.name || "Members Name"} </h5>
             <p className="col-12 text-center fs-6">{props.position || "position"}</p>
          </div>
        </div>
 
  
    )

}

function Team(){
    return(
        <div className="row row-cols-md-5 row-cols-sm-2 row-cols-xs-1 mt-4 ">
        <h1 className="col-md-12 col-sm-12 mb-4 d-flex justify-content-center fs-1" > Meet the Team </h1>
        <TeamMember />
        <TeamMember  />
        <TeamMember />
        <TeamMember  />
        <TeamMember />
        <TeamMember />
        <TeamMember  />
        <TeamMember />
        <TeamMember  />
        <TeamMember />
        </div>
    )

}

export default Team
