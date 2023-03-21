import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import axios from "axios";

const aboutbg = require("./../../assets/images/background/image-11.jpg");
const touchbg = require("./../../assets/images/background/image-8.jpg");

class CreatePost extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    fileURL: "",
    title: "",
    post: "",
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("file", this.state.selectedFile);

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios
      .post("https://project-sfj2.onrender.com/data/upload", formData)
      .then((response) => {
        console.log(response.data);
        this.setState({ fileURL: response.data.url });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <div>
            <img src={this.state.fileURL} />
          </div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  handlePost = () => {
    console.log("here");
    const obj = {
      image: this.state.fileURL,
      title: this.state.title,
      post: this.state.post,
    };
    axios
      .post("https://project-sfj2.onrender.com/blog/addBlog", obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <h1>Posts</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <Link to={"/#"}>Home</Link>
              </li>
              <li class="active">Posts</li>
            </ul>
          </div>
        </section>

        <section
          class="services-section-two services-section-careers"
          style={{ marginTop: "2%" }}
        >
          <div class="auto-container">
            <div class="wrapper-box">
              <div
                class="left-column"
                style={{ backgroundImage: "url(" + touchbg + ")" }}
              >
                <div class="sec-title light">
                  <div class="sub-title">Get In Touch</div>
                  <h2>
                    Create Your Post <br /> Now
                  </h2>
                </div>
                {/* <!-- Contact Form--> */}
                <div class="contact-form">
                  <div class="row clearfix">
                    <div class="col-md-12 form-group">
                      <div
                        style={{
                          backgroundColor: "white",
                          display: "flex",
                          alignItems: "center",
                          padding: "1%",
                        }}
                      >
                        <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>Upload!</button>
                      </div>
                    </div>

                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter title here......"
                        required=""
                        onChange={(e) => {
                          this.setState({ title: e.target.value });
                        }}
                      />
                      <i class="fas fa-font"></i>
                    </div>

                    <div class="col-md-12 form-group">
                      <textarea
                        name="message"
                        placeholder="Enter post here......"
                        onChange={(e) => {
                          this.setState({ post: e.target.value });
                        }}
                      ></textarea>
                      <i class="fas fa-align-justify"></i>
                    </div>

                    <div class="col-md-12 form-group">
                      <button
                        class="theme-btn btn-style-one"
                        name="submit-form"
                        onClick={this.handlePost}
                      >
                        <span class="btn-title">POST NOW</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-column">
                <div class="services-content">
                  <div class="sec-title">
                    <div class="sub-title">The Image </div>
                    <h2>Image Preview</h2>
                  </div>
                  {this.fileData()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default CreatePost;
