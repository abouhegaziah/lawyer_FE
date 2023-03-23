import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <>
        <div
          class="collapse navbar-collapse show clearfix"
          id="navbarSupportedContent"
        >
          <ul
            class="navigation clearfix"
            style={{
              display:
                localStorage.getItem("lang") === "english" ? "block" : " flex",
              flexDirection:
                localStorage.getItem("lang") === "english"
                  ? "row"
                  : "row-reverse",
            }}
          >
            <li>
              <Link to={"/#"}>
                {localStorage.getItem("lang") === "english"
                  ? "Home"
                  : " الرئيسية"}
              </Link>
            </li>
            {/* <li>
              <Link to={"/#"}>Episodes</Link>
            </li>
            <li>
              <Link to={"/#"}>Cases</Link>
            </li> */}
            {/* <li class="dropdown"><Link to={'/index-2'}>Home</Link>
                            <ul>
                                <li><Link to={'/#'}>Home page 01</Link></li>
                                <li><Link to={'/index-2'}>Home page 02</Link></li>
                                <li><Link to={'/index-3'}>Home page 03</Link></li>
                                <li><Link to={'/index-4'}>Home page 04</Link></li>
                                <li><Link to={'/onepage'}>Onepage Version</Link></li>
                                <li><Link to={'/rtl-home'}>Home RTL</Link></li>
                                <li class="dropdown"><Link to={'/#'}>Header Styles</Link>
                                    <ul>
                                        <li><Link to={'/'}>Header Style One</Link></li>
                                        <li><Link to={'/index-2'}>Header Style Two</Link></li>
                                        <li><Link to={'/index-3'}>Header Style Three</Link></li>
                                        <li><Link to={'/index-4'}>Header Style Four</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}

            <li class={`${localStorage.getItem("admin") && "dropdown"}`}>
              <Link to={"/create-case"}>
                {localStorage.getItem("lang") === "english"
                  ? "Cases"
                  : "القضايا"}
              </Link>
              <ul
                style={{
                  left:
                    localStorage.getItem("lang") === "english" ? "0" : "unset",
                  right:
                    localStorage.getItem("lang") === "english" ? "unset" : "0",
                }}
              >
                {localStorage.getItem("admin") && (
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
                        : " عرض القضايا "}
                    </Link>
                  </li>
                )}

                <li>
                  <Link
                    to={"/create-case"}
                    style={{
                      textAlign:
                        localStorage.getItem("lang") === "english"
                          ? "start"
                          : "end",
                    }}
                  >
                    {localStorage.getItem("lang") === "english"
                      ? "Create Case"
                      : "إنشاء قضية"}
                  </Link>
                </li>

                {/* <li>
                  <Link to={"/services-details"}>Services Details</Link>
                </li> */}
              </ul>
            </li>
            <li class={`${localStorage.getItem("admin") && "dropdown"}`}>
              <Link to={"/episodes"}>
                {localStorage.getItem("lang") === "english"
                  ? "Episodes"
                  : "الحلقات "}
              </Link>
              <ul
                style={{
                  left:
                    localStorage.getItem("lang") === "english" ? "0" : "unset",
                  right:
                    localStorage.getItem("lang") === "english" ? "unset" : "0",
                }}
              >
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
                      : " عرض الحلقات "}
                  </Link>
                </li>
                {localStorage.getItem("admin") && (
                  <li>
                    <Link
                      to={"/upload-episode"}
                      style={{
                        textAlign:
                          localStorage.getItem("lang") === "english"
                            ? "start"
                            : "end",
                      }}
                    >
                      {localStorage.getItem("lang") === "english"
                        ? "Upload Episode"
                        : "تحميل الحلقة"}
                    </Link>
                  </li>
                )}
              </ul>
            </li>

            {/* <li class="dropdown">
              <Link to={"/#"}>Portfolio</Link>
              <ul>
                <li>
                  <Link to={"/portfolio-1"}>Portfolio One</Link>
                </li>
                <li>
                  <Link to={"/portfolio-2"}>Portfolio Two</Link>
                </li>
                <li>
                  <Link to={"/portfolio-details"}>Portfolio Details</Link>
                </li>
              </ul>
            </li> */}
            <li class={`${localStorage.getItem("admin") && "dropdown"}`}>
              <Link to={"/blog-standard"}>
                {localStorage.getItem("lang") === "english" ? "Blog" : "مدونة"}
              </Link>
              <ul
                style={{
                  left:
                    localStorage.getItem("lang") === "english" ? "0" : "unset",
                  right:
                    localStorage.getItem("lang") === "english" ? "unset" : "0",
                }}
              >
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
                      ? "Blog Standard"
                      : "المدونة"}
                  </Link>
                </li>
                {localStorage.getItem("admin") && (
                  <li>
                    <Link
                      to={"/create-post"}
                      style={{
                        textAlign:
                          localStorage.getItem("lang") === "english"
                            ? "start"
                            : "end",
                      }}
                    >
                      {localStorage.getItem("lang") === "english"
                        ? "Create Post "
                        : "إنشاء منشور"}
                    </Link>
                  </li>
                )}
              </ul>
            </li>
            {/* <li class="dropdown">
              <Link to={"/#"}>Pages</Link>
              <ul>
                <li>
                  <Link to={"/careers"}>Careers</Link>
                </li>
                <li>
                  <Link to={"/team"}>Team</Link>
                </li>
                <li>
                  <Link to={"/team-details"}>Team Details</Link>
                </li>

                <li class="dropdown">
                  <Link to={"/#"}>Shop</Link>
                  <ul>
                    <li>
                      <Link to={"/shop"}>Products</Link>
                    </li>
                    <li>
                      <Link to={"/product-details"}>Product Details</Link>
                    </li>
                    <li>
                      <Link to={"/shopping-cart"}>Shopping Cart</Link>
                    </li>
                    <li>
                      <Link to={"/checkout"}>Checkout</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/faq"}>Faq's</Link>
                </li>
                <li>
                  <Link to={"/404"}>404</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to={"/about"}>
                {" "}
                {localStorage.getItem("lang") === "english"
                  ? "About Us"
                  : "معلومات عنا"}
              </Link>
            </li>
            <li
              style={{
                marginRight:
                  localStorage.getItem("lang") === "english" ? "0" : "40px",
              }}
            >
              <Link to={"/contact"}>
                {localStorage.getItem("lang") === "english"
                  ? "Contact Us"
                  : "اتصل بنا"}
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Menu;
