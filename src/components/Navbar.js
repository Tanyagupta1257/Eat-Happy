import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assests/images/logo.png"; // Ensure this path is correct
import { cart } from "../Data";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Navbar = () => {
    const searchRef = useRef();
    const cartRef = useRef();
    const navbarRef = useRef();

    useEffect(() => {
        console.log("Cart contents:", cart);
    }, []);

    const searchHandler = () => {
        searchRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
    };
    const cartHandler = () => {
        cartRef.current.classList.toggle("active");
        navbarRef.current.classList.remove("active");
        searchRef.current.classList.remove("active");
    }
    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");
    }

    return (
        <header className="header" ref = {navbarRef}>
            <Link href="/" className="logo"> {/* Updated href */}
                <img src={Logo} alt="Logo" />
            </Link>
            <nav className="navbar" ref = {navbarRef}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/product">Product</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/review">Review</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <div className="icons">
                <div className="fas fa-search" onClick={searchHandler}></div> {/* Search icon */}
                <div className="fas fa-shopping-cart" onClick = {cartHandler}></div> {/* Shopping cart icon */}
                <div className="fas fa-bars" id="menu-btn" onClick = {navbarHandler}></div> {/* Corrected class name */}
            </div>
            <div className="search-form" ref={searchRef}>
                <input type="search" placeholder="Search" id="search-box" />
                <label htmlFor="Search-box" className="fas fa-search"></label>
            </div>
            <div className="cart-items-container" ref = {cartRef}>
                {cart.map((item, index) => (
                    <div className="cart-item" key={index}> {/* Added key attribute */}
                        <span className="fas fa-times"></span>
                        <img src = {item.img} alt = "" />
                        <div className = "content">
                            <h3>cart item 01</h3>
                            <div className = "price">$1.0 </div>
                        </div>
                    </div>
                ))}
                <a className = "btn" href = "/checkout">
                    checkout now
                </a>
            </div>
        </header>
    );
}

export default Navbar;
