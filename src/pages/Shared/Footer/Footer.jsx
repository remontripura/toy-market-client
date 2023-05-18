import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <img className="w-40" src="https://i.ibb.co/mqF2Gv4/Gonow-Logo.png" alt="" />
                <p>GAC GONOW LTD<br />Gac Gonow Copyright @2023</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <Link><FaFacebook className="text-4xl"/></Link>
                    <Link><FaInstagram className="text-4xl"/></Link>
                    <Link><FaYoutube className="text-4xl"/></Link>

                </div>
            </div>
        </footer>
    );
};

export default Footer;