import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import axios from "axios";

const aboutbg = require("./../../assets/images/background/image-11.jpg");
const quotebg = require("./../../assets/images/background/image-17.jpg");
const blogsbg = require("./../../assets/images/background/image-16.jpg");
const addbg = require("./../../assets/images/background/image-15.jpg");

class Blog extends Component {
  state = {
    // Initially, no file is selected
    posts: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:4000/blog`).then((res) => {
      console.log(res.data.response);
      this.setState({ posts: res.data.response });
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
            <h1>Our Blog</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <Link to={"/#"}>Home</Link>
              </li>
              <li class="active">Blog</li>
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
                        <div class="lower-content">
                          <div class="category">Post {p._id}</div>
                          <ul class="post-meta">
                            <li>
                              <Link to={"/#"}>
                                <i class="far fa-calendar-alt"></i>
                                {d.getDate()}th {monthNames[d.getMonth()]}{" "}
                                {"  "}
                                {d.getFullYear()}
                              </Link>
                            </li>
                          </ul>
                          <h2>
                            <Link to={"/blog-details"}>{p.title}</Link>
                          </h2>
                          <div class="text">{p.post}</div>
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
