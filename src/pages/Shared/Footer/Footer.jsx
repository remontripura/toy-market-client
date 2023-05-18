import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
            <div className="">
                <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img className="w-32" src="https://i.ibb.co/mqF2Gv4/Gonow-Logo.png" alt="" />
                    <p>GAC GONOW Company Ltd</p>
                </div>
                <div>
                    <span className="footer-title">Details</span>
                    <Link to='/aboutus'>About Us</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <p className="text-center"><small>Copyright 2023@ Design and Develop by GAC</small></p>
            </div>
    );
};

export default Footer;