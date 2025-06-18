// contexts/PopupContext.jsx
import { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);
  
  const openPopup = (data) => {
    setPopupData(data);
    setShowPopup(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };

  return (
    <PopupContext.Provider value={{ showPopup, openPopup, closePopup, popupData }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  return useContext(PopupContext);
};