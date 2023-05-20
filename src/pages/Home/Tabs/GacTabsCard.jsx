

const GacTabsCard = ({ data }) => {
    const { photo, name, price, rating } = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-72" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default GacTabsCard;