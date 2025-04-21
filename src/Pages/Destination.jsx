import React, { useState } from "react";

const destinations = [
  {
    name: "Himalayas",
    image: "/images/himalay.jpg",
    description: "Support for your travel needs — from start to finish.",
  },
  {
    name: "Alps",
    image: "/images/alps.jpg",
    description: "Breathtaking scenic routes and mountain adventures.",
  },
  {
    name: "Andes",
    image: "/images/andes.jpg",
    description: "Support, deep warmth, and rich cultural heritage.",
  },
  {
    name: "Rockies",
    image: "/images/rokies.jpg",
    description: "24/7 help at every step of your adventure",
  },
  {
    name: "Caucasus",
    image: "/images/coucasus.jpg",
    description: "Non-stop support from booking to your return home",
  },
  {
    name: "Carpathians",
    image: "/images/carpathianus.jpg",
    description: "We’re here for you — anytime, anywhere.",
  },
  {
    name: "Tian Shan",
    image: "/images/tiyanshan.jpg",
    description: "24/7 care for a seamless travel experience.",
  },
  {
    name: "Altai",
    image: "/images/altai.jpg",
    description: "Help at every moment, wherever your travels take you",
  },
  {
    name: "Pamir",
    image: "/images/pamir.jpg",
    description: "Around-the-clock assistance for stress-free travel.",
  },
];

const Destinations = () => {
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
        <h2 className="text-4xl font-bold text-white">Explore Destinations</h2>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-end mb-8">
        <input
          type="text"
          placeholder="Search"
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
