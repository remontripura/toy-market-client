import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className='w-2/4 mx-auto text-center'>
            <img className='w-full' src="https://i.ibb.co/nRx6sPT/3793096.jpg" alt="" />
            <Link to="/" className="bg-[#007DFE] px-5 py-2 text-white rounded-md">Back To Home</Link>
        </div>
    );
};

export default Error;