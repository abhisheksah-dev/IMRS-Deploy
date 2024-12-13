import React from "react";
import { FaPhone } from "react-icons/fa";

const HelplineSection = () => {
  const helplineData = [
    { title: "Women Helpline", phone: "1091" },
    { title: "Child Helpline", phone: "1098" },
    { title: "CM Helpline", phone: "181" },
    { title: "Indore Police", phone: "100" },
    { title: "Ambulance", phone: "102" },
    { title: "Fire Brigade", phone: "101" },
  ];

  return (
    <>
      <div className=" py-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <h2
            className="text-4xl font-bold text-center text-slate-100 mb-8 bg-[#35045D]
 p-2 rounded-2xl font-sans"
          >
            SECURITY
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {helplineData.map((helpline, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#D3D5FF] rounded-lg p-4 shadow-md"
              >
                <span className="text-xl font-medium bg-purple-800 py-2 px-4 rounded-2xl text-slate-100">
                  {helpline.title}
                </span>
                <a
                  href={`tel:${helpline.phone}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 gap-2 bg-white px-4 py-2 rounded-2xl no-underline"
                >
                  <FaPhone />

                  {helpline.phone}
                </a>
              </div>
            ))}
          </div>
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
};

export default HelplineSection;
