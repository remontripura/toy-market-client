

const SectionOne = () => {
    return (
        <div className="h-auto">
            <h2 className="text-4xl font-semibold text-center mb-5">Toy Mini Bus</h2>
            <div className="grid lg:grid-cols-2">
                <div>
                    <img className="w-full h-80" src="https://i.ibb.co/2Yfndqq/miniature.jpg" alt="" />
                </div>
                <div className="px-5 space-y-5">
                    <div>
                        <h2 className="font-bold">Material: </h2>
                        <p>
                            <small>
                                Crafted from high-quality, non-toxic plastic, the toy is safe for children to play with. It can withstand rough handling and is built to last, ensuring hours of imaginative play.
                            </small>
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold">Doors and Windows:</h2>
                        <p>
                            <small>
                                The Mini Bus Toy is equipped with functioning doors that can be opened and closed, allowing children to mimic real-life scenarios. The windows are transparent, allowing kids to see inside the bus and create stories with the passengers.
                            </small>
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold">Wheels:</h2>
                        <p>
                            <small>
                            The toy bus rolls smoothly on its four sturdy wheels, enabling it to glide effortlessly across various surfaces, whether it's a playroom floor or an outdoor adventure.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;