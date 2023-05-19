

const AllToyCard = ({ toy }) => {
    const {seller, name, category, price, quantity} = toy;
    return (
        <tr>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className="bg-[#0D70D1] px-4 py-1 text-white font-semibold">View</button></td>
        </tr>
    );
};

export default AllToyCard;