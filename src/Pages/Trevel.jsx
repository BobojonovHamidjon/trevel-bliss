import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTimes, FaMapMarkerAlt, FaRegClock, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const packagesData = [
  {
    id: 1,
    country: "America",
    title: "American Adventures: A Road Trip Across the USA",
    image: "/images/paskeg.jpg",
    destination: "America",
    duration: "8 days/7 nights",
    dates: "Available from April to October",
    price: "$2500",
  },
  {
    id: 2,
    country: "Turkey",
    title: "Turkish Delights: Discover the Wonders of Turkey",
    image: "/images/paskeg2.jpg",
    destination: "Turkey, Istanbul",
    duration: "7 days/6 nights",
    dates: "Available from April to October",
    price: "$3500",
  },
  {
    id: 3,
    country: "Japan",
    title: "Japanese Harmony: A Journey Through Tradition and Modernity",
    image: "/images/paskeg3.jpg",
    destination: "Japan",
    duration: "10 days/9 nights",
    dates: "Available from March to November",
    price: "$3800",
  },
  {
    id: 4,
    country: "Dubai",
    title: "Dubai Dream: Explore the Luxurious City of the Future",
    image: "/images/paskeg4.jpg",
    destination: "Dubai",
    duration: "6 days/5 nights",
    dates: "Available all year round",
    price: "$4000",
  },
  {
    id: 5,
    country: "Spain",
    title: "Spanish Streets: Madrid and Barcelona Adventure",
    image: "/images/paskeg5.jpg",
    destination: "Spain",
    duration: "9 days/8 nights",
    dates: "Available from May to September",
    price: "$3300",
  },
  {
    id: 6,
    country: "Italy",
    title: "Italian Romance: Explore the Heart of Europe",
    image: "/images/paskeg6.jpg",
    destination: "Italy",
    duration: "10 days/9 nights",
    dates: "Available from March to October",
    price: "$3700",
  },
 
];

const countries = ["All Packages", "America", "Turkey", "Japan", "Dubai", "Spain", "Italy"];

const TravelPackages = () => {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Packages");
  const navigate = useNavigate();

  const filteredPackages = packagesData.filter((item) => {
    const matchesCountry = selectedCountry === "All Packages" || item.country === selectedCountry;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div
        className="h-[320px] bg-cover bg-center  flex items-center justify-center relative "
        style={{ backgroundImage: "url('/images/package4.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-xl">Travel Packages</h1>

        <div className="hidden md:flex flex-col items-center gap-4 absolute right-10">
          <div className="border border-white bg-white rounded-full p-2 hover:text-black transition">
            <FaInstagram />
          </div>
          <div className="border border-white bg-white rounded-full p-2 hover:text-black transition">
            <FaTimes />
          </div>
          <div className="border border-white bg-white rounded-full p-2 hover:text-black transition">
            <FaFacebook />
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-6 gap-4">
        <div className="flex flex-wrap gap-3">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCountry === country ? "bg-blue-500 text-white" : "bg-white text-gray-700"
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-full px-5 py-2 w-full md:w-[300px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {filteredPackages.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/trevel/${item.id}`)}
            className="cursor-pointer border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img src={item.image} alt={item.title} className="h-[240px] w-full object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <p>{item.destination}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaRegClock className="text-blue-500" />
                <p>{item.duration}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                <p>{item.dates}</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <FaDollarSign className="text-blue-500" />
                <p className="font-semibold text-lg">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TravelPackages;
