export default function Surroundings() {
  const places = [
    { name: "Bijasan Mata Temple (Sangod)", distance: "500 m" },
    { name: "Chamundamata Mandir (Kota Bypass)", distance: "25 km" },
    { name: "Khajiyana Temple (Indore)", distance: "25 km" },
    { name: "Mahakaleshwar (Ujjain)", distance: "62 km" },
    { name: "Shiva Temple (Omkareshwar)", distance: "110 km" },
    { name: "Ujjaini (Popularly known for \"Sangam of Narmada And Shipra River\")", distance: "7 km" }
  ];

  return (
    <div className="w-[90%] mx-auto sm:px-4 py-8 lg:py-12">
      <h1 className="royal-heading !text-left mb-8 sm:mb-20">
        Surroundings
      </h1>
      
      <div className="flex flex-col sm:gap-20 sm:flex-row afacad">
        {/* Places List - now comes first in mobile view */}
        <div className="w-full sm:w-[40%]  space-y-6 mb-8 sm:mb-0">
          <div className="grid grid-cols-2  gap-4 mb-6">
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              Place
            </div>
            <div className="text-sm font-medium text-gray-600 text-right uppercase tracking-wider">
              Distance
            </div>
          </div>
          
          <div className="space-y-2">
            {places.map((place, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 py-3 ">
                <div className="text-gray-900 text-sm lg:text-base">
                  {place.name}
                </div>
                <div className="text-gray-700 text-sm text-right lg:text-base font-medium">
                  {place.distance}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Map - appears below on mobile */}
        <div className="w-full sm:w-[60%] sm:pl-8">
          <div className="h-[300px] sm:h-[50vh] sm:mt-[-150px] rounded-4xl sm:rounded-none w-full overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4526.570046156957!2d76.11807077600308!3d22.775165825514254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396320775632c687%3A0x83ecc0430ac04e1a!2sEco%20Holiday%20Resorts!5e1!3m2!1sen!2sin!4v1749712636896!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eco Holiday Resort Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}