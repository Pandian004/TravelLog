import'./signupPage.css';
import {Link} from 'react-router-dom'

const images = require.context('../../asserts',true);
const imageList = images.keys().map(image => images(image));

let imgsrc;
function changeImg(){
    imgsrc = imageList[Math.floor(Math.random()*imageList.length)];
  }
function SignupPage(){
    return(
        <div className="signupForm" onLoad={changeImg()}>
            <img src={imgsrc} alt="pic"/>
            <div className="form">
                <h3>Hello, new traveller!</h3>
                <form>
                    <input type='text' placeholder='Enter your name' /><br /><br />
                    <input type='email' placeholder='Enter your email' /><br /><br />
                    <input type='password' placeholder='Create your password' /><br /><br />
                    <input type='password' placeholder='Reapeat your password' /><br /><br />
                    <Link to="/"><button type='submit'>Sign Up</button></Link>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;