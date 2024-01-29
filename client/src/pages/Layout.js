import { Outlet, Link } from "react-router-dom";
import logo from "../Logo.png";
import facebook from "../AssertsNew/facebook.svg";
import instagram from "../AssertsNew/instagram.svg";
import twitterX from "../AssertsNew/x-twitter.svg";
import footerImage from "../AssertsNew/footerImage.png";

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
                <div className="footerImage">
                    <img src={footerImage}  alt="footer" />
                </div>
                <div className="footer">
                    <div className="footer-start">
                        <h3>Travel Log</h3>
                    </div>
                    <div className="socials">
                        <img src={facebook} alt="facebook"  width={30} />
                        <img src={instagram} alt="facebook" width={30} />
                        <img src={twitterX} alt="facebook" width={30} />
                    </div>
                    <div className="footer-end">
                        <p>Copyright  &#169; Travel Log & Bloggers 2023 - {year}. All rights reserved </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;