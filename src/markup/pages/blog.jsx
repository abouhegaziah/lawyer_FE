import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import axios from "axios";

const aboutbg = require("./../../assets/images/background/image-11.jpg");

class Blog extends Component {
  state = {
    // Initially, no file is selected
    posts: [],
  };

  componentDidMount() {
    axios
      .get(`https://project-sfj2.onrender.com/blog`)
      .then((res) => {
        console.log(res.data.response);
        this.setState({ posts: res.data.response });
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
                ? "Our Blog"
                : "مدونتنا"}
            </h1>
            <ul class="bread-crumb clearfix">
              {localStorage.getItem("lang") === "english" ? (
                <>
                  <li>
                    <Link to={"/#"}>Home</Link>
                  </li>
                  <li class="active">Blog</li>
                </>
              ) : (
                <>
                  <li class="active">مدونة</li>
                  <li>
                    <Link to={"/#"}>الرئيسيه</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </section>
        {/* <!--End Banner Section --> */}

        {/* <!-- Sidebar Page Container --> */}
        <div class="sidebar-page-container">
          <div class="auto-container">
            <div class="row">
              <div class="col-lg-11">
                {/* <!-- News Block Two --> */}
                {this.state.posts.map((p) => {
                  const monthNames = [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ];
                  const month_ar = [
                    "يناير",
                    "فبراير",
                    "مارس",
                    "إبريل",
                    "مايو",
                    "يونيو",
                    "يوليو",
                    "أغسطس",
                    "سبتمبر",
                    "أكتوبر",
                    "نوفمبر",
                    "ديسمبر",
                  ];
                  const d = new Date(p.createdAt);
                  console.log(d);
                  return (
                    <div class="news-block-two">
                      <div class="inner-box">
                        <div
                          class="image"
                          style={{ maxWidth: "60vh", margin: "auto" }}
                        >
                          <Link to={"/#"}>
                            <img src={p.image} alt="" />
                          </Link>
                        </div>
                        <div
                          class="lower-content"
                          style={{
                            display:
                              localStorage.getItem("lang") === "english"
                                ? "block"
                                : "flex",
                            flexDirection:
                              localStorage.getItem("lang") === "english"
                                ? ""
                                : "column",
                            textAlign:
                              localStorage.getItem("lang") === "english"
                                ? "start"
                                : "end",
                            alignItems:
                              localStorage.getItem("lang") === "english"
                                ? "flex-start"
                                : "flex-end",
                          }}
                        >
                          <div class="category">
                            {localStorage.getItem("lang") === "english" &&
                              "Post"}{" "}
                            {p._id}{" "}
                            {localStorage.getItem("lang") !== "english" &&
                              "منشور"}{" "}
                          </div>
                          <ul class="post-meta">
                            <li>
                              <Link to={"/#"}>
                                <i class="far fa-calendar-alt"></i>
                                {d.getDate()}th{" "}
                                {localStorage.getItem("lang") === "english"
                                  ? monthNames[d.getMonth()]
                                  : month_ar[d.getMonth()]}{" "}
                                {"  "}
                                {d.getFullYear()}
                              </Link>
                            </li>
                          </ul>
                          <h2>
                            <Link to={"/blog-details"}>
                              {localStorage.getItem("lang") === "english"
                                ? p.title
                                : p.title_ar}
                            </Link>
                          </h2>
                          <div class="text">
                            {localStorage.getItem("lang") === "english"
                              ? p.post
                              : p.post_ar}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default Blog;
