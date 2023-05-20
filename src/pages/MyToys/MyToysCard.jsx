

const MyToysCard = ({ mytoy }) => {
    const { description } = mytoy;
    return (
        <tr>
            <td>{description}</td>
        </tr>
    );
};

export default MyToysCard;