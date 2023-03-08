import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand1_content = [
  {
    thumb: require("../../assets/images/WhatsApp Image 2023-03-02 at 4.59.59 PM copy.png"),
  },
  {
    thumb: require("../../assets/images/final final logo-2 copy.png"),
  },
  {
    thumb: require("../../assets/images/logo update.png"),
  },
  {
    thumb: require("../../assets/images/logo-dark-neon.png"),
  },
];

class Brand1 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
    };
    return (
      <>
        {/* <!-- Sponsors Section --> */}
        <section class="sponsors-section pt-0">
          <div class="container-fluid">
            {/* <!--Sponsors Carousel--> */}
            <div className="row">
              <div className="col-lg-12">
                <Slider {...settings} className="theme_carousel">
                  {Brand1_content.map((item, id) => (
                    <div class="slide-item" key={id}>
                      <figure class="image-box">
                        <Link to={"/#"}>
                          <img src={item.thumb} alt="" />
                        </Link>
                      </figure>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Brand1;
