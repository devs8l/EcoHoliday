import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FacilityCards = () => {
    const accommodations = [
        {
            id: 1,
            title: "Wooden Huts",
            description: "In front of Essar Petrol Pump Near Bijasan Mata Temple, Sanrod, Dewas (M.P.)",
            images: [
                "/hut-1.png",
                "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop"
            ]
        },
        {
            id: 2,
            title: "Camping Tents",
            description: "In front of Essar Petrol Pump Near Bijasan Mata Temple, Sanrod, Dewas (M.P.)",
            images: [
                "/camp-1.png",
                "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?w=400&h=300&fit=crop"
            ]
        },
        {
            id: 3,
            title: "Stunning Dining Room",
            description: "In front of Essar Petrol Pump Near Bijasan Mata Temple, Sanrod, Dewas (M.P.)",
            images: [
                "/dining-1.jpg",
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
            ]
        },
        {
            id: 4,
            title: "Swimming Pool",
            description: "In front of Essar Petrol Pump Near Bijasan Mata Temple, Sanrod, Dewas (M.P.)",
            images: [
                "/pool-1.jpg",
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
            ]
        }
    ];

    const CardSwiper = ({ images, title, description }) => (
        <div className="relative h-full">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: `.swiper-button-next-${title.replace(/\s+/g, '-')}`,
                    prevEl: `.swiper-button-prev-${title.replace(/\s+/g, '-')}`,
                }}
                pagination={{
                    el: `.swiper-pagination-${title.replace(/\s+/g, '-')}`,
                    clickable: true,
                    type: 'bullets',
                }}
                loop={true}
                className="h-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full">
                            <img
                                src={image}
                                alt={`${title} ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}

                {/* Text Overlay */}
                <div className="absolute bottom-5 left-0 flex flex-col gap-5 right-0 z-20 px-6 pb-4 text-white">
                    <h2 className="royal-heading !text-left !text-[#fff] mb-1">{title}</h2>
                    <p className="opacity-90 leading-snug w-[70%] md:w-[50%] afacad ml-0 md:ml-5">{description}</p>
                </div>
                <div className='absolute inset-0 bg-[#00000054] z-10'></div>

                {/* Navigation Controls */}
                <div className="absolute bottom-4 left-0 right-[-200px] md:right-0 z-20 flex items-center justify-end">
                    <div className="flex items-center justify-center w-full md:w-[30%] gap-2 md:gap-4 px-4 md:px-0">
                        {/* Pagination Bullets - Visible on mobile */}
                        <div className={`swiper-pagination-${title.replace(/\s+/g, '-')} !w-auto md:!w-[30%] mt-4 !relative flex gap-1`} />
                        
                        {/* Previous Arrow */}
                        <button className={`swiper-button-prev-${title.replace(/\s+/g, '-')} w-8 h-8 md:w-12 md:h-12 group rounded-full border border-white flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors`}>
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Arrow */}
                        <button className={`swiper-button-next-${title.replace(/\s+/g, '-')} w-8 h-8 md:w-12 md:h-12 group rounded-full border border-white flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors`}>
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Swiper>
        </div>
    );

    return (
        <div className="min-h-screen p-2 md:p-8 md:px-6">
            <div className="w-full md:w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto md:h-[120vh]">
                    {accommodations.map((accommodation, index) => (
                        <div 
                            key={accommodation.id} 
                            className={`relative overflow-hidden h-[50vh] md:h-full ${
                                index % 2 === 0 ? 
                                (index === 0 ? 'rounded-t-4xl md:rounded-t-none' : 
                                 index === 2 ? '' : '') : 
                                (index === 1 ? '' : 
                                 index === 3 ? 'rounded-b-4xl md:rounded-b-none' : '')
                            }`}
                        >
                            <CardSwiper
                                images={accommodation.images}
                                title={accommodation.title}
                                description={accommodation.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background-color: white !important;
                    opacity: 0.5 !important;
                    width: 8px !important;
                    height: 8px !important;
                }
                .swiper-pagination-bullet-active {
                    background-color: white !important;
                    opacity: 1 !important;
                }
                @media (max-width: 768px) {
                    .swiper-pagination-bullet {
                        width: 6px !important;
                        height: 6px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default FacilityCards;