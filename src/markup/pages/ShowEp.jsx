import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "../layout/header";
import Footer from "../layout/footer";
import axios from "axios";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

const aboutbg = require("./../../assets/images/background/image-11.jpg");
const touchbg = require("./../../assets/images/background/image-8.jpg");

export default function ShowEp(props) {
  const [eps, setEps] = useState(null);
  const [hover, setHover] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/episode`)
      .then((res) => {
        console.log(res.data.response);
        setEps(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
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
            <li class="active">Episodes</li>
          </ul>
        </div>
      </section>
      <section class="news-section">
        <div class="auto-container">
          <div class="row">
            {eps &&
              eps.map((e) => {
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
                const d = new Date(e.createdAt);
                console.log(d);
                return (
                  <div
                    class="news-block-one col-lg-4"
                    onClick={() => {
                      setSelected(e.link);
                      setTimeout(function () {
                        setisOpen(true);
                      }, 2000);
                    }}
                    onMouseEnter={() => {
                      console.log("Here");
                      console.log(e._id);
                      setHover(e._id);
                    }}
                    onMouseLeave={() => {
                      setHover();
                      console.log("baby");
                    }}
                  >
                    <div class="inner-box">
                      <div class="image" style={{ maxHeight: "30vh" }}>
                        {console.log(hover === e._id)}
                        {hover === e._id && <div className="videoOver"></div>}
                        <img src={e.image} alt="" />
                      </div>
                      <div class="lower-content">
                        <div class="category" style={{ zIndex: "11" }}>
                          {e.number}
                        </div>
                        <ul class="post-meta">
                          <li>
                            <Link to={"/#"}>
                              <i class="far fa-calendar-alt"></i> {d.getDate()}
                              th {monthNames[d.getMonth()]} {"  "}
                              {d.getFullYear()}
                            </Link>
                          </li>
                          <li>
                            <Link to={"/#"}>
                              <i class="far fa-user"></i>By Admin
                            </Link>
                          </li>
                        </ul>
                        <h3>{e.title}</h3>
                        <div class="text">{e.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={selected}
        onClose={() => setisOpen(false)}
      />
      <Footer />
    </>
  );
}
