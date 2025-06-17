import React, { useState } from 'react';
import { Users, Baby, Bed, Home } from 'lucide-react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Popover } from '@mui/material';
import dayjs from 'dayjs';

const RoomBooking = () => {
    const [checkInAnchorEl, setCheckInAnchorEl] = useState(null);
    const [checkOutAnchorEl, setCheckOutAnchorEl] = useState(null);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [adultCount, setAdultCount] = useState(2);
    const [kidCount, setKidCount] = useState(0);
    const [roomCount, setRoomCount] = useState(1);
    const [extraBeds, setExtraBeds] = useState(1);

    const packageData = {
        title: "Room Booking",
        mobileTitle: "Room Booking",
        description: "Experience comfort and luxury in our well-appointed rooms. Perfect for a peaceful stay with modern amenities, scenic views, and exceptional service in a serene village setting.",
        instructions: [
            "Government ID Proof will be compulsory of all those members who will stay in the room.",
            "Cottage/Villa/Pool Room Check-in time will be 12:00 pm and Check-out time will be 9:00 am.",
            "After Booking Confirmation Payment will not be Refundable.",
            "Minimum 2 persons and maximum 4 persons can stay in the Cottage and Minimum 4 person and maximum 8 person stay in Villa and Pool Room. If any person more than the person, then your booking will not be valid and booking amount will not be refundable in any condition.",
            "A child above the age of 5 years will be counted as an extra person.",
            "It is necessary to bring Aadhar card to verify the age of children."
        ],
        bgImage: "url('/cottage-bed.jpg')"
    };

    const handleCheckInClick = (event) => {
        setCheckInAnchorEl(event.currentTarget);
    };

    const handleCheckOutClick = (event) => {
        setCheckOutAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setCheckInAnchorEl(null);
        setCheckOutAnchorEl(null);
    };

    const handleCheckInDateChange = (newDate) => {
        setCheckInDate(newDate);
        handleClose();
    };

    const handleCheckOutDateChange = (newDate) => {
        setCheckOutDate(newDate);
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

    const handleRoomIncrement = () => {
        setRoomCount(prev => prev + 1);
    };

    const handleRoomDecrement = () => {
        setRoomCount(prev => Math.max(1, prev - 1));
    };

    const handleExtraBedIncrement = () => {
        setExtraBeds(prev => prev + 1);
    };

    const handleExtraBedDecrement = () => {
        setExtraBeds(prev => Math.max(0, prev - 1));
    };

    const handleCheckAvailability = () => {
        if (!checkInDate || !checkOutDate) {
            alert('Please select check-in and check-out dates');
            return;
        }

        alert(`Booking Details:
Check-in: ${checkInDate.format('DD MMM YYYY')}
Check-out: ${checkOutDate.format('DD MMM YYYY')}
Adults: ${adultCount}
Kids: ${kidCount}
Rooms: ${roomCount}
Extra Beds: ${extraBeds}

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
                            <div className="sm:w-[60%] h-full sm:py-10 sm:mt-10">
                                <div className="bg-white rounded-t-4xl sm:rounded-t-none mt-[-70px] sm:mt-0 relative z-10 flex flex-col sm:shadow-xl sm:p-8 p-5 transform transition-transform duration-300">
                                    <h2 className="royal hidden sm:block text-3xl md:text-[100px] font-light text-gray-800 sm:mb-8 mb-4 leading-[0.7em]"
                                        dangerouslySetInnerHTML={{ __html: packageData.title }}>
                                    </h2>
                                    <h1 className='royal block sm:hidden text-[56px] font-normal leading-[32px] mb-4 tracking-[-1.12px] capitalize'>
                                        {packageData.mobileTitle}
                                    </h1>

                                    <p className="text-gray-600 mb-4 sm:mb-8 text-md leading-relaxed afacad">
                                        {packageData.description}
                                    </p>

                                    {/* Instructions Section */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions:</h3>
                                        <ul className="space-y-2">
                                            {packageData.instructions.map((instruction, index) => (
                                                <li key={index} className="text-md text-gray-600 leading-relaxed flex">
                                                    <span className="mr-2">•</span>
                                                    <span>{instruction}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Booking Section */}
                                    <div className="mt-8 pt-6 p-3 sm:px-0 border-t border-gray-100 rounded-4xl sm:rounded-none bg-[#F6F6F6] sm:bg-transparent flex flex-col gap-4 items-end">
                                        {/* Desktop Layout - 3 Columns */}
                                        <div className="hidden sm:grid grid-cols-3 gap-4 mb-6 w-full">
                                            {/* Column 1 - Check In/Out */}
                                            <div className="space-y-4">
                                                {/* Check In */}
                                                <div className="relative">
                                                    <div
                                                        className="w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:border-gray-400 focus:outline-none flex justify-between items-center"
                                                        onClick={handleCheckInClick}
                                                    >
                                                        <span>{checkInDate ? checkInDate.format('DD MMM YYYY') : 'Check In'}</span>
                                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <Popover
                                                        open={Boolean(checkInAnchorEl)}
                                                        anchorEl={checkInAnchorEl}
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
                                                                value={checkInDate}
                                                                onChange={handleCheckInDateChange}
                                                                
                                                            />
                                                        </LocalizationProvider>
                                                    </Popover>
                                                </div>

                                                {/* Check Out */}
                                                <div className="relative">
                                                    <div
                                                        className="w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:border-gray-400 focus:outline-none flex justify-between items-center"
                                                        onClick={handleCheckOutClick}
                                                    >
                                                        <span>{checkOutDate ? checkOutDate.format('DD MMM YYYY') : 'Check Out'}</span>
                                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <Popover
                                                        open={Boolean(checkOutAnchorEl)}
                                                        anchorEl={checkOutAnchorEl}
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
                                                                value={checkOutDate}
                                                                onChange={handleCheckOutDateChange}
                                                                
                                                            />
                                                        </LocalizationProvider>
                                                    </Popover>
                                                </div>
                                            </div>

                                            {/* Column 2 - Adults/Kids */}
                                            <div className="space-y-4">
                                                {/* Adults */}
                                                <div className="flex items-center border justify-between border-gray-200 rounded-lg bg-white">
                                                    <span className="p-3 text-sm text-gray-600">Adults</span>
                                                    <div className="flex items-center">
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
                                                <div className="flex items-center border justify-between border-gray-200 rounded-lg bg-white">
                                                    <span className="p-3 text-sm text-gray-600">Kids</span>
                                                    <div className="flex items-center">
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

                                            {/* Column 3 - Rooms/Extra Beds */}
                                            <div className="space-y-4">
                                                {/* No. of Rooms */}
                                                <div className="flex items-center border justify-between border-gray-200 rounded-lg bg-white">
                                                    <span className="p-3 text-sm text-gray-600">No. of Rooms</span>
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={handleRoomDecrement}
                                                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                            disabled={roomCount <= 1}
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                            </svg>
                                                        </button>
                                                        <span className="px-2 text-sm font-medium min-w-[2rem] text-center">
                                                            {roomCount.toString().padStart(2, '0')}
                                                        </span>
                                                        <button
                                                            onClick={handleRoomIncrement}
                                                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Extra Beds */}
                                                <div className="flex items-center border justify-between border-gray-200 rounded-lg bg-white">
                                                    <span className="p-3 text-sm text-gray-600">Extra Beds</span>
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={handleExtraBedDecrement}
                                                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                            disabled={extraBeds <= 0}
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                            </svg>
                                                        </button>
                                                        <span className="px-2 text-sm font-medium min-w-[2rem] text-center">
                                                            {extraBeds.toString().padStart(2, '0')}
                                                        </span>
                                                        <button
                                                            onClick={handleExtraBedIncrement}
                                                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile Layout */}
                                        <div className="sm:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full">
                                            {/* Check In */}
                                            <div className="relative">
                                                <div
                                                    className="w-full p-3 border border-gray-200 rounded-full text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:border-gray-400 focus:outline-none flex justify-between items-center"
                                                    onClick={handleCheckInClick}
                                                >
                                                    <span className="text-gray-500">Check In</span>
                                                    <span>{checkInDate ? checkInDate.format('DD MMM') : ''}</span>
                                                </div>
                                            </div>

                                            {/* Check Out */}
                                            <div className="relative">
                                                <div
                                                    className="w-full p-3 border border-gray-200 rounded-full text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:border-gray-400 focus:outline-none flex justify-between items-center"
                                                    onClick={handleCheckOutClick}
                                                >
                                                    <span className="text-gray-500">Check Out</span>
                                                    <span>{checkOutDate ? checkOutDate.format('DD MMM') : ''}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full">
                                            {/* Adults */}
                                            <div className="relative">
                                                <div className="flex items-center border justify-between border-gray-200 rounded-full bg-white">
                                                    <span className="p-3 text-sm text-gray-600">Adults</span>
                                                    <div className="flex items-center">
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
                                            </div>

                                            {/* Kids */}
                                            <div className="relative">
                                                <div className="flex items-center border justify-between border-gray-200 rounded-full bg-white">
                                                    <span className="p-3 text-sm text-gray-600">Kids</span>
                                                    <div className="flex items-center">
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
                                        </div>

                                        <div className="sm:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full">
                                            {/* No. of Rooms */}
                                            <div className="relative">
                                                <div className="flex items-center border justify-between border-gray-200 rounded-full bg-white">
                                                    <span className="p-3 text-sm text-gray-600">No. of Rooms</span>
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={handleRoomDecrement}
                                                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                            disabled={roomCount <= 1}
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                            </svg>
                                                        </button>
                                                        <span className="px-2 text-sm font-medium min-w-[2rem] text-center">
                                                            {roomCount.toString().padStart(2, '0')}
                                                        </span>
                                                        <button
                                                            onClick={handleRoomIncrement}
                                                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Extra Beds */}
                                            <div className="relative">
                                                <div className="flex items-center border justify-between border-gray-200 rounded-full bg-white">
                                                    <span className="p-3 text-sm text-gray-600">Extra Beds</span>
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={handleExtraBedDecrement}
                                                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                            disabled={extraBeds <= 0}
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                            </svg>
                                                        </button>
                                                        <span className="px-2 text-sm font-medium min-w-[2rem] text-center">
                                                            {extraBeds.toString().padStart(2, '0')}
                                                        </span>
                                                        <button
                                                            onClick={handleExtraBedIncrement}
                                                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                        </button>
                                                    </div>
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

export default RoomBooking;