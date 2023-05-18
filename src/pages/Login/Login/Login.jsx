import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    // function from contex api
    const { logIn, googleSignIn } = useContext(AuthContext);


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
            })
            .catch(error => {
                console.log(error)
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
                <button className="mx-auto text-4xl p-1" onClick={handleGoogleSignIn}><FaGoogle /></button>
                <p>You don't have an account? <Link to='/register' className="text-red-500">Please Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;