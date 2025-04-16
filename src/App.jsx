import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { useState } from "react";
import Layout from "./components/Layout";
import TopPage from "./components/TopPage";
import SignUpPage from "./components/SignUpPage";
import SignIn from "./components/SignIn";
import Journey from "./components/Journey";
import NearestStation from "./components/NearestStation";
import LostAndFound from "./components/LostandFound";
import NetworkPage from "./components/NetworkPage";
import HelplineSection from "./components/HelplineSection";
import FaqSection from "./components/FaqSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import HorizontalImageScroll from "./components/HorizontalImageScroll";
import Home from "./components/Home";
import Payment from "./components/Payment";
import TripPlanner from "./components/TripPlanner";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

      {/* Main Layout */}
      <div className={`${loading ? "filter blur-sm pointer-events-none" : ""}`}>
        <Layout setLoading={setLoading}>
          {/* <HorizontalImageScroll /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journeydetails" element={<Journey />} />
            <Route path="/neareststation" element={<NearestStation />} />
            <Route path="/lostandfound" element={<LostAndFound />} />
            <Route path="/networkpage" element={<NetworkPage />} />
            <Route path="/helplinesection" element={<HelplineSection />} />
            <Route path="/faqsection" element={<FaqSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/IMRS" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/trip" element={<TripPlanner />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
