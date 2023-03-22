import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import GoogleMaps from "simple-react-google-maps";

const aboutbg = require("./../../assets/images/background/image-11.jpg");

class Contact extends Component {
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

        {/* <!-- Page Banner Section --> */}
        <section class="page-banner">
          <div
            className="page-banner-bg"
            style={{ backgroundImage: "url(" + aboutbg + ")" }}
          ></div>
          <div class="bottom-rotten-curve alternate"></div>

          <div class="auto-container">
            <h1>
              {localStorage.getItem("lang") === "english"
                ? "Contact Us"
                : "اتصل بنا"}
            </h1>
            <ul class="bread-crumb clearfix">
              {localStorage.getItem("lang") === "english" ? (
                <>
                  <li>
                    <Link to={"/#"}>Home</Link>
                  </li>
                  <li class="active">Contact</li>
                </>
              ) : (
                <>
                  <li class="active"> اتصل بنا</li>
                  <li>
                    <Link to={"/#"}>الرئيسية</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </section>

        {/* <!-- Map Section --> */}
        {/* <!-- Map Section --> */}
        {/* <section class="map-section">
                    <div class="map-column">
                        <GoogleMaps
                            apiKey={"AIzaSyBQ5y0EF8dE6qwc03FcbXHJfXr4vEa7z54"}
                            style={{ height: "800px", width: "100%" }}
                            zoom={12}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                        />
                    </div>
                </section> */}

        {/* <!-- Contact Section Two --> */}
        <section class="contact-section-two">
          <div class="auto-container">
            <div class="contact-info-area">
              <div class="contact-info">
                <div class="row">
                  <div class="info-column col-lg-4">
                    <div class="icon-box">
                      <div class="icon">
                        <span class="flaticon-email-6"></span>
                      </div>
                      <h3>
                        {" "}
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
                        <li>
                          <Link to={"/mailto:afwmalaki@gmail.com"}>
                            afwmalaki@gmail.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="info-column col-lg-4">
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
                          <Link to={"/tel:+201555599441"}>
                            +2015 555 99 441
                          </Link>
                        </li>
                        <li>
                          <Link to={"/tel:+201555599441"}>
                            +2015 555 99 441
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="info-column col-lg-4">
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
                </div>
              </div>
            </div>
            <div class="contact-form-area">
              <div class="sec-title text-center">
                <div class="sub-title">
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
              <div class="contact-form">
                <form
                  method="post"
                  action="http://azim.commonsupport.com/Finandox/sendemail.php"
                  id="contact-form"
                >
                  <div
                    class="row clearfix"
                    style={{
                      flexDirection:
                        localStorage.getItem("lang") === "english"
                          ? "row"
                          : "row-reverse",
                      textAlign:
                        localStorage.getItem("lang") === "english"
                          ? "start"
                          : "end",
                    }}
                  >
                    <div class="col-md-6 form-group">
                      <label for="name">
                        {" "}
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
                      />
                      <i
                        class={`fas fa-user ${
                          localStorage.getItem("lang") === "arabic" && "ar"
                        }`}
                      ></i>
                    </div>

                    <div class="col-md-6 form-group">
                      <label for="email">
                        {" "}
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
                        type="submit"
                        name="submit-form"
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
          </div>
        </section>

        <Footer />
      </>
    );
  }
}
export default Contact;
