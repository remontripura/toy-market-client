import useTitle from "../../Hooks/UseTitle";


const AddToy = () => {
    // Dynamic Title
    useTitle('Add-Toy')

    // handle Add toy event handler
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const allData = { name, seller, email, category, price, rating, quantity, description, photo }
        fetch('https://toy-market-server-puce.vercel.app/allgacdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                alert('Added Successfully')
            })
    }
    return (
        <form onSubmit={handleAddToy} className="my-10 space-y-5 px-5">
            <h2 className="text-center text-4xl font-semibold">Add Toy Field</h2>
            <div className="grid lg:grid-cols-2 gap-6">
                {/* name input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Toy Name" className="px-3 py-1 border rounded border-black" required />
                </div>
                {/* seller name input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name="seller" placeholder="Your Name" className="px-3 py-1 border rounded border-black" required />
                </div>
                {/* seller email input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Name" className="px-3 py-1 border rounded border-black" required />
                </div>
                {/* sub category input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name="category" className="select select-bordered">
                        <option>sports</option>
                        <option>truck</option>
                        <option>zeep</option>
                        <option>police</option>
                    </select>
                </div>
                {/* price input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="Price" className="px-3 py-1 border rounded border-black" required />
                </div>
                {/* rating input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name="rating" placeholder="Ratings" className="px-3 py-1 border rounded border-black" required />
                </div>
                {/* quantity input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name="quantity" placeholder="Quantity" className="px-3 py-1 border rounded border-black" required />
                </div>
                {/* description input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Description" className="px-3 py-1 border rounded border-black" required />
                </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name="photo" placeholder="Photo Url" className="px-3 py-1 border rounded border-black" required />
            </div>
            <input className="btn btn-block bg-[#0D70D1] hover:bg-[#0b4d8e]" type="submit" value="Add Toy" />
        </form>
    );
};

export default AddToy;