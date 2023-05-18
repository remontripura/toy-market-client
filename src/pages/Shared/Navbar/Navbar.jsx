import { Link } from "react-router-dom";


const Navbar = () => {
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/addtoys'>Add A Toy</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
    </>
    return (
        <div className="navbar lg:px-32 bg-[#B6EAFA]">

            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>

            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/'><img className="w-20" src="https://i.ibb.co/mqF2Gv4/Gonow-Logo.png" alt="" /></Link>
            </div>

            <div className="navbar-end">
                <Link to='/login' className="bg-[#EF4444] px-4 py-1 text-white font-semibold">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;