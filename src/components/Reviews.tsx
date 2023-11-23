import React from "react";
import im from "./images/p.jpeg"
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { BiSolidQuoteLeft } from "react-icons/bi";

function Review(props:any){

    return(
        //  <div className="col-6 d-flex justify-content-end mb-2 mt-2  project">
          <div className="m-4 text-center project border border-4 border-white p-2 w-200 rounded-3">
          <img src={props.image} className=" border border-4 border-white img-rounded relative" alt=""/>
             <p style={{backgroundColor:"purple"}}> {props.name || "Members Name"} </p>
             <div style={{backgroundColor:"green"}}>
              <IoMdStar/>
              <IoMdStar/>
              <IoMdStar/>
              <IoMdStar/>
              <IoMdStarHalf/>
             </div>
             <div>
              <BiSolidQuoteLeft style={{color:"1654A6"}}/>
             </div>
             <p style={{backgroundColor:"red"}}>{props.msg || "information"}</p>

          </div>
        // </div>
    )

}


function ReviewContents(){
    return(
        <div id="carouselExample" className="carousel slide">
        <div className="review-view p-4">
         
             <Review image={im}  msg="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam fugiat nobis nesciunt soluta, reprehenderit dolore, iure dolorem minima aliquid impedit assumenda! Perferendis autem commodi, in quasi aperiam beatae fugiat quam!"/>
             <Review image={im} />
             <Review image={im} />
             <Review image={im} />
             <Review image={im} />
             <Review image={im} />
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    )
}

export default ReviewContents