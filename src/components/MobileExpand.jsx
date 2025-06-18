import React, { useState } from 'react';
import { ArrowRight, Users, Bed, Plus, Minus, ChevronDown } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Popover } from '@mui/material';
import dayjs from 'dayjs';

const MobileExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [extraBeds, setExtraBeds] = useState(1);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [checkInAnchorEl, setCheckInAnchorEl] = useState(null);
  const [checkOutAnchorEl, setCheckOutAnchorEl] = useState(null);
  const { openPopup } = usePopup();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(Math.max(0, value - 1));

  return (
    <div className="absolute bottom-10 left-0 right-0 z-50 px-4 pb-4">
      <div className="relative">
        <div
          className={`
            bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out
            ${isExpanded ? 'max-h-[600px]' : 'max-h-[60px]'}
          `}
        >
          {/* Toggle Button */}
          <div
            className="flex items-center justify-between px-6 py-4 cursor-pointer"
            onClick={toggleExpand}
          >
            <span className="font-medium text-base">Check Availability</span>
            <ChevronDown
              className={`w-5 h-5 text-black transform transition-transform duration-300 ${
                isExpanded ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </div>

          {/* Expandable Content */}
          <div
            className={`px-6 pb-4 space-y-4 transition-all duration-300 ease-in-out ${
              isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'
            }`}
          >
            {/* Check In */}
            <div className="relative">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-500">Check In</div>
                    <div
                      className="text-base text-black cursor-pointer"
                      onClick={handleCheckInClick}
                    >
                      {checkInDate ? formatDate(checkInDate) : 'Select Date'}
                    </div>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <Popover
                open={Boolean(checkInAnchorEl)}
                anchorEl={checkInAnchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
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

            {/* Check Out */}
            <div className="relative">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-500">Check Out</div>
                    <div
                      className="text-base text-black cursor-pointer"
                      onClick={handleCheckOutClick}
                    >
                      {checkOutDate ? formatDate(checkOutDate) : 'Select Date'}
                    </div>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <Popover
                open={Boolean(checkOutAnchorEl)}
                anchorEl={checkOutAnchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
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

            {/* Adults */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div className="text-base text-black">Adults</div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decrement(setAdults, adults)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-lg font-medium text-black min-w-[32px] text-center">
                  {adults.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => increment(setAdults, adults)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Kids */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div className="text-base text-black">Kids</div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decrement(setKids, kids)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-lg font-medium text-black min-w-[32px] text-center">
                  {kids.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => increment(setKids, kids)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Number of Rooms */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Bed className="w-5 h-5 text-gray-400" />
                <div className="text-base text-black">No. of Rooms</div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decrement(setRooms, rooms)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-lg font-medium text-black min-w-[32px] text-center">
                  {rooms.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => increment(setRooms, rooms)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Extra Beds */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Bed className="w-5 h-5 text-gray-400" />
                <div className="text-base text-black">Extra Beds</div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decrement(setExtraBeds, extraBeds)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-lg font-medium text-black min-w-[32px] text-center">
                  {extraBeds.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => increment(setExtraBeds, extraBeds)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Check Availability Button */}
            <button
              onClick={handleCheckAvailability}
              className="w-full bg-black text-white py-4 rounded-full font-medium text-base hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 mt-4"
            >
              Check Availability
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileExpand;