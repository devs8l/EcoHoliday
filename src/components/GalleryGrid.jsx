import React from 'react'

const GalleryGrid = () => {
  // Sample JSON data - replace with your actual data
  const galleryData = [
    {
      id: 1,
      title: "Mountain Landscape",
      image: "/pool-bed.jpg",
      alt: "Beautiful mountain landscape"
    },
    {
      id: 2,
      title: "Ocean Sunset",
      image: "/pool-room.jpg",
      alt: "Ocean sunset view"
    },
    {
      id: 3,
      title: "Forest Path",
      image: "/camp-1.png",
      alt: "Peaceful forest path"
    },
    {
      id: 4,
      title: "City Skyline",
      image: "/dining-1.jpg",
      alt: "Modern city skyline"
    },
    {
      id: 5,
      title: "Desert Dunes",
      image: "/pool.jpg",
      alt: "Sand dunes in desert"
    },
    {
      id: 6,
      title: "Autumn Leaves",
      image: "/hut-1.png",
      alt: "Colorful autumn leaves"
    }
  ]

  return (
    <div className="p-2  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {galleryData.map((item) => (
          <div key={item.id} className="relative group overflow-hidden  hover:shadow-xl transition-shadow duration-300">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-64 md:h-120 object-cover  transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0  group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryGrid