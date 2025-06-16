import React from 'react'

const MapContact = () => {
    return (
        <div className="w-full sm:h-[60vh] flex flex-col lg:flex-row p-4">
            {/* Left side - Map iframe (70% on desktop, full width on mobile) */}
            <div className="w-full lg:w-7/10 h-[50vh] sm:h-1/2 lg:h-full rounded-4xl overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4526.570046156957!2d76.11807077600308!3d22.775165825514254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396320775632c687%3A0x83ecc0430ac04e1a!2sEco%20Holiday%20Resorts!5e1!3m2!1sen!2sin!4v1749712636896!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Eco Holiday Resort Location"
                ></iframe>
            </div>

            {/* Right side - Image (30% on desktop, full width on mobile) */}
            <div className="w-full lg:w-3/10 h-1/2 lg:h-full  flex items-center justify-center">
                <img src="/map-eco.png" className='' alt="" />
            </div>
        </div>
    );
}

export default MapContact
