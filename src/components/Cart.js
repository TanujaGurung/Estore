import React, { Component } from "react";
import Cartcard from "./Cartcard";
import Error from "./Error";
import Axios from "axios";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getId } from "../utils/Common";
import * as qs from "qs";
toast.configure();

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { cartdata: [], total: "" };
    this.total_price = this.total_price.bind(this);
   
    this.autoReloader = this.autoReloader.bind(this);
    this.displayRazorpay = this.displayRazorpay.bind(this);
    this.loadScript = this.loadScript.bind(this);
  }
  componentDidMount() {
    this.autoReloader();
  }

  autoReloader = () => {
    axios
      .get(
        "https://ecommereceapi.herokuapp.com/api/auth/getUserById/" + getId()
      )
      .then((res) => {
        this.setState({ cartdata: res.data.data.cart });
      })
      .catch(console.log);
  };
  loadScript =(src)=> {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async displayRazorpay() {
    alert("clicked")
    const res = await this.loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const baseUrl = "https://capstoneeee.herokuapp.com";
    //todo change url
    // console.log(process.env.BASE_URL);
    const data = await fetch(baseUrl +"/create/orderId", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 500,
      }),
    }).then((t) => t.json());

    // console.log(data);

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for purchasingg. Please give us some money",
      // image: 'http://localhost:1337/logo.svg',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        console.log(response);
      },
      //to do
      prefill: {
        name: "tanu",
        email: "test@gmail.com",
        phone_number: 9999999999,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
   
  }
  total_price = () => {
    for (let i = 0; i < this.state.cartdata.length; i++) {
      let price = parseInt(this.cartdata.price);
      this.setState({ total: price + parseInt(this.state.total) });
    }
    // this.state.cartdata.forEach((cartdata)=> {
    //     this.setState( {total: parseInt(cartdata.price) + this.state.total})
    //});
    console.log(this.state.total);
  };

  render() {
    const { cartdata } = this.state;

    return (
      <div className="container justify-content-center align-items-center">
        <h1> Shopping Cart</h1>
        <br />

        <br />
        <br />
        <div class="row featurette d-flex justify-content-center align-items-center">
          <div class="col-md-3 order-md-1">
            <h5>Items</h5>
          </div>
          <div class="col-md-6 order-md-1">
            <h5>Items Description</h5>
          </div>
          <div class="col-md-3 order-md-1">
            <h5>Items price</h5>
          </div>
        </div>
        <hr />
        <div className="card-deck" style={{ flexWrap: "wrap" }}>
          {cartdata.length ? (
            cartdata.map((cartdata) => (
              <div>
                <Cartcard
                  url={cartdata.url}
                  title={cartdata.title}
                  description1={cartdata.description1}
                  price={cartdata.price}
                  id={cartdata._id}
                  reloader={this.autoReloader}
                />
              </div>
            ))
          ) : (
            <Error />
          )}
        </div>

        <div class="card">
          <div class="card-body">
            <div class="row featurette d-flex justify-content-center align-items-center">
              <div class="col-md-6 order-md-1">
                <h4 class="card-title">Sub Total:</h4>
              </div>
              <div class="col-md-6 order-md-1">
                <h4 class="card-title">
                  <i class="fas fa-rupee-sign"></i>36690
                </h4>
              </div>
            </div>
            <p class="card-text">This order contains total of 3 items</p>

            <div className="container justify-content-center">
              <input
                type="button"
                className="btn btn-primary"
                value="Pay Now"
                onClick={this.displayRazorpay}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
