import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../../Hooks/UseTitle";

const Login = () => {

    // function from contex api
    const { logIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState();
    useTitle("Login")
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    // collect data from form
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                form.reset();
                setError();
                alert('login success')
                
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn();
    }

    return (
        <div className="w-2/4 mx-auto my-20">
            <h2 className="text-center text-3xl font-bold">Log in</h2>
            <form onSubmit={handleLogin} className="space-y-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="xyz@gmail.com" className="px-3 py-1 border rounded border-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="******" className="px-3 py-1 border rounded border-black" required />
                </div>
                <input className="btn btn-block bg-[#0D70D1] hover:bg-[#0b4d8e]" type="submit" value="Log in" />
                <button className="text-4xl p-1" onClick={handleGoogleSignIn}><FaGoogle /></button>
                <p>You don't have an account? <Link to='/register' className="text-red-500">Please Sign Up</Link></p>
                <p className="text-red-500"><small>{error}</small></p>
            </form>
        </div>
    );
};

export default Login;