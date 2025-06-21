import React, { useEffect, useState } from 'react';
import { Clock, Users, Plus, Baby, TrendingUp } from 'lucide-react';
import pricingAPI from '../Services/packageApi';

const Packages = () => {
    const [activeTab, setActiveTab] = useState('party');
    const [animate, setAnimate] = useState(false);
    const [pricing, setPricing] = useState({});
    useEffect(() => {
        async function loadPricing() {
            try {
                const data = await pricingAPI.getPricing();
                if (data.party) setPricing(data);
                console.log('Pricing data loaded:', data);

                setIsLoading(false);
            } catch (error) {
                console.error('Failed to load pricing:', error);
                setIsLoading(false);
            }
        }
        loadPricing();
    }, []);

    const packages = {
        party: {
            title: "Party<br/>Package",
            mobileTitle: "Party Package",
            description: "Enjoy a fun-filled day with our Party Package! Savor a tasty lunch and dinner, while making the most of the swimming pool, rain dance floor, games, and a cozy bonfire. Perfect for a memorable getaway with family or friends in a peaceful village setting!",
            adultPrice: `₹${pricing?.party?.adult ?? 1000}/person`,
            childPrice: `₹${pricing?.party?.child ?? 500}/person`,
            timing: `${pricing?.party?.timing?.from ?? '12 PM'} to ${pricing?.party?.timing?.to ?? '09 PM'}`,
            lunchTime: `${pricing?.party?.lunch?.from ?? '01:30 PM'} to ${pricing?.party?.lunch?.to ?? '03 PM'}`,
            dinnerTime: `${pricing?.party?.dinner?.from ?? '07:30 PM'} to ${pricing?.party?.dinner?.to ?? '09 PM'}`,
            includes: [
                { icon: "/breakfast.svg", label: "Breakfast" },
                { icon: "/swim.svg", label: "Swimming Pool" },
                { icon: "/rain.svg", label: "Rain Dance Floor" },
                { icon: "/games.svg", label: "Games" },
                { icon: "/bonfire.svg", label: "Bonfire" }
            ],
            bgImage: "url('/eco-pool.png')",
            imgTop: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        },
        nightStay: {
            title: "Night<br/>Stay Package",
            mobileTitle: "Night Stay Package",
            description: "Experience a relaxing getaway with our Night Stay Package! Choose from a cozy cottage, spacious villa, or pool room, and enjoy a hearty breakfast, access to the swimming pool, rain dance floor, and fun games. Perfect for a serene overnight escape in a peaceful village setting!",
            cottage: `₹${pricing?.nightStay?.cottage ?? 4000}/`,
            villa: `₹${pricing?.nightStay?.villa ?? 7000}/`,
            pool: `₹${pricing?.nightStay?.poolRoom ?? 8500}/`,
            timing: "02 PM to 12 PM (Next Day)",
            includes: [
                { icon: "/breakfast.svg", label: "Breakfast" },
                { icon: "/swim.svg", label: "Swimming Pool" },
                { icon: "/rain.svg", label: "Rain Dance Floor" },
                { icon: "/games.svg", label: "Games" },
            ],
            bgImage: "url('/eco-bed.jpg')",
            isPopular: true,
            imgTop: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        },
        campingNight: {
            title: "Camping<br/>Night Package",
            mobileTitle: "Camping Night Package",
            description: "Dive into an adventurous escape with our Camping Night Package! Enjoy a hearty breakfast and dinner, along with access to the swimming pool, rain dance floor, games, and a warm bonfire. Perfect for a thrilling overnight camping experience in a serene village setting!",
            price: `₹${pricing?.camping?.basePrice ?? 2000} (+${pricing?.camping?.taxPercent ?? 12}% Taxes) per person`,
            includes: [
                { icon: "/breakfast.svg", label: "Breakfast" },
                { icon: "/swim.svg", label: "Swimming Pool" },
                { icon: "/rain.svg", label: "Rain Dance Floor" },
                { icon: "/games.svg", label: "Games" },
                { icon: "/bonfire.svg", label: "Bonfire" }
            ],
            bgImage: "url('/camp-1.png')",
            imgTop: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        }
    };


    const currentPackage = packages[activeTab];

    return (
        <div className="min-h-screen px-4 py-4 ">
            {/* Header */}
            <div className="text-center py-12 px-4">
                <h1 className="royal-heading mb-8">
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
                    className={` bg-cover bg-center bg-no-repeat relative ${activeTab === 'campingNight'
                        ? 'object-[0%_25%]'
                        : ''
                        }`}
                    style={{ backgroundImage: currentPackage.bgImage }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#00000064]"></div>

                    <div className="relative z-10 container  sm:p-8 afacad ">
                        <div className="flex">
                            {/* Package Details Card */}
                            <div className="sm:w-[47%] h-full">
                                <div className="bg-white flex flex-col  sm:shadow-xl sm:p-8 p-2 transform  transition-transform duration-300">
                                    <h2 className="package-heading sm:mb-8 mb-4 sm:block hidden"
                                        dangerouslySetInnerHTML={{ __html: currentPackage.title }}>
                                    </h2>
                                    <h1 className='package-heading sm:hidden block '>
                                        {currentPackage.mobileTitle}
                                    </h1>



                                    <p className="text-gray-600 mb-4 sm:mb-8 text-sm leading-relaxed afacad">
                                        {currentPackage.description}
                                    </p>

                                    {activeTab === 'party' && (
                                        <div className='flex h-[180px] sm:h-[120px] flex-col sm:flex-row justify-start sm:justify-between border-b border-gray-100 mb-3 gap-0 sm:gap-3'>
                                            {/* Pricing */}
                                            <div className="flex flex-col gap-2 sm:gap-6 ">
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
                                        <div className="space-y-4 h-[155px] sm:h-[120px] mb-3 border-b border-gray-100 ">
                                            <div className="flex items-center gap-0 sm:gap-3">
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
                                        <div className="space-y-4 sm:h-[120px] h-[155px] mb-3 border-b border-gray-100 ">
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