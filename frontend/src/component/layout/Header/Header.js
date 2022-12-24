// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import logo from "../../../images/logo.png";

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

// const Header = () => {
//   return <ReactNavbar {...options} />;
// };

// export default Header;
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
import logo from "../../../images/DENISH.png"


function Navbar() {
  return (
    <>
    <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-nav-custom">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo"></img></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    {/* <span className="navbar-toggler-icon"></span> */}
                                    <i className="fa fa-bars-staggered mobile-menu"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav ms-auto">
                                        <NavLink className="nav-link" to="/"><i class="fa fa-home navbar_a_icons"></i>Home</NavLink>
                                        <NavLink className="nav-link" to="/about"><i class="fa fa-user navbar_a_icons"></i>About</NavLink>
                                        <NavLink className="nav-link" to="/products"><i class="fa fa-shopping-bag navbar_a_icons"></i>Products</NavLink>
                                        <NavLink className="nav-link" to="/login"><i class="fa fa-sign-in navbar_a_icons"></i>Login</NavLink>
                                        <NavLink className="nav-link" to="/cart"><i class="fa fa-shopping-cart navbar_a_icons"></i>Cart</NavLink>                                        
                                        <NavLink className="nav-link" to="/contact"><i class="fa fa-map-marker navbar_a_icons"></i>Contact</NavLink>
                                        <NavLink className="nav-link" to="/search"><i class="fa fa-search navbar_a_icons"></i>Search</NavLink>

                                        
                                    </div>
                                </div>
                            </div>

                        </nav>
                    </div>

                </div>
            </div>
            </>
  );
}

export default Navbar;