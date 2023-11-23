import React from "react";

function ServiceOne(props:any){

    return(
    <div className="col-6 d-flex justify-content-end mb-2 mt-2 " >

     <div className="w-75 p-2">
     <p className="text-start mb-1">{props.text || "services"}   </p>
     <hr className="mt-1 w-75"/>
     </div>
</div>
    )

}

function ServiceContent(){
    return(
        <div className="row row-cols-md-2 row-cols-sm-2 row-cols-xs-1 mt-4 ">
        <h1 className="col-md-12 col-sm-12 mb-4 d-flex justify-content-center fs-1" > What we do? </h1>
        <ServiceOne  text="Business Name & Company Registration" />
        <ServiceOne  text="Web development" />
        <ServiceOne  text="Web development"/>
        <ServiceOne  text="Web development" />
        <ServiceOne  text="Web development"/>
        </div>
    )

}

export default ServiceContent
