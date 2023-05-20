import { Link } from "react-router-dom";


const GacTabsCard = ({ data }) => {
    const { photo, name, price, rating, _id } = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-72" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="text-semibold">Price:</span>$ {price}</p>
                <p><span className="text-semibold">Ratings:</span>{rating}</p>
                <Link to={`/view/${_id}`} className="bg-[#0D70D1] px-4 py-1 text-white text-center font-semibold">View Details</Link>
            </div>
        </div>
    );
};

export default GacTabsCard;