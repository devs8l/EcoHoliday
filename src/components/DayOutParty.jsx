import React, { useState } from 'react';
import { Clock, Users, Baby, Plus, Calendar as CalendarIcon } from 'lucide-react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Popover } from '@mui/material';
import dayjs from 'dayjs';

const DayOutParty = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [adultCount, setAdultCount] = useState(2);
    const [kidCount, setKidCount] = useState(0);

    const packageData = {
        title: "Day Out Party",
        mobileTitle: "Day Out Party",
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
        bgImage: "url('/eco-pool.png')",
        imgTop: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    };

    const handleDateClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        handleClose();
    };

    const handleAdultIncrement = () => {
        setAdultCount(prev => prev + 1);
    };

    const handleAdultDecrement = () => {
        setAdultCount(prev => Math.max(1, prev - 1));
    };

    const handleKidIncrement = () => {
        setKidCount(prev => prev + 1);
    };

    const handleKidDecrement = () => {
        setKidCount(prev => Math.max(0, prev - 1));
    };

    const handleCheckAvailability = () => {
        if (!selectedDate) {
            alert('Please select a visit date');
            return;
        }

        const formattedDate = selectedDate.format('DD MMM YYYY');
        const totalCost = (adultCount * 1000) + (kidCount * 500);

        alert(`Booking Details:
Date: ${formattedDate}
Adults: ${adultCount} (₹${adultCount * 1000})
Kids: ${kidCount} (₹${kidCount * 500})
Total Cost: ₹${totalCost}

Proceeding to check availability...`);
    };

    return (
        <div className="min-h-screen">
            <div className='flex sm:flex-col flex-col-reverse gap-10'>
                {/* Main Content */}
                <div
                    className="bg-cover bg-center bg-no-repeat relative min-h-screen"
                    style={{ backgroundImage: packageData.bgImage }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#00000064]"></div>

                    <div className="relative z-50 container sm:p-8 afacad">
                        <div className="flex">
                            {/* Package Details Card */}
                            <div className="sm:w-[45%] h-full sm:py-10 sm:mt-10">
                                <div className="bg-white rounded-t-4xl sm:rounded-t-none mt-[-70px] sm:mt-0 relative z-10 flex flex-col sm:shadow-xl sm:p-8 p-5 transform transition-transform duration-300">
                                    <h2 className="royal hidden sm:block text-3xl md:text-[100px] font-light text-gray-800 sm:mb-8 mb-4 leading-[0.7em]"
                                        dangerouslySetInnerHTML={{ __html: packageData.title }}>
                                    </h2>
                                    <h1 className='royal block sm:hidden text-[56px] font-normal leading-[32px] mb-4 tracking-[-1.12px] capitalize'>
                                        {packageData.mobileTitle}
                                    </h1>

                                    <p className="text-gray-600 mb-4 sm:mb-8 text-sm leading-relaxed afacad">
                                        {packageData.description}
                                    </p>

                                    <div className='flex h-[180px] sm:h-[120px] flex-col sm:flex-row justify-start sm:justify-between border-b border-gray-100 mb-3 gap-0 sm:gap-3'>
                                        {/* Pricing */}
                                        <div className="flex flex-col gap-2 sm:gap-6 ">
                                            <div className="flex items-center gap-3">
                                                <Users className="w-5 h-5 text-gray-400" />
                                                <div className='flex justify-between gap-3'>
                                                    <span className="text-sm text-gray-500 block">Adult:</span>
                                                    <span className="text-sm font-semibold text-gray-800">
                                                        {packageData.adultPrice}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <Baby className="w-5 h-5 text-gray-400" />
                                                <div className='flex justify-between gap-3'>
                                                    <span className="text-sm text-gray-500 block">Child:</span>
                                                    <span className="text-sm font-semibold text-gray-800">
                                                        {packageData.childPrice}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-gray-100 w-[1px] mb-4'></div>

                                        {/* Timing Details */}
                                        <div className="space-y-4 mb-8 ">
                                            <div className="flex items-center gap-3">
                                                <Clock className="w-5 h-5 text-gray-400" />
                                                <div className='flex justify-between gap-3'>
                                                    <span className="text-sm text-gray-800 block">Timing:</span>
                                                    <span className="text-gray-500 text-sm ">
                                                        {packageData.timing}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <Clock className="w-5 h-5 text-gray-400" />
                                                <div className='flex justify-between gap-3'>
                                                    <span className="text-sm text-gray-800 block">Lunch Time:</span>
                                                    <span className="text-gray-500 text-sm ">
                                                        {packageData.lunchTime}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <Clock className="w-5 h-5 text-gray-400" />
                                                <div className='flex justify-between gap-3'>
                                                    <span className="text-sm text-gray-800 block">Dinner Time:</span>
                                                    <span className="text-gray-500 text-sm ">
                                                        {packageData.dinnerTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Includes Section */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Plus className="w-5 h-5 text-gray-400" />
                                            <span className="text-lg font-semibold text-gray-800">Include</span>
                                        </div>

                                        <div className="grid grid-cols-5 sm:grid-cols-5 gap-10">
                                            {packageData.includes.map((item, index) => (
                                                <div key={index} className="flex flex-col items-center gap-2">
                                                    <img src={item.icon} alt={item.label} />
                                                    <span className="sm:text-sm text-xs text-center text-gray-600 font-medium">
                                                        {item.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Booking Section */}
                                    <div className="mt-8 pt-6 p-3 sm:px-0 border-t border-gray-100 rounded-4xl sm:rounded-none bg-[#F6F6F6] sm:bg-transparent flex flex-col gap-4 items-end">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 w-full">
                                            {/* Visit Date */}
                                            <div className="relative">
                                                <div
                                                    className="w-full p-3 border border-gray-200 rounded-full sm:rounded-lg text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:border-gray-400 focus:outline-none flex justify-between items-center"
                                                    onClick={handleDateClick}
                                                >
                                                    <span>{selectedDate ? selectedDate.format('DD MMM YYYY') : 'Visit Date'}</span>
                                                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                                                </div>
                                                <div className=''>
                                                    <Popover
                                                        open={Boolean(anchorEl)}
                                                        anchorEl={anchorEl}
                                                        onClose={handleClose}
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',
                                                        }}
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'left',
                                                        }}
                                                    >
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DateCalendar
                                                                value={selectedDate}
                                                                onChange={handleDateChange}
                                                            />
                                                        </LocalizationProvider>
                                                    </Popover>
                                                </div>
                                            </div>

                                            {/* Adults */}
                                            <div className="relative">
                                                <div className="flex items-center border justify-between border-gray-200 rounded-full sm:rounded-lg">
                                                    <span className="p-3 text-sm text-gray-600">Adults</span>
                                                    <button
                                                        onClick={handleAdultDecrement}
                                                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                        disabled={adultCount <= 1}
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                        </svg>
                                                    </button>
                                                    <span className="px-2 text-sm font-medium min-w-[2rem] text-center">
                                                        {adultCount.toString().padStart(2, '0')}
                                                    </span>
                                                    <button
                                                        onClick={handleAdultIncrement}
                                                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Kids */}
                                            <div className="relative">
                                                <div className="flex items-center border justify-between border-gray-200 rounded-full sm:rounded-lg">
                                                    <span className="p-3 text-sm text-gray-600">Kids</span>
                                                    <button
                                                        onClick={handleKidDecrement}
                                                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                        disabled={kidCount <= 0}
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                        </svg>
                                                    </button>
                                                    <span className="px-2 text-sm font-medium min-w-[2rem] text-center">
                                                        {kidCount.toString().padStart(2, '0')}
                                                    </span>
                                                    <button
                                                        onClick={handleKidIncrement}
                                                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Check Availability Button */}
                                        <button
                                            onClick={handleCheckAvailability}
                                            className="sm:w-[30%] w-full bg-black text-white py-3 px-6 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
                                        >
                                            Check Availability
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
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

export default DayOutParty;