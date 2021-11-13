import React from "react";
import { getId } from "../utils/Common";
import axios from "axios";

const Details = (props) => {
  let product = props.location.state;
  let userId = getId();

  async function add_to_cart() {
    await axios
      .put("https://ecommereceapi.herokuapp.com/cart/" + userId, {
        id: product.id,
      })
      .then((res) => {
        alert("added to cart");
      });
  }

  async function add_to_wishlist() {
    await axios
      .put("https://ecommereceapi.herokuapp.com/wishlist/" + userId, {
        id: product.id,
      })
      .then((res) => {
        alert("added to wishlist");
      });
  }

  return (
    <div className="container-fluid">
      <div class="row featurette d-flex justify-content-center align-items-center">
        <div class="col-md-8 order-md-1">
          <div className="card" style={{ width: "80%" }}>
            <div className="container">
              <div className="container">
                <div id="demo" class="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="card-img-top"
                        src={product.url}
                        alt="Card image cap"
                        style={({ width: "25rem" }, { height: "20rem" })}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="card-img-top"
                        src={product.url1}
                        alt="Card image cap"
                        style={({ width: "25rem" }, { height: "20rem" })}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="card-img-top"
                        src={product.url2}
                        alt="Card image cap"
                        style={({ width: "25rem" }, { height: "20rem" })}
                      />
                    </div>
                  </div>

                  <a
                    className="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>

              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={add_to_cart}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                style={{ marginLeft: "1rem" }}
                onClick={add_to_wishlist}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 order-md-1">
          <h2 class="featurette-heading">{product.title} </h2>
          <h4 class="featurette-heading">
            <i class="fas fa-rupee-sign"></i>
            {product.price}{" "}
          </h4>
          <hr />
          <p class="lead">{product.description1}</p>
          <p class="lead">{product.description2}</p>
        </div>

        <br />
      </div>
    </div>
  );
};
export default Details;
