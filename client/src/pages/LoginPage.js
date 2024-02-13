import {Link, Navigate} from 'react-router-dom';
import './loginPage.css';
import { useState } from 'react';
import axios from 'axios';

const images = require.context('../../LoginPhotos',true);
const imageList = images.keys().map(image => images(image));

let imgsrc = imageList[5];
// function changeImg(){
//     imgsrc = imageList[Math.floor(Math.random()*imageList.length)];
//   }
 const d = new Date();
let year = d.getFullYear();

function LoginPage(){ 
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState(''); 
    const[redirect, setRedirect] = useState(false);

    
    function login(ev){
        ev.preventDefault();
        axios.post("http://localhost:4000/login", {
            username:userName,
            password:password
        })
        .then(function(response){
            alert("Login successful");
            setRedirect(true);
            console.log(response);
        })
        .catch(function (error) {
            alert("login failed")
            console.log(error);
        });
    }
    
    if(redirect){
        return <Navigate to ={'/'} />
    }
    return(
        <div className="images" >
            <img src={imgsrc} alt="pic"  />
            <div className='loginForm'>
                <h3>Welcome back, Traveller!</h3>
                <form onSubmit={login}>
                    <input 
                        type="username" 
                        placeholder="Enter username" 
                        value={userName}
                        onChange={ev => setUserName(ev.target.value)}
                        required 
                    />
                    <input 
                        type='password' 
                        placeholder="Enter password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} 
                        required 
                    /> 
                    <button type="submit"><strong>Login</strong></button>
                </form>
                <p>Copyright &#169; <Link id='copy' to="/">Travel Log </Link>  {year}</p>
            </div>
        </div>
    );
}

export default LoginPage;