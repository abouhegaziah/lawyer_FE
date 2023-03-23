import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Header from "../layout/header";
import axios from "axios";
import Footer from "../layout/footer";

const aboutbg = require("./../../assets/images/background/image-11.jpg");

class CreateCase extends Component {
  state = {
    name_1: "",
    email_1: "",
    number_1: "",
    name_2: "",
    email_2: "",
    number_2: "",
    address_1: "",
    address_2: "",
    subject: "",
    case: "",
    show: false,
  };

  submitCase = () => {
    console.log(this.state);
    axios
      .post("https://project-sfj2.onrender.com/case/addCase", this.state)
      .then((response) => {
        console.log(response.data);
        this.setState({ show: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  //   componentDidMount() {
  //     axios.get(`https://project-sfj2.onrender.com/case`).then((res) => {
  //       console.log(res.data);
  //     });
  //   }

  render() {
    return (
      <>
        <Header />
        {/* <!-- Page Banner Section --> */}
        <section class="page-banner">
          <div
            className="page-banner-bg"
            style={{ backgroundImage: "url(" + aboutbg + ")" }}
          ></div>
          <div class="bottom-rotten-curve alternate"></div>

          <div class="auto-container">
            <h1>
              {localStorage.getItem("lang") === "english" ? "Cases" : "القضايا"}
            </h1>
            <ul class="bread-crumb clearfix">
              {localStorage.getItem("lang") === "english" ? (
                <>
                  <li>
                    <Link to={"/#"}>Home</Link>
                  </li>
                  <li class="active">Cases</li>
                </>
              ) : (
                <>
                  <li class="active">القضايا</li>
                  <li>
                    <Link to={"/#"}>الرئيسيه</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </section>
        <div
          class="contact-form-area"
          style={{ marginBottom: "5%", marginTop: "2%" }}
        >
          <div class="sec-title text-center">
            <div class="sub-title">
              {localStorage.getItem("lang") === "english"
                ? "Write Here"
                : "اكتب هنا"}
            </div>
            <h2>
              {localStorage.getItem("lang") === "english"
                ? "Add Your Case"
                : "سجل قضيتك "}
            </h2>
          </div>
          {/* <!-- Contact Form--> */}
          <div class="contact-form" style={{ width: "80%", margin: "auto" }}>
            <div
              class="row clearfix"
              style={{
                textAlign:
                  localStorage.getItem("lang") === "english" ? "start" : "end",
                flexDirection:
                  localStorage.getItem("lang") === "english"
                    ? "row"
                    : "row-reverse",
              }}
            >
              <div class="col-md-6 form-group">
                <label for="name">
                  {localStorage.getItem("lang") === "english"
                    ? "Enter your name......"
                    : "أدخل أسمك"}
                </label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter name here......"
                      : " أدخل اسمك هنا......"
                  }
                  required=""
                  onChange={(e) => {
                    this.setState({ name_1: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                />
                <i
                  class={`fas fa-user ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>

              <div class="col-md-6 form-group">
                <label for="email">
                  {localStorage.getItem("lang") === "english"
                    ? "Enter His/Her name"
                    : "أدخل أسم الطرف الثانى"}
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter name here......"
                      : " أدخل الاسم هنا......"
                  }
                  required=""
                  onChange={(e) => {
                    this.setState({ name_2: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                />
                <i
                  class={`fas fa-user ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>
              <div class="col-md-6 form-group">
                <label for="name">
                  {" "}
                  {localStorage.getItem("lang") === "english"
                    ? "Enter your email"
                    : "أدخل بريدك الإلكتروني"}
                </label>
                <input
                  type="email"
                  name="username"
                  id="name"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter email here......"
                      : "أدخل بريدك هنا...."
                  }
                  required=""
                  onChange={(e) => {
                    this.setState({ email_1: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                />
                <i
                  class={`fas fa-envelope ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>

              <div class="col-md-6 form-group">
                <label for="email">
                  {" "}
                  {localStorage.getItem("lang") === "english"
                    ? "Enter yEnter His/Her email"
                    : "أدخل بريد الطرف الثانى الإلكتروني"}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter email here......"
                      : "أدخل البريد هنا...."
                  }
                  required=""
                  onChange={(e) => {
                    this.setState({ email_2: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                />
                <i
                  class={`fas fa-envelope ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>
              <div class="col-md-6 form-group">
                <label for="name">
                  {" "}
                  {localStorage.getItem("lang") === "english"
                    ? "Enter your number"
                    : "أدخل رقمك"}
                </label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter your number here ..... "
                      : " أدخل رقمك هنا...."
                  }
                  required=""
                  onChange={(e) => {
                    this.setState({ number_1: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                />
                <i
                  class={`fas fa-phone ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>

              <div class="col-md-6 form-group">
                <label for="email">
                  {" "}
                  {localStorage.getItem("lang") === "english"
                    ? "Enter His/Her number"
                    : "أدخل رقم الطرف الثانى"}
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter number here ..... "
                      : " أدخل الرقم هنا...."
                  }
                  required=""
                  onChange={(e) => {
                    this.setState({ number_2: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                />
                <i
                  class={`fas fa-phone ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>
              <div class="col-md-6 form-group">
                <label for="name">
                  {" "}
                  {localStorage.getItem("lang") === "english"
                    ? "Enter your Address"
                    : "أدخل عنوانك"}
                </label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter your Address here...."
                      : "أدخل عنوانك هنا ...."
                  }
                  required=""
                  onChange={(e) => {
                    this.setState({ address_1: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                />
                <i
                  class={`fas fa-address-card ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>

              <div class="col-md-6 form-group">
                <label for="email">
                  {localStorage.getItem("lang") === "english"
                    ? "Enter His/Her Address"
                    : "أدخل عنوان الطرف الثانى"}
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter Address here...."
                      : "أدخل العنوان هنا ...."
                  }
                  required=""
                  onChange={(e) => {
                    this.setState({ address_2: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                />
                <i
                  class={`fas fa-address-card ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>

              <div class="col-md-12 form-group">
                <label for="message">
                  {localStorage.getItem("lang") === "english"
                    ? "Subject"
                    : " الموضوع"}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter Subject here....."
                      : "أدخل الموضوع هنا ...."
                  }
                  required=""
                  onChange={(e) => {
                    this.setState({ subject: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                />
                <i
                  class={`fas fa-edit ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>

              <div class="col-md-12 form-group">
                <label for="message">
                  {localStorage.getItem("lang") === "english"
                    ? "Enter your message"
                    : " أدخل رسالتك"}
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter your message"
                      : " أدخل رسالتك"
                  }
                  onChange={(e) => {
                    this.setState({ case: e.target.value });
                  }}
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
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
                  onClick={this.submitCase}
                >
                  <span class="btn-title">
                    {localStorage.getItem("lang") === "english"
                      ? "Create Now"
                      : " سجل الان"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <div id="success_tic" role="dialog">
            <div class="modal-dialog" style={{ margin: "0" }}>
              <div class="modal-content">
                <a
                  class="close"
                  href="#"
                  data-dismiss="modal"
                  onClick={() => this.setState({ show: false })}
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
export default CreateCase;
