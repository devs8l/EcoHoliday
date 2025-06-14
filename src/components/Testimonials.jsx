import React from 'react';

const Testimonials = () => {
  const testimonials = [
    // Column 1 - 40:60 ratio
    {
      id: 1,
      name: "Kushali",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      column: 1,
      position: "top",
      heightRatio: "40" // 40% of column height
    },
    {
      id: 2,
      name: "Shaurya", 
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      column: 1,
      position: "bottom",
      heightRatio: "60" // 60% of column height
    },
    // Column 2 - 60:40 ratio
    {
      id: 3,
      name: "Tanveer",
      text: "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      column: 2,
      position: "top",
      heightRatio: "60" // 60% of column height
    },
    {
      id: 4,
      name: "Vrashali",
      text: "Officia deserunt mollit anim id est laborum.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
      column: 2,
      position: "bottom",
      heightRatio: "40" // 40% of column height
    },
    // Column 3 - 45:55 ratio
    {
      id: 5,
      name: "Ramya",
      text: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      column: 3,
      position: "top",
      heightRatio: "45" // 45% of column height
    },
    {
      id: 6,
      name: "Sarajeet",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
      column: 3,
      position: "bottom", 
      heightRatio: "55" // 55% of column height
    }
  ];

  // Group testimonials by column
  const column1 = testimonials.filter(t => t.column === 1);
  const column2 = testimonials.filter(t => t.column === 2);
  const column3 = testimonials.filter(t => t.column === 3);

  const TestimonialCard = ({ testimonial, className = "" }) => (
    <div className={`flex flex-col justify-between p-6 afacad lg:p-8 ${className}`}>
      <p className="text-gray-200 text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8 font-light">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover"
        />
        <span className="text-white font-medium text-lg lg:text-xl">
          {testimonial.name}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0707] sm:mt-0 mt-[-30px] text-white py-12 lg:py-16 px-4 lg:px-8 rounded-b-4xl sm:rounded-b-none">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[68px] md:text-[140px] royal text-center mb-16 lg:mb-24 sm:mt-0 mt-80 font-light tracking-wide">
          Testimonials
        </h1>
        
        {/* Mobile: Single Column with rounded-4xl */}
        <div className="lg:hidden space-y-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#FFFFFF14] rounded-4xl overflow-hidden">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Desktop: Three Column Grid with Exact Ratios (unchanged) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 xl:gap-4">
          {/* Column 1: 40:60 ratio */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#FFFFFF05]">
              <TestimonialCard testimonial={column1[0]} />
            </div>
            <div className="bg-[#FFFFFF05]">
              <TestimonialCard testimonial={column1[1]} />
            </div>
          </div>

          {/* Column 2: 60:40 ratio */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#FFFFFF05]">
              <TestimonialCard testimonial={column2[0]} />
            </div>
            <div className="bg-[#FFFFFF05]">
              <TestimonialCard testimonial={column2[1]} />
            </div>
          </div>

          {/* Column 3: 45:55 ratio */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#FFFFFF05]">
              <TestimonialCard testimonial={column3[0]} />
            </div>
            <div className="bg-[#FFFFFF05]">
              <TestimonialCard testimonial={column3[1]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;