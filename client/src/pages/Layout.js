import { Outlet, Link } from "react-router-dom";
import logo from "../Logo.png";
import facebook from "../AssertsNew/facebook.svg";
import instagram from "../AssertsNew/instagram.svg";
import twitterX from "../AssertsNew/x-twitter.svg";

const d = new Date();
let year = d.getFullYear();


function Layout(){
    return(
        <div>
            <nav>
                <Link to="/"><img src={logo} alt="logo" width={210}  height={90} /></Link>
                <ul>
                    <li><Link id="link" to="/LoginPage">Login</Link></li>
                    <li><Link id="link1" to="/SignupPage">Sign up</Link></li>
                    {/* <li><Link id="link" to="/Profile">Profile(Demo purpose)</Link></li> */}
                </ul>
            </nav>

            <Outlet />

            <footer>
                <h1>Travel Log</h1>
                <div className="socials">
                    <a href="https://www.facebook.com"><img src={facebook} alt="facebook"  width={30} /></a>
                    <a href="https://www.instagram.com"><img src={instagram} alt="facebook" width={30} /></a>
                    <a href="https://www.twitter.com"><img src={twitterX} alt="facebook" width={30} /></a>
                </div>
                <div className="footer-end">
                    <p>Copyright  &#169; Travel Log & Bloggers 2023 - {year}. All rights reserved </p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;