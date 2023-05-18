

const Banner = () => {
    return (
        <div className="carousel w-full h-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/PQQnjHg/green-easter-car-with-eggs-copy-space.jpg" className="w-full" />
                <div className="absolute transform -translate-y-1/2 left-1/2 top-1/2 w-1/5/4 lg:space-y-6">
                    <p className="lg:text-3xl font-semibold font-serif">big fan for kids?</p>
                    <p className="text-red-500 font-bold lg:text-7xl">A world to Explore</p>
                    <p className="lg:text-3xl font-serif">Active toy's for active kids. Bring fun non stop</p>
                    <button className="bg-[#EF4444] px-5 py-3 lg:text-3xl text-white font-semibold rounded-xl">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;