import React from 'react'

const PoolRoom = () => {
    return (
        <div className='relative'>
            <div className="relative min-h-screen w-full overflow-hidden rounded-t-4xl sm:rounded-t-none rounded-b-4xl sm:rounded-b-none ">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/pool-room.jpg')`
                    }}
                >
                    <div className="absolute inset-0 bg-[#0007]"></div>
                </div>


                {/* Main Content */}
                <div className="relative z-10 flex flex-col justify-start py-10 items-end min-h-screen px-4 sm:px-8 lg:px-16 xl:px-24">
                    <div className="flex flex-col gap-16 items-start"> {/* Increased gap to 16 */}
                        {/* Main Heading */}
                        <h1 className="text-white royal text-[60px] mt-10 md:text-[80px] lg:text-[100px] xl:text-[140px] font-normal leading-[0.7] tracking-[-0.02em]">
                            Our Personal Pool Rooms
                            <br />
                            offer the perfect setting to
                            <br />
                            unwind and enjoy a{' '}
                            <span className="italic relative">
                                leisurely
                                <span className="absolute bottom-[10px] left-0 w-full border-b-[0.05em] border-white"></span>
                            </span>
                            <br />
                            <span className="italic relative">
                                experience
                                <span className="absolute bottom-[10px] left-0 w-full border-b-[0.05em] border-white"></span>
                            </span>
                        </h1>

                        {/* CTA Button */}
                        <button className="group bg-white afacad text-black px-8 py-2 rounded-full font-medium text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg mt-4"> {/* Added mt-4 for extra top margin */}
                            <span>Check Availability</span>
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>


            </div>
            <div className='absolute bottom-[-170px] sm:bottom-[-8px] z-20 sm:right-90 right-[-50px] rounded-4xl overflow-hidden sm:rounded-none w-[90%]  sm:w-auto h-[45vh] sm:h-[25vh] border-8 border-black'>
                <img src="/pool-bed.jpg" className='h-full w-full object-cover' alt="" />
            </div>
            <div className='absolute bottom-[-300px] sm:bottom-[-100px] rounded-4xl w-[80%] sm:w-auto overflow-hidden sm:rounded-none z-30 sm:z-10 right-[120px] sm:right-20  h-[30vh] sm:h-[30vh] border-8 border-black'>
                <img src="/pool.jpg" className='h-full w-full object-cover' alt="" />
            </div>
        </div>
    );
}

export default PoolRoom