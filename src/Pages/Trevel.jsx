import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaTimes, FaMapMarkerAlt, FaRegClock, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const packagesData = [
  {
    id: 1,
    country: t("trevel.country"),
    title: t("trevel.text"),
    image: "/images/paskeg.jpg",
    destination: t("trevel.country") ,
    duration: t("trevel.duration"),
    dates: t("trevel.dates"),
    price: t("trevel.price"),
  },
  {
    id: 2,
    country: t("trevel.country2"),
    title: t("trevel.text2"),
    image: "/images/paskeg2.jpg",
    destination: t("trevel.destination"),
    duration: t("trevel.duration2"),
    dates: t("trevel.dates2"),
    price: t("trevel.price2"),
  },
  {
    id: 3,
    country: t("trevel.country3"),
    title: t("trevel.text3"),
    image: "/images/paskeg3.jpg",
    destination: t("trevel.country3"),
    duration: t("trevel.duration3"),
    dates: t("trevel.dates2"),
    price: t("trevel.price3"),
  },
  {
    id: 4,
    country: t("trevel.country4"),
    title: t("trevel.text4") ,
    image: "/images/paskeg4.jpg",
    destination: t("trevel.country4"),
    duration: t("trevel.duration4"),
    dates: t("trevel.dates3"),
    price: "$4000",
  },
  {
    id: 5,
    country: t("trevel.country5"),
    title:  t("trevel.text5"),
    image: "/images/paskeg5.jpg",
    destination:  t("trevel.country5") ,
    duration:  t("trevel. duration5"),
    dates: t("trevel. dates4"),
    price: "$3300",
  },
  {
    id: 6,
    country:t("trevel.country6") ,
    title: t("trevel.text6"),
    image: "/images/paskeg6.jpg",
    destination: t("trevel.country6"),
    duration:t("trevel.duration6"),
    dates: t("trevel.dates5"),
    price: "$3700",
  },
 
];

const countries = [t("trevel.all"),t("trevel.country") , t("trevel.country2"), t("trevel.country3"), t("trevel.country4"), t("trevel.country5"), t("trevel.country6")];

const TravelPackages = () => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(t("trevel.all"));
  const navigate = useNavigate();

  const filteredPackages = packagesData.filter((item) => {
    const matchesCountry = selectedCountry === t("trevel.all") || item.country === selectedCountry;
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
        <h1 className="text-5xl font-bold text-white drop-shadow-xl">{t("trevel.title")}</h1>

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
          placeholder={t("gallery.Search")}
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
