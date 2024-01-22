import { useState } from 'react';
import'./signupPage.css';
import {Link} from 'react-router-dom'
import axios from 'axios';

const images = require.context('../../asserts',true);
const imageList = images.keys().map(image => images(image));

let imgsrc = imageList[5];
// function changeImg(){
//     imgsrc = imageList[Math.floor(Math.random()*imageList.length)];
//   }
  const d = new Date();
  let year = d.getFullYear();
function SignupPage(){

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    async function register(ev){
        ev.preventDefault();
        
        axios({
            method: 'post',
            url: 'http://localhost:4000/signup',
            data: {
              name,
              email,
              password
            }
          })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <div className="signupForm" >
            <img src={imgsrc} alt="pic"/>
            <div className="form">
                <h3>Hello, new traveller!</h3>
                <form onSubmit={register}>
                    <input 
                        type='text' 
                        placeholder='Enter your name' 
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                        required 
                    /><br /><br />
                    <input 
                        type='email' 
                        placeholder='Enter your email' 
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        required 
                    /><br /><br />
                    <input 
                        type='password' 
                        placeholder='Enter your password' 
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        required
                    /><br /><br />
                    {/* <Link to="/AddInfo"><button type='submit'><strong>Sign Up</strong></button></Link> */}
                    <button type='submit'><strong>Sign Up</strong></button>
                </form>
                <p>Copyright &#169; <Link id='copy' to="/">Travel Log </Link>  {year}</p>
            </div>
        </div>
    );
}

export default SignupPage;