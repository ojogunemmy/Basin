import React from "react";
import Intro from "../components/brandIntro";
import Introtwo from "../components/brandintrotwo";
import ValueContent from "../components/values";
import ServiceContent from "../components/services";

function HomeContent(){
    return(
        <>
        <Intro/>
        <Introtwo/>
        <ValueContent/>
        <ServiceContent/>
       
        </>
    )
}

export default HomeContent