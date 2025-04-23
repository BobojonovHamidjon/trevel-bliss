import { t } from "i18next";
import React from "react";

const packages = [
  {
    image: "/images/package1.jpg",
    days: t("TravelPackages.days"),
    price: t("TravelPackages.price"),
    title: t("TravelPackages.image1"),
    description: t("TravelPackages.description"),
  },
  {
    image: "/images/package2.jpg",
    days: t("TravelPackages.days2"),
    price: t("TravelPackages.price2"),
    title: t("TravelPackages.image2"),
    description: t("TravelPackages.description2"),
  },
  {
    image: "/images/package3.jpg",
    days: t("TravelPackages.days3"),
    price: t("TravelPackages.price3"),
    title: t("TravelPackages.image3"),
    description: t("TravelPackages.description3"),
  },
];

const TravelPackages = () => {
  return (
    <section className="px-4 md:px-20 py-20 bg-white">
    <div className="md:flex md:justify-between md:items-start mb-12 gap-10">
      <h2 className="text-3xl md:text-5xl font-semibold md:text-left text-center md:w-1/2">
        {t("TravelPackages.title")}
      </h2>
      <p className="text-center md:text-right text-gray-500 md:w-1/2 mt-4 md:mt-0">
        {t("TravelPackages.subtitle")}
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
