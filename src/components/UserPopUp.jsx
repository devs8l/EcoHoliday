// components/UserPopUp.jsx
import { useState } from 'react';
import { usePopup } from '../contexts/PopupContext';
import { createBooking } from '../Services/api';

const UserPopUp = () => {
  const { showPopup, closePopup, popupData } = usePopup();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const completeData = {
        ...popupData,
        ...formData
      };
      const result = createBooking(completeData);
      if (result) {
        console.log('Booking created successfully:', result);
      } else {
        console.error('Failed to create booking');
      }
      setSubmitted(true);
    }
  };

  if (!showPopup) return null;

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#0006] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg max-w-md w-full flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Thank You!</h2>
          <p>We will get back to you soon.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              closePopup();
            }}
            className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] p-5 sm:p-0 bg-[#0000009c] backdrop-blur-xs flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={closePopup}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserPopUp;