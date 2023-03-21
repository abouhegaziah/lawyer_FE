import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Tab } from "react-bootstrap";
import Header from "../layout/header";
import Footer from "../layout/footer";
import HomeSlider1 from "./../element/home-slider1";
import Verena from "../element/Verena";
import axios from "axios";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

// import '../../assets/css/color.css';

import VideoPopup1 from "./../element/video-popup1";
import PortfolioFilter1 from "./../element/portfolio-filter1";

const teambg1 = require("./../../assets/images/background/image-3.jpg");
const newsbg1 = require("./../../assets/images/background/image-4.jpg");
const wellcomebg1 = require("./../../assets/images/resource/image-1.jpg");

class Index extends Component {
  state = {
    // Initially, no file is selected
    latestEps: null,
  };
  componentDidMount() {
    axios
      .get(`http://localhost:4000/episode/latest`)
      .then((res) => {
        console.log(res.data.response);
        let temp = [];
        res.data.response.map((ep) => {
          temp.push({
            image: ` ${ep.image}`,
            // text: (
            //   <Link to="/#" style={{ textDecoration: "none", color: "#fff" }}>
            //     {" "}
            //     <p style={{ fontSize: "22px", fontWeight: "bolder" }}>
            //       {" "}
            //       {ep.title}
            //       <br /> <span> {ep.number}</span>
            //     </p>{" "}
            //   </Link>
            // ),
          });
        });
        this.setState({ latestEps: temp });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <Header />

        {/* <!--Search Popup--> */}
        <div id="search-popup" class="search-popup">
          <div class="close-search theme-btn">
            <span class="flaticon-cancel"></span>
          </div>
          <div class="popup-inner">
            <div class="overlay-layer"></div>
            <div class="search-form">
              <form
                method="post"
                action="http://azim.commonsupport.com/Finandox/index.html"
              >
                <div class="form-group">
                  <fieldset>
                    <input
                      type="search"
                      class="form-control"
                      name="search-input"
                      value=""
                      placeholder="Search Here"
                      required
                    />
                    <input
                      type="submit"
                      value="Search Now!"
                      class="theme-btn"
                    />
                  </fieldset>
                </div>
              </form>
              <br />
              <h3>Recent Search Keywords</h3>
              <ul class="recent-searches">
                <li>
                  <Link to={"/#"}>Finance</Link>
                </li>
                <li>
                  <Link to={"/#"}>Idea</Link>
                </li>
                <li>
                  <Link to={"/#"}>Service</Link>
                </li>
                <li>
                  <Link to={"/#"}>Growth</Link>
                </li>
                <li>
                  <Link to={"/#"}>Plan</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <HomeSlider1 /> */}
        <div className="slider-wrapper">
          <div
            className="slider-content current slide"
            style={{
              background: `url('${require("./../../assets/images/6X9A0396.00_00_59_54.Still006.jpg")}') no-repeat center center`,
              height: "900px",
            }}
          >
            <div className="inner">
              <h1>Making Your Business Idea</h1>
              <h2>
                Afw <span>Malaki </span>
              </h2>
              <div class="text">
                Our company is one of the world’s leading management consulting
                firms. Get in touch here asap.
              </div>
              <div class="btn-box">
                <Link to={"/create-case"} class="theme-btn btn-style-one">
                  <span class="btn-title">-- Register Case--</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Welcome Setion --> */}
        {/* <Carousel /> */}
        <Container style={{ marginBottom: "40px", marginTop: "20px" }}>
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            LATEST EPISODES
          </h1>
          {this.state.latestEps && <Verena data={this.state.latestEps} />}
        </Container>

        {/* <!-- About Section --> */}
        <section class="about-section">
          <div class="auto-container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="image-wrapper">
                  <div class="image-one">
                    <img
                      src={require("../../assets/images/resource/image-2.jpg")}
                      alt=""
                    />
                  </div>
                  <div
                    class="image-two wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <div class="caption">F.</div>
                    <div class="image-outer">
                      <img
                        src={require("../../assets/images/resource/image-3.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="content-box">
                  <div class="sec-title">
                    <div class="sub-title">About Us</div>
                    <h2>
                      MR. <br />
                      Lawyer
                    </h2>
                    <div class="text">
                      <p>
                        With the month of Ramadan rapidly approaching us, the
                        idea of the program A’afw Malaky had counsellor Ahmed el
                        Shaer thinking as he had always longed to spread the
                        feelings of justice, love and forgiveness around him.
                      </p>
                      <p>
                        The program itself is Counsellor EL Shaer’s way for an
                        ongoing charity for the soul of the late counsellor
                        Karim Al-Shaer. A couple of years ago, after a great
                        personal experience Counsellor EL Shaer found inner
                        peace once more when faced with forgiveness from a
                        family member, this has led him to reorganize his
                        thoughts and come up with the finalised version of A’afw
                        Malaky; where he can listen, discuss, help and arbitrate
                        between other people to help them find forgiveness in
                        their hearts and find inner peace just as he did.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="info-column col-md-6">
                      <div class="icon-box">
                        <div class="icon">
                          <img
                            src={require("../../assets/images/icons/icon-1.png")}
                            alt=""
                          />
                        </div>
                        <h5>Phone Number</h5>
                        <h2>+201555599441</h2>
                      </div>
                    </div>
                    <div class="info-column col-md-6">
                      <div class="icon-box">
                        <div class="icon">
                          <img
                            src={require("../../assets/images/icons/icon-2.png")}
                            alt=""
                          />
                        </div>
                        <h5>Email Address</h5>
                        <h2>afwmalaki@gmail</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Services Section --> */}
        {/* <section class="services-section">
          <div class="auto-container">
            <div class="wrapper-box">
              <div class="left-column">
                <div class="services-content">
                  <div class="sec-title light">
                    <div class="sub-title">Our Services</div>
                    <h2>
                      What Actually We <br />
                      Do Here.
                    </h2>
                  </div>
                  <div
                    class="icon-box wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <div class="icon">
                      <img
                        src={require("../../assets/images/icons/icon-3.png")}
                        alt=""
                      />
                    </div>
                    <h2>Capital Market</h2>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </div>
                  </div>
                  <div
                    class="icon-box wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <div class="icon">
                      <img
                        src={require("../../assets/images/icons/icon-4.png")}
                        alt=""
                      />
                    </div>
                    <h2>Insurance & Planning</h2>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </div>
                  </div>
                  <div
                    class="icon-box wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <div class="icon">
                      <img
                        src={require("../../assets/images/icons/icon-5.png")}
                        alt=""
                      />
                    </div>
                    <h2>Financial Strategy</h2>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-column">
                
                <div class="fact-counter">
                  <div class="border-box">
                    <div class="border_top"></div>
                    <div class="border_bottom"></div>
                    <div class="border_middile"></div>
                  </div>
                  <div class="row">
                  
                    <div class="column counter-column col-md-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="icon">
                            <img
                              src={require("../../assets/images/icons/icon-6.png")}
                              alt=""
                            />
                          </div>
                          <div class="count-outer count-box">
                            <CountUp end={90} redraw={true}>
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span class="count-text" ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                            <span>%</span>
                          </div>
                          <div class="counter-title">Business Monitoring</div>
                        </div>
                      </div>
                    </div>

                  
                    <div class="column counter-column col-md-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="icon">
                            <img
                              src={require("../../assets/images/icons/icon-7.png")}
                              alt=""
                            />
                          </div>
                          <div class="count-outer count-box">
                            <CountUp end={71} redraw={true}>
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span class="count-text" ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                            <span>%</span>
                          </div>
                          <div class="counter-title">Business Growth</div>
                        </div>
                      </div>
                    </div>

                    <div class="column counter-column col-md-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="600ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="icon">
                            <img
                              src={require("../../assets/images/icons/icon-8.png")}
                              alt=""
                            />
                          </div>
                          <div class="count-outer count-box">
                            <CountUp end={33} redraw={true}>
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span class="count-text" ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                            <span>%</span>
                          </div>
                          <div class="counter-title">Financial Plan</div>
                        </div>
                      </div>
                    </div>

                  
                    <div class="column counter-column col-md-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="900ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="icon">
                            <img
                              src={require("../../assets/images/icons/icon-9.png")}
                              alt=""
                            />
                          </div>
                          <div class="count-outer count-box">
                            <CountUp end={42} redraw={true}>
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span class="count-text" ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                            <span>%</span>
                          </div>
                          <div class="counter-title">Finance Consulting</div>
                        </div>
                      </div>
                    </div>

                  
                    <div class="column counter-column col-md-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="600ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="icon">
                            <img
                              src={require("../../assets/images/icons/icon-10.png")}
                              alt=""
                            />
                          </div>
                          <div class="count-outer count-box">
                            <CountUp end={69} redraw={true}>
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span class="count-text" ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                            <span>%</span>
                          </div>
                          <div class="counter-title">Data Analysis</div>
                        </div>
                      </div>
                    </div>

                  
                    <div class="column counter-column col-md-6">
                      <div
                        class="inner wow fadeInLeft"
                        data-wow-delay="900ms"
                        data-wow-duration="1500ms"
                      >
                        <div class="content">
                          <div class="icon">
                            <img
                              src={require("../../assets/images/icons/icon-11.png")}
                              alt=""
                            />
                          </div>
                          <div class="count-outer count-box">
                            <CountUp end={10} redraw={true}>
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span class="count-text" ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                            <span>%</span>
                          </div>
                          <div class="counter-title">business Strategy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="author-box"
                  style={{
                    backgroundImage:
                      "url(assets/images/background/image-1.jpg)",
                  }}
                >
                  <div class="author-info">
                    <div class="author-thumb">
                      <img
                        src={require("../../assets/images/resource/author-1.jpg")}
                        alt=""
                      />
                    </div>
                    <h2>Rosalina D. William</h2>
                    <div class="designation">Founder</div>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod..
                    </div>
                  </div>
                  <div class="signature">
                    <img
                      src={require("../../assets/images/resource/signature.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Gallery Section --> */}
        {/* <PortfolioFilter1 /> */}

        {/* <!-- Video Section --> */}
        {/* <VideoPopup1 /> */}

        {/* <!-- Why Choose Us Section --> */}
        <section class="why-chooseus-section">
          <div class="auto-container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="content-box">
                  <div class="sec-title">
                    <div class="sub-title">Why Choose Us</div>
                    <h2>
                      Afw Malaki <br />
                      Purpose !
                    </h2>
                  </div>
                  <Tab.Container defaultActiveKey="first">
                    <Tab.Content className="tabs-content">
                      <Tab.Pane eventKey="first" className="fadeInUp animated">
                        <div class="clearfix">
                          <div class="image">
                            <img
                              src={require("../../assets/images/WhatsApp Image 2023-03-02 at 4.59.59 PM copy.png")}
                              alt=""
                              style={{ width: "6vw" }}
                            />
                          </div>
                          <div class="text">
                            <p>
                              The program itself is Counsellor EL Shaer’s way
                              for an ongoing charity for the soul of the late
                              counsellor Karim Al-Shaer. A few months ago, after
                              a great personal experience Counsellor EL Shaer
                              found inner peace once more when faced with
                              forgiveness from a family member, this has led him
                              to reorganize his thoughts and come up with the
                              finalised version of A’afw Malaky; where he can
                              listen, discuss, help and arbitrate between other
                              people to help them find forgiveness in their
                              hearts and find inner peace just as he did.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="image-wrapper">
                  <div class="image-one">
                    <img
                      src={require("../../assets/images/resource/image-6.jpg")}
                      alt=""
                    />
                  </div>
                  <div class="image-two">
                    <img
                      src={require("../../assets/images/6X9A0396.00_00_20_08.Still001.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Team Section --> */}
        {/* <section
          class="team-section"
          style={{ backgroundImage: "url(" + teambg1 + ")" }}
        >
          <div class="auto-container">
            <div class="sec-title text-center">
              <div class="sub-title">Our Team</div>
              <h2>Leadership Team</h2>
            </div>
            <div class="row">
             
              <div
                class="col-lg-4 team-block-one wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div class="inner-box">
                  <div class="image">
                    <img
                      src={require("../../assets/images/resource/team-1.jpg")}
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <div class="designation">Founder</div>
                    <h3>Rosalina D. William</h3>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </div>
                  </div>
                </div>
              </div>
             
              <div
                class="col-lg-4 team-block-one wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div class="inner-box">
                  <div class="image">
                    <img
                      src={require("../../assets/images/resource/team-2.jpg")}
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <div class="designation">CEO</div>
                    <h3>Velavos H. DesuJa</h3>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </div>
                  </div>
                </div>
              </div>
             
              <div
                class="col-lg-4 team-block-one wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div class="inner-box">
                  <div class="image">
                    <img
                      src={require("../../assets/images/resource/team-1.jpg")}
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <div class="designation">Developer</div>
                    <h3>Abdur Rahman J.</h3>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Contact Section --> */}
        <section class="contact-section">
          <div class="auto-container">
            <div class="row">
              <div class="col-lg-6">
                <div class="sec-title">
                  <div class="sub-title">Write Here</div>
                  <h2>Get In Touch</h2>
                </div>
                {/* <!-- Contact Form--> */}
                <div class="contact-form">
                  <form
                    method="post"
                    action="http://azim.commonsupport.com/Finandox/sendemail.php"
                    id="contact-form"
                  >
                    <div class="row clearfix">
                      <div class="col-md-12 form-group">
                        <label for="name">Enter your name</label>
                        <input
                          type="text"
                          name="username"
                          id="name"
                          placeholder="Enter name here......"
                          required=""
                        />
                        <i class="fas fa-user"></i>
                      </div>

                      <div class="col-md-12 form-group">
                        <label for="email">Enter your email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email here......"
                          required=""
                        />
                        <i class="fas fa-envelope"></i>
                      </div>

                      <div class="col-md-12 form-group">
                        <label for="message">Enter your message</label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Enter message here......"
                        ></textarea>
                        <i class="fas fa-edit"></i>
                      </div>

                      <div class="col-md-12 form-group">
                        <button
                          class="theme-btn btn-style-one"
                          type="submit"
                          name="submit-form"
                        >
                          <span class="btn-title">Get In Touch</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="sec-title">
                  <div class="sub-title">Get Us Here</div>
                  <h2>Contact Us</h2>
                </div>
                <div class="contact-info">
                  <div class="border-box">
                    <div class="border_top"></div>
                    <div class="border_middile"></div>
                  </div>
                  <div class="row">
                    <div class="info-column col-md-6">
                      <div class="icon-box">
                        <div class="icon">
                          <span class="flaticon-email-6"></span>
                        </div>
                        <h3>Email Address</h3>
                        <ul>
                          <li>
                            <Link to={"/mailto:afwmalaki@gmail.com"}>
                              afwmalaki@gmail.com
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="info-column col-md-6">
                      <div class="icon-box">
                        <div class="icon">
                          <span class="flaticon-call-1"></span>
                        </div>
                        <h3>Phone Number</h3>
                        <ul>
                          <li>
                            <Link to={"/tel:+8976765654654"}>
                              +201555599441
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="info-column col-md-6">
                      <div class="icon-box">
                        <div class="icon">
                          <span class="flaticon-location"></span>
                        </div>
                        <h3>Office Address</h3>
                        <ul>
                          <li>
                            12/A, Romania City Town Hall <br />
                            New Joursey, UK
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="info-column col-md-6">
                      <div class="icon-box">
                        <div class="icon">
                          <span class="flaticon-worldwide"></span>
                        </div>
                        <h3>Web Connect</h3>
                        <ul>
                          <li>
                            <Link to={"/http://example.com/"}>example.com</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- News Section --> */}
        {/* <section class="news-section">
          <div
            class="sec-bg"
            style={{ backgroundImage: "url(" + newsbg1 + ")" }}
          ></div>
          <div class="auto-container">
            <div class="sec-title text-center light">
              <div class="sub-title">News</div>
              <h2>News From Resource</h2>
            </div>
            <div class="row">
             
              <div
                class="news-block-one col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div class="inner-box">
                  <div class="image">
                    <Link to={"/#"}>
                      <img
                        src={require("../../assets/images/resource/news-1.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="lower-content">
                    <div class="category">Business</div>
                    <ul class="post-meta">
                      <li>
                        <Link to={"/#"}>
                          <i class="far fa-calendar-alt"></i>24th March 2020
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <i class="far fa-user"></i>By Admin
                        </Link>
                      </li>
                    </ul>
                    <h3>
                      <Link to={"/blog-details"}>
                        UX is best solution for your <br />
                        business & make noise.
                      </Link>
                    </h3>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                      sed do eiusmod temp or incididunt ut labore et dolore
                    </div>
                  </div>
                </div>
              </div>
             
              <div
                class="news-block-one col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div class="inner-box">
                  <div class="image">
                    <Link to={"/#"}>
                      <img
                        src={require("../../assets/images/resource/news-2.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="lower-content">
                    <div class="category">Business</div>
                    <ul class="post-meta">
                      <li>
                        <Link to={"/#"}>
                          <i class="far fa-calendar-alt"></i>26th March 2020
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <i class="far fa-user"></i>By Admin
                        </Link>
                      </li>
                    </ul>
                    <h3>
                      <Link to={"/blog-details"}>
                        Business consultant is involved in the planning.
                      </Link>
                    </h3>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                      sed do eiusmod temp or incididunt ut labore et dolore
                    </div>
                  </div>
                </div>
              </div>
             
              <div
                class="news-block-one col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1200ms"
              >
                <div class="inner-box">
                  <div class="image">
                    <Link to={"/#"}>
                      <img
                        src={require("../../assets/images/resource/news-3.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="lower-content">
                    <div class="category">Business</div>
                    <ul class="post-meta">
                      <li>
                        <Link to={"/#"}>
                          <i class="far fa-calendar-alt"></i>28th March 2020
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <i class="far fa-user"></i>By Admin
                        </Link>
                      </li>
                    </ul>
                    <h3>
                      <Link to={"/blog-details"}>
                        Business consultant is a professional who analyzes.
                      </Link>
                    </h3>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                      sed do eiusmod temp or incididunt ut labore et dolore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Award Section --> */}
        {/* <section class="award-section pt-0">
          <div class="year">2020</div>
          <div class="auto-container">
            <div class="sec-title text-center">
              <div class="sub-title">Awards</div>
              <h2>Get Awards</h2>
            </div>
            <div class="award-image">
              <div class="row align-items-center">
                <div class="col-lg-4">
                  <div
                    class="image wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src={require("../../assets/images/resource/award-1.png")}
                      alt=""
                    />
                  </div>
                  <div
                    class="image wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src={require("../../assets/images/resource/award-2.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-4 order-lg-2">
                  <div
                    class="image wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src={require("../../assets/images/resource/award-3.png")}
                      alt=""
                    />
                  </div>
                  <div
                    class="image wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src={require("../../assets/images/resource/award-4.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  class="col-lg-4 wow zoomIn"
                  data-wow-delay="200ms"
                  data-wow-duration="1200ms"
                >
                  <div class="image">
                    <img
                      src={require("../../assets/images/resource/award-5.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="feature-image">
              <div class="image-one">
                <img
                  src={require("../../assets/images/resource/image-7.jpg")}
                  alt=""
                />
              </div>
              <div class="image-two">
                <img
                  src={require("../../assets/images/resource/image-8.jpg")}
                  alt=""
                />
              </div>
              <div class="image-three">
                <img
                  src={require("../../assets/images/resource/image-9.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section> */}

        <Footer />
      </>
    );
  }
}
export default Index;
