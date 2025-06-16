import React from 'react'

const EcoBento = () => {
    return (
        <div className="w-full mx-auto px-2 sm:px-4 py-8 sm:mt-[30vh] afacad">
            {/* Header Section */}
            <div className="text-center sm:mb-[20vh] py-10 sm:py-0">
                <h1 className="royal-heading mb-6">
                    More About The Eco Holiday Resort
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-xs md:text-base">
                    Eesham Resorts Pvt. Ltd. presents The Eco Holiday Resort, perfectly located for leisure guests near Indore, Dewas,
                    and Ujjain. Escape the hustle and bustle of the city and immerse yourself in the beauty of village life. Enjoy the
                    quiet, peaceful surroundings and pollution-free fresh air that will surely rejuvenate you.
                </p>
            </div>

            {/* Bento Grid Section - 2 Rows Layout */}
            <div className="space-y-2 sm:space-y-4">
                {/* First Row: 50% + 25% + 25% */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 sm:gap-4 h-auto lg:h-[500px]">
                    {/* Aerial view - 50% width (2 columns) */}
                    <div className="relative lg:col-span-2 h-64 md:h-80 lg:h-full rounded-t-4xl sm:rounded-t-none overflow-hidden  group">
                        <img
                            src="/about-hero.jpg"
                            alt="Aerial view of our property"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 ">
                                <h3 className="text-white text-lg font-medium">Aerial view of our property</h3>
                            </div>
                        </div>
                    </div>

                    {/* Pool room - 25% width (1 column) */}
                    <div className="relative h-64 md:h-48 lg:h-full overflow-hidden  group">
                        <img
                            src="/pool-room.jpg"
                            alt="Our USP: Personal Pool Rooms"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 ">
                                <h3 className="text-white text-xs lg:text-base font-medium">Our USP: Personal Pool Rooms</h3>
                            </div>
                        </div>
                    </div>

                    {/* Swimming pool - 25% width (1 column) */}
                    <div className="relative h-64 md:h-48 lg:h-full overflow-hidden  group">
                        <img
                            src="/eco-pool.png"
                            alt="Lavish Swimming pool"
                            className="w-full h-full object-cover  transition-transform duration-300 group-hover:scale-101"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 ">
                                <h3 className="text-white text-xs lg:text-base font-medium">Lavish Swimming pool</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row: 25% + 25% + 50% */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 sm:gap-4 h-auto lg:h-[500px]">
                    {/* Wooden cottage - 25% width (1 column) */}
                    <div className="relative h-64 md:h-48 lg:h-full overflow-hidden  group">
                        <img
                            src="/cottage-bed.jpg"
                            alt="Comforting wooden cottage"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 ">
                                <h3 className="text-white text-xs lg:text-base font-medium">Comforting wooden cottage</h3>
                            </div>
                        </div>
                    </div>

                    {/* Dining hall - 25% width (1 column) */}
                    <div className="relative h-64 md:h-48 lg:h-full overflow-hidden  group">
                        <img
                            src="/eco-dining.jpg"
                            alt="Exquisite dining hall"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 ">
                                <h3 className="text-white text-xs lg:text-base font-medium">Exquisite dining hall</h3>
                            </div>
                        </div>
                    </div>

                    {/* Night view - 50% width (2 columns) */}
                    <div className=" relative lg:col-span-2 h-64 md:h-80 lg:h-full rounded-b-4xl sm:rounded-b-none overflow-hidden  group">
                        <img
                            src="/eco-view.jpg"
                            alt="Beautiful night view"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 ">
                                <h3 className="text-white text-lg font-medium">Beautiful night view</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EcoBento