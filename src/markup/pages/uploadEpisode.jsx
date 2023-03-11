import React, { Component, useRef } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Brand1 from "../element/brand1";
import axios from "axios";

const aboutbg = require("./../../assets/images/background/image-11.jpg");
const touchbg = require("./../../assets/images/background/image-8.jpg");

class UploadEpisode extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
    fileURL: "",
    title: "",
    post: "",
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
            <h1>Episodes</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <Link to={"/#"}>Home</Link>
              </li>
              <li class="active">Upload Videos</li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}
export default UploadEpisode;
