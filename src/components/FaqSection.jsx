import React, { useState } from "react";

const FaqSection = () => {
  // State to track which FAQ is open
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  // FAQ categories and their questions/answers
  const faqs = [
    {
      title: "General Queries",
      questions: [
        {
          question: "Can I access this system on my phone?",
          answer:
            "Yes! Since it’s a web-based platform, you can access it on any device, including smartphones, without needing to download an app.",
        },
        {
          question: "Does the system show the total travel time?",
          answer:
            "Yes, the system provides the approximate travel time between your starting and ending stations, considering the metro’s average speed.",
        },
        {
          question: "What happens if I lose an item on the metro?",
          answer:
            "Our 'Lost and Found' section guides you on how to report lost items and reclaim them.",
        },
        {
          question: "Does this system show the metro map?",
          answer:
            "Yes, the platform provides an updated and interactive metro map to help you plan your journey more effectively.",
        },
        {
          question: "Can I use this system offline?",
          answer:
            "No, as it’s a web-based platform, you’ll need an internet connection to access the features.",
        },
        {
          question: "Does the platform show live updates for metro timings?",
          answer:
            "Currently, the system provides scheduled first and last train timings, and future updates may include real-time train tracking.",
        },
        {
          question: "Can tourists use this platform?",
          answer:
            "Absolutely! The system is user-friendly and provides all information, including station details and maps, making it ideal for tourists unfamiliar with the city.",
        },
      ],
    },
    {
      title: "Train",
      questions: [
        {
          question: "What is the operation timing of Metro trains?",
          answer:
            "Trains will be operated from morning 05:25 hrs to 22:50 hrs (proposed).",
        },
        {
          question: "How many coaches will a train have?",
          answer: "A total of three coaches are available in each metro train.",
        },
        {
          question: "What is the maximum carrying capacity of a metro train?",
          answer:
            "The maximum capacity of each train is to carry a total of 900 passengers.",
        },
        {
          question: "How should one board the train?",
          answer:
            "• Stand in queue behind the yellow line. \n• Let alighting passengers de-board first. \n• Allow children, senior citizens, and differently-abled passengers to board the train first. \n• Finally, you can board the train.",
        },
        {
          question:
            "What are the safety equipment and other facilities in the metro coaches?",
          answer:
            "Passenger Emergency Communication Unit (PECU) and fire extinguishers are available below the seats.",
        },
        {
          question: "How can passengers communicate in an emergency situation?",
          answer:
            "Passengers can use the Passenger Emergency Communication Unit available within the metro train to contact the pilot.",
        },
      ],
    },
    {
      title: "Ticket",
      questions: [
        {
          question:
            "Is there any limit within which I should enter the metro station after purchasing a single journey ticket?",
          answer: "QR-based paper tickets are valid for the same business day.",
        },
        {
          question:
            "Can I enter from any station other than the station from where I purchased the single journey ticket?",
          answer: "No.",
        },
        {
          question: "Can I extend my journey beyond the original destination?",
          answer:
            "Yes, if you are a single journey ticket holder, the additional fare for the extended journey (fare for the new destination minus the fare for the previous destination) has to be paid at the customer care centre of the destination station before making an exit from the gates. After paying the additional fare, a new paper QR ticket will be issued for exit purposes.",
        },
        {
          question: "Can I get a refund for a single journey ticket?",
          answer:
            "A new QR-based paper ticket is refundable at full amount within 16 minutes of purchase from the purchase station only.",
        },
        {
          question:
            "Can I get a refund of the balance fare if I get down at a station before the destination station for which I have purchased the single journey ticket?",
          answer:
            "No, but in cases of disruption in services (unusual delay in train running due to an incident or accident), a partially used QR ticket can be refunded.",
        },
        {
          question: "What should I do if I lose my ticket during the journey?",
          answer:
            "You may approach the customer care centre of your destination station. You will be treated as a passenger without a ticket and shall be charged the maximum fare of the system + Rs 50 as a penalty.",
        },
      ],
    },
    {
      title: "Fares",
      questions: [
        {
          question: "What is multiple journey QR ticket (MJQRT)?",
          answer:
            "It is a special type of ticket used for multiple journeys in Indore Metro based on the product available on it.",
        },
        {
          question:
            "Do I need to submit any document to get a multiple journey QR ticket?",
          answer: "No.",
        },
        {
          question:
            "Is there any concession for students, senior citizens, persons with disabilities, ladies, etc.?",
          answer: "No concession for any category is applicable.",
        },
        {
          question: "What are the criteria for ticket charges for a child?",
          answer:
            "Children up to 3 feet (90cm) height are allowed to travel for free if accompanied by an adult. The child must be carried in arms (above the gate flap level) to avoid the possibility of lapse height during entry or exit. Children above 3 feet (90 cm) will be charged the full fare.",
        },
        {
          question: "How is fare calculated between two stations?",
          answer:
            "In Indore Metro, the fare is fixed based on the shortest route distance between the origin and destination stations.",
        },
      ],
    },
    {
      title: "Station",
      questions: [
        {
          question: "Does Metro have porter service?",
          answer: "Porter services are not available at Metro stations.",
        },
        {
          question: "What will happen if train doors are not properly closed?",
          answer:
            "Safety is of utmost priority to us. The door closing of the Metro trains is managed by the Train operator. The Train operator has a clear view of the entire platform and would be aware in case of any such situation. The trains are designed not to move until such time all doors are safely closed. In addition, station attendance is deployed on the platform at all times for assistance.",
        },
        {
          question:
            "How will people have been trained to manage various functions of the metro train?",
          answer:
            "Metro employees deployed at the stations have been given adequate training to take care of all situations.",
        },
        {
          question: "What happens at the time of electricity failure?",
          answer:
            "The entire power system has been set up to avoid any such situations. However, all emergency request procedures will be working in case of any such requirements.",
        },
        {
          question:
            "During adverse weather conditions like heavy rains, will your service get affected?",
          answer:
            "No. Metro systems have been designed to withstand adverse weather conditions.",
        },
      ],
    },
    {
      title: "Safety & Security",
      questions: [
        {
          question: "What are the safety measures available at Metro station?",
          answer:
            "CCTVs are provided for surveillance and monitoring both in Metro coaches and on the platforms.",
        },
        {
          question: "What are the steps taken for women safety?",
          answer:
            "Security staff are located around the clock on all platforms and stations.",
        },
        {
          question:
            "What if a passenger falls on the train when there are no trains?",
          answer:
            "Metro personnel are deployed at the stations to take care of such situations.",
        },
        {
          question: "What happens when platforms get overcrowded?",
          answer:
            "Adequate Metro staff are deployed at the metro station to handle the situation. Station controller will also be monitoring the platform CCTV cameras, and if there is overcrowding, entry will be stopped temporarily.",
        },
        {
          question:
            "What happens if Metro train stops in between metro stations?",
          answer:
            "Do not panic. In case of any such contingency, our Control Centre will make necessary announcements within the trains, and safety measures will be taken to evacuate the passengers.",
        },
      ],
    },
    {
      title: "Luggage",
      questions: [
        {
          question:
            "How much weight is allowed with a person while travelling in Indore Metro?",
          answer:
            "In Indore Metro, one bag containing personal belongings not exceeding 80cm × 50cm × 30cm in size and 25 kgs in gross weight is permitted. Baggage in the form of bundles is not permitted.",
        },
      ],
    },
  ];

  // Toggle FAQ category open/close
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
    setActiveQuestion(null); // Reset question view when changing categories
  };

  // Toggle question answer open/close
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <div className="bg-purple-100 p-8 mx-auto w-11/12 md:w-9/12 rounded-xl shadow-md mt-4 mb-4 font-sans">
        <div className="flex flex-col space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-xl">
              {/* FAQ Button for category */}
              <button
                className={`w-full text-left p-4 flex justify-between items-center rounded-xl ${
                  activeFaq === index
                    ? "bg-blue-500 text-white"
                    : "bg-blue-700 text-white"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xl font-semibold">{faq.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform ${
                    activeFaq === index ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* FAQ Content for category */}
              {activeFaq === index && (
                <div>
                  {faq.questions.map((q, qIndex) => (
                    <div
                      key={qIndex}
                      className="border-t border-gray-300 bg-gray-200 rounded-xl"
                    >
                      <button
                        className="w-full text-left p-4 flex justify-between items-center"
                        onClick={() => toggleQuestion(qIndex)}
                      >
                        <span>{q.question}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transform ${
                            activeQuestion === qIndex
                              ? "rotate-180"
                              : "rotate-0"
                          } transition-transform`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Question answer */}
                      {activeQuestion === qIndex && (
                        <p className="p-4 text-gray-600 bg-gray-100 rounded-xl">
                          {q.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
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

export default FaqSection;
