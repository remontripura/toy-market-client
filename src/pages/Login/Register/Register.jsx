import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Register = () => {

    // auth context
    const { createUser } = useContext(AuthContext);


    // form to collect data
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result => {
            const newUser = result.user;
            console.log(newUser)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="w-2/4 mx-auto my-20">
            <h2 className="text-center text-3xl font-bold">Sign Up</h2>
            <form onSubmit={handleLogin} className="space-y-5">
                {/* name input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="px-3 py-1 border rounded border-black" />
                </div>
                {/* photo url input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo Url" className="px-3 py-1 border rounded border-black" />
                </div>
                {/* email input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="xyz@gmail.com" className="px-3 py-1 border rounded border-black" />
                </div>
                {/* password input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="******" className="px-3 py-1 border rounded border-black" />
                </div>
                <input className="btn btn-block bg-[#0D70D1] hover:bg-[#0b4d8e]" type="submit" value="Register" />
                <p>Already have an account? <Link to='/login' className="text-red-500">log in</Link></p>
            </form>
        </div>
    );
};

export default Register;