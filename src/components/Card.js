import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { getId } from "../utils/Common";

const Card = (props) => {
  const feed = {
    title: props.title,
    url: props.url,
    description1: props.description1,
    price: props.price,
  };

  const userId = getId();

  async function add_to_cart() {
    await axios
      .put("https://ecommereceapi.herokuapp.com/cart/" + userId, {
        id: props.id,
      })
      .then((res) => {
        alert("added to cart");
      });
  }
  return (
    <React.Fragment>
      <div class="card" style={{ width: "18.8rem" }}>
        <Link
          to={{
            pathname: "/details/",
            state: {
              title: props.title,
              url: props.url,
              url1: props.url1,
              url2: props.url2,
              description1: props.description1,
              description2: props.description2,
              price: props.price,
              id: props.id
            },
          }}
          style={{ textDecoration: "none" }}
        >
          <img
            class="card-img-top"
            src={props.url}
            alt="Card image cap"
            style={({ width: "20rem" }, { height: "15rem" })}
          />

          <div class="card-body">
            <h5
              class="card-title"
              style={{
                width: "95%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "blue",
              }}
            >
              {props.title}
            </h5>
            <h5
              class="card-title"
              style={{ color: "black", textAlign: "center" }}
            >
              <i class="fas fa-rupee-sign" style={{ color: "grey" }}></i>
              {props.price}/-
            </h5>
          </div>
        </Link>
        <button
          className="btn btn-outline-dark my-2 my-sm-0"
          type="submit"
          onClick={add_to_cart}
        >
          Add to Cart
        </button>
      </div>

      <br />
    </React.Fragment>
  );
};
export default Card;
