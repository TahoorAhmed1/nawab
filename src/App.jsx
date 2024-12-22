import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer2 from "./components/Footer2";
import { LocationProvider } from "./components/LocationContex";

const App = () => {
  return (
    <>
      <LocationProvider>
        <Navbar />
        <Outlet />

        <Footer2 />
      </LocationProvider>
    </>
  );
};

export default App;
