import {Link} from 'react-router-dom';
import './loginPage.css';

const images = require.context('../../LoginPhotos',true);
const imageList = images.keys().map(image => images(image));

let imgsrc;
function changeImg(){
    imgsrc = imageList[Math.floor(Math.random()*imageList.length)];
  }
 const d = new Date();
let year = d.getFullYear();

function LoginPage(){    
    return(
        <div className="images" onLoad={changeImg()} >
            <img src={imgsrc} alt="pic"  />
            <div className='loginForm'>
                <h3>Welcome back, Traveller!</h3>
                <form>
                    <input type="email" placeholder="Enter email" required />
                    <input type='password' placeholder="Enter password" required /> 
                    <Link to="/"><button type="submit"><strong>Login</strong></button></Link>
                </form>
                <p>Copyright &#169; <Link id='copy' to="/">Travel Log </Link>  {year}</p>
            </div>
        </div>
    );
}

export default LoginPage;