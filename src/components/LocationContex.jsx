import { useState, useContext, createContext } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation1 = () => useContext(LocationContext);
