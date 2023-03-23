import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Tab, Modal } from "react-bootstrap";
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
    name: "",
    email: "",
    message: "",
    show: false,
  };
  componentDidMount() {
    if (!localStorage.getItem("lang")) localStorage.setItem("lang", "arabic");
    axios
      .get(`https://project-sfj2.onrender.com/episode/latest`)
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
  handleMail = (e) => {
    e.preventDefault();
    console.log("here");
    this.setState({ show: true });
    this.setState({ loading: true });
    axios
      .post("https://project-sfj2.onrender.com/case/aboutUs", {
        email: this.state.email,
        name: this.state.name,
        message: this.state.message,
      })
      .then((response) => {
        console.log(response);
        this.setState({ loading: false });
        // props.setFile(response.data.url);
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleOpen = () => {
    this.setState({ show: true });
  };
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
            <div
              className="inner"
              style={{
                display:
                  localStorage.getItem("lang") === "english" ? "" : "flex",
                flexDirection: "column",
                alignItems:
                  localStorage.getItem("lang") === "english" ? "" : "flex-end",
              }}
            >
              <h1>
                {localStorage.getItem("lang") === "english"
                  ? "All things at first appear difficult"
                  : "كل الأشياء في البداية تبدو صعبة"}
              </h1>
              <h2>
                {localStorage.getItem("lang") === "english" ? "Afw" : "عفو"}{" "}
                <span>
                  {localStorage.getItem("lang") === "english"
                    ? "Malaki"
                    : "ملكى  "}{" "}
                </span>
              </h2>
              <div
                class="text"
                style={{
                  paddingRight:
                    localStorage.getItem("lang") === "english" ? "700px" : "0",
                  paddingTop:
                    localStorage.getItem("lang") === "english"
                      ? "unset"
                      : "35px",
                }}
              >
                {localStorage.getItem("lang") === "english"
                  ? "Listen, discuss, help and judge among others to help them find forgiveness in their hearts and find inner peace."
                  : " .استمع وناقش وساعد واحكم من بين الآخرين لمساعدتهم على العثور على المغفرة في قلوبهم وإيجاد السلام الداخلي"}
              </div>
              <div class="btn-box">
                <Link
                  to={"/create-case"}
                  class="theme-btn btn-style-one"
                  style={{
                    width:
                      localStorage.getItem("lang") === "english"
                        ? "20%"
                        : "unset",
                  }}
                >
                  <span
                    class="btn-title"
                    style={{ textAlign: "center", fontSize: "1.4vw" }}
                  >
                    {localStorage.getItem("lang") === "english"
                      ? "  -- Register Case--"
                      : "-- إنشاء قضية -- "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Welcome Setion --> */}
        {/* <Carousel /> */}
        <Container style={{ marginBottom: "40px", marginTop: "20px" }}>
          <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
            {localStorage.getItem("lang") === "english"
              ? "LATEST EPISODES"
              : "أحدث الحلقات"}
          </h1>
          {this.state.latestEps && <Verena data={this.state.latestEps} />}
        </Container>

        {/* <!-- About Section --> */}
        <section class="about-section">
          <div class="auto-container">
            <div
              class="row align-items-center"
              style={{
                flexDirection:
                  localStorage.getItem("lang") === "english"
                    ? "row"
                    : "row-reverse",
              }}
            >
              <div class="col-lg-6">
                <div class="image-wrapper">
                  <div class="image-one">
                    <img
                      src={require("../../assets/images/7H1A2052.JPG")}
                      alt=""
                      style={{ width: "70%" }}
                    />
                  </div>
                  <div
                    class="image-two wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1200ms"
                  >
                    <div class="image-outer">
                      <img
                        src={require("../../assets/images/7H1A2048 Large.jpeg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="content-box">
                  <div
                    class="sec-title"
                    style={{
                      textAlign:
                        localStorage.getItem("lang") === "english"
                          ? "start"
                          : "end",
                    }}
                  >
                    <div
                      class={`sub-title ${
                        localStorage.getItem("lang") === "arabic" && "ar"
                      }`}
                      style={{
                        paddingRight:
                          localStorage.getItem("lang") === "english"
                            ? "0"
                            : "70px",
                      }}
                    >
                      {localStorage.getItem("lang") === "english"
                        ? "About Us"
                        : "معلومات عنا"}
                    </div>
                    <h2>
                      {localStorage.getItem("lang") === "english"
                        ? "MR."
                        : "مستر"}{" "}
                      <br />
                      {localStorage.getItem("lang") === "english"
                        ? "Lawyer"
                        : "لوير"}
                    </h2>
                    <div class="text">
                      <p>
                        {localStorage.getItem("lang") === "english" ? (
                          <>
                            {" "}
                            With the month of Ramadan rapidly approaching us,
                            the idea of the program A’afw Malaky had counsellor
                            Ahmed el Shaer thinking as he had always longed to
                            spread the feelings of justice, love and forgiveness
                            around him.
                          </>
                        ) : (
                          <>
                            .مع اقتراب شهر رمضان بسرعة، كانت فكرة برنامج “عفو
                            ملكي” يفكر فيها المستشار أحمد الشاعر لأنه كان يتوق
                            دائما إلى نشر مشاعر العدل والمحبة والتسامح من حوله.
                          </>
                        )}
                      </p>
                      <p>
                        {localStorage.getItem("lang") === "english" ? (
                          <>
                            {" "}
                            The program itself is Counsellor EL Shaer’s way for
                            an ongoing charity for the soul of the late
                            counsellor Karim Al-Shaer. A couple of years ago,
                            after a great personal experience Counsellor EL
                            Shaer found inner peace once more when faced with
                            forgiveness from a family member, this has led him
                            to reorganize his thoughts and come up with the
                            finalised version of A’afw Malaky; where he can
                            listen, discuss, help and arbitrate between other
                            people to help them find forgiveness in their hearts
                            and find inner peace just as he did.
                          </>
                        ) : (
                          <>
                            البرنامج نفسه هو صدقة جارية على روح المستشار الراحل
                            كريم الشاعر. قبل عامين ، بعد تجربة شخصية رائعة ، وجد
                            المستشار أحمد الشاعر السلام الداخلي مرة أخرى عندما
                            واجه المغفرة من أحد أفراد الأسرة ، مما دفعه إلى
                            إعادة تنظيم أفكاره والتوصل إلى النسخة النهائية من
                            "عفو ملكي" حيث يمكنه الاستماع والمناقشة والمساعدة
                            والتحكيم بين الآخرين لمساعدتهم على العثور على
                            المغفرة في قلوبهم وإيجاد السلام الداخلي تماما كما فع
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="info-column col-md-6">
                      <div
                        class="icon-box"
                        style={{
                          textAlign:
                            localStorage.getItem("lang") === "english"
                              ? "start"
                              : "end",
                          paddingRight:
                            localStorage.getItem("lang") === "english"
                              ? ""
                              : "20%",
                        }}
                      >
                        <div class="icon">
                          <img
                            src={require("../../assets/images/icons/icon-1.png")}
                            alt=""
                          />
                        </div>{" "}
                        <h5>
                          {localStorage.getItem("lang") === "english"
                            ? "Phone Number"
                            : "رقم التليفون"}
                        </h5>
                        <h2>+201555599441</h2>
                      </div>
                    </div>
                    <div class="info-column col-md-6">
                      <div
                        class="icon-box"
                        style={{
                          textAlign:
                            localStorage.getItem("lang") === "english"
                              ? "start"
                              : "end",
                        }}
                      >
                        <div class="icon">
                          <img
                            src={require("../../assets/images/icons/icon-2.png")}
                            alt=""
                          />
                        </div>
                        <h5>
                          {localStorage.getItem("lang") === "english"
                            ? "Email Address"
                            : "البريد الإلكتروني"}
                        </h5>
                        <h2>afwmalaki@gmail.com</h2>
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
            <div
              class="row align-items-center"
              style={{
                flexDirection:
                  localStorage.getItem("lang") === "english"
                    ? "row"
                    : "row-reverse",
              }}
            >
              <div class="col-lg-6">
                <div class="content-box">
                  <div
                    class="sec-title"
                    style={{
                      textAlign:
                        localStorage.getItem("lang") === "english"
                          ? "start"
                          : "end",
                    }}
                  >
                    {/* <div
                      class={`sub-title ${
                        localStorage.getItem("lang") === "arabic" && "ar"
                      }`}
                      style={{
                        paddingRight:
                          localStorage.getItem("lang") === "english"
                            ? "0"
                            : "70px",
                      }}
                    >
                      {localStorage.getItem("lang") === "english"
                        ? "Why Choose Us"
                        : "لماذا تخترتنا"}
                    </div> */}
                    <h2>
                      {localStorage.getItem("lang") === "english"
                        ? " Afw Malaki"
                        : "غاية "}
                      <br />
                      {localStorage.getItem("lang") === "english"
                        ? "Purpose ! "
                        : "!عفو ملكى"}{" "}
                    </h2>
                  </div>
                  <Tab.Container defaultActiveKey="first">
                    <Tab.Content className="tabs-content">
                      <Tab.Pane eventKey="first" className="fadeInUp animated">
                        <div class="clearfix">
                          <div
                            class="text"
                            style={{
                              textAlign:
                                localStorage.getItem("lang") === "english"
                                  ? "start"
                                  : "end",
                            }}
                          >
                            <p>
                              {localStorage.getItem("lang") === "english" ? (
                                <>
                                  {" "}
                                  The program itself is Counsellor EL Shaer’s
                                  way for an ongoing charity for the soul of the
                                  late counsellor Karim Al-Shaer. A few months
                                  ago, after a great personal experience
                                  Counsellor EL Shaer found inner peace once
                                  more when faced with forgiveness from a family
                                  member, this has led him to reorganize his
                                  thoughts and come up with the finalised
                                  version of A’afw Malaky; where he can listen,
                                  discuss, help and arbitrate between other
                                  people to help them find forgiveness in their
                                  hearts and find inner peace just as he did.
                                </>
                              ) : (
                                <>
                                  البرنامج نفسه هو صدقة جارية على روح المستشار
                                  الراحل كريم الشاعر. قبل عامين ، بعد تجربة
                                  شخصية رائعة ، وجد المستشار أحمد الشاعر السلام
                                  الداخلي مرة أخرى عندما واجه المغفرة من أحد
                                  أفراد الأسرة ، مما دفعه إلى إعادة تنظيم أفكاره
                                  والتوصل إلى النسخة النهائية من "عفو ملكي" حيث
                                  يمكنه الاستماع والمناقشة والمساعدة والتحكيم
                                  بين الآخرين لمساعدتهم على العثور على المغفرة
                                  في قلوبهم وإيجاد السلام الداخلي تماما كما فعل.
                                </>
                              )}
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
                      src={require("../../assets/images/7H1A2048 Large.jpeg")}
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
            <div
              class="row"
              style={{
                flexDirection:
                  localStorage.getItem("lang") === "english"
                    ? "row"
                    : "row-reverse",
              }}
            >
              <div class="col-lg-6">
                <div
                  class="sec-title"
                  style={{
                    textAlign:
                      localStorage.getItem("lang") === "english"
                        ? "start"
                        : "end",
                  }}
                >
                  <div
                    class={`sub-title ${
                      localStorage.getItem("lang") === "arabic" && "ar"
                    }`}
                    style={{
                      paddingRight:
                        localStorage.getItem("lang") === "english"
                          ? "0"
                          : "70px",
                    }}
                  >
                    {localStorage.getItem("lang") === "english"
                      ? "Write Here"
                      : "اكتب هنا"}
                  </div>
                  <h2>
                    {" "}
                    {localStorage.getItem("lang") === "english"
                      ? "Get In Touch"
                      : "ابقى على تواصل"}
                  </h2>
                </div>
                {/* <!-- Contact Form--> */}
                <div
                  class="contact-form"
                  style={{
                    marginLeft:
                      localStorage.getItem("lang") === "english" ? "0" : "60px",
                    marginRight:
                      localStorage.getItem("lang") === "english" ? "60px" : "0",
                  }}
                >
                  <form id="contact-form">
                    <div
                      class="row clearfix"
                      style={{
                        textAlign:
                          localStorage.getItem("lang") === "english"
                            ? "start"
                            : "end",
                      }}
                    >
                      <div class="col-md-12 form-group">
                        <label for="name">
                          {localStorage.getItem("lang") === "english"
                            ? "Enter your name"
                            : " أسمك"}
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="name"
                          placeholder={
                            localStorage.getItem("lang") === "english"
                              ? "Enter name here......"
                              : " أدخل الاسم هنا......"
                          }
                          required=""
                          class={
                            localStorage.getItem("lang") === "arabic" && "ar"
                          }
                          onChange={(e) => {
                            this.setState({ name: e.target.value });
                          }}
                        />
                        <i
                          class={`fas fa-user ${
                            localStorage.getItem("lang") === "arabic" && "ar"
                          }`}
                        ></i>
                      </div>

                      <div class="col-md-12 form-group">
                        <label for="email">
                          {localStorage.getItem("lang") === "english"
                            ? "Enter your email"
                            : " بريدك الإلكتروني"}
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder={
                            localStorage.getItem("lang") === "english"
                              ? "Enter email here......"
                              : " أدخل بريدك الإلكترونى هنا......"
                          }
                          required=""
                          class={
                            localStorage.getItem("lang") === "arabic" && "ar"
                          }
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                        <i
                          class={`fas fa-envelope ${
                            localStorage.getItem("lang") === "arabic" && "ar"
                          }`}
                        ></i>
                      </div>

                      <div class="col-md-12 form-group">
                        <label for="message">
                          {localStorage.getItem("lang") === "english"
                            ? "Enter your message"
                            : "أدخل رسالتك"}
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder={
                            localStorage.getItem("lang") === "english"
                              ? "Enter message here......"
                              : " أدخل الرسالة هنا......"
                          }
                          class={
                            localStorage.getItem("lang") === "arabic" && "ar"
                          }
                          onChange={(e) => {
                            this.setState({ message: e.target.value });
                          }}
                        ></textarea>
                        <i
                          class={`fas fa-edit ${
                            localStorage.getItem("lang") === "arabic" && "ar"
                          }`}
                        ></i>
                      </div>

                      <div class="col-md-12 form-group">
                        <button
                          class="theme-btn btn-style-one"
                          onClick={this.handleMail}
                        >
                          <span class="btn-title">
                            {" "}
                            {localStorage.getItem("lang") === "english"
                              ? "Get In Touch"
                              : "تواصل معنا الان"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="sec-title"
                  style={{
                    textAlign:
                      localStorage.getItem("lang") === "english"
                        ? "start"
                        : "end",
                  }}
                >
                  <div
                    class={`sub-title ${
                      localStorage.getItem("lang") === "arabic" && "ar"
                    }`}
                    style={{
                      paddingRight:
                        localStorage.getItem("lang") === "english"
                          ? "0"
                          : "70px",
                    }}
                  >
                    {localStorage.getItem("lang") === "english"
                      ? "Get Us Here"
                      : "احصل علينا هنا"}
                  </div>
                  <h2>
                    {" "}
                    {localStorage.getItem("lang") === "english"
                      ? "Contact Us"
                      : "اتصل بنا"}
                  </h2>
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
                        <h3>
                          {localStorage.getItem("lang") === "english"
                            ? "Email Address"
                            : "البريد الإلكتروني"}
                        </h3>
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
                        <h3>
                          {localStorage.getItem("lang") === "english"
                            ? "Phone Number"
                            : "رقم التليفون"}
                        </h3>
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
                        <h3>
                          {localStorage.getItem("lang") === "english"
                            ? "Office Address"
                            : "عنوان المكتب"}
                        </h3>
                        <ul>
                          <li>
                            73, Nabil El Wakkad, Masr El Gdeida <br />
                            Cairo, Egypt
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="info-column col-md-6">
                      <div class="icon-box">
                        <div class="icon">
                          <span class="flaticon-worldwide"></span>
                        </div>
                        <h3>
                          {localStorage.getItem("lang") === "english"
                            ? "Web Connect"
                            : "الموقع الإلكترونى"}
                        </h3>
                        <ul>
                          <li>
                            <Link
                              to={
                                "/http://https://afwmalaki.com/demo/fianandox/"
                              }
                            >
                              www.afwmalaki.com
                            </Link>
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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <div id="success_tic" role="dialog">
            <div class="modal-dialog" style={{ margin: "0" }}>
              <div class="modal-content">
                <a
                  class="close"
                  href="#"
                  data-dismiss="modal"
                  onClick={() => this.handleClose()}
                >
                  &times;
                </a>
                <div class="page-body">
                  <div class="head">
                    <h3 style={{ marginTop: "5px" }}>Congratulations !!</h3>
                    <h4>Your case is registered successfully</h4>
                  </div>

                  <h1 style={{ textAlign: "center" }}>
                    <div class="checkmark-circle">
                      <div class="background"></div>
                      <div class="checkmark draw"></div>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Footer />
      </>
    );
  }
}
export default Index;
