import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, ExternalLink, Play, Pause } from 'lucide-react';

const EcoCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [playingVideos, setPlayingVideos] = useState({});
    const videoRefs = useRef({});

    // Sample video data - replace with your actual video URLs
    const videos = [
        {
            id: 1,
            videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop',
            caption: 'Relaxing poolside at our eco resort',
            views: '12.5K'
        },
        {
            id: 2,
            videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop',
            caption: 'HOW YOU WAKE UP IN THE MORNING DEPENDS ON HOW YOU FALL ASLEEP UNDER THE SUN THE NIGHT',
            views: '36.3K'
        },
        {
            id: 3,
            videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=600&fit=crop',
            caption: 'Stunning resort architecture',
            views: '3,987'
        },
        {
            id: 4,
            videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=600&fit=crop',
            caption: 'Luxury eco accommodations',
            views: '6,472'
        },
        {
            id: 5,
            videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=600&fit=crop',
            caption: 'Resort amenities and facilities',
            views: '8,231'
        },
        {
            id: 6,
            videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop',
            caption: 'Adventure activities',
            views: '15.2K'
        }
    ];

    // Calculate slides for desktop (4 videos per slide) and mobile (2 videos per slide)
    const getDesktopSlides = () => {
        const slides = [];
        for (let i = 0; i < videos.length; i += 4) {
            slides.push(videos.slice(i, i + 4));
        }
        return slides;
    };

    const getMobileSlides = () => {
        const slides = [];
        for (let i = 0; i < videos.length; i += 2) {
            slides.push(videos.slice(i, i + 2));
        }
        return slides;
    };

    const desktopSlides = getDesktopSlides();
    const mobileSlides = getMobileSlides();

    const toggleVideo = (videoId) => {
        const video = videoRefs.current[videoId];
        if (!video) return;

        // If the video is currently playing, pause it
        if (playingVideos[videoId]) {
            video.pause();
            setPlayingVideos(prev => ({ ...prev, [videoId]: false }));
        } else {
            // Pause all other videos
            Object.keys(playingVideos).forEach(id => {
                if (playingVideos[id] && videoRefs.current[id]) {
                    videoRefs.current[id].pause();
                    setPlayingVideos(prev => ({ ...prev, [id]: false }));
                }
            });

            // Play the selected video
            video.play()
                .then(() => {
                    setPlayingVideos(prev => ({ ...prev, [videoId]: true }));
                })
                .catch(error => {
                    console.error("Error playing video:", error);
                });
        }
    };

    const nextSlide = () => {
        const maxSlides = window.innerWidth >= 768 ? desktopSlides.length : mobileSlides.length;
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
        
        // Pause all videos when changing slides
        Object.keys(playingVideos).forEach(id => {
            if (playingVideos[id] && videoRefs.current[id]) {
                videoRefs.current[id].pause();
            }
        });
        setPlayingVideos({});
    };

    const prevSlide = () => {
        const maxSlides = window.innerWidth >= 768 ? desktopSlides.length : mobileSlides.length;
        setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
        
        // Pause all videos when changing slides
        Object.keys(playingVideos).forEach(id => {
            if (playingVideos[id] && videoRefs.current[id]) {
                videoRefs.current[id].pause();
            }
        });
        setPlayingVideos({});
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        
        // Pause all videos when changing slides
        Object.keys(playingVideos).forEach(id => {
            if (playingVideos[id] && videoRefs.current[id]) {
                videoRefs.current[id].pause();
            }
        });
        setPlayingVideos({});
    };

    // Handle video ended event
    const handleVideoEnded = (videoId) => {
        setPlayingVideos(prev => ({ ...prev, [videoId]: false }));
    };

    useEffect(() => {
        // Reset slide when window resizes
        const handleResize = () => {
            setCurrentSlide(0);
            // Pause all videos when resizing
            Object.keys(playingVideos).forEach(id => {
                if (playingVideos[id] && videoRefs.current[id]) {
                    videoRefs.current[id].pause();
                }
            });
            setPlayingVideos({});
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [playingVideos]);

    const VideoCard = ({ video, index }) => (
        <div key={video.id} className="relative group overflow-hidden rounded-lg bg-black">
            <div className="aspect-[3/4] relative">
                <video
                    ref={el => videoRefs.current[video.id] = el}
                    className="w-full h-full object-cover"
                    poster={video.thumbnail}
                    onEnded={() => handleVideoEnded(video.id)}
                    playsInline
                    muted
                    loop={false}
                >
                    <source src={video.videoSrc} type="video/mp4" />
                </video>

                {/* Play/Pause Button Overlay */}
                <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black group-hover:bg-opacity-20 transition-all duration-300"
                    onClick={() => toggleVideo(video.id)}
                >
                    <div className={`w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 ${playingVideos[video.id] ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                        {playingVideos[video.id] ? (
                            <Pause size={20} className="text-gray-800" />
                        ) : (
                            <Play size={20} className="text-gray-800 ml-1" />
                        )}
                    </div>
                </div>

                {/* Views overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm font-medium bg-black bg-opacity-50 px-2 py-1 rounded">
                    <Eye size={16} />
                    <span>{video.views}</span>
                </div>
            </div>
        </div>
    );

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
                {/* Desktop Layout - 4 videos per slide */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        {desktopSlides[currentSlide]?.map((video, index) => (
                            <VideoCard key={video.id} video={video} index={index} />
                        ))}
                    </div>
                </div>

                {/* Mobile Layout - 2 videos per slide */}
                <div className="block md:hidden">
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        {mobileSlides[currentSlide]?.map((video, index) => (
                            <VideoCard key={video.id} video={video} index={index} />
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center items-center gap-4 mb-6">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    {/* Dots Indicator */}
                    <div className="flex justify-center items-center gap-2 ">
                        {/* Desktop dots */}
                        <div className="hidden md:flex gap-2">
                            {desktopSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Mobile dots */}
                        <div className="flex md:hidden gap-2">
                            {mobileSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronRight size={20} className="text-gray-600" />
                    </button>
                </div>

                {/* Follow Button */}
                <div className="flex justify-center mb-8">
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