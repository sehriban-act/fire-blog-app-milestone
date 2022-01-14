import { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { auth } from "../helpers/firebase";
import blog from "../assets/blog.png"
import google from "../assets/Google.png"
const Register = () => {
    
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState();
 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async () => {
        const displayName = firstName 
        try{
            
            let user = await createUserWithEmailAndPassword(auth, email, password)
            
            await updateProfile(auth.currentUser, {displayName : displayName})
            console.log(auth.currentUser);
            navigate('/')

        }catch(err){
            alert(err.message)
        }

    }
    
    return (
        <div className="bg-image">
     
        <div className="col s12 m6 offset-m3 center-align">
      <div className="register-form">
     
      <img src={blog} alt="sample-movie" />
        <h1 className="form-title display-3">Register</h1>
        <form id="register">
          <div className="mb-3">
            <label for="first-name" className="form-label display-4">First Name</label>
            <input type="text" className="form-control" id="first-name" placeholder="Enter your first name..." 
            onChange={(e) => setFirstName(e.target.value) }
            />
          </div>
       
          <div className="mb-3">
            <label for="email" className="form-label display-4">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email address..."
            onChange={(e) => setEmail(e.target.value) }
             />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label display-4">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password..." 
            onChange={(e) => setPassword(e.target.value) }
            />
          </div>
          <input type="button" className="btn  form-control" value="Register" 
            onClick = {handleSubmit}
           />
         
           <a className="oauth-container btn google darken-4 white black-text" href="/users/google-oauth/" >
               <div className="left">
                   <img  alt="Google sign-in" 
                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
               </div>
               Login with Google
           </a>
      
        </form>
        </div>
      </div>
    </div>
    )
}

export default Register;