import React from "react";
import Intro from "../components/brandIntro";
import Introtwo from "../components/brandintrotwo";
import ValueContent from "../components/values";
import ServiceContent from "../components/services";
import Team from "../components/team";
import ProjectContents, { CreateTitle } from "../components/projects";
import FaqContents from "../components/faq";
import ReviewContents from "../components/Reviews";

function HomeContent(){
    return(
        <>
        <Intro/>
        <Introtwo/>
        <ValueContent/>
        <ServiceContent/>
        <Team/>
        <CreateTitle title="Projects" sub="Latest Completed Jobs"/>
        <ProjectContents/>
        <FaqContents/>
        <ReviewContents/>
       
        </>
    )
}

export default HomeContent