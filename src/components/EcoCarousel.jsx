import React, { useState, useRef } from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EcoCarousel = () => {
    const [playingStates, setPlayingStates] = useState({});
    const videoRefs = useRef({});

    const videos = [
        { id: 1, src: '/eco-hero.mp4' },
        { id: 2, src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
        { id: 3, src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
        { id: 4, src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
        { id: 5, src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
        { id: 6, src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' }
    ];

    const togglePlayPause = (id) => {
        const video = videoRefs.current[id];
        if (!video) return;

        if (playingStates[id]) {
            video.pause();
        } else {
            video.play().catch(console.error);
        }
        setPlayingStates(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="w-full min-h-screen mx-auto bg-white">
            {/* Header */}
            <div className="text-center py-8 px-4">
                <h1 className="royal-heading py-10">
                    Glimpse of The Eco Holiday Resort
                </h1>
            </div>

            {/* Carousel Container */}
            <div className="relative px-4 md:px-18 py-10">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={2}
                    slidesPerGroup={2}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                        renderBullet: (index, className) => {
                            return `<span class="${className} w-2 h-2 rounded-full transition-colors"></span>`;
                        },
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 16
                        }
                    }}
                    className="mb-20"
                >
                    {videos.map((video) => (
                        <SwiperSlide key={video.id}>
                            <div className="relative group overflow-hidden rounded-lg bg-black h-full">
                                <div className="aspect-[3/5] relative">
                                    <video
                                        ref={el => videoRefs.current[video.id] = el}
                                        src={video.src}
                                        className="w-full h-full object-cover"
                                        onClick={() => togglePlayPause(video.id)}
                                        playsInline
                                        muted
                                        loop
                                    />

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            togglePlayPause(video.id);
                                        }}
                                        className="absolute inset-0 m-auto w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-all"
                                    >
                                        {playingStates[video.id] ? (
                                            <Pause className="text-black" size={20} />
                                        ) : (
                                            <Play className="text-black pl-1" size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation and Pagination */}
                <div className="flex justify-center items-center mb-6">
                    <div className="flex items-center justify-center gap-8">
                        <button className="swiper-button-prev w-10 !relative h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="!relative swiper-pagination mb-10 !w-auto flex gap-2" />

                        <button className="swiper-button-next !relative w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Follow Button */}
                <div className="flex justify-end mb-8">
                    <button className="px-6 py-2 border border-gray-800 text-gray-800 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-2">
                        Follow on Instagram
                        <ExternalLink size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EcoCarousel;