import { useState } from 'react';

import { signInWithEmailAndPassword} from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import blog from "../assets/blog.png";

import { useAuth } from '../context/AuthContext';
import { auth } from '../helpers/firebase';
const Login = () => {

    const navigate = useNavigate()
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const {  loginWithGoogle } = useAuth()
    const handleSubmit = async () => {
        try{
            
            let user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user);
            navigate('/')

        }catch(err){
            alert(err.message)
        }
    }
    const handleGoogleProvider = () => {
      loginWithGoogle();
    };
  
    return (
        <div className="bg-image">
        <div className="col s12 m6 offset-m3 center-align">
        <div className="register-form">

        <img src={blog} alt="sample-movie" />
        
        <h1 className="form-title display-3">Login</h1>
        <form id="login">
          <div className="mb-3">
            <label for="email" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label display-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
           
          </div>
         <input
            type="button"
            className="btn  form-control" 
            value="Login"
            onClick={handleSubmit}
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

export default Login;