import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "../layout/header";
import Footer from "../layout/footer";
import axios from "axios";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const aboutbg = require("./../../assets/images/background/image-11.jpg");
const touchbg = require("./../../assets/images/background/image-8.jpg");

export default function UploadEpisode(props) {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("Ep Title");
  const [description, setDescription] = useState(
    "Epiosde Description here...."
  );
  const [isOpen, setisOpen] = useState(false);
  const [selectedFile, setSetelectedFile] = useState();
  const [fileURL, setFileURL] = useState(null);
  const [number, setNumber] = useState(" # ep ");

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(file);
    axios
      .post("https://project-sfj2.onrender.com/episode/addEpisode", {
        link: file,
        title: title,
        image: fileURL,
        duration: "5 min",
        description: description,
        number: number,
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
      .post("https://project-sfj2.onrender.com/data/upload", formData)
      .then((response) => {
        console.log(response.data);
        props.setFile(response.data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFileChange = (event) => {
    // Update the state
    setSetelectedFile(event.target.files[0]);
    onFileUpload(event.target.files[0]);
  };
  // On file upload (click the upload button)
  const onFileUpload = (x) => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("file", x);

    // Details of the uploaded file
    console.log(x);

    // Request made to the backend api
    // Send formData object
    axios
      .post("https://project-sfj2.onrender.com/data/upload", formData)
      .then((response) => {
        console.log(response.data);
        setFileURL(response.data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fileData = () => {
    return (
      <>
        <div class="news-block-one col-lg-11">
          <div class="inner-box">
            <div
              class="image"
              onClick={() => {
                setisOpen(true);
              }}
              style={{ maxHeight: "30vh" }}
            >
              <img
                src={
                  fileURL
                    ? fileURL
                    : require("../../assets/images/resource/news-1.jpg")
                }
                alt=""
              />
            </div>
            <div class="lower-content">
              <div class="category">{number}</div>
              <ul class="post-meta">
                <li>
                  <Link to={"/#"}>
                    <i class="far fa-calendar-alt"></i> {d.getDate()}th{" "}
                    {monthNames[d.getMonth()]} {"  "}
                    {d.getFullYear()}
                  </Link>
                </li>
                <li>
                  <Link to={"/#"}>
                    <i class="far fa-user"></i>By Admin
                  </Link>
                </li>
              </ul>
              <h3>
                <Link to={"/#"}>{title}</Link>
              </h3>
              <div class="text">{description}</div>
            </div>
          </div>
        </div>
      </>
    );
  };
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
  const d = new Date();
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
        <Col xs={9}>
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
                <i class="fas fa-header" aria-hidden="true"></i>
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
              <div class="col-md-3 form-group">
                <label for="name">Enter episode number</label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Enter number here......"
                  required=""
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
                <i class="fas fa-user"></i>
              </div>
              <div class="col-md-9 form-group">
                <label for="name">Enter episode Image</label>
                <div
                  style={{
                    backgroundColor: "#f9f9f9",
                    display: "flex",
                    alignItems: "center",
                    padding: "1.7%",
                  }}
                >
                  <input type="file" onChange={onFileChange} />
                  {/* <button onClick={onFileUpload}>Upload!</button> */}
                </div>
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
        </Col>
        <Col xs={3}>{fileData()}</Col>
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
