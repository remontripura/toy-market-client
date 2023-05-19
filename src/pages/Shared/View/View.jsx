import { useLoaderData } from "react-router-dom";

const View = () => {
    const lodedGacData = useLoaderData();
    const { photo, name, seller, email, price, rating, quantity, description } = lodedGacData;
    return (
        <div>
            <img src={photo} alt="" />
        </div>
    );
};

export default View;