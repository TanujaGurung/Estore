
import React,{useState,useEffect} from "react";
import axios from "axios";

const SignUp =(props) =>{
	const [userRegistration, setUserRegistraion] = useState({
		username: "",
		password:"",
		email: "",
		mobile: "",
		address: ""
		
	  });
	  const [err,setErr] = useState("")
	  const handleInput = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
	   // console.log({name, value})
		userRegistration[name] = value;
		setUserRegistraion({ ...userRegistration });
	  //  alert(userRegistration.roles[0])
	  };
	  
	
	  const handleSubmit = () => {
	   // console.log(userRegistration);
		//alert(userRegistration.username)
		// const feeds={
		//   ...userRegistration,
		//   roles : [userRegistration.role]
		// }
		axios.post("https://capstoneeee.herokuapp.com/api/auth/signup",userRegistration)
		.then(res =>{
			 alert("succesfully registered");
		  // setUserSession(res.data.token, res.data.username)
		   props.history.push('/signin')
			//alert(res.data.username)
		}).catch(err =>{
			
			if(err.response.status === 401 || err.response.status === 400){
			  setErr(err.response.data.message);}
				else {
					setErr("Something went wrong, try again..")
				}
			
			//console.log(err)
		  alert(err)
		})
	  };
    return(
        <React.Fragment>
		<div class="wrapper">
            <div class="text-center">
        <div className="container-fluid justify-content-center align-items-center" style={{textAlign:"center",display:"flex"}}>
        <div class="container">

         <div class="row">
    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
    	<form role="form" onSubmit={handleSubmit} >
			<h2>Create Account</h2>
			<hr class="colorgraph" style={{height:'5px',borderTop:'0',background:"#c4e17f",borderRadius:'5px'}} />
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-6">
					<div class="form-group">
                        <input type="text" name="username" id="first_name" class="form-control input-lg" placeholder="User Name" tabindex="1" value={userRegistration.username}
						onChange={handleInput}/>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6">
					<div class="form-group">
						<input type="number" name="mobile" id="mobile" class="form-control input-lg" placeholder="mobile" tabindex="2" value={userRegistration.mobile}
						onChange={handleInput}/>
					</div>
				</div>
			</div>
			
			<div class="form-group">
				<input type="email" name="email" id="email" class="form-control input-lg" placeholder="Email Address" tabindex="4" value={userRegistration.email}
				onChange={handleInput} />
			</div>
			<div class="form-group">
				<input type="text" name="address" id="address" class="form-control input-lg" placeholder="Resident Address" tabindex="4" value={userRegistration.address}
				onChange={handleInput}/>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-6">
					<div class="form-group">
						<input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password" tabindex="5" value={userRegistration.password}
						onChange={handleInput}/>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6">
					<div class="form-group">
						<input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-lg" placeholder="Confirm Password" tabindex="6" />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-4 col-sm-3 col-md-3">
					<span class="button-checkbox">
						<button type="button" class="btn" data-color="info" tabindex="7">I Agree</button>
                        <input type="checkbox" name="t_and_c" id="t_and_c" class="hidden" value="1"/>
					</span>
				</div>
				<div class="col-xs-8 col-sm-9 col-md-9">
					 By clicking <strong class="label label-primary">Register</strong>, you agree to the <a href="#" data-toggle="modal" data-target="#t_and_c_m">Terms and Conditions</a> 
				</div>
			</div>
			
			<hr class="colorgraph" style={{height:'5px',borderTop:'0',background:"#c4e17f",borderRadius:'5px'}}/>
			<div class="row">
				<div class="col-xs-12 col-md-12" ><input type="submit" value="Register" placeholder="Register" class="btn btn-primary btn-block btn-lg" style={{textAlign:"center"}} />
				<br/></div>
					<br/>
			</div>
            
		</form>
	</div>
</div>

<div class="modal fade" id="t_and_c_m" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalLabel">Terms & Conditions</h4>
			</div>
			<div class="modal-body">
                            
                        </div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" data-dismiss="modal">I Agree</button>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
</div>
<br/>
<br/>
<br/>
<br/>
</React.Fragment> 
)
}
export default SignUp;