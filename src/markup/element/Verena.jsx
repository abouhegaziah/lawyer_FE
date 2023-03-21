import React, { useState, useEffect } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { Slide } from "./testimonial.jsx";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./verena.css";
import img1 from "../../assets/images/6X9A0396.00_00_20_08.Still001.jpg";

const Verena = ({ data }) => {
  //   const data = [
  //     {
  //       image: ` ${img1}`,
  //       text: (
  //         <Link to="/blog1" style={{ textDecoration: "none", color: "#fff" }}>
  //           {" "}
  //           <p style={{ fontSize: "22px", fontWeight: "bolder" }}>
  //             {" "}
  //             Episode 1 title
  //             <br /> <span> Episode #5</span>
  //           </p>{" "}
  //         </Link>
  //       ),
  //     },
  //     {
  //       image: `${img1}`,
  //       text: (
  //         <Link to="/blog3" style={{ textDecoration: "none", color: "#fff" }}>
  //           <p style={{ fontSize: "22px", fontWeight: "bolder" }}>
  //             Episode 1 title
  //             <br /> <span> Episode #5</span>
  //           </p>{" "}
  //         </Link>
  //       ),
  //     },
  //     {
  //       image: `${img1}`,
  //       text: (
  //         <Link to="/blog2" style={{ textDecoration: "none", color: "#fff" }}>
  //           {" "}
  //           <p style={{ fontSize: "22px", fontWeight: "bolder" }}>
  //             Episode 1 title
  //             <br /> <span> Episode #5</span>
  //           </p>{" "}
  //         </Link>
  //       ),
  //     },
  //     // {
  //     //     image : `${blog1}` ,
  //     //     text: `With Numbers: What is the average salary and lifestyle of a physician in the USA?

  //     //     elmorshedy | 10 January, 2023`,

  //     // },
  //   ];
  function stuff() {
    // ref.current?.goNext();
  }

  const ref = React.useRef(StackedCarousel);
  useEffect(() => {
    setInterval(1000);
    console.log("i fire once");
  }, []);

  return (
    <>
      <div className="card card-carrier">
        <div style={{ position: "relative" }}>
          <ResponsiveContainer
            carouselRef={ref}
            dots={true}
            render={(width, carouselRef) => {
              let currentVisibleSlide = 3;
              if (width <= 1280) currentVisibleSlide = 3;
              if (width <= 720) currentVisibleSlide = 1;
              return (
                <StackedCarousel
                  dots={true}
                  ref={carouselRef}
                  slideComponent={Slide}
                  slideWidth={565}
                  carouselWidth={width}
                  data={data}
                  maxVisibleSlide={5}
                  // useGrabCursor
                  // disableSwipe={false}
                  customScales={[1, 0.75, 0.5, 0.45]}
                  transitionTime={450}
                  currentVisibleSlide={3}
                  fadeDistance={0.1}
                />
              );
            }}
          />
          <div
            className="card-button testimonial-left-button"
            size="small"
            onClick={() => ref.current?.goBack()}
            style={{ backgroundColor: "rgba(209, 100, 26, 1)" }}
          >
            <i class="fal fa-arrow-left "></i>{" "}
          </div>
          <div
            className="card-button testimonial-right-button"
            size="small"
            onClick={() => ref.current?.goNext()}
          >
            <i class="fal fa-arrow-right "></i>
          </div>
          {/* <div className="owlDots text-center" >
            <button role='button' className='owlDot' style={{cursor:'pointer', border:'1px solid #ffc600', width:'12px', height:'12px' ,margin:'5px 5px', borderRadius:'50%', transition:'all .25s', backgroundColor:'#fff'}}></button>
            <button role='button' className='owlDot' style={{cursor:'pointer', border:'1px solid #ffc600', width:'12px', height:'12px' ,margin:'5px 5px', borderRadius:'50%', transition:'all .25s', backgroundColor:'#fff'}}></button>
            <button role='button' className='owlDot' style={{cursor:'pointer', border:'1px solid #ffc600', width:'23px', height:'10px' ,margin:'5px 5px', borderRadius:'10px',backgroundColor:'#ffc600', transition:'all .25s'}}></button>
            <button role='button' className='owlDot' style={{cursor:'pointer', border:'1px solid #ffc600', width:'12px', height:'12px' ,margin:'5px 5px', borderRadius:'50%', transition:'all .25s', backgroundColor:'#fff'}}></button>

        </div> */}
        </div>
      </div>
    </>
  );
};
export default Verena;
