import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Brand1 from "../element/brand1";
import axios from "axios";
import VideoInput from "../layout/VideoInput";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const aboutbg = require("./../../assets/images/background/image-11.jpg");
const touchbg = require("./../../assets/images/background/image-8.jpg");

export default function UploadEpisode(props) {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setisOpen] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(file);
    axios
      .post("http://localhost:4000/episode/addEpisode", {
        link: file,
        title: title,
        duration: "5 min",
        description: description,
      })
      .then((response) => {
        console.log(response.data);
        // props.setFile(response.data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleVideo = (video) => {
    console.log("Welcome");
    const formData = new FormData();

    // Update the formData object
    formData.append("file", video);

    // Details of the uploaded file
    console.log(video);

    // Request made to the backend api
    // Send formData object
    axios
      .post("http://localhost:4000/data/upload", formData)
      .then((response) => {
        console.log(response.data);
        props.setFile(response.data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <h1>Episodes</h1>
          <ul class="bread-crumb clearfix">
            <li>
              <Link to={"/#"}>Home</Link>
            </li>
            <li class="active">Upload Videos</li>
          </ul>
        </div>
      </section>
      <Row style={{ marginBottom: "5%", marginTop: "5%" }}>
        {/* <VideoInput
          width={400}
          height={300}
          setFile={setFile}
          handleVideo={handleVideo}
        /> */}
        <div class="contact-form" style={{ width: "80%", margin: "auto" }}>
          <div class="row clearfix">
            <div class="col-md-12 form-group">
              <label for="name">Enter episode ID</label>
              <input
                type="text"
                name="username"
                id="name"
                placeholder="Youtube video ID"
                required=""
                onChange={(e) => {
                  setFile(e.target.value);
                }}
              />
              <i class="fas fa-user"></i>
            </div>
            <div class="col-md-12 form-group">
              <label for="name">Enter episode title</label>
              <input
                type="text"
                name="username"
                id="name"
                placeholder="Enter name here......"
                required=""
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <i class="fas fa-user"></i>
            </div>
            <div class="col-md-12 form-group">
              <textarea
                name="message"
                placeholder="Enter description here......"
                onChange={(e) => {
                  //   this.setState({ post: e.target.value });
                  setDescription(e.target.value);
                }}
              ></textarea>
              <i class="fas fa-align-justify"></i>
            </div>
            <button
              class="theme-btn btn-style-one"
              onClick={() => {
                setisOpen(true);
              }}
              style={{ marginBottom: "7px" }}
            >
              <span class="btn-title">Show Video</span>
            </button>
            <button
              class="theme-btn btn-style-one"
              name="submit-form"
              onClick={handleUpload}
            >
              <span class="btn-title">Upload Now</span>
            </button>
          </div>
        </div>
      </Row>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={file.length === 11 ? file : ""}
        onClose={() => setisOpen(false)}
      />
      <Footer />
    </>
  );
}
