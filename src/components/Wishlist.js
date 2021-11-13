import React, { Component } from "react";
import Error from "./Error";
import axios from "axios";
import Wishlistcard from "./Wishlistcard";
import {getId} from "../utils/Common"

export default class Wishlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishlistdata: [],
    };
    this.autoReloader = this.autoReloader.bind(this);
  }

   autoReloader() {
    
      fetch(
        "https://ecommereceapi.herokuapp.com/api/auth/getUserById/" + getId()
      )
      .then((res) => {
        this.setState({ wishlistdata: res.data.data.wishlist });
      })
      .catch(console.log);
  }
  componentDidMount() {
    this.autoReloader();
  }

  render() {
    const { wishlistdata } = this.state;
    return (
      <div className="container-fluid">
        <div className="card-deck" style={{ flexWrap: "wrap" }}>
          {wishlistdata.length ? (
            wishlistdata.map((wishlistdata) => (
              <div>
                <Wishlistcard
                  url={wishlistdata.url}
                  title={wishlistdata.title}
                  description1={wishlistdata.description1}
                  price={wishlistdata.price}
                  id={wishlistdata._id}
                  reloader={this.autoReloader}
                />
              </div>
            ))
          ) : (
            <Error />
          )}
        </div>
      </div>
    );
  }
}
