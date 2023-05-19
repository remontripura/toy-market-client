

const AddToy = () => {
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
        console.log(name, seller, email, category, price, rating, quantity, description)
    }
    return (
        <form onSubmit={handleAddToy}>
            <div className="grid lg:grid-cols-2 gap-6">
                {/* name input */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="px-3 py-1 border rounded border-black" required />
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
                        <option disabled selected>sports car</option>
                        <option>truck</option>
                        <option>mini fire truck</option>
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
                <input className="btn btn-block bg-[#0D70D1] hover:bg-[#0b4d8e]" type="submit" value="Add Toy" />
            </div>
        </form>
    );
};

export default AddToy;