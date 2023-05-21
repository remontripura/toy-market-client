import { useLoaderData } from "react-router-dom";

const Update = () => {

    const data = useLoaderData();
    console.log(data)
    const { price, quantity, description, _id } = data;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateData = { price, quantity, description }

        fetch(`https://toy-market-server-puce.vercel.app/viewing/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Update Successfuly')
            })
    }
    return (
        <form onSubmit={handleUpdate} className="my-20 space-y-5 px-5">
            <h2 className="text-center text-4xl font-semibold">Update Toy Information</h2>
            <div className="grid lg:grid-cols-2 gap-6">

                {/* price input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" defaultValue={price} className="px-3 py-1 border rounded border-black" />
                </div>

                {/* quantity input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name="quantity" defaultValue={quantity} className="px-3 py-1 border rounded border-black" />
                </div>
            </div>
            {/* description input */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input type="text" name="description" defaultValue={description} className="px-3 py-1 border rounded border-black" />
            </div>
            <input className="btn btn-block bg-[#0D70D1] hover:bg-[#0b4d8e]" type="submit" value="Update" />
        </form>
    );
}
export default Update;