import React from 'react';
import axios from 'axios';
import { getId } from "../utils/Common";

export default function Cartcard(props) {
  let userId =getId();
   
     function add_to_wishlist() {
       axios
        .put("https://ecommereceapi.herokuapp.com/wishlist/" + userId, {
          id: props.id,
        })
        .then((res) => {
          alert("added to wishlist");
        });
    }
    function remove_item(id) {
     axios
        .put("https://ecommereceapi.herokuapp.com/cart/remove/" + userId, {
          id: id,
        })
        .then((res) => {
          alert("removed from cart");
        });
    }

    return (
        <div className="container">
        <div class="row featurette d-flex justify-content-center align-items-center">
        <div class="col-md-4 order-md-1">
            <img class="img-responsive" src={props.url} alt="" style={{width: '15rem'},{height:'15rem'}}/>
             
        </div>
        
        <div class="col-md-5 order-md-1">
            <h2 class="featurette-heading"> {props.title}</h2>
            <p class="lead">{props.description1}</p>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() =>{add_to_wishlist();remove_item(props.id);props.reloader();}}>Add to Wishlist</button>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{marginLeft: '1rem'}} onClick={()=>{remove_item(props.id); props.reloader(); }}>Delete</button>
        </div>
        <div class="col-md-3 order-md-1">
        {props.price}
        </div>
    </div>

    <hr/>
    </div>
        
    )
}
