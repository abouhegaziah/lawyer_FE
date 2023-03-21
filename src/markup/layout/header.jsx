import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Menu from "./menu";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tik from "../../assets/images/tiktok.svg";

const options = [
  { value: "English", label: "English" },
  { value: "French", label: "French" },
  { value: "Spanish", label: "Spanish" },
  { value: "Bengli", label: "Bengli" },
];

class Header extends Component {
  state = {
    scrolled: false,
    show: false,
    pass: "",
    admin: false,
    msg: "",
  };

  componentDidMount() {
    var btn = document.querySelector(".mobile-nav-toggler");
    var closeBtn = document.querySelector(".close-btn");
    var body = document.getElementsByTagName("body")[0];

    function addFunc() {
      return body.classList.add("mobile-menu-visible");
    }
    function closeFunc() {
      return body.classList.remove("mobile-menu-visible");
    }

    btn.addEventListener("click", addFunc);
    closeBtn.addEventListener("click", closeFunc);

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleAdmin = () => {
    console.log("here", this.state.pass);
    if (this.state.pass === "123456") {
      console.log("here1");
      this.setState({ admin: true, msg: "You Are an admin, welcome !" });
      localStorage.setItem("admin", true);
    } else {
      this.setState({ msg: "Wrong Pass !" });
    }
  };

  render() {
    const { scrolled } = this.state.scrolled;
    return (
      <>
        <header class={scrolled ? "main-header fixed-header" : "main-header"}>
          <div class="header-top">
            <div class="auto-container">
              <div class="inner">
                <div class="top-left" style={{ width: "15%" }}>
                  <div class="logo-box">
                    <div class="logo">
                      <Link to={"/#"}>
                        <img
                          src={require("../../assets/images/logo2.png")}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="top-middile">
                  {/* <div class="language">
                    <span>Language:</span>
                    <form action="#" class="language-switcher">
                      <Select options={options} />
                    </form>
                  </div> */}
                  <div class="contact-info">
                    <div class="single-info">
                      <div class="icon-box">
                        <i class="flaticon-call-1"></i>
                      </div>
                      <div class="text">Phone Number</div>

                      <h4>
                        <Link to={'/tel:+201555599441"'}>+201555599441</Link>
                      </h4>
                    </div>
                    <div class="single-info">
                      <div class="icon-box">
                        <i class="flaticon-email-4"></i>
                      </div>
                      <div class="text">Email Address</div>
                      <h4>
                        <Link to={"mailto:afwmalaki@gmail.com"}>
                          afwmalaki@gmail.com
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>

                <div class="top-right" onClick={this.handleShow}>
                  <Link to="/#" class="theme-btn btn-style-two">
                    <span class="btn-title">Admin ?</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="header-upper">
            <div class="auto-container">
              <div class="inner-container">
                <div class="nav-outer clearfix">
                  <div class="mobile-nav-toggler">
                    <span class="icon fal fa-bars"></span>
                  </div>

                  <nav class="main-menu navbar-expand-md navbar-light">
                    <Menu />
                  </nav>

                  <ul class="social-links clearfix">
                    <li>
                      <a
                        href={
                          "https://web.facebook.com/afwmalaki/about/?ref=page_internal"
                        }
                      >
                        <span
                          style={{ width: "1vw" }}
                          class="fab fa-facebook-f"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href={"https://tiktok.com/@afwmalaki"}>
                        <i
                          style={{ width: "2vw" }}
                          class="fa-brands fa-tiktok"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          "https://www.youtube.com/channel/UC4cq9g3MSyM-5Jl4JRRRGRw"
                        }
                      >
                        <span
                          style={{ width: "1vw" }}
                          class="fab fa-youtube"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href={"http://www.snapchat.com/add/afwmalaki"}>
                        <span
                          style={{ width: "1vw" }}
                          class="fab fa-snapchat"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href={"http://www.instagram.com/afwmalaki/"}>
                        <span
                          style={{ width: "1vw" }}
                          class="fab fa-instagram"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            class={
              scrolled ? "sticky-header animated slideInDown" : "sticky-header"
            }
          >
            <div
              class="auto-container clearfix"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div class="logo pull-left" style={{ width: "15%" }}>
                <Link title="">
                  <img
                    src={require("../../assets/images/logo2.png")}
                    alt=""
                    title=""
                  />
                </Link>
              </div>

              <div class="pull-right">
                <nav class="main-menu clearfix">
                  <Menu />
                </nav>
              </div>
            </div>
          </div>

          <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn">
              <span class="icon flaticon-cancel"></span>
            </div>

            <nav class="menu-box">
              <div class="nav-logo">
                <Link to={"/#"}>
                  <img src="assets/images/logo.png" alt="" title="" />
                </Link>
              </div>
              <div class="menu-outer">
                <Menu />
              </div>
              <div class="social-links">
                <ul class="clearfix">
                  <li>
                    <Link to={"/#"}>
                      <span class="fab fa-twitter"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/#"}>
                      <span class="fab fa-facebook-square"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/#"}>
                      <span class="fab fa-pinterest-p"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/#"}>
                      <span class="fab fa-instagram"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/#"}>
                      <span class="fab fa-youtube"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome !!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 style={{ marginBottom: "5%" }}>
              Please enter your admin secret pass
            </h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => this.setState({ pass: e.target.value })}
                />
                <Form.Text className="text-muted">
                  We'll never share your pass with anyone else.
                </Form.Text>
              </Form.Group>
            </Form>
            {this.state.msg}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              cancel
            </Button>
            <Button variant="primary" onClick={this.handleAdmin}>
              submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Header;
