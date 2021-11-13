import React, { Component } from 'react'
import { getId } from "../utils/Common";
import axios from "axios"

export default class Wishlistcard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       status:''
    }
  }
   remove_item(id) {
     axios
      .put("https://ecommereceapi.herokuapp.com/wishlist/remove/" + getId(), {
        id: id,
      })
      .then((res) => {
        alert("removed from cart");
      });
  }
  
    add_to_cart() {
     axios
      .put("https://ecommereceapi.herokuapp.com/cart/" + getId(), {
        id: this.props.id,
      })
      .then((res) => {
        alert("added to cart");
      });
  }
   
 
  
  render() {
    return (
      <React.Fragment>
      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src={this.props.url} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title" style={{ width: '95%', whiteSpace :"nowrap",
          overflow: 'hidden',
          textOverflow: 'ellipsis',color:"blue"}}>{this.props.title}</h5>
          <h5 class="card-title"><i class="fas fa-rupee-sign"></i>{this.props.price}</h5>
          <p class="card-text" style={{ width: '95%', whiteSpace :"nowrap",
          overflow: 'hidden',
          textOverflow: 'ellipsis',color:"blue"}}>{this.props.description1}</p>
        
          <div className="row">
         <div className="col-md-6">
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>{this.add_to_cart();this.remove_item(this.props.id);this.props.reloader()}}>Add to Cart</button>
         </div>
         <div className="col-md-6"></div>
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{marginLeft: '1rem'}} onClick={() => {this.remove_item(this.props.id);this.props.reloader()}}>Delete</button>
         </div>
          
         
        </div>
        </div>
        
      </React.Fragment>
    )
  }
}






/* import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'

export default function Wishlistcard(props) {
  const [status, setStatus] = useState('');
  const [errormessage, setErrorMessage] = useState('');
  const id = props.id;
  const item2 = {
    title: props.title,
    url:props.url,
    description1: props.description1,
    price: props.price,
    id:props.id

}
console.log(item2)





useEffect(() => {
  // DELETE request using fetch with error handling
  fetch('https://localhost:9000/wishlist'+id, { method: 'DELETE' })
      .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }

          setStatus('Delete successful');
      })
      .catch(error => {
          setErrorMessage(error);
          console.error('There was an error!', error);
      });
}, []);


function add_to_cart(){
  const posts = { 
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
         body: JSON.stringify(item2)
    
    }  
    if(props.title && props.url && props.description1 && props.price ){
      fetch("http://localhost:9000/cart", posts)
      .then(res => {
        console.log(res);
       alert("uploaded succesfully")
      })
    }
    
     
  
  
  handleClick = id => {
  const requestOptions = {
    method: 'DELETE'
  };

  // Note: I'm using arrow functions inside the `.fetch()` method.
  // This makes it so you don't have to bind component functions like `setState`
  // to the component.
  fetch("http://localhost:9000/wishlist" + id, requestOptions).then((response) => {
    return response.json();
  }).then((result) => {
    alert("deleted successfully")
  });
} 


}
  

  
 
  
    return (
        <div>
        <div>
        <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src={props.url} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <h5 class="card-title"><i class="fas fa-rupee-sign"></i>{props.price}</h5>
          <p class="card-text">{props.description1}</p>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={add_to_cart}>Add to Cart</button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{marginLeft: '1rem'}} onClick={ useEffect}>Delete</button>
        </div>
      </div>
        </div>
        </div>
    )
}

*/