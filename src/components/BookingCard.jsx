import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Popover } from '@mui/material';
import dayjs from 'dayjs';
import { usePopup } from '../contexts/PopupContext';

const BookingCard = () => {
    const [adults, setAdults] = useState(2);
    const [kids, setKids] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [extraBeds, setExtraBeds] = useState(1);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [checkInAnchorEl, setCheckInAnchorEl] = useState(null);
    const [checkOutAnchorEl, setCheckOutAnchorEl] = useState(null);
    const { openPopup } = usePopup();

    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => setter(Math.max(0, value - 1));

    const formatDate = (date) => {
        if (!date) return '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleCheckInClick = (event) => {
        setCheckInAnchorEl(event.currentTarget);
        setCheckOutAnchorEl(null);
    };

    const handleCheckOutClick = (event) => {
        setCheckOutAnchorEl(event.currentTarget);
        setCheckInAnchorEl(null);
    };

    const handleClose = () => {
        setCheckInAnchorEl(null);
        setCheckOutAnchorEl(null);
    };

    const handleCheckInDateChange = (newDate) => {
        setCheckInDate(newDate ? new Date(newDate) : null);
        handleClose();
    };

    const handleCheckOutDateChange = (newDate) => {
        setCheckOutDate(newDate ? new Date(newDate) : null);
        handleClose();
    };

    const handleCheckAvailability = () => {
        openPopup({
            adults,
            kids,
            rooms,
            extraBeds,
            packageName: 'Room Booking',
            checkInDate: checkInDate ? formatDate(checkInDate) : null,
            checkOutDate: checkOutDate ? formatDate(checkOutDate) : null
        });
    };

    return (
        <>
            <div className="bg-white p-3 gap-10 flex items-center shadow-lg max-w-5xl mx-auto">
                <div className='w-[80%]'>
                    {/* First Row */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {/* Check In */}
                        <div className="border flex justify-between  items-center border-gray-300 rounded-lg p-4 relative">
                            <div className="flex items-center gap-2 text-gray-600 text-sm justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span>Check In</span>
                            </div>
                            <div
                                className="cursor-pointer text-gray-800 font-medium text-sm"
                                onClick={handleCheckInClick}
                            >
                                {checkInDate ? formatDate(checkInDate) : 'Select Date'}
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
                                        value={checkInDate ? dayjs(checkInDate) : null}
                                        onChange={handleCheckInDateChange}
                                    />
                                </LocalizationProvider>
                            </Popover>
                        </div>

                        {/* Adults */}
                        <div className="border flex justify-between  items-center border-gray-300 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-gray-600 text-sm ">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span>Adults</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => decrement(setAdults, adults)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    -
                                </button>
                                <span className="text-lg font-medium px-2">{adults.toString().padStart(2, '0')}</span>
                                <button
                                    onClick={() => increment(setAdults, adults)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* No. of Rooms */}
                        <div className="border border-gray-300 rounded-lg p-4 flex justify-between  items-center">
                            <div className="flex items-center gap-2 text-gray-600 text-sm ">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9,22 9,12 15,12 15,22" />
                                </svg>
                                <span>No. of Rooms</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => decrement(setRooms, rooms)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    -
                                </button>
                                <span className="text-lg font-medium px-2">{rooms.toString().padStart(2, '0')}</span>
                                <button
                                    onClick={() => increment(setRooms, rooms)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-3 gap-4">
                        {/* Check Out */}
                        <div className="border border-gray-300 rounded-lg p-4 relative flex justify-between  items-center">
                            <div className="flex items-center gap-2 text-gray-600 text-sm ">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span>Check Out</span>
                            </div>
                            <div
                                className="cursor-pointer text-gray-800 font-medium text-sm"
                                onClick={handleCheckOutClick}
                            >
                                {checkOutDate ? formatDate(checkOutDate) : 'Select Date'}
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
                                        value={checkOutDate ? dayjs(checkOutDate) : null}
                                        onChange={handleCheckOutDateChange}
                                    />
                                </LocalizationProvider>
                            </Popover>
                        </div>

                        {/* Kids */}
                        <div className="border border-gray-300 rounded-lg p-4 flex justify-between  items-center">
                            <div className="flex items-center gap-2 text-gray-600 text-sm ">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="8" r="3" />
                                    <path d="M12 14v7" />
                                    <path d="M8 21h8" />
                                    <path d="M10 14l-2 7" />
                                    <path d="M14 14l2 7" />
                                </svg>
                                <span>Kids</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => decrement(setKids, kids)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    -
                                </button>
                                <span className="text-lg font-medium px-2">{kids.toString().padStart(2, '0')}</span>
                                <button
                                    onClick={() => increment(setKids, kids)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Extra Beds */}
                        <div className="border border-gray-300 rounded-lg p-4 flex justify-between  items-center">
                            <div className="flex items-center gap-2 text-gray-600 text-sm ">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
                                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <path d="M12 11v6" />
                                    <path d="M9 14h6" />
                                </svg>
                                <span>Extra Beds</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => decrement(setExtraBeds, extraBeds)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    -
                                </button>
                                <span className="text-lg font-medium px-2">{extraBeds.toString().padStart(2, '0')}</span>
                                <button
                                    onClick={() => increment(setExtraBeds, extraBeds)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Check Availability Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleCheckAvailability}
                        className="bg-black text-white px-5 py-2 text-xs rounded-full font-medium hover:bg-gray-800 flex items-center gap-2"
                    >
                        Check Availability
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default BookingCard;