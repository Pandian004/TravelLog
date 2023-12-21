import'./signupPage.css';
import {Link} from 'react-router-dom'

const images = require.context('../../asserts',true);
const imageList = images.keys().map(image => images(image));

let imgsrc;
function changeImg(){
    imgsrc = imageList[Math.floor(Math.random()*imageList.length)];
  }
  const d = new Date();
  let year = d.getFullYear();
function SignupPage(){
    return(
        <div className="signupForm" onLoad={changeImg()}>
            <img src={imgsrc} alt="pic"/>
            <div className="form">
                <h3>Hello, new traveller!</h3>
                <form>
                    <input type='text' placeholder='Enter your name' required /><br /><br />
                    <input type='email' placeholder='Enter your email' required /><br /><br />
                    <input type='password' placeholder='Enter your password'  required/><br /><br />
                    <Link to="/AddInfo"><button type='submit'><strong>Sign Up</strong></button></Link>
                </form>
                <p>Copyright &#169; <Link id='copy' to="/">Travel Log </Link>  {year}</p>
            </div>
        </div>
    );
}

export default SignupPage;