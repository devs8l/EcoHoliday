import React, { useEffect, useState } from 'react';
import { Clock, Users, Plus, Baby, TrendingUp } from 'lucide-react';

const Packages = () => {
    const [activeTab, setActiveTab] = useState('party');
    const [animate, setAnimate] = useState(false);

    const packages = {
        party: {
            title: "Party<br/>Package",
            description: "Enjoy a fun-filled day with our Party Package! Savor a tasty lunch and dinner, while making the most of the swimming pool, rain dance floor, games, and a cozy bonfire. Perfect for a memorable getaway with family or friends in a peaceful village setting!",
            adultPrice: "₹1,000/person",
            childPrice: "₹500/person",
            timing: "12 PM to 09 PM",
            lunchTime: "01:30 PM to 03 PM",
            dinnerTime: "07:30 PM to 09 PM",
            includes: [
                { icon: "/breakfast.svg", label: "Breakfast" },
                { icon: "/swim.svg", label: "Swimming Pool" },
                { icon: "/rain.svg", label: "Rain Dance Floor" },
                { icon: "/games.svg", label: "Games" },
                { icon: "/bonfire.svg", label: "Bonfire" }
            ],
            bgImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            imgTop: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        },
        nightStay: {
            title: "Night<br/>Stay Package",
            description: "Experience a relaxing getaway with our Night Stay Package! Choose from a cozy cottage, spacious villa, or pool room, and enjoy a hearty breakfast, access to the swimming pool, rain dance floor, and fun games. Perfect for a serene overnight escape in a peaceful village setting!",
            cottage: "₹4,000/",
            villa: "₹7,000/",
            pool: "₹8,500/",
            timing: "02 PM to 12 PM (Next Day)",
            includes: [
                { icon: "/breakfast.svg", label: "Breakfast" },
                { icon: "/swim.svg", label: "Swimming Pool" },
                { icon: "/rain.svg", label: "Rain Dance Floor" },
                { icon: "/games.svg", label: "Games" },
            ],
            bgImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            isPopular: true,
            imgTop: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        },
        campingNight: {
            title: "Camping<br/>Night Package",
            description: "Dive into an adventurous escape with our Camping Night Package! Enjoy a hearty breakfast and dinner, along with access to the swimming pool, rain dance floor, games, and a warm bonfire. Perfect for a thrilling overnight camping experience in a serene village setting!",
            price: "₹2,000 (+12% Taxes) per person",
            includes: [
                { icon: "/breakfast.svg", label: "Breakfast" },
                { icon: "/swim.svg", label: "Swimming Pool" },
                { icon: "/rain.svg", label: "Rain Dance Floor" },
                { icon: "/games.svg", label: "Games" },
                { icon: "/bonfire.svg", label: "Bonfire" }
            ],
            bgImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            imgTop: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        }
    };


    const currentPackage = packages[activeTab];

    return (
        <div className="min-h-screen px-4 py-4 ">
            {/* Header */}
            <div className="text-center py-12 px-4">
                <h1 className="text-4xl md:text-[140px] royal font-light text-gray-800 mb-8">
                    Our Exquisite Packages
                </h1>
            </div>
            <div className='flex sm:hidden h-46 rounded-4xl overflow-hidden'>
                <img src={currentPackage.imgTop} className='w-full h-full object-cover' alt="" />
            </div>

            <div className='flex sm:flex-col flex-col-reverse gap-10'>
                {/* Tabs */}
                <div className="flex justify-center gap-6 mb-8 bg-[#1F272A0D] sm:w-[20%] mx-auto px-5 py-3 rounded-full">
                    <button
                        onClick={() => setActiveTab('party')}
                        className={` rounded-full cursor-pointer font-medium text-xs transition-all duration-300 ${activeTab === 'party'
                            ? 'text-[#0F161B] '
                            : ' text-[#1F272A66] hover:bg-gray-100 '
                            }`}
                    >
                        PARTY
                    </button>
                    <button
                        onClick={() => setActiveTab('nightStay')}
                        className={` rounded-full cursor-pointer font-medium text-xs transition-all duration-300 ${activeTab === 'nightStay'
                            ? 'text-[#0F161B] '
                            : ' text-[#1F272A66] hover:bg-gray-100 '
                            }`}
                    >
                        NIGHT STAY
                    </button>
                    <button
                        onClick={() => setActiveTab('campingNight')}
                        className={` rounded-full cursor-pointer font-medium text-xs transition-all duration-300 ${activeTab === 'campingNight'
                            ? 'text-[#0F161B] '
                            : ' text-[#1F272A66] hover:bg-gray-100 '
                            }`}
                    >
                        CAMPING NIGHT
                    </button>
                </div>
                {/* Main Content */}
                <div
                    className=" bg-cover bg-center bg-no-repeat relative"
                    style={{ backgroundImage: currentPackage.bgImage }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#00000064]"></div>

                    <div className="relative z-10 container  sm:p-8 afacad ">
                        <div className="flex">
                            {/* Package Details Card */}
                            <div className="sm:w-[47%] h-full">
                                <div className="bg-white flex flex-col  sm:shadow-xl sm:p-8 p-2 transform  transition-transform duration-300">
                                    <h2 className="royal  text-3xl md:text-[100px] font-light text-gray-800 mb-8 leading-[0.7em]"
                                        dangerouslySetInnerHTML={{ __html: currentPackage.title }}>
                                    </h2>

                                    <p className="text-gray-600 mb-8 leading-relaxed afacad">
                                        {currentPackage.description}
                                    </p>

                                    {activeTab === 'party' && (
                                        <div className='flex h-[240px] sm:h-[120px] flex-col sm:flex-row justify-between border-b border-gray-100 mb-3 gap-3'>
                                            {/* Pricing */}
                                            <div className="flex flex-col gap-6 ">
                                                <div className="flex items-center gap-3">
                                                    <Users className="w-5 h-5 text-gray-400" />
                                                    <div className='flex justify-between gap-3'>
                                                        <span className="text-sm text-gray-500 block">Adult:</span>
                                                        <span className="text-sm font-semibold text-gray-800">
                                                            {currentPackage.adultPrice}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <Baby className="w-5 h-5 text-gray-400" />
                                                    <div className='flex justify-between gap-3'>
                                                        <span className="text-sm text-gray-500 block">Child:</span>
                                                        <span className="text-sm font-semibold text-gray-800">
                                                            {currentPackage.childPrice}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='bg-gray-100 w-[1px] mb-4' ></div>

                                            {/* Timing Details */}
                                            <div className="space-y-4 mb-8 ">
                                                <div className="flex items-center gap-3">
                                                    <Clock className="w-5 h-5 text-gray-400" />
                                                    <div className='flex justify-between gap-3'>
                                                        <span className="text-sm text-gray-800 block">Timing:</span>
                                                        <span className="text-gray-500 text-sm ">
                                                            {currentPackage.timing}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <Clock className="w-5 h-5 text-gray-400" />
                                                    <div className='flex justify-between gap-3'>
                                                        <span className="text-sm text-gray-800 block">Lunch Time:</span>
                                                        <span className="text-gray-500 text-sm ">
                                                            {currentPackage.lunchTime}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <Clock className="w-5 h-5 text-gray-400" />
                                                    <div className='flex justify-between gap-3'>
                                                        <span className="text-sm text-gray-800 block">Dinner Time:</span>
                                                        <span className="text-gray-500 text-sm ">
                                                            {currentPackage.dinnerTime}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'nightStay' && (
                                        <div className="space-y-4 h-[120px] mb-8 border-b border-gray-100 pb-4">
                                            <div className="flex items-center gap-3">
                                                <div className='flex justify-between gap-3'>
                                                    <span className="text-sm text-gray-500 block">Cottage:</span>
                                                    <span className="text-sm font-semibold text-gray-800">
                                                        {currentPackage.cottage}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className='flex justify-between gap-3'>
                                                    <span className="text-sm text-gray-500 block">Villa:</span>
                                                    <span className="text-sm font-semibold text-gray-800">
                                                        {currentPackage.villa}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 relative mb-4">
                                                <div className='flex justify-between gap-3'>
                                                    <span className="text-sm text-gray-500 block">Pool Room:</span>
                                                    <span className="text-sm flex font-semibold text-gray-800">
                                                        {currentPackage.pool}
                                                        <span className="ml-5 flex justify-center items-center bg-[#6CD47826] text-[#27AE36] text-xs px-2  rounded-2xl">
                                                            <TrendingUp size={15} />Most Popular
                                                        </span>
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'campingNight' && (
                                        <div className="space-y-4 h-[120px] mb-8 border-b border-gray-100 pb-4">
                                            <div className="flex items-center gap-3">
                                                <div className='flex justify-between gap-3'>
                                                    <span className="text-sm text-gray-500 block">Price:</span>
                                                    <span className="text-sm font-semibold text-gray-800">
                                                        {currentPackage.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Includes Section */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Plus className="w-5 h-5 text-gray-400" />
                                            <span className="text-lg font-semibold text-gray-800">Include</span>
                                        </div>

                                        <div className="grid grid-cols-5 sm:grid-cols-5 gap-10">
                                            {currentPackage.includes.map((item, index) => (
                                                <div key={index} className="flex flex-col items-center gap-2">
                                                    <img src={item.icon} alt="" />
                                                    <span className="sm:text-sm text-xs text-center text-gray-600 font-medium">
                                                        {item.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;