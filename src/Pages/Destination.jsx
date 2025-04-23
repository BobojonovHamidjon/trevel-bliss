import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const destinations = [
  {
    name: t("destinations.name"),
    image: "/images/himalay.jpg",
    description: t("destinations.description"),
  },
  {
    name: t("destinations.name2"),
    image: "/images/alps.jpg",
    description: t("destinations.description2"),
  },
  {
    name: t("destinations.name3"),
    image: "/images/andes.jpg",
    description: t("destinations.description3"),
  },
  {
    name: t("destinations.name4"),
    image: "/images/rokies.jpg",
    description: t("destinations.description4"),
  },
  {
    name: t("destinations.name5"),
    image: "/images/coucasus.jpg",
    description: t("destinations.description5"),
  },
  {
    name: t("destinations.name6"),
    image: "/images/carpathianus.jpg",
    description: t("destinations.description6"),
  },
  {
    name: t("destinations.name7"),
    image: "/images/tiyanshan.jpg",
    description: t("destinations.description7"),
  },
  {
    name: t("destinations.name8"),
    image: "/images/altai.jpg",
    description: t("destinations.description8"),
  },
  {
    name: t("destinations.name9"),
    image: "/images/pamir.jpg",
    description: t("destinations.description9"),
  },
];

const Destinations = () => {
  const { t } = useTranslation(); 
  const [search, setSearch] = useState("");

  const filtered = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
     
      <div
        className="h-80 bg-cover bg-center  flex items-center justify-center mb-6"
        style={{ backgroundImage: `url('/images/group.jpg')` }}
      >
        <h2 className="text-4xl font-bold text-white">{t("destinations.title")}</h2>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-end mb-8">
        <input
          type="text"
          placeholder={t("gallery.Search")}
          className="border border-gray-300 rounded-full px-5 py-2 w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((dest, index) => (
            <div
              key={index}
              className="relative w-full h-[560px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="text-xl font-semibold">{dest.name}</h3>
                <p className="text-sm">{dest.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No destinations found.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Destinations;
