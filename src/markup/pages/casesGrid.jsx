import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PaginationControl } from "react-bootstrap-pagination-control";

const aboutbg = require("./../../assets/images/background/image-11.jpg");
const quotebg = require("./../../assets/images/background/image-17.jpg");
const blogsbg = require("./../../assets/images/background/image-16.jpg");
const addbg = require("./../../assets/images/background/image-15.jpg");

class Blog extends Component {
  state = {
    // Initially, no file is selected
    cases: [],
    page: 1,
    offset: 2,
    start: 0,
    end: 1,
  };

  componentDidMount() {
    axios.get(`https://project-sfj2.onrender.com/case`).then((res) => {
      console.log(res.data.response);
      var arr = res.data.response;
      arr.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      this.setState({ cases: arr });
      console.log(arr.length);
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
              <form method="post">
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
                {this.state.cases.map((c, i) => {
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
                  const d = new Date(c.createdAt);
                  console.log(d);
                  if (i >= this.state.start && i <= this.state.end)
                    return (
                      <div class="news-block-two">
                        <div class="inner-box">
                          <div
                            class="image myClass"
                            style={{
                              margin: "auto",
                              borderRadius: "10px",
                              color: "white",
                              padding: "2%",
                            }}
                          >
                            <Row>
                              <Col xs={3}>
                                {" "}
                                <h4
                                  style={{ padding: "1%", fontWeight: "500" }}
                                >
                                  plaintiff:
                                </h4>
                              </Col>
                              <Col>
                                <p
                                  style={{
                                    marginLeft: "5%",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {c.name_1} - {c.email_1} - {c.number_1} <br />{" "}
                                  {c.address_1}
                                </p>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={3}>
                                <h4
                                  style={{ padding: "1%", fontWeight: "500" }}
                                >
                                  defendant:
                                </h4>
                              </Col>
                              <Col>
                                <p
                                  style={{
                                    marginLeft: "5%",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {c.name_2} - {c.email_2} - {c.number_2} <br />{" "}
                                  {c.address_2}
                                </p>
                              </Col>
                            </Row>
                          </div>
                          <div class="lower-content">
                            <div class="category">Case {c._id}</div>
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
                              <Link to={"/blog-details"}>{c.subject}</Link>
                            </h2>
                            <div class="text">{c.case}</div>
                          </div>
                        </div>
                      </div>
                    );
                  else return;
                })}
              </div>
            </div>
          </div>
          <PaginationControl
            page={this.state.page}
            between={4}
            total={this.state.cases.length}
            limit={this.state.offset}
            changePage={(page) => {
              if (page < this.state.page) {
                this.setState({
                  page: page,
                  start: this.state.start - this.state.offset,
                  end: this.state.end - this.state.offset,
                });
              } else {
                this.setState({
                  page: page,
                  start: this.state.start + this.state.offset,
                  end: this.state.end + this.state.offset,
                });
              }

              console.log(page);
              document.documentElement.scrollTop = 0;
            }}
            ellipsis={1}
          />
        </div>

        <Footer />
      </>
    );
  }
}
export default Blog;
