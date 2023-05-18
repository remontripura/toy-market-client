import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img className="w-32" src="https://i.ibb.co/mqF2Gv4/Gonow-Logo.png" alt="" />
                    <p>GAC GONOW Company Ltd</p>
                    <p>109 Dhaka, Bangladesh</p>
                    <p>phone: +880 175555 0000</p>
                </div>
                <div>
                    <span className="footer-title">Details</span>
                    <Link to='/aboutus'>About Us</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="flex gap-4">
                        <Link to='/facebook'><FaFacebook className="text-3xl"/></Link>
                        <Link to='/instagram'><FaInstagram className="text-3xl"/></Link>
                        <Link to='/youtube'><FaYoutube className="text-3xl"/></Link>
                    </div>
                </div>
            </footer>
            <p className="text-center"><small>Copyright 2023@ Design and Develop by GAC</small></p>
        </div>
    );
};

export default Footer;