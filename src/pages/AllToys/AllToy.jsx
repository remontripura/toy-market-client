import { useLoaderData } from "react-router-dom";
import AllToyCard from "./AllToyCard";


const AllToy = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center">All Toys</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy => <AllToyCard
                                    key={toy._id}
                                    toy={toy}
                                ></AllToyCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllToy;