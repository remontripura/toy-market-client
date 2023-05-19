

const AddToy = () => {
    return (
        <div>
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
            {/* seller email input */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Your Name" className="px-3 py-1 border rounded border-black" required />
            </div>
        </div>
    );
};

export default AddToy;