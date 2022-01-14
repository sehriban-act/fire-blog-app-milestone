import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import {signOut} from 'firebase/auth';

import { Button, Container, Dropdown, DropdownButton, FormControl, Nav, NavDropdown, Offcanvas } from "react-bootstrap";

import { Form } from "semantic-ui-react";

import cw from "../assets/cw.jpeg";
import {AuthContext} from "../context/AuthContext";
import {auth} from "../helpers/firebase";

const Navbar = () => {

    const navigate = useNavigate();
    const {currentUser} = useContext(AuthContext);

    const signOutFunc = async () => {
      await signOut(auth)
    }

    return(
        <div>
     
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
        <img src={cw} alt="cw"/>
          <a className="navbar-brand" href="/" style={{ color: "white" }}><p><span>-</span>
    MileStone<span>-</span></p>
          </a>
          {currentUser &&
            <h3>{currentUser.displayName}</h3>}
          <DropdownButton id="dropdown-basic-button" title={<i class="fas fa-user-alt"></i>} >
{currentUser ? (
  <Dropdown.Item onClick={() => navigate("/profile")}>Profile</Dropdown.Item>
 
) : (  
  <Dropdown.Item onClick={() => navigate("/login")}>Login</Dropdown.Item>
)}
{currentUser ? (
  <Dropdown.Item onClick={() => navigate("/newblog")}>New</Dropdown.Item>

  
) : (
  <Dropdown.Item onClick={() => navigate("/register")}>Register</Dropdown.Item>
)}
{currentUser && 
  <Dropdown.Item onClick={() => signOutFunc()}>Logout</Dropdown.Item>

  }



</DropdownButton> 
         
    
        </div>
            </nav>
    </div>
    )
}

export default Navbar;






