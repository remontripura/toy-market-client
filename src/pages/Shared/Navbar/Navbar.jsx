import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    // authcontext api
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { console.log('logout hoyese') })
            .catch(error => console.log(error))
    }



    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/addtoy'>Add A Toy</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-white">

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
            {user && <img className="rounded-full w-9 mr-5" src={user?.photoURL} alt="" />}
                {user ? <Link to='/login' onClick={() => handleLogOut()} className="bg-[#0D70D1] px-4 py-1 text-white font-semibold">logOut</Link> :
                <Link to='/login' className="bg-[#0D70D1] px-4 py-1 text-white font-semibold">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;