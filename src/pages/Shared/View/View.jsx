import { useLoaderData } from "react-router-dom";

const View = () => {
    const lodedGacData = useLoaderData();
    const { photo, name, seller, email, price, rating, quantity, description } = lodedGacData;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-10 lg:w-3/4 mx-auto">
            <div className="w-1/2">
                <figure><img className="w-72" src={photo} alt="Album" /></figure>
            </div>
            <div className="card-body w-1/2">
                <h2 className="card-title">{name}</h2>
                <div className="space-y-3">
                    <p><span className="font-semibold">Seller Name:</span> {seller}</p>
                    <p><span className="font-semibold">Seller Email: </span> {email}</p>
                    <p><span className="font-semibold">Price:</span> ${price}</p>
                    <p><span className="font-semibold">Abailable:</span> {quantity}</p>
                    <p><span className="font-semibold">Description:</span>{description}</p>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default View;