import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, Bed, Plus, Minus, ChevronDown } from 'lucide-react';

const MobileExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [extraBeds, setExtraBeds] = useState(1);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="absolute bottom-10 left-0 right-0 z-50 px-4 pb-4 ">
      {/* Main Container */}
      <div className="relative">
        {/* Expandable Card */}
        <div 
          className={`
            bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out
            ${isExpanded ? 'max-h-[600px]' : 'max-h-[60px]'}
          `}
        >
          {/* Toggle Button - Always visible at bottom */}
          <div 
            className="flex items-center justify-between px-6 py-4 cursor-pointer"
            onClick={toggleExpand}
          >
            <span className="font-medium text-base">Check Availability</span>
            <ChevronDown 
              className={`w-5 h-5 text-black transform transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>

          {/* Content that expands */}
          <div className={`px-6 pb-4 space-y-4 ${isExpanded ? 'block' : 'hidden'}`}>
            {/* Check In */}
            <div className="relative">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Check In</div>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="text-base text-black bg-transparent border-none outline-none p-0 m-0"
                      placeholder="Select date"
                    />
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Check Out */}
            <div className="relative">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Check Out</div>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="text-base text-black bg-transparent border-none outline-none p-0 m-0"
                      placeholder="Select date"
                    />
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Adults */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div className="text-base text-black">Adults</div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-lg font-medium text-black min-w-[32px] text-center">
                  {adults.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => setAdults(adults + 1)}
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
                  onClick={() => setKids(Math.max(0, kids - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-lg font-medium text-black min-w-[32px] text-center">
                  {kids.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => setKids(kids + 1)}
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
                  onClick={() => setRooms(Math.max(1, rooms - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-lg font-medium text-black min-w-[32px] text-center">
                  {rooms.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => setRooms(rooms + 1)}
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
                  onClick={() => setExtraBeds(Math.max(0, extraBeds - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-lg font-medium text-black min-w-[32px] text-center">
                  {extraBeds.toString().padStart(2, '0')}
                </span>
                <button
                  onClick={() => setExtraBeds(extraBeds + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Check Availability Button */}
            <button className="w-full bg-black text-white py-4 rounded-full font-medium text-base hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 mt-4">
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