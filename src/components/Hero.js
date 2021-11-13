import React from "react";


const Hero =(props)=>{
    const {handleLogout}=props;
    return(
   
    <section>
    <nav>
    <h2>Welcome</h2>
    <button onClick={handleLogout}>Logout</button>
    </nav>
    </section>
    )
}

export default Hero;