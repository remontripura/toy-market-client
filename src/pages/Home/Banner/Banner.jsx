

const Banner = () => {
    return (
        <div className="carousel w-full h-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/JsC93sV/green-easter-car-with-eggs-copy-space-removebg-preview.png" className="w-full" />
                <div className="absolute transform -translate-y-1/2 left-1/2 top-1/2 w-1/5/4 lg:space-y-6">
                    <p className="lg:text-3xl font-semibold font-serif">big fan for kids?</p>
                    <p className="font-bold lg:text-7xl">A world to Explore</p>
                    <p className="lg:text-3xl font-serif">Active toy's for active kids. Bring fun non stop</p>
                    <button className="bg-[#0D70D1] px-4 py-2 lg:text-2xl text-white font-semibold rounded-xl">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;