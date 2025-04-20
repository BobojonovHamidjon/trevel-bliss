import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";

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

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const travelPackage = packagesData.find((item) => item.id === Number(id));

  if (!travelPackage)
    return <p className="text-center mt-10 text-xl">Package not found</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
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
            <p className="font-semibold">Destination:</p>
            <p>{travelPackage.destination}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaClock className="text-blue-500 text-xl mt-1" />
          <div>
            <p className="font-semibold">Duration:</p>
            <p>{travelPackage.duration}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaCalendarAlt className="text-blue-500 text-xl mt-1" />
          <div>
            <p className="font-semibold">Dates:</p>
            <p>{travelPackage.dates}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaUsers className="text-blue-500 text-xl mt-1" />
          <div>
            <p className="font-semibold">Group size:</p>
            <p>Max 16 people</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-lg font-semibold text-black mb-4">
          Price: <span className="text-blue-600 text-2xl">{travelPackage.price}</span>
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Book now
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Contact us
          </button>
        </div>
      </div>

      <div className="prose max-w-none mb-10">
        <h2 className="text-2xl font-bold mb-4">Tour Description:</h2>
        <p>
          Indulge in the romance, history, and culinary delights of France on our French Essence tour.
          From the iconic landmarks of Paris to the charming villages of Provence and the vineyards of Bordeaux,
          this immersive journey offers a taste of the quintessential French experience.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">What’s Included:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Transportation:</strong> Comfortable transportation throughout the tour in a modern vehicle.</li>
          <li><strong>Accommodation:</strong> Accommodation in centrally located hotels or charming châteaux with breakfast included.</li>
          <li><strong>Guided Tours:</strong> Expertly guided tours of iconic landmarks, historical sites, and cultural attractions.</li>
          <li><strong>Activities:</strong> Exciting activities such as wine tastings, cooking classes, and river cruises.</li>
          <li><strong>Meals:</strong> Some meals included as specified in the itinerary.</li>
          <li><strong>Entrance Fees:</strong> Entrance fees to attractions and monuments included.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">What’s Excluded:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>International Flights:</strong> Flights to and from France are not included.</li>
          <li><strong>Meals:</strong> Meals not specified in the itinerary are excluded.</li>
          <li><strong>Personal Expenses:</strong> Expenses such as souvenirs, additional activities, and gratuities are not included.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">Activities:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Guided tour of the Eiffel Tower and Louvre Museum in Paris.</li>
          <li>Wine tasting in the vineyards of Bordeaux.</li>
          <li>Cooking class in Provence.</li>
          <li>Visit to the lavender fields of Provence.</li>
          <li>River cruise along the Seine River in Paris.</li>
          <li>Explore the charming villages of Normandy.</li>
          <li>Visit to the Mont-Saint-Michel abbey.</li>
        </ul>
      </div>
    </div>
  );
};

export default PackageDetails;
