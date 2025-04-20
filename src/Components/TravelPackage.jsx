import React from "react";

const packages = [
  {
    image: "/images/package1.jpg",
    days: "6 Days, 5 Nights",
    price: "$850/Night",
    title: "Chasing the Northern Lights",
    description: "Embark on a mesmerizing journey to witness the stunning Aurora Borealis in the magical landscapes of Iceland.",
  },
  {
    image: "/images/package2.jpg",
    days: "3 Days, 2 Nights",
    price: "$620/Night",
    title: "Aurora Hunting in Iceland",
    description: "Experience the thrill of chasing the Aurora Borealis across the magical skies of Iceland.",
  },
  {
    image: "/images/package3.jpg",
    days: "4 Days, 3 Nights",
    price: "$1,250/Night",
    title: "Catching the Northern Lights",
    description: "Witness the captivating beauty of the Northern Lights as you journey through Iceland’s awe-inspiring landscapes.",
  },
];

const TravelPackages = () => {
  return (
    <section className="px-4 md:px-20 py-20 bg-white">
    <div className="md:flex md:justify-between md:items-start mb-12 gap-10">
      <h2 className="text-3xl md:text-5xl font-semibold md:text-left text-center md:w-1/2">
        Browse our selection of carefully curated travel packages
      </h2>
      <p className="text-center md:text-right text-gray-500 md:w-1/2 mt-4 md:mt-0">
        Discover a collection of expertly designed packages, combining adventure, culture, and stunning landscapes, each promising a journey to remember.
      </p>
    </div>
  
    <div className="grid md:grid-cols-3 gap-10">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden shadow-lg relative group transition-transform hover:scale-105 duration-300"
        >
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-4 left-4 flex flex-col gap-2 text-white">
            <div className="flex gap-2">
              <span className="bg-black/70 px-3 py-1 rounded-full text-sm">
                {pkg.days}
              </span>
              <span className="bg-black/70 px-3 py-1 rounded-full text-sm">
                {pkg.price}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{pkg.title}</h3>
            <p className="text-sm max-w-xs">{pkg.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default TravelPackages;
