import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysCard from "./MyToysCard";


const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    const [mytoys, setMyToy] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/mygacdata/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (loading) {
                    <progress className="progress w-56"></progress>
                }
                setMyToy(data)
            })
    }, [user])

    const handleDelete = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',

        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully')
                const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                setMyToy(remaining)
            }
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Details</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mytoys?.map(mytoy => <MyToysCard
                            key={mytoy._id}
                            mytoy={mytoy}
                            handleDelete={handleDelete}
                        ></MyToysCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;