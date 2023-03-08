import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import GoogleMaps from "simple-react-google-maps";

const aboutbg = require('./../../assets/images/background/image-11.jpg');




class Contact extends Component {


    render() {
        return (
            <>
                <Header />
                

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
                                        <input type="submit" value="Search Now!" class="theme-btn"/>
                                    </fieldset>
                                </div>
                            </form>
                            <br/>
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
                
                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>Contact Us</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Contact</li>
                        </ul>
                    </div>

                </section>

                {/* <!-- Map Section --> */}
                {/* <!-- Map Section --> */}
                <section class="map-section">
                    <div class="map-column">
                        <GoogleMaps
                            apiKey={"AIzaSyBQ5y0EF8dE6qwc03FcbXHJfXr4vEa7z54"}
                            style={{ height: "800px", width: "100%" }}
                            zoom={12}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                        />
                    </div>
                </section>

                {/* <!-- Contact Section Two --> */}
                <section class="contact-section-two">
                    <div class="auto-container">
                        <div class="contact-info-area">
                            <div class="contact-info">
                                <div class="row">
                                    <div class="info-column col-lg-4">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-email-6"></span></div>
                                            <h3>Email Address</h3>
                                            <ul>
                                                <li><Link to={'/mailto:info@webmail.com'}>info@webmail.com</Link></li>
                                                <li><Link to={'/mailto:info@webmail.com'}>jobs@exampleco.com</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="info-column col-lg-4">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-call-1"></span></div>
                                            <h3>Phone Number</h3>
                                            <ul>
                                                <li><Link to={'/tel:+8976765654654'}>+897 676 5654 654</Link></li>
                                                <li><Link to={'/tel:+908(097)56476576'}>+908(097) 564 765 76</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="info-column col-lg-4">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-location"></span></div>
                                            <h3>Office Address</h3>
                                            <ul>
                                                <li>12/A, Romania City Town Hall <br/>New Joursey, UK</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contact-form-area">
                            <div class="sec-title text-center">
                                <div class="sub-title">Write Here</div>
                                <h2>Get In Touch</h2>
                            </div>
                            {/* <!-- Contact Form--> */}
                            <div class="contact-form">
                                <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                    <div class="row clearfix">                                    
                                        <div class="col-md-6 form-group">
                                            <label for="name">Enter your name</label>
                                            <input type="text" name="username" id="name" placeholder="Enter name here......" required=""/>
                                            <i class="fas fa-user"></i>
                                        </div>
                                        
                                        <div class="col-md-6 form-group">
                                            <label for="email">Enter your email</label>
                                            <input type="email" name="email" id="email" placeholder="Enter email here......" required=""/>
                                            <i class="fas fa-envelope"></i>
                                        </div>
                
                                        <div class="col-md-12 form-group">
                                            <label for="message">Enter your message</label>
                                            <textarea name="message" id="message" placeholder="Enter message here......"></textarea>
                                            <i class="fas fa-edit"></i>
                                        </div>
                
                                        <div class="col-md-12 form-group">
                                            <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Get In Touch</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>






                <Footer />
            </>
        )
    }
}
export default Contact;