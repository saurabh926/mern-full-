import { Link, Outlet } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin, FaYoutube, FaSearch, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiAdminFill } from "react-icons/ri";
import logoImg from "./images/logo.png";
import Footer from "./component/Footer";
import { useSelector } from "react-redux";


let username = window.localStorage.getItem("username");
let useremail = window.localStorage.getItem("useremail");

const Layout = () => {
    const cartItem = useSelector((state) => state.cartProduct.cart);
    const itemNumber = cartItem.length;

    return (
        <div id="wrapper">
            <div id="header">
                {/* Top Menu */}
                <div id="topmenu">
                    <div id="topmenuleft">
                        <ul>
                            <li>About us</li>
                            <li>Privacy</li>
                            <li>FAQ</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div id="topmenuright">
                        <ul>
                            <li>My Wishlist</li>
                            <li>Track Your Order</li>
                            <li><FaFacebook /></li>
                            <li><FaInstagramSquare /></li>
                            <li><FaTwitter /></li>
                            <li><FaLinkedin /></li>
                            <li><FaYoutube /></li>
                            <li><Link to="adminuser"><RiAdminFill /></Link></li>
                        </ul>
                    </div>
                </div>

                <div id="userdata">
                    <b>Name:</b> {username} <b>Email:</b> {useremail}
                    <a href="#">Logout</a>
                </div>

                {/* Main Menu */}
                <div id="mainmenu">
                    <div id="mainmenulogo">
                        <img src={logoImg} alt="Logo" />
                    </div>
                    <div id="mainmenumiddle">
                        <ul>
                            <li><Link to="home">Home</Link></li>
                            <li><Link to="men">Men</Link></li>
                            <li><Link to="women">Women</Link></li>
                            <li><Link to="babycollection">Baby Collection</Link></li>
                            <li><Link to="shop">Shop</Link></li>
                            <li><Link to="cartpage">My Cart</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div id="mainmenuicon">
                        <FaSearch />
                        <Link to="userlogin"><FaRegUser id="userspace" /></Link>
                        <Link to="cartpage">
                            <FiShoppingCart />
                            <span className="cartCount">{itemNumber}</span>
                        </Link>
                    </div>
                </div>
            </div>

            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout;
