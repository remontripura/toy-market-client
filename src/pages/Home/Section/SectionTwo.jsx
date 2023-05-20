

const SectionTwo = () => {
    return (
        <div className="my-10 w-2/4 mx-auto">
            <h2 className="text-5xl text-center font-bold">Register for our 7 day free <span className="text-red-500">offer</span></h2>
            <div className="form-control my-5">
                <label className="input-group">
                    <input type="text" placeholder="Your Email" className="px-4 w-full border  border-black py-1 font-semibold" />
                    <span className="border border-black"><button>Subscribe</button></span>
                </label>
            </div>
        </div>
    );
};

export default SectionTwo;