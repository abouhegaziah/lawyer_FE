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
      .get(`https://project-sfj2.onrender.com/episode`)
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
          <h1>
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
                <li class="active">Episodes</li>
              </>
            ) : (
              <>
                <li class="active">الحلقات</li>
                <li>
                  <Link to={"/#"}>الرئيسيه</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </section>
      <section class="news-section">
        <div class="auto-container">
          <div
            class="row"
            style={{
              justifyContent:
                localStorage.getItem("lang") === "english"
                  ? "flex-start"
                  : "flex-end",
            }}
          >
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
                      <div
                        class="lower-content"
                        style={{
                          display:
                            localStorage.getItem("lang") === "english"
                              ? "block"
                              : "flex",
                          flexDirection:
                            localStorage.getItem("lang") === "english"
                              ? ""
                              : "column",
                          textAlign:
                            localStorage.getItem("lang") === "english"
                              ? "start"
                              : "end",
                          alignItems:
                            localStorage.getItem("lang") === "english"
                              ? "flex-start"
                              : "flex-end",
                        }}
                      >
                        <div class="category" style={{ zIndex: "11" }}>
                          {localStorage.getItem("lang") === "english" && "ep"}{" "}
                          {e.number}{" "}
                          {localStorage.getItem("lang") === "arabic" &&
                            "الحلقة"}
                        </div>
                        <ul class="post-meta">
                          <li>
                            <Link to={"/#"}>
                              <i class="far fa-calendar-alt"></i> {d.getDate()}
                              th{" "}
                              {localStorage.getItem("lang") === "english"
                                ? monthNames[d.getMonth()]
                                : month_ar[d.getMonth()]}{" "}
                              {"  "}
                              {d.getFullYear()}
                            </Link>
                          </li>
                          <li>
                            <Link to={"/#"}>
                              <i class="far fa-user"></i>{" "}
                              {localStorage.getItem("lang") === "english"
                                ? "By Admin"
                                : "المسؤل"}
                            </Link>
                          </li>
                        </ul>
                        <h3>
                          {localStorage.getItem("lang") === "english"
                            ? e.title
                            : e.title_ar}
                        </h3>
                        <div class="text">
                          {localStorage.getItem("lang") === "english"
                            ? e.description
                            : e.description_ar}
                        </div>
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
