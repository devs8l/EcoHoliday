// reelApi.js
export const fetchReels = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reels`);
    if (!response.ok) throw new Error('Failed to fetch reels');
    const data = await response.json();
    
    // Transform the API response into the required format
    return data.map(reel => ({
      id: reel._id,
      src: reel.videoUrl,
      poster: '/foot-home.png', // Default poster image
      title: reel.title,
      description: reel.description,
      publicId: reel.publicId
    }));
  } catch (error) {
    console.error('Error fetching reels:', error);
    throw error;
  }
};