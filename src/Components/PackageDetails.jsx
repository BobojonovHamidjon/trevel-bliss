import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";
import FAQSection from "./FaqSection";
import { useTranslation } from "react-i18next";

const PackageDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const packagesData = [
    {
      id: 1,
      country: t("trevel.country"),
      title: t("trevel.text"),
      image: "/images/paskeg.jpg",
      destination: t("trevel.country"),
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
      title: t("trevel.text4"),
      image: "/images/paskeg4.jpg",
      destination: t("trevel.country4"),
      duration: t("trevel.duration4"),
      dates: t("trevel.dates3"),
      price: t("trevel.price4"),
    },
    {
      id: 5,
      country: t("trevel.country5"),
      title: t("trevel.text5"),
      image: "/images/paskeg5.jpg",
      destination: t("trevel.country5"),
      duration: t("trevel.duration5"),
      dates: t("trevel.dates4"),
      price: t("trevel.price5"),
    },
    {
      id: 6,
      country: t("trevel.country6"),
      title: t("trevel.text6"),
      image: "/images/paskeg6.jpg",
      destination: t("trevel.country6"),
      duration: t("trevel.duration6"),
      dates: t("trevel.dates5"),
      price: t("trevel.price6"),
    },
  ];

  const travelPackage = packagesData.find((item) => item.id === Number(id));

  if (!travelPackage)
    return <p className="text-center mt-10 text-xl">{t("details.title")}</p>;

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{travelPackage.title}</h1>
      <img
        src={travelPackage.image}
        alt={travelPackage.title}
        className="w-full h-[400px] object-cover rounded-xl mb-8"
      />

      <div className="bg-gray-100 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 text-sm text-gray-700">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
          <div>
            <p className="font-semibold">{t("details.Destination:")}</p>
            <p>{travelPackage.destination}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaClock className="text-blue-500 text-xl mt-1" />
          <div>
            <p className="font-semibold">{t("details.Duration:")}</p>
            <p>{travelPackage.duration}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaCalendarAlt className="text-blue-500 text-xl mt-1" />
          <div>
            <p className="font-semibold">{t("details.Dates:")}</p>
            <p>{travelPackage.dates}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaUsers className="text-blue-500 text-xl mt-1" />
          <div>
            <p className="font-semibold">{t("details.Group size:")}</p>
            <p>{t("details.max")}</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-lg font-semibold text-black mb-4">
        {t("details.Price")}<span className="text-blue-600 text-2xl">{travelPackage.price}</span>
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          {t("details.now")}
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
           {t("details.button")}
          </button>
        </div>
      </div>

      <div className="prose max-w-none mb-10">
        <h2 className="text-2xl font-bold mb-4">{t("details.text")}</h2>
        <p>
        {t("details.title2")}
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2"> {t("details.title3")}</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong> {t("details.li")}</strong> {t("details.subtitle")}</li>
          <li><strong>{t("details.li2")}</strong> {t("details.subtitle2")}</li>
          <li><strong>{t("details.li3")}</strong> {t("details.subtitle3")}</li>
          <li><strong>{t("details.Activities")}</strong> {t("details.subtitle4")}</li>
          <li><strong>{t("details.Meals")}</strong>  {t("details.subtitle5")}</li>
          <li><strong>{t("details.fees")}</strong>  {t("details.subtitle6")}</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2"> {t("details.title4")}</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>{t("details.flight")}</strong> {t("details.subtitle7")}</li>
          <li><strong>{t("details.Meals")}</strong> {t("details.subtitle8")}</li>
          <li><strong>{t("details.Expenses")}</strong>{t("details.subtitle9")}</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2"> {t("details.title5")}</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>{t("details.li4")}</li>
          <li>{t("details.li5")}</li>
          <li>{t("details.li6")}</li>
          <li>{t("details.li7")}</li>
          <li>{t("details.li8")}</li>
          <li>{t("details.li9")}</li>
          <li>{t("details.li10")}</li>
        </ul>
      </div>

      <FAQSection />
    </div>
  );
};

export default PackageDetails;
