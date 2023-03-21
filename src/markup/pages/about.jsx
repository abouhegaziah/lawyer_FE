import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Brand1 from "../element/brand1";

const aboutbg = require("./../../assets/images/background/image-11.jpg");

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="search-popup" class="search-popup">
          <div class="close-search theme-btn">
            <span class="flaticon-cancel"></span>
          </div>
          <div class="popup-inner">
            <div class="overlay-layer"></div>
            <div class="search-form">
              <form
                method="post"
                action="http://azim.commonsupport.com/Finandox/index.html"
              >
                <div class="form-group">
                  <fieldset>
                    <input
                      type="search"
                      class="form-control"
                      name="search-input"
                      value=""
                      placeholder="Search Here"
                      required
                    />
                    <input
                      type="submit"
                      value="Search Now!"
                      class="theme-btn"
                    />
                  </fieldset>
                </div>
              </form>
              <br />
              <h3>Recent Search Keywords</h3>
              <ul class="recent-searches">
                <li>
                  <Link to={"/#"}>Finance</Link>
                </li>
                <li>
                  <Link to={"/#"}>Idea</Link>
                </li>
                <li>
                  <Link to={"/#"}>Service</Link>
                </li>
                <li>
                  <Link to={"/#"}>Growth</Link>
                </li>
                <li>
                  <Link to={"/#"}>Plan</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section class="page-banner">
          <div
            className="page-banner-bg"
            style={{ backgroundImage: "url(" + aboutbg + ")" }}
          ></div>
          <div class="bottom-rotten-curve alternate"></div>

          <div class="auto-container">
            <h1>About Us</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <Link to={"/#"}>Home</Link>
              </li>
              <li class="active">About Us</li>
            </ul>
          </div>
        </section>

        {/* About Section Two */}
        <section class="about-section-two">
          <div class="auto-container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="image-wrapper">
                  <div class="image-one">
                    <img
                      src={require("../../assets/images/6X9A0396.00_00_40_10.Still002.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="content-box">
                  <div class="sec-title">
                    <div class="sub-title">About Us</div>
                    <h2>
                      We Work With <br />
                      You To Address
                    </h2>
                    <div class="text">
                      Following his ideals since a young age, Counsellor El
                      Shaer studied law at Ain Shams University, Egypt and
                      graduated in 2003 in order to have the ability to help as
                      many people as he can. In 2006, he moved to the United
                      Arab Emirates, and after obtaining his working permit in
                      the legal department opened his first legal office there
                      under the name of Ahmed El Shaer Legal Group and managed
                      in 6 years to expand the group with many other offices
                      between Egypt and UAE; the new group providing legal
                      consultancy, New Media Services and Art Production and
                      Distribution was then rebranded as Mr. Lawyer & Co. in
                      2012. Several years later, in 2018, as a successful
                      business man he opened his third business called
                      “Mosalaha” for conflict management. His love and talent
                      for arts, acting, singing and program hosting was the
                      spark that pushed him towards developing his first online
                      program under the name “Ana el Dawla” in 2016 on YouTube,
                      followed by his second program called “Wazir el Sa’ada” in
                      2019 as well as participating in many TV series produced
                      in the Gulf Area such as “Ya Maleka Kalby”, “Ya Man
                      Hawah”, “Sa’et el Sefr”, “Kheyanet Watan” and “Kabl Al
                      Awan”. He also produced and performed many rap songs,
                      namely “Senin”, “Bahebek ya Omy”, under the name of
                      Counsellor Lawyer, which have all been a huge success as
                      they discuss some of the most important societal issues.
                      In 2019 he performed and produced the song “Emaretna di
                      Hayatna” as a gift for the 50th Union Day of the UAE,
                      which granted him a special honouring. Nevertheless,
                      Counsellor El Shaer never forgot about his ideals and went
                      on to obtain various certificates specifically in the
                      field or arbitration primarily to be able to help people
                      as much as possible and be able to help in conflict
                      management and arbitration such as the certificate for
                      Program for preparing Arab and international arbitration
                      consultants in international commercial arbitration and
                      drafting contracts from the International Arbitration
                      Tribunal and the American Institute for Training and
                      Development, as well as Ain Shams University. Not feeling
                      satisfied with his amazing accomplishments, Counsellor
                      Lawyer then obtained the certificate of Arbitration
                      Practice from the International Arbitration Tribunal and a
                      Certificate of Merit from The American Institute for
                      development and Training. All of which allowed him to help
                      the Egyptian community living in UAE and won him the
                      respect and thanks of the Egyptian Consulate in UAE. With
                      the month of Ramadan rapidly approaching us, the idea of
                      the program A’afw Malaky had counsellor Ahmed el Shaer
                      thinking as he had always longed to spread the feelings of
                      justice, love and forgiveness around him. The program
                      itself is Counsellor EL Shaer’s way for an ongoing charity
                      for the soul of the late counsellor Karim Al-Shaer. A
                      couple of years ago, after a great personal experience
                      Counsellor EL Shaer found inner peace once more when faced
                      with forgiveness from a family member, this has led him to
                      reorganize his thoughts and come up with the finalised
                      version of A’afw Malaky; where he can listen, discuss,
                      help and arbitrate between other people to help them find
                      forgiveness in their hearts and find inner peace just as
                      he did.
                    </div>
                  </div>
                  <div class="author-info">
                    <div class="wrapper-box">
                      <h2>Ahmad El Shaar</h2>
                      <div class="designation">Founder</div>
                      <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod..
                      </div>
                    </div>
                    <div class="signature">
                      <img
                        src={require("../../assets/images/resource/signature.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        {/* <section class="history-section">
                    <div class="auto-container">
                        <div class="sec-title text-center light">
                            <div class="sub-title">History</div>
                            <h2>Our Journey</h2>
                        </div>
                        <Tab.Container defaultActiveKey="first">
                            <Nav className="nav-tabs tab-btn-style-one">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2015</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">2010</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">2005</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">2000</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </section> */}

        {/* Team Section */}
        {/* <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Our Team</div>
                            <h2>Leadership Team</h2>
                        </div>
                        <div class="row">
                            
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-1.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Founder</div>
                                        <h3>Rosalina D. William</h3>
                                        <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-2.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">CEO</div>
                                        <h3>Velavos H. DesuJa</h3>
                                        <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/resource/team-3.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Developer</div>
                                        <h3>Abdur Rahman J.</h3>
                                        <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

        {/* Services Section Four */}
        {/* <section class="services-section-four services-section-about">
          <div class="auto-container">
            <div class="sec-title text-center">
              <div class="sub-title">Features</div>
              <h2>Core Features</h2>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-3.png")}
                      alt=""
                    />
                  </div>
                  <h2>Capital Market</h2>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-21.png")}
                      alt=""
                    />
                  </div>
                  <h2>Finance Division</h2>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-4.png")}
                      alt=""
                    />
                  </div>
                  <h2>Insurance & Planning</h2>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-22.png")}
                      alt=""
                    />
                  </div>
                  <h2>Family Case</h2>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-5.png")}
                      alt=""
                    />
                  </div>
                  <h2>Financial Strategy</h2>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-23.png")}
                      alt=""
                    />
                  </div>
                  <h2>Financial Planning</h2>
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Sponsors Section */}

        <Brand1 />

        <Footer />
      </>
    );
  }
}
export default About;
