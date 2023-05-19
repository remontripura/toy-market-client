import { Link } from "react-router-dom";


const AllToyCard = ({ toy }) => {
    const {seller, name, category, price, quantity, _id} = toy;
    return (
        <tr>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/view/${_id}`} className="bg-[#0D70D1] px-4 py-1 text-white font-semibold">View</Link></td>
        </tr>
    );
};

export default AllToyCard;