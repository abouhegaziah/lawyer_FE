import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Spinner, Modal } from "react-bootstrap";
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
  const [title_ar, setTitle_ar] = useState("عنوان الحلقة");
  const [description, setDescription] = useState(
    "Episode Description here...."
  );
  const [description_ar, setDescription_ar] = useState(".... وصف الحلقة هنا");
  const [isOpen, setisOpen] = useState(false);
  const [selectedFile, setSetelectedFile] = useState();
  const [fileURL, setFileURL] = useState(null);
  const [number, setNumber] = useState(" # ");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(file);
    setLoading(true);
    axios
      .post("https://project-sfj2.onrender.com/episode/addEpisode", {
        link: file,
        title: title,
        title_ar: title_ar,
        image: fileURL,
        duration: "5 min",
        description: description,
        description_ar: description_ar,
        number: number,
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) handleShow();
        setLoading(false);
        // props.setFile(response.data.url);
      })
      .catch((error) => {
        setLoading(false);
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
            <div
              class="lower-content"
              style={{
                display:
                  localStorage.getItem("lang") === "english" ? "block" : "flex",
                flexDirection:
                  localStorage.getItem("lang") === "english" ? "" : "column",
                textAlign:
                  localStorage.getItem("lang") === "english" ? "start" : "end",
                alignItems:
                  localStorage.getItem("lang") === "english"
                    ? "flex-start"
                    : "flex-end",
              }}
            >
              <div class="category">
                {localStorage.getItem("lang") === "english" && "ep"} {number}{" "}
                {localStorage.getItem("lang") === "arabic" && "الحلقة"}
              </div>
              <ul class="post-meta">
                <li>
                  <Link to={"/#"}>
                    <i class="far fa-calendar-alt"></i> {d.getDate()}th{" "}
                    {localStorage.getItem("lang") === "english"
                      ? monthNames[d.getMonth()]
                      : month_ar[d.getMonth()]}{" "}
                    {"  "}
                    {"  "}
                    {d.getFullYear()}
                  </Link>
                </li>
                <li>
                  <Link to={"/#"}>
                    <i class="far fa-user"></i>
                    {localStorage.getItem("lang") === "english"
                      ? "By Admin"
                      : "المسؤل"}
                  </Link>
                </li>
              </ul>
              <h3>
                <Link to={"/#"}>
                  {localStorage.getItem("lang") === "english"
                    ? title
                    : title_ar}
                </Link>
              </h3>
              <div class="text">
                {localStorage.getItem("lang") === "english"
                  ? description
                  : description_ar}
              </div>
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
          <h1>
            {" "}
            {localStorage.getItem("lang") === "english"
              ? "Episodes"
              : "الحلقات"}
          </h1>
          <ul class="bread-crumb clearfix">
            {localStorage.getItem("lang") === "english" ? (
              <>
                <li>
                  <Link to={"/#"}>Home</Link>
                </li>
                <li class="active">Upload Videos</li>
              </>
            ) : (
              <>
                <li class="active">تحميل الحلقات</li>
                <li>
                  <Link to={"/#"}>الرئيسية</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </section>
      <Row
        style={{
          marginBottom: "5%",
          marginTop: "5%",
          flexDirection:
            localStorage.getItem("lang") === "english" ? "row" : "row-reverse",
        }}
      >
        <Col xs={9}>
          <div class="contact-form" style={{ width: "80%", margin: "auto" }}>
            <div class="row clearfix">
              <div
                class="col-md-12 form-group"
                style={{
                  textAlign:
                    localStorage.getItem("lang") === "english"
                      ? "start"
                      : "end",
                }}
              >
                <label for="name">
                  {localStorage.getItem("lang") === "english"
                    ? "Enter episode ID"
                    : "أدخل الرقم التعريفى"}
                </label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Youtube video ID......"
                      : " معرف فيديو يوتيوب......"
                  }
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                  required=""
                  onChange={(e) => {
                    setFile(e.target.value);
                  }}
                />
                <i
                  class={`fab fa-youtube ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                  aria-hidden="true"
                ></i>
              </div>
              <div class="col-md-6 form-group">
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
              <div class="col-md-6 form-group" style={{ textAlign: "end" }}>
                <label for="name">أدخل عنوان الحلقة</label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder={" أدخل الاسم هنا......"}
                  required=""
                  class={"ar"}
                  onChange={(e) => {
                    setTitle_ar(e.target.value);
                  }}
                />
                <i class={`fas fa-user ar`}></i>
              </div>
              <div
                class="col-md-3 form-group"
                style={{
                  textAlign:
                    localStorage.getItem("lang") === "english"
                      ? "start"
                      : "end",
                }}
              >
                <label for="name">
                  {" "}
                  {localStorage.getItem("lang") === "english"
                    ? "Enter episode number"
                    : "أدخل رقم الحلقة"}
                </label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder={
                    localStorage.getItem("lang") === "english"
                      ? "Enter number here......"
                      : "أدخل الرقم هنا......"
                  }
                  required=""
                  class={localStorage.getItem("lang") === "arabic" && "ar"}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
                <i
                  class={`fas fa-hashtag ${
                    localStorage.getItem("lang") === "arabic" && "ar"
                  }`}
                ></i>
              </div>
              <div
                class="col-md-9 form-group"
                style={{
                  textAlign:
                    localStorage.getItem("lang") === "english"
                      ? "start"
                      : "end",
                }}
              >
                <label for="name">
                  {" "}
                  {localStorage.getItem("lang") === "english"
                    ? "Enter episode Image"
                    : "أدخل صورة الحلقة"}
                </label>
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
              <div class="col-md-6 form-group">
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
              <div class="col-md-6 form-group" style={{ textAlign: "end" }}>
                <textarea
                  name="message"
                  placeholder="...... أدخل وصف الحلقة هنا"
                  onChange={(e) => {
                    //   this.setState({ post: e.target.value });
                    setDescription_ar(e.target.value);
                  }}
                  className="ar"
                ></textarea>
                <i class="fas fa-align-justify ar"></i>
              </div>
              <button
                class="theme-btn btn-style-one"
                onClick={() => {
                  setisOpen(true);
                }}
                style={{ marginBottom: "7px" }}
              >
                <span class="btn-title">
                  {localStorage.getItem("lang") === "english"
                    ? "Show Video"
                    : "مشاهدة الفيديو"}
                </span>
              </button>
              <button
                class="theme-btn btn-style-one"
                name="submit-form"
                onClick={handleUpload}
              >
                <span class="btn-title">
                  {" "}
                  {loading ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    <>
                      {localStorage.getItem("lang") === "english"
                        ? "Upload Now"
                        : "تحميل الآن"}
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </Col>
        <Col
          xs={3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:
              localStorage.getItem("lang") === "english"
                ? "flex-start"
                : "flex-end",
          }}
        >
          {fileData()}
        </Col>
      </Row>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={file.length === 11 ? file : ""}
        onClose={() => setisOpen(false)}
      />
      <Modal show={show} onHide={handleClose}>
        <div id="success_tic" role="dialog">
          <div class="modal-dialog" style={{ margin: "0" }}>
            <div class="modal-content">
              <a
                class="close"
                href="#"
                data-dismiss="modal"
                onClick={() => setShow(false)}
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
