import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      {/* Section with Background Image */}
      <section className="font-sans h-screen bg-cover bg-fixed bg-center bg-[url('/images/books1.png')]">
        <div className="container mx-auto py-5 h-full">
          <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-4xl">
              <div className="rounded-3xl shadow-md text-black">
                <div className="flex flex-wrap">
                  {/* Our Project Section */}
                  <section className="py-2 md:py-10 bg-[#ffffff] bg-opacity-50 rounded-3xl">
                    <div className="text-center mb-2 md:mb-8">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white bg-purple-800 bg-opacity-80 py-3 px-6 md:px-10 inline-block rounded-2xl shadow-md font-sans">
                        IMRS
                      </h2>
                    </div>
                    <div className="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl px-5 sm:px-8 py-5 sm:py-8 rounded-xl shadow-lg text-justify bg-transparent bg-opacity-50">
                      <p className=" text-2xl sm:text-lg md:text-lg text-gray-800 leading-relaxed font-sans text-center font-medium">
                        The Indore Metro Rail Saathi (IMRS) is designed to make
                        navigating Indore's metro system easier, more efficient,
                        and more enjoyable for all. In a city known for its
                        cleanliness and progressive spirit, IMRS is the perfect
                        travel companion. It allows users to easily locate the
                        nearest metro station, calculate fares, and estimate
                        travel times. Picture yourself seamlessly boarding a
                        metro after checking the precise schedule, or
                        discovering a nearby station while visiting iconic
                        landmarks like Rajwada—IMRS takes care of every detail.
                        <br />
                        <br />
                        But IMRS is more than just a navigation tool; it’s a
                        platform dedicated to enhancing the travel experience.
                        With features like Lost & Found to help reunite
                        passengers with misplaced items, and user-friendly route
                        information for first-time travelers, IMRS makes it
                        simple to navigate Indore’s metro system. Reflecting the
                        city’s commitment to innovation and continuous growth,
                        IMRS is not just a transit solution—it’s a step towards
                        a smarter, more connected Indore.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Another Section with a Different Background */}
      <div className="h-3 font-sans"></div>
      <section className="bg-cover bg-fixed bg-center bg-[url('/images/books2.jpg')] relative">
        <div className="container mx-auto py-5">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl">
              <div className="rounded-3xl shadow-md text-black">
                <div className="flex flex-wrap">
                  {/* Upcoming Section */}
                  <section className="bg-blue-100 bg-opacity-50 py-10 rounded-2xl">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-white bg-purple-800 py-3 px-6 md:px-10 inline-block rounded-lg shadow-md bg-opacity-70 font-sans">
                        UPCOMINGS
                      </h2>
                    </div>

                    {/* Enhanced Responsive Grid */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
                      {[
                        // Map through cards with updated layout and sizes
                        {
                          img: "/images/mobileapplication.png",
                          alt: "Mobile Application",
                          title: "Mobile Application",
                        },
                        {
                          img: "/images/audio.png",
                          alt: "Audio Indication",
                          title: "Audio Navigator",
                        },
                        {
                          img: "/images/onlineticket.png",
                          alt: "Online Ticket Booking",
                          title: "Online Ticket Booking",
                        },
                        {
                          img: "/images/stationinformation.png",
                          alt: "Station Information",
                          title: "Station Information",
                        },
                        {
                          img: "/images/trip.png",
                          alt: "Station Information",
                          title: "Trip Planner",
                        },
                        {
                          img: "/images/smartcard.png",
                          alt: "Station Information",
                          title: "Smart Card",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-[#D3D5FF] bg-opacity-80 rounded-xl shadow-xl p-10 flex flex-col items-center hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                          <img
                            src={item.img}
                            alt={item.alt}
                            className="w-32 h-32 lg:w-40 lg:h-40"
                          />
                          <h3 className="mt-6 text-xl lg:text-2xl font-bold text-blue-700 text-center">
                            {item.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Train Images Positioned Between "Upcoming" and Footer */}

        <div className="w-full">
          <img
            src="/images/trainoriginal.png"
            alt="Train Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default AboutUs;
