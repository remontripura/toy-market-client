import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysCard from "./MyToysCard";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMyToy] = useState();
    console.log(mytoys)
    useEffect(() => {
        fetch(`http://localhost:5000/mygacdata/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToy(data)
            })
    }, [user])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Details</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mytoys.map(mytoy => <MyToysCard
                            key={mytoy._id}
                            mytoy={mytoy}
                            ></MyToysCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;