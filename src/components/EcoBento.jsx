import React from 'react'

const EcoBento = () => {
    return (
        <div className="w-full mx-auto px-4 py-8 mt-[30vh] afacad">
            {/* Header Section */}
            <div className="text-center mb-[20vh] ">
                <h1 className="text-4xl md:text-5xl royal lg:text-8xl font-light text-gray-800 mb-6">
                    More About The Eco Holiday Resort
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-xs md:text-base">
                    Eesham Resorts Pvt. Ltd. presents The Eco Holiday Resort, perfectly located for leisure guests near Indore, Dewas,
                    and Ujjain. Escape the hustle and bustle of the city and immerse yourself in the beauty of village life. Enjoy the
                    quiet, peaceful surroundings and pollution-free fresh air that will surely rejuvenate you.
                </p>
            </div>

            {/* Bento Grid Section - 2 Rows Layout */}
            <div className="space-y-4">
                {/* First Row: 50% + 25% + 25% */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:h-[500px]">
                    {/* Aerial view - 50% width (2 columns) */}
                    <div className="relative lg:col-span-2 h-64 md:h-80 lg:h-full overflow-hidden  group">
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            alt="Aerial view of our property"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                            alt="Our USP: Personal Pool Rooms"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                            src="https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            alt="Lavish Swimming pool"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 ">
                                <h3 className="text-white text-xs lg:text-base font-medium">Lavish Swimming pool</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row: 25% + 25% + 50% */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:h-[500px]">
                    {/* Wooden cottage - 25% width (1 column) */}
                    <div className="relative h-64 md:h-48 lg:h-full overflow-hidden  group">
                        <img
                            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            alt="Comforting wooden cottage"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            alt="Exquisite dining hall"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/30 backdrop-blur-sm px-3 py-1 ">
                                <h3 className="text-white text-xs lg:text-base font-medium">Exquisite dining hall</h3>
                            </div>
                        </div>
                    </div>

                    {/* Night view - 50% width (2 columns) */}
                    <div className="relative lg:col-span-2 h-64 md:h-80 lg:h-full overflow-hidden  group">
                        <img
                            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            alt="Beautiful night view"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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