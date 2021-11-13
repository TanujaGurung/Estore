import React, { useState, useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import axios from "axios"
import { getId, getUser, removeUserSession,setUserSession } from "../utils/Common";

//import useForceUpdate from 'use-force-update';
import elogo from "./elogo.jpg"
const Navbar = (props) => {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState('');
    const [pswd , setPswd] =useState('');
    const [err, setErr] = useState(null);
   
 
 let history  =useHistory();
  useEffect(() => {
    {
      /*
        setInterval was used in order to refresh the page constantly
    in order to have the "logout" button show immediately in place of
    "login", as soon as user logs out.
    */
    }
    
      
    setInterval(() => {
        // const userString = localStorage.getItem("user");
        // const user = JSON.parse(userString);
        setUser(getUser());
        // if(roles.toString() === "ROLE_USER"){
        //   setValue(1)}
    },1000)
        
      
      
  },[])
   

    const handleLogin =( ) =>{
     // props.history.push("/")
    //  const forceUpdate = useForceUpdate();

     setErr(null);
   //  setLoading(true);
     axios.post("https://ecommereceapi.herokuapp.com/api/auth/signin", {email: email, password : pswd})
        .then(res =>{
         
           setUserSession(res.data.username,res.data.id,res.data.email)
          
       // console.log("email is"+ email)
          //props.history.push('/cart')
          history.push('/cart')
         
            
        }).catch(err =>{
           // setLoading(false);
            //setErr(err.message)
            //if(err.response.status === 401 || err.response.status === 400){
             // setErr(err.response.data.message);}
              //  else {
               console.log(err)
                    setErr("user or password is wrong..kindly try again..")
              //   }
            
            //console.log(err)
          //alert(err)
        })
      
 
    }    
  const logout = () => {
 
    return removeUserSession();

   
  };
  //console.log("user is" + user)
  if (!user) {
    return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
      <Link to ="/" className="navbar-brand" ><h2 style={{fonttWeight:"bolder"}}>eStore</h2></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto topnav">
              <li className="nav-item active">
                  <Link to ="/wishlist" className="nav-link" >Wishlist <span class="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                  <Link to ="/cart" class="nav-link" href="#">Cart</Link>
              </li>
              <li className="nav-item">
                  <Link to ="/signin" class="nav-link" href="#">SignIn</Link>
              </li>
            
              
          </ul>
      </div>

        
  
          

  </nav>
      </React.Fragment>
    );
  }
  
   if (user) {
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
        <Link to ="/" className="navbar-brand" ><h2 style={{fonttWeight:"bolder"}}>eStore</h2></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto topnav">
                <li className="nav-item active">
                    <Link to ="/wishlist" className="nav-link" >Wishlist <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to ="/cart" class="nav-link" href="#"> <span class="badge badge-info">11</span>Cart</Link>
                </li>
                <li className="nav-item">
                    <Link to ="/" class="nav-link" href="#" onClick={logout}>SignOut</Link>
                </li>
              
                
            </ul>
        </div>
  
          
    
            
  
    </nav>
        </React.Fragment>
    
    )
    
  }
};

export default Navbar;
