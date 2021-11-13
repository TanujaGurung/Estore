import React from "react";


const Login =(props) =>{
    const{email,
        setEmail,
        pswd,
        setPswd,
        handleLogin,
        handleSignUp,
        setHasAcc,
        emailErr,
        pswdErr,
        hasAcc
    } = props;
    return(
      <div className="container">
        <section className="login">
        <div>
        <label> Username: </label>
        <input type="text" autoFocus required value ={email} onChange= {(e)=>{setEmail(e.target.value)}}   />
        <p className="errmsg">{emailErr}</p>
        </div>
        <label> password :</label>
        <input type="password" required value ={pswd} onChange={(e)=>{setPswd(e.target.value)}} ></input>
      <p className ="errmsg">{pswdErr}</p>
      <div className="container">
      <button className='container' ></button>
      {hasAcc ? 
        (<div>
            <button onClick={handleLogin}>SignIn</button>
            <p>Don't have an Account? <span className ="text-primary" onClick={()=>setHasAcc(!hasAcc)}>Sign Up</span></p>
         </div>   )
        : (
            <div>
            <button onClick={handleSignUp}>SignUp</button>
            <p>Have an account?<span className ="text-primary" onClick={()=>setHasAcc(!hasAcc)}>Sign In</span></p>
         </div> 
        ) }
      </div>
      

      
        </section>
        </div>
    )
}
export default Login;