import React from "react";
import { useHistory } from "react-router-dom";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "./verena.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;
  const history = useHistory();

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;

  console.log(coverImage);
  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
            else {
              history.push("/episodes");
              console.log("Omar Sameh Ali");
            }
          }}
        />
      </div>
      <div style={{ width: "100%", height: 300 }} className="detail fill">
        <div className="discription" style={{ flex: "1" }}>
          <img
            style={{ width: 100, height: "8vh" }}
            alt="j"
            className="cover-image"
            src={coverImage}
            draggable={true}
            dots={true}
          />
          {/* <p
            className="omarSameh"
            style={{ position: "absolute", bottom: "0" }}
          >
            {text}
          </p> */}
        </div>
      </div>
    </div>
  );
});

export default Slide;
