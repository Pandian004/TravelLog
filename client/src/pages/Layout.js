import { Outlet, Link } from "react-router-dom";
import logo from "../Logo.png";

function Layout(){
    return(
        <div>
            <nav>
                <Link to="/"><img src={logo} alt="logo" width={210}  height={90} /></Link>
                <ul>
                    <li><Link id="link" to="/LoginPage">Login</Link></li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}

export default Layout;