import { Link } from "react-router-dom";


const MyToysCard = ({ mytoy, handleDelete }) => {
    const { description, photo, name, _id } = mytoy;
    return (
        <tr>
            <td><img className="w-20" src={photo} alt="" /></td>
            <td>{name}</td>
            <td>{description}</td>
            <td><Link className="bg-[#0D70D1] px-4 py-1 text-white font-semibold">Update</Link></td>
            <td><button onClick={() => handleDelete(_id)} className="bg-[#0D70D1] px-4 py-1 text-white font-semibold">Delete</button></td>
            
        </tr>
    );
};

export default MyToysCard;