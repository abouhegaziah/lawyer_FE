import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <footer class="main-footer">
          <div class="auto-container">
            <div class="widgets-section">
              <div
                class="row clearfix"
                style={{
                  flexDirection:
                    localStorage.getItem("lang") === "english"
                      ? "row"
                      : "row-reverse",
                }}
              >
                <div class="column col-lg-4">
                  <div class="footer-widget logo-widget">
                    <div class="widget-content">
                      <div class="footer-logo">
                        <Link to="index.html">
                          <img
                            class=""
                            src={require("../../assets/images/footer-logo.png")}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="text">
                        {localStorage.getItem("lang") === "english" ? (
                          <>
                            {" "}
                            Lorem ipsum dolor sit amet, consect etur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.
                          </>
                        ) : (
                          <>
                            من المهم الاعتناء بالمريض ، والنتيجة ستكون دهنية
                            ولكن نفس الشيء حدث في نفس الوقت مع المخاض و مع بعض
                            الألم الشديد. للوصول إلى أدق التفاصيل ، من لا تمرين
                            في أي عمل إلا البعض
                          </>
                        )}
                      </div>
                      <ul class="social-links clearfix">
                        <li>
                          <Link to={"/#"}>
                            <span class="fab fa-facebook-f"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/#"}>
                            <span class="fab fa-twitter"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/#"}>
                            <span class="fab fa-vimeo-v"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/#"}>
                            <span class="fab fa-instagram"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="column col-lg-4">
                  <div class="footer-widget links-widget">
                    <div
                      class="widget-content"
                      style={{
                        textAlign:
                          localStorage.getItem("lang") === "english"
                            ? "start"
                            : "end",
                      }}
                    >
                      <h3>
                        {" "}
                        {localStorage.getItem("lang") === "english"
                          ? "Links"
                          : "الروابط"}
                      </h3>
                      <div class="row">
                        <div class="col-md-12">
                          <ul>
                            <li>
                              <Link to={"/#"}>
                                {localStorage.getItem("lang") === "english"
                                  ? "Home"
                                  : " الرئيسية"}
                              </Link>
                            </li>
                            <li>
                              <Link to={"/about"}>
                                {" "}
                                {localStorage.getItem("lang") === "english"
                                  ? "About Us"
                                  : "معلومات عنا"}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/cases"}
                                style={{
                                  textAlign:
                                    localStorage.getItem("lang") === "english"
                                      ? "start"
                                      : "end",
                                }}
                              >
                                {localStorage.getItem("lang") === "english"
                                  ? "Cases"
                                  : "القضايا "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/blog-standard"}
                                style={{
                                  textAlign:
                                    localStorage.getItem("lang") === "english"
                                      ? "start"
                                      : "end",
                                }}
                              >
                                {localStorage.getItem("lang") === "english"
                                  ? "Blog"
                                  : "المدونة"}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/episodes"}
                                style={{
                                  textAlign:
                                    localStorage.getItem("lang") === "english"
                                      ? "start"
                                      : "end",
                                }}
                              >
                                {localStorage.getItem("lang") === "english"
                                  ? "Episodes"
                                  : "الحلقات "}
                              </Link>
                            </li>
                            <li>
                              <Link to={"/contact"}>
                                {localStorage.getItem("lang") === "english"
                                  ? "Contact Us"
                                  : "اتصل بنا"}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="column col-lg-4">
                  <div class="footer-widget instagram-widget">
                    <h3>Photo Showcase</h3>
                    <div class="inner-box">
                      <div class="wrapper-box">
                        <div class="image">
                          <img
                            class="lazy-image owl-lazy"
                            src={require("../../assets/images/gallery/gallery-1.jpg")}
                            alt=""
                          />

                          <div class="overlay-link">
                            <Link
                              to={"/assets/images/gallery/gallery-1.jpg"}
                              class="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <span class="fa fa-plus"></span>
                            </Link>
                          </div>
                        </div>
                        <div class="image">
                          <img
                            class="lazy-image owl-lazy"
                            src={require("../../assets/images/gallery/gallery-2.jpg")}
                            alt=""
                          />
                          <div class="overlay-link">
                            <Link
                              to={"/assets/images/gallery/gallery-2.jpg"}
                              class="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <span class="fa fa-plus"></span>
                            </Link>
                          </div>
                        </div>
                        <div class="image">
                          <img
                            class="lazy-image owl-lazy"
                            src={require("../../assets/images/gallery/gallery-3.jpg")}
                            alt=""
                          />
                          <div class="overlay-link">
                            <Link
                              to={"/assets/images/gallery/gallery-3.jpg"}
                              class="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <span class="fa fa-plus"></span>
                            </Link>
                          </div>
                        </div>
                        <div class="image">
                          <img
                            class="lazy-image owl-lazy"
                            src={require("../../assets/images/gallery/gallery-4.jpg")}
                            alt=""
                          />
                          <div class="overlay-link">
                            <Link
                              to={"/assets/images/gallery/gallery-4.jpg"}
                              class="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <span class="fa fa-plus"></span>
                            </Link>
                          </div>
                        </div>
                        <div class="image">
                          <img
                            class="lazy-image owl-lazy"
                            src={require("../../assets/images/gallery/gallery-5.jpg")}
                            alt=""
                          />
                          <div class="overlay-link">
                            <Link
                              to={"/assets/images/gallery/gallery-5.jpg"}
                              class="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <span class="fa fa-plus"></span>
                            </Link>
                          </div>
                        </div>
                        <div class="image">
                          <img
                            class="lazy-image owl-lazy"
                            src={require("../../assets/images/gallery/gallery-6.jpg")}
                            alt=""
                          />
                          <div class="overlay-link">
                            <Link
                              to={"/assets/images/gallery/gallery-6.jpg"}
                              class="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <span class="fa fa-plus"></span>
                            </Link>
                          </div>
                        </div>
                        <div class="image">
                          <img
                            class="lazy-image owl-lazy"
                            src={require("../../assets/images/gallery/gallery-7.jpg")}
                            alt=""
                          />
                          <div class="overlay-link">
                            <Link
                              to={"/assets/images/gallery/gallery-7.jpg"}
                              class="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <span class="fa fa-plus"></span>
                            </Link>
                          </div>
                        </div>
                        <div class="image">
                          <img
                            class="lazy-image owl-lazy"
                            src={require("../../assets/images/gallery/gallery-8.jpg")}
                            alt=""
                          />
                          <div class="overlay-link">
                            <Link
                              to={"/assets/images/gallery/gallery-8.jpg"}
                              class="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <span class="fa fa-plus"></span>
                            </Link>
                          </div>
                        </div>
                        <div class="image">
                          <img
                            class="lazy-image owl-lazy"
                            src={require("../../assets/images/gallery/gallery-9.jpg")}
                            alt=""
                          />
                          <div class="overlay-link">
                            <Link
                              to={"/assets/images/gallery/gallery-9.jpg"}
                              class="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <span class="fa fa-plus"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div
            class="footer-copyright"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="container" style={{ marginTop: "25px" }}>
              <div
                className="row p-2"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {/* <div className="col-md-6 ">
              <div className="row" style={{ display: "block" }}>
                <a
                  href="https://neoneg.com/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  www.neoneg.com
                </a>
              
              </div>
            </div> */}
                <div
                  className="col-md-12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: "15px",
                      lineHeight: "1.8",
                      fontWeight: "700",
                      fontFamily: "Segoe UI",
                      color: "#fff",
                    }}
                  >
                    Copyright &copy; {new Date().getFullYear()} by{" "}
                    <span>
                      {" "}
                      <a
                        target="_blank"
                        href="https://neoneg.com/"
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "#fff",
                          fontWeight: "700",
                        }}
                      >
                        NEON
                      </a>{" "}
                    </span>
                    <a
                      href=""
                      style={{
                        textDecoration: "none",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                      onClick={() => {
                        window.open(`https://wa.me/+201113588988`);
                      }}
                    >
                      <i
                        className="fa-brands fa-whatsapp fs-5"
                        style={{ color: "#fff", marginRight: "10px" }}
                      ></i>
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
