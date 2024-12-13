import React from "react";

const NetworkPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh]  md:min-h-[80vh] bg-white font-sans">
        <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow">
          <h1 className="text-4xl font-bold text-center text-white mb-8 bg-blue-900 p-3 rounded-2xl">
            NETWORK
          </h1>
          <div className="space-y-5">
            {/* Button 1 */}
            <button
              className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700"
              onClick={() =>
                window.open(
                  " https://www.google.com/maps/d/u/0/edit?mid=1PObHH0HTcVdQaUfX3XHpCSTPBO3M3xs&usp=sharing ",
                  "_blank"
                )
              }
            >
              <span className="ml-4">RAILWAY STATION CONNECTIVITY</span>
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                <span className="text-3xl text-blue-600">🚉</span>
              </div>
            </button>
            {/* Button 2 */}
            <button
              className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700"
              onClick={() =>
                window.open(
                  " https://www.google.com/maps/d/u/0/edit?mid=1zG4Ps3RRpqJx1cXwLG-1pJU54D-cUn8&usp=sharing ",
                  "_blank"
                )
              }
            >
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                <span className="text-3xl text-blue-600">🚌</span>
              </div>
              <span className="mr-4">BUS STATION CONNECTIVITY</span>
            </button>
            {/* Button 3 */}
            <button
              className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700"
              onClick={() =>
                window.open(
                  "  https://www.google.com/maps/d/u/0/edit?mid=1yypCME07BHCZiD19zHA2oABhBHJz94M&usp=sharing  ",
                  "_blank"
                )
              }
            >
              <span className="ml-4">AIRPORT CONNECTIVITY</span>
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                <span className="text-3xl text-blue-600">✈️</span>
              </div>
            </button>
            {/* Button 4 */}
            <button
              className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700"
              onClick={() =>
                window.open(
                  " https://www.google.com/maps/d/u/0/edit?mid=1Ko0_VcyG7jEaONFiuWa8p99o0FVgzS0&usp=sharing ",
                  "_blank"
                )
              }
            >
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                <span className="text-3xl text-blue-600">🚍</span>
              </div>
              <span className="mr-4">I-BUS ROUTE CONNECTIVITY</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="./images/trainoriginal.png"
          alt="Train Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
};

export default NetworkPage;
