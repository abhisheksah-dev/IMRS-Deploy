import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const handleLogInjourney = () => {
    navigate("/journeydetails");
  };

  const handleLogInstation = () => {
    navigate("/neareststation");
  };

  const handleLogLostAndFound = () => {
    navigate("/lostandfound");
  };

  const handleLogNetworkPage = () => {
    navigate("/networkpage");
  };

  const handleLogHelpline = () => {
    navigate("/helplinesection");
  };

  return (
    <>
      {/* Main Content */}
      <main
        className="flex-grow bg-cover bg-center py-10 h-[80vh] font-sans "
        style={{
          backgroundImage: "url('./images/mainlayout2.svg')",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 px-6 max-w-4xl mx-auto mt-5 w-[100%] h-[100%] md:h-[70%] text-4xl">
          <button
            className="bg-gradient-to-br from-[#cfe5ff] to-[#98c2ff] border-4 border-blue-500 text-blue-800 font-semibold  py-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400 text-2xl "
            onClick={handleLogInjourney}
          >
            JOURNEY DETAILS
          </button>
          <button
            className="bg-gradient-to-br from-[#e9d5ff] to-[#c084fc] border-4 border-purple-500 text-purple-800 font-semibold text-2xl py-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400 "
            onClick={handleLogInstation}
          >
            NEAREST STATION
          </button>
          <button
            className="bg-gradient-to-br from-[#e9d5ff] to-[#c084fc] border-4 border-purple-500 text-purple-800 font-semibold text-2xl py-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/d/u/0/embed?mid=1ZcYR1wIHCaBlOlPyMs5vYMNytnNaXac&ehbc=2E312F&noprof=1",
                "_blank"
              )
            }
          >
            METRO MAP
          </button>
          <button
            className="bg-gradient-to-br from-[#cfe5ff] to-[#98c2ff] border-4 border-blue-500 text-blue-800 font-semibold text-2xl py-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400"
            onClick={handleLogLostAndFound}
          >
            LOST & FOUND
          </button>
          <button
            className="bg-gradient-to-br from-[#cfe5ff] to-[#98c2ff] border-4 border-blue-500 text-blue-800 font-semibold text-2xl py-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400"
            onClick={handleLogNetworkPage}
          >
            NETWORK
          </button>
          <button
            className="bg-gradient-to-br from-[#e9d5ff] to-[#c084fc] border-4 border-purple-500 text-purple-800 font-semibold text-2xl py-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400"
            onClick={handleLogHelpline}
          >
            SECURITY
          </button>
        </div>
      </main>
      <img
        className="w-full h-40% object-cover"
        src="/images/IndoreImage.png"
        alt=""
      />
    </>
  );
}

export default Services;
