import { Outlet, Link } from "react-router-dom";
import logo from "../Logo.png";

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
                </ul>
            </nav>

            <Outlet />

            <footer>
                <div className="footer">
                <p>Copyright  &#169; Travel Log & Bloggers {year} </p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;