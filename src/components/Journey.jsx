import React, { useState } from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaRoute, FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

class StationNode {
  constructor(name, distancePrev, distanceNext) {
    this.name = name;
    this.distancePrev = distancePrev;
    this.distanceNext = distanceNext;
    this.prev = null;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(name, distancePrev, distanceNext) {
    const newNode = new StationNode(name, distancePrev, distanceNext);
    this.head = newNode;
    this.tail = newNode;
  }

  insertEnd(name, distancePrev, distanceNext) {
    if (this.head === null) {
      this.insertFirst(name, distancePrev, distanceNext);
    } else {
      const newNode = new StationNode(name, distancePrev, distanceNext);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.tail = newNode;
    }
  }

  countStations(startStation, endStation) {
    let current = this.head;
    let startFound = null;
    let endFound = null;

    while (current.name != startStation) {
      current = current.next;
    }
    startFound = current;
    current = this.head;
    while (current.name != endStation) {
      current = current.next;
    }
    endFound = current;

    let forward = startFound;
    let backward = startFound;
    let fcount = 0;
    let bcount = 0;
    while (forward != endFound) {
      fcount++;
      forward = forward.next;
    }
    while (backward != endFound) {
      bcount++;
      backward = backward.prev;
    }
    // fcount--;
    // bcount--;
    if (fcount > bcount) {
      return bcount;
    } else {
      return fcount;
    }
  }

  calculateFare(stops) {
    if (stops <= 1) {
      return 10;
    } else if (stops <= 3) {
      return 20;
    } else if (stops <= 5) {
      return 30;
    } else if (stops <= 7) {
      return 40;
    } else if (stops <= 9) {
      return 50;
    } else if (stops <= 11) {
      return 60;
    } else if (stops <= 13) {
      return 70;
    } else {
      return 80;
    }
  }

  calculateDistance(startStation, endStation) {
    let current = this.head;
    let totalDistance = 0;
    let startFound = null;
    let endFound = null;
    while (current.name != startStation) {
      current = current.next;
    }
    startFound = current;
    current = this.head;
    while (current.name != endStation) {
      current = current.next;
    }
    endFound = current;

    let forward = startFound;
    let backward = startFound;
    let fcount = 0;
    let bcount = 0;
    while (forward != endFound) {
      fcount++;
      forward = forward.next;
    }
    while (backward != endFound) {
      bcount++;
      backward = backward.prev;
    }
    if (fcount < bcount) {
      forward = startFound;
      while (forward != endFound) {
        totalDistance = totalDistance + forward.distanceNext;
        forward = forward.next;
      }
    } else {
      backward = startFound;
      while (backward != endFound) {
        totalDistance = totalDistance + backward.distancePrev;
        backward = backward.prev;
      }
    }

    return totalDistance;
  }

  calculateTime(startStation, endStation) {
    const distance = this.calculateDistance(startStation, endStation);
    const stops = this.countStations(startStation, endStation);

    const stoppageTime = 20;
    const distanceInKm = distance / 1000;

    const NoncrowdedStations = [
      "BSF/ Kalani Nagar",

      "Airport",
      "Gandhi Nagar/Nanod",
      "Super Corridor 6",
      "Super Corridor 5",
      "Super Corridor 4",
      "Super Corridor 3",
      "Super Corridor 2",
      "Super Corridor 1",
      "Bhawarshala Square",
      "MR 10 Road",
      "ISBT/ MR 10 Flyover",
      "Chandragupta Square",
      "Hira Nagar",
    ];

    let speed =
      NoncrowdedStations.includes(startStation) ||
      NoncrowdedStations.includes(endStation)
        ? 100
        : 40;
    const speedInMps = speed * (1000 / 3600);

    const travelTime = distance / speedInMps + stops * stoppageTime;

    return (travelTime / 60).toFixed(0);
  }
}

const metroRoute = new CircularLinkedList();
metroRoute.insertFirst("Super Corridor 1", 1000, 1500);
metroRoute.insertEnd("Super Corridor 2", 1500, 1000);
metroRoute.insertEnd("Super Corridor 3", 1000, 1250);
metroRoute.insertEnd("Super Corridor 4", 1250, 1250);
metroRoute.insertEnd("Super Corridor 5", 1250, 990);
metroRoute.insertEnd("Super Corridor 6", 990, 650);
metroRoute.insertEnd("Gandhi Nagar/Nanod", 650, 1400);
metroRoute.insertEnd("Airport", 1400, 1620);
metroRoute.insertEnd("BSF/ Kalani Nagar", 1620, 1140);
metroRoute.insertEnd("Ramchandra Nagar Square", 1140, 875);
metroRoute.insertEnd("Bada Ganpati", 875, 600);
metroRoute.insertEnd("Chota Ganpati", 600, 900);
metroRoute.insertEnd("Rajwada Palace", 900, 1170);
metroRoute.insertEnd("Indore Railway Station", 1170, 650);
metroRoute.insertEnd("High Court", 650, 1200);
metroRoute.insertEnd("Palasia Square", 1200, 900);
metroRoute.insertEnd("Patrakar Colony", 900, 1200);
metroRoute.insertEnd("Bengali Square", 1200, 1400);
metroRoute.insertEnd("Khajrana Square", 1400, 1000);
metroRoute.insertEnd("Mumtaj Bag Colony", 1000, 800);
metroRoute.insertEnd("Radisson Square", 800, 1150);
metroRoute.insertEnd("Vijay Nagar Square", 1150, 620);
metroRoute.insertEnd("Meghdoot Garden", 620, 860);
metroRoute.insertEnd("Bapat Square", 860, 780);
metroRoute.insertEnd("Hira Nagar", 780, 850);
metroRoute.insertEnd("Chandragupta Square", 850, 780);
metroRoute.insertEnd("ISBT/ MR 10 Flyover", 780, 1760);
metroRoute.insertEnd("MR 10 Road", 1760, 1250);
metroRoute.insertEnd("Bhawarshala Square", 1250, 1000);

function Journey() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fare, setFare] = useState("---");
  const [time, setTime] = useState("---");
  const [distance, setDistance] = useState("---");
  const [stops, setStops] = useState("---");

  const handleCalculate = () => {
    if (from && to && from !== to) {
      const stopsCount = metroRoute.countStations(from, to);
      const calculatedFare = metroRoute.calculateFare(stopsCount);
      const calculatedDistance = metroRoute.calculateDistance(from, to);
      const calculatedTime = metroRoute.calculateTime(from, to);

      if (calculatedDistance > 1000) {
        setDistance(`${calculatedDistance / 1000} km`);
      } else {
        setDistance(`${calculatedDistance} m`);
      }

      setFare(`₹${calculatedFare}`);

      setTime(`${calculatedTime} min`);
      setStops(stopsCount);
    } else {
      alert("Please select valid source and destination stations.");
    }
  };
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment");
  };

  const stations = [
    "Vijay Nagar Square",
    "Radisson Square",
    "Mumtaj Bag Colony",
    "Khajrana Square",
    "Bengali Square",
    "Patrakar Colony",
    "Palasia Square",
    "High Court",
    "Indore Railway Station",
    "Rajwada Palace",
    "Chota Ganpati",
    "Bada Ganpati",
    "Ramchandra Nagar Square",
    "BSF/ Kalani Nagar",
    "Airport",
    "Gandhi Nagar/Nanod",
    "Super Corridor 6",
    "Super Corridor 5",
    "Super Corridor 4",
    "Super Corridor 3",
    "Super Corridor 2",
    "Super Corridor 1",
    "Bhawarshala Square",
    "MR 10 Road",
    "ISBT/ MR 10 Flyover",
    "Chandragupta Square",
    "Hira Nagar",
    "Bapat Square",
    "Meghdoot Garden",
  ];

  return (
    <>
      <div className="bg-white  flex justify-center p-6 font-sans mb-6">
        <div className="shadow rounded-lg p-8 w-full max-w-6xl">
          <h2 className="bg-blue-900 text-center text-3xl  font-bold text-white p-3 rounded-xl mb-6 font-sans">
            JOURNEY DETAILS
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 ">
            <div className="grid grid-cols-1 gap-0 bg-[#dbeaff]  rounded-xl">
              <div className=" p-6 rounded-lg">
                <div className="mb-4">
                  <label
                    htmlFor="from"
                    className="block font-semibold text-blue-900 text-xl font-sans"
                  >
                    From
                  </label>
                  <select
                    id="from"
                    className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value="">Select Station</option>
                    {stations.map((station) => (
                      <option key={station} value={station}>
                        {station}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className=" p-6 rounded-lg">
                <div className="mb-2">
                  <label
                    htmlFor="to"
                    className="block font-semibold mb-2 text-blue-900 text-xl"
                  >
                    To
                  </label>
                  <select
                    id="to"
                    className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option value="">Select Station</option>
                    {stations.map((station) => (
                      <option key={station} value={station}>
                        {station}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-center m-3">
                <button
                  className="bg-blue-600 text-xl text-white py-3 px-16 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 font-sans"
                  onClick={handleCalculate}
                >
                  Get Details
                </button>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 font-sans">
                <div className="bg-[#F1FDFF] p-6 shadow-lg rounded-lg flex flex-col items-center border-2 border-blue-600">
                  <i className="text-4xl text-blue-600 mb-4">
                    <FaLocationDot />
                  </i>
                  <h3 className="text-gray-600 font-semibold text-lg font-sans">
                    Stops
                  </h3>
                  <p className="text-blue-900 font-bold text-2xl">{stops}</p>
                </div>

                <div className="bg-[#F1FDFF] p-6 shadow-lg rounded-lg flex flex-col items-center border-2 border-blue-600">
                  <i className="text-4xl text-blue-600 mb-4">💳</i>
                  <h3 className="text-gray-600 font-semibold text-lg">Fare</h3>
                  <p className="text-blue-900 font-bold text-2xl">{fare}</p>
                </div>

                <div className="bg-[#F1FDFF] p-6 shadow-lg rounded-lg flex flex-col items-center border-2 border-blue-600">
                  <i className="text-4xl text-blue-600 mb-4">
                    <FaRoute />
                  </i>
                  <h3 className="text-gray-600 font-semibold text-lg">
                    Distance
                  </h3>
                  <p className="text-blue-900 font-bold text-2xl">{distance}</p>
                </div>

                <div className="bg-[#F1FDFF] p-6 shadow-lg rounded-lg flex flex-col items-center border-2 border-blue-600">
                  <i className="text-4xl text-blue-600 mb-4">
                    <TfiAlarmClock />
                  </i>
                  <h3 className="text-gray-600 font-semibold text-lg">Time</h3>
                  <p className="text-blue-900 font-bold text-2xl">{time}</p>
                </div>
              </div>
              <div className="flex justify-center m-3">
                <button
                  className="bg-blue-600 text-xl text-white py-3 px-16 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 font-sans"
                  onClick={handlePayment}
                >
                  Book ticket
                </button>
              </div>
            </div>
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
}

export default Journey;
