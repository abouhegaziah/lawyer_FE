import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import HomeSlider2 from '../element/home-slider2';
import Footer from '../layout/footer';
import Testimonial1 from '../element/testimonial1'
import VideoPopup2 from './../element/video-popup2'
import '../../assets/css/color-2.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const counterbg1 = require('./../../assets/images/background/image-5.jpg');
const touchbg1 = require('./../../assets/images/background/image-8.jpg');



class Index2 extends Component {


    render() {
        return (
            <>
                <Header2 />


                {/* <!--Search Popup--> */}
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        <div class="overlay-layer"></div>
                        <div class="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" class="theme-btn" />
                                    </fieldset>
                                </div>
                            </form>
                            <br />
                            <h3>Recent Search Keywords</h3>
                            <ul class="recent-searches">
                                <li><Link to={'/#'}>Finance</Link></li>
                                <li><Link to={'/#'}>Idea</Link></li>
                                <li><Link to={'/#'}>Service</Link></li>
                                <li><Link to={'/#'}>Growth</Link></li>
                                <li><Link to={'/#'}>Plan</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <HomeSlider2 />


                {/* <!-- Feature Section --> */}
                <section class="feature-section">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row">
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-team"></span></div>
                                            <h5>Management</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-money"></span></div>
                                            <h5>TAX Consume</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-assets"></span></div>
                                            <h5>Finance & Strategy</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-world"></span></div>
                                            <h5>Best Advice</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-money-1"></span></div>
                                            <h5>Insurance</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-notebook"></span></div>
                                            <h5>Criminal Case</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- About Section Two --> */}
                <section class="about-section-two">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="content-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="sec-title">
                                        <div class="sub-title">About Us</div>
                                        <h2>We Work With <br />You To Address</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                                    </div>
                                    <div class="author-info">
                                        <div class="wrapper-box">
                                            <h2>Rosalina D. William</h2>
                                            <div class="designation">Founder</div>
                                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                                        </div>
                                        <div class="signature"><img src={require('../../assets/images/resource/signature-2.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/resource/image-10.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Funfacts Section --> */}
                <section class="funfacts-section" style={{ backgroundImage: "url(" + counterbg1 + ")" }}>
                    <div class="auto-container">
                        {/* <!-- Fact Counter --> */}
                        <div class="fact-counter-two">
                            <div class="row">
                                {/* <!--Column--> */}
                                <div class="column counter-column col-xl-3 col-lg-6">
                                    <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div class="content">
                                            <div class="icon"><img src={require('../../assets/images/icons/icon-12.png')} alt="" /></div>
                                            <div class="count-outer count-box">
                                                <CountUp
                                                    end={100}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor
                                                            onChange={start}
                                                            delayedCall
                                                        >
                                                            <span class="count-text" ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <span>%</span>
                                            </div>
                                            <div class="counter-title">Business Monitoring</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Column--> */}
                                <div class="column counter-column col-xl-3 col-lg-6">
                                    <div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div class="content">
                                            <div class="icon"><img src={require('../../assets/images/icons/icon-13.png')} alt="" /></div>
                                            <div class="count-outer count-box">
                                                <CountUp
                                                    end={70}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor
                                                            onChange={start}
                                                            delayedCall
                                                        >
                                                            <span class="count-text" ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <span>%</span>
                                            </div>
                                            <div class="counter-title">Business Monitoring</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Column--> */}
                                <div class="column counter-column col-xl-3 col-lg-6">
                                    <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div class="content">
                                            <div class="icon"><img src={require('../../assets/images/icons/icon-14.png')} alt="" /></div>
                                            <div class="count-outer count-box">
                                                <CountUp
                                                    end={56}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor
                                                            onChange={start}
                                                            delayedCall
                                                        >
                                                            <span class="count-text" ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <span>%</span>
                                            </div>
                                            <div class="counter-title">Business Monitoring</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Column--> */}
                                <div class="column counter-column col-xl-3 col-lg-6">
                                    <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                        <div class="content">
                                            <div class="icon"><img src={require('../../assets/images/icons/icon-15.png')} alt="" /></div>
                                            <div class="count-outer count-box">
                                                <CountUp
                                                    end={93}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor
                                                            onChange={start}
                                                            delayedCall
                                                        >
                                                            <span class="count-text" ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <span>%</span>
                                            </div>
                                            <div class="counter-title">Business Monitoring</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Statistic Section --> */}
                <section class="statistic-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="graph"><img src={require('../../assets/images/resource/graph.png')} alt="" /></div>
                            </div>
                            <div class="col-lg-6">
                                <div class="sec-title">
                                    <div class="sub-title">Our Startegy</div>
                                    <h2>Get Done With <br /> Us Your Project</h2>
                                </div>
                                <div class="progress-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <h5>Business Planing</h5>
                                    <div class="bar">
                                        <div data-percent="74%"><div class="count-text">74%</div></div>
                                        <ProgressBar  className="count-bar" now={74} />
                                    </div>
                                </div>
                                <div class="progress-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <h5>Business Planing</h5>
                                    <div class="bar">
                                    <ProgressBar  className="count-bar" now={64} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Services Section Two --> */}
                <section class="services-section-two">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="left-column" style={{ backgroundImage: "url(" + touchbg1 + ")" }}>
                                <div class="sec-title light">
                                    <div class="sub-title">Get In Touch</div>
                                    <h2>Get Us Here Or <br /> Share Details</h2>
                                </div>
                                {/* <!-- Contact Form--> */}
                                <div class="contact-form">
                                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                        <div class="row clearfix">
                                            <div class="col-md-12 form-group">
                                                <input type="text" name="username" placeholder="Enter name here......" required="" />
                                                <i class="fas fa-user"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <input type="email" name="email" placeholder="Enter email here......" required="" />
                                                <i class="fas fa-envelope"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <textarea name="message" placeholder="Enter message here......"></textarea>
                                                <i class="fas fa-edit"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Get In Touch</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="right-column">
                                <div class="services-content">
                                    <div class="sec-title">
                                        <div class="sub-title">Our Services</div>
                                        <h2>What Actually We <br />Do Here.</h2>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-16.png')} alt="" /></div>
                                        <h2>Capital Market</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-17.png')} alt="" /></div>
                                        <h2>Insurance & Planning</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-18.png')} alt="" /></div>
                                        <h2>Financial Strategy</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Gallery Section --> */}
                <section class="gallery-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Portfolio</div>
                            <h2>Case Study</h2>
                        </div>
                        <div class="row">
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/gallery/gallery-18.jpg')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Finance</h5>
                                        <h3><Link to={'/#'}>Miranda Hilix Bar</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/gallery/gallery-19.jpg')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Finance</h5>
                                        <h3><Link to={'/#'}>Miranda Hilix Bar</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/gallery/gallery-20.jpg')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Finance</h5>
                                        <h3><Link to={'/#'}>Miranda Hilix Bar</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/gallery/gallery-21.jpg')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Finance</h5>
                                        <h3><Link to={'/#'}>Miranda Hilix Bar</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/gallery/gallery-22.jpg')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Finance</h5>
                                        <h3><Link to={'/#'}>Miranda Hilix Bar</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/gallery/gallery-23.jpg')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Finance</h5>
                                        <h3><Link to={'/#'}>Miranda Hilix Bar</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Video Section --> */}

                <VideoPopup2 />
                {/* <!-- Team Section --> */}
                <section class="team-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Our Team</div>
                            <h2>Leadership Team</h2>
                        </div>
                        <div class="row">
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
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
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
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
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
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
                </section>

                {/* <!-- Testimonial Section --> */}
                <Testimonial1 />

                {/* <!-- News Section --> */}
                <section class="news-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">News</div>
                            <h2>News From Resource</h2>
                        </div>
                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-1.jpg')} data-src="assets/images/resource/news-1.jpg" alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-2.jpg')} data-src="assets/images/resource/news-2.jpg" alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>Business consultant is involved in the planning.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-3.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>28th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>Business consultant is a professional who analyzes.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                <Footer />
            </>
        )
    }
}
export default Index2;