import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Header from "../layout/header";
import axios from "axios";

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
      .post("http://localhost:4000/case/addCase", this.state)
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
  //     axios.get(`http://localhost:4000/case`).then((res) => {
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
            <h1>Cases</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <Link to={"/#"}>Home</Link>
              </li>
              <li class="active">Cases</li>
            </ul>
          </div>
        </section>
        <div
          class="contact-form-area"
          style={{ marginBottom: "5%", marginTop: "2%" }}
        >
          <div class="sec-title text-center">
            <div class="sub-title">Write Here</div>
            <h2>Add Your Case</h2>
          </div>
          {/* <!-- Contact Form--> */}
          <div class="contact-form" style={{ width: "80%", margin: "auto" }}>
            <div class="row clearfix">
              <div class="col-md-6 form-group">
                <label for="name">Enter your name</label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder="Enter name here......"
                  required=""
                  onChange={(e) => {
                    this.setState({ name_1: e.target.value });
                  }}
                />
                <i class="fas fa-user"></i>
              </div>

              <div class="col-md-6 form-group">
                <label for="email">Enter His/Her name</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email here......"
                  required=""
                  onChange={(e) => {
                    this.setState({ name_2: e.target.value });
                  }}
                />
                <i class="fas fa-user"></i>
              </div>
              <div class="col-md-6 form-group">
                <label for="name">Enter your email</label>
                <input
                  type="email"
                  name="username"
                  id="name"
                  placeholder="Enter email here......"
                  required=""
                  onChange={(e) => {
                    this.setState({ email_1: e.target.value });
                  }}
                />
                <i class="fas fa-envelope"></i>
              </div>

              <div class="col-md-6 form-group">
                <label for="email">Enter His/Her email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email here......"
                  required=""
                  onChange={(e) => {
                    this.setState({ email_2: e.target.value });
                  }}
                />
                <i class="fas fa-envelope"></i>
              </div>
              <div class="col-md-6 form-group">
                <label for="name">Enter your number</label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder="Enter number here......"
                  required=""
                  onChange={(e) => {
                    this.setState({ number_1: e.target.value });
                  }}
                />
                <i class="fas fa-phone"></i>
              </div>

              <div class="col-md-6 form-group">
                <label for="email">Enter His/Her number</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter number here......"
                  required=""
                  onChange={(e) => {
                    this.setState({ number_2: e.target.value });
                  }}
                />
                <i class="fas fa-phone"></i>
              </div>
              <div class="col-md-6 form-group">
                <label for="name">Enter your Address</label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder="Enter Address here......"
                  required=""
                  onChange={(e) => {
                    this.setState({ address_1: e.target.value });
                  }}
                />
                <i class="fas fa-address-card"></i>
              </div>

              <div class="col-md-6 form-group">
                <label for="email">Enter His/Her Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Address here......"
                  required=""
                  onChange={(e) => {
                    this.setState({ address_2: e.target.value });
                  }}
                />
                <i class="fas fa-address-card"></i>
              </div>

              <div class="col-md-12 form-group">
                <label for="message">Subject</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Subject here......"
                  required=""
                  onChange={(e) => {
                    this.setState({ subject: e.target.value });
                  }}
                />
                <i class="fas fa-edit"></i>
              </div>

              <div class="col-md-12 form-group">
                <label for="message">Enter your message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter message here......"
                  onChange={(e) => {
                    this.setState({ case: e.target.value });
                  }}
                ></textarea>
                <i class="fas fa-edit"></i>
              </div>

              <div class="col-md-12 form-group">
                <button
                  class="theme-btn btn-style-one"
                  type="submit"
                  name="submit-form"
                  onClick={this.submitCase}
                >
                  <span class="btn-title">Create Now</span>
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
      </>
    );
  }
}
export default CreateCase;
