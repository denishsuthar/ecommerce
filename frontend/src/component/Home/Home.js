import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Carousel from 'react-bootstrap/Carousel';
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";



const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Denish Store" />

          {/* <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div> */}
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="main-heading-institutional col-sm-12 mt-5"> 
                    </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_one"><i className="fa fa-laptop"></i></span>
                        <h5>Laptop</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s.</p>
                    
                </div>
                </div> 
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_two"><i className="fa fa-camera-retro"></i></span>
                        <h5>Camera</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s.</p>
                    
                </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="item"><span className="icons feture_box__col_two"><i className="fa fa-mobile"></i></span>
                        <h5>Smartphones</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 1500s.</p>
                    
                </div>
                </div>            
                </div>
            </div>
        </div>
          

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
