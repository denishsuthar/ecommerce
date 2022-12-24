import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-custom text-white pt-3 pb-1">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left bg-custom">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 bg-custom">
                            <h5 className="text-uppercase mp-4 font-weight-bold text-warning bg-custom">Denish Store</h5>
                            <p className="bg-custom">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <div className="socials-footer">
                                <a href="https://www.facebook.com/denish.suthar79" target="noopener"><i className="fa fa-facebook"></i></a>
                                <a href="https://www.twitter.com/denish_suthar" target="noopener"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.instagram.com/denish_suthar" target="noopener"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/denish-suthar-6a6971207" target="noopener"><i className="fa fa-linkedin"></i></a>
                            </div>

                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 bg-custom">
                            <h5 className="text-uppercase mp-4 font-weight-bold text-warning bg-custom">Company</h5>
                            <p className="bg-custom">
                                <NavLink to="/" className="text-white bg-custom list">Home</NavLink>
                            </p>
                            <p className="bg-custom">
                                <NavLink to="/about" className="text-white bg-custom list">About Us</NavLink>
                            </p>
                            <p className="bg-custom">
                                <NavLink to="/services" className="text-white bg-custom list">Services</NavLink>
                            </p>
                            <p className="bg-custom">
                                <NavLink to="/contact" className="text-white bg-custom list">Contact</NavLink>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 bg-custom">
                            <h5 className="text-uppercase mp-4 font-weight-bold text-warning bg-custom">Useful Links</h5>
                            <p className="bg-custom">
                                <NavLink to="/partners" className="text-white bg-custom list">Our Partners</NavLink>
                            </p>
                            <p className="bg-custom">
                                <NavLink to="/certificates" className="text-white bg-custom list">Certificates</NavLink>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 bg-custom">
                            <h5 className="text-uppercase mp-4 font-weight-bold text-warning bg-custom">Contact Us</h5>
                            <p className="bg-custom">
                                <a className="bg-custom icon" href="tel:+917600727866"><i className="fas fa-phone mr-3 bg-custom"></i>  +917600727866</a>
                            </p>
                            <p className="bg-custom">
                                <a className="bg-custom icon" href="mailto:denishsuthar04@gmail.com"><i className="fas fa-envelope mr-3 bg-custom"></i> denishsuthar04@gmail.com</a>
                            </p>
                            <p className="bg-custom">
                                <a className="bg-custom icon" href="/#" target="noopener"><i className="fas fa-building mr-3 bg-custom"></i> Planet Earth</a>
                            </p>
                        </div>

                        <h5 className="bg-custom mt-5 copyright"><a className="bg-custom" href="https://www.instagram.com/denish_suthar" target="noopener">Copyright © 2022-23 | Made with <i className="fa fa-heart"></i> by Denish</a></h5>

                    </div>

                </div>
            </footer>
  );
};

export default Footer;
