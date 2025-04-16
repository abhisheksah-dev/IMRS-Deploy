import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

// Station Node Class
class StationNode {
  constructor(name, distancePrev, distanceNext) {
    this.name = name;
    this.distancePrev = distancePrev;
    this.distanceNext = distanceNext;
    this.prev = null;
    this.next = null;
  }
}

// Circular Linked List Class
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(name, distancePrev, distanceNext) {
    const newNode = new StationNode(name, distancePrev, distanceNext);
    this.head = newNode;
    this.tail = newNode;
    newNode.next = newNode;
    newNode.prev = newNode;
  }

  insertEnd(name, distancePrev, distanceNext) {
    if (!this.head) {
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

  calculateDistance(from, to) {
    let current = this.head;
    let found = false;
    let forwardDistance = 0;
    let backwardDistance = 0;

    // FORWARD TRAVERSAL
    while (current.name !== from && current.next !== this.head) {
      current = current.next;
    }
    if (current.name === from) {
      found = true;
      let forwardPointer = current;
      while (forwardPointer.name !== to) {
        forwardDistance += forwardPointer.distanceNext;
        forwardPointer = forwardPointer.next;
      }
    }

    // BACKWARD TRAVERSAL
    current = this.head;
    while (current.name !== from && current.next !== this.head) {
      current = current.next;
    }
    if (current.name === from) {
      let backwardPointer = current;
      while (backwardPointer.name !== to) {
        backwardDistance += backwardPointer.distancePrev;
        backwardPointer = backwardPointer.prev;
      }
    }

    if (!found) return null;
    return {
      shortestDistance: Math.min(forwardDistance, backwardDistance),
      direction:
        forwardDistance <= backwardDistance ? "Forward" : "Backward",
    };
  }
}

// Initialize metroRoute
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

function NearestStation() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [distanceInfo, setDistanceInfo] = useState(null);

  const handleCalculateDistance = () => {
    if (fromStation && toStation) {
      if (fromStation === toStation) {
        alert("Source and destination stations cannot be the same.");
        return;
      }
      const info = metroRoute.calculateDistance(fromStation, toStation);
      if (info) {
        setDistanceInfo(info);
      } else {
        alert("Stations not found in route.");
      }
    } else {
      alert("Please select both source and destination stations.");
    }
  };

  const stations = [
    "Super Corridor 1",
    "Super Corridor 2",
    "Super Corridor 3",
    "Super Corridor 4",
    "Super Corridor 5",
    "Super Corridor 6",
    "Gandhi Nagar/Nanod",
    "Airport",
    "BSF/ Kalani Nagar",
    "Ramchandra Nagar Square",
    "Bada Ganpati",
    "Chota Ganpati",
    "Rajwada Palace",
    "Indore Railway Station",
    "High Court",
    "Palasia Square",
    "Patrakar Colony",
    "Bengali Square",
    "Khajrana Square",
    "Mumtaj Bag Colony",
    "Radisson Square",
    "Vijay Nagar Square",
    "Meghdoot Garden",
    "Bapat Square",
    "Hira Nagar",
    "Chandragupta Square",
    "ISBT/ MR 10 Flyover",
    "MR 10 Road",
    "Bhawarshala Square",
  ];

  return (
    <>
      <div className="bg-white flex justify-center p-6 font-sans mb-7">
        <div className="shadow-lg rounded-lg p-8 max-w-3xl w-full">
          <h2 className="bg-blue-900 text-center text-3xl font-bold text-white mb-8 uppercase h-12 rounded-xl">
            <p className="pt-2">Trip Planner</p>
          </h2>

          <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <div className="mb-4">
              <label className="block text-blue-900 font-semibold mb-2">
                <div className="flex items-center space-x-2">
                  <FaSearchLocation className="text-blue-900" />
                  <span>From</span>
                </div>
              </label>
              <select
                value={fromStation}
                onChange={(e) => setFromStation(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-blue-300"
              >
                <option value="">Enter your source station</option>
                {stations.map((stationName) => (
                  <option key={stationName} value={stationName}>
                    {stationName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-blue-900 font-semibold mb-2">
                <div className="flex items-center space-x-2">
                  <FaSearchLocation className="text-blue-900" />
                  <span>To</span>
                </div>
              </label>
              <select
                value={toStation}
                onChange={(e) => setToStation(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-blue-300"
              >
                <option value="">Enter your destination station</option>
                {stations.map((stationName) => (
                  <option key={stationName} value={stationName}>
                    {stationName}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleCalculateDistance}
                className="bg-blue-600 text-xl text-white py-3 px-16 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Search
              </button>
            </div>
          </div>

          {distanceInfo && (
            <div className="bg-[#D3D5FF] rounded-lg shadow-lg p-8 text-center mt-10">
              <div className="text-gray-700 text-xl font-semibold">
                Distance: {distanceInfo.shortestDistance} meters
              </div>
              <div className="text-gray-500 text-md mt-2">
                Direction: {distanceInfo.direction}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        <img
          src="/images/trainoriginal.png"
          alt="Train Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
}

export default NearestStation;
