import React, { useState } from "react";
import Swiper from "../Components/Swiper";
import Marquee from "react-fast-marquee";
import { FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";

const TravelGallery = () => {
  const [search, setSearch] = useState("");

  const showJapan = search === "" || search.toLowerCase().includes("japan");
  const showAmerica = search === "" || search.toLowerCase().includes("america");
  const showTurkey = search === "" || search.toLowerCase().includes("turkey");

  return (
    <div className="min-h-screen bg-white">
     <div
  className="h-[320px] bg-cover bg-center flex items-center justify-center relative "
  style={{
    backgroundImage: "url('/images/gallery.jpg')",
  }}
>
  <h1 className="text-5xl font-bold text-white drop-shadow-xl">
    Travel Gallery
  </h1>

 
  <div className="hidden md:flex flex-col items-center gap-4 absolute right-10">
    <div className="border border-white  bg-white rounded-full p-2  hover:text-black transition">
      <FaInstagram />
    </div>
    <div className="border border-white bg-white rounded-full p-2  hover:text-black transition">
      <FaTimes />
    </div>
    <div className="border border-white bg-white rounded-full p-2  hover:text-black transition">
      <FaFacebook />
    </div>
  </div>
</div>

     <div className="max-w-7xl mx-auto px-4 py-10">
     <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-12">
        <p></p>
        <div className="w-full md:w-[300px]">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-5 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {showJapan && (
        <>
          <div className="text-center">
            <h2 className="text-4xl text-center">
              Journey in <span className="font-bold">Japan</span>
            </h2>
          </div>
          <div className="flex justify-center gap-4 flex-wrap md:flex-nowrap p-4">
            <img
              src="/images/japan1.jpg"
              alt="Image 1"
              className="w-[424px] h-[630px] object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between gap-4">
              <img
                src="/images/japan2.jpg"
                alt="Image 2a"
                className="w-[424px] h-[303px] object-cover rounded-lg"
              />
              <img
                src="/images/japan3.jpg"
                alt="Image 2b"
                className="w-[424px] h-[303px] object-cover rounded-lg"
              />
            </div>
            <img
              src="/images/japan4.jpg"
              alt="Image 3"
              className="w-[424px] h-[630px] object-cover rounded-lg"
            />
          </div>
        </>
      )}

      {showAmerica && (
        <>
          <div className="text-center">
            <h2 className="text-4xl mt-12 mb-12">
              Journey in <span className="font-bold">America</span>
            </h2>
          </div>
          <Swiper />
        </>
      )}

      {showTurkey && (
        <>
          <div className="text-center">
            <h2 className="text-4xl mt-12 mb-12">
              Journey in <span className="font-bold">Turkey</span>
            </h2>
          </div>
          <Marquee speed={100} className="mt-6 mb-20" >
  <div className="flex gap-6 px-6">
    <img
      src="/images/turkey1.jpg"
      alt="img"
      className="w-full max-w-[536px] h-[388px] rounded-2xl object-cover"
    />
    <img
      src="/images/turkey2.jpg"
      alt="img"
      className="w-full max-w-[536px] h-[388px] rounded-2xl object-cover"
    />
    <img
      src="/images/turkey3.jpg"
      alt="img"
      className="w-full max-w-[536px] h-[388px] rounded-2xl object-cover"
    />
  </div>
</Marquee>
        </>
      )}

      {!showJapan && !showAmerica && !showTurkey && (
        <div className="text-center text-gray-500 mb-20">
          <p>No results found for "{search}"</p>
        </div>
      )}
     </div>
    </div>
  );
};

export default TravelGallery;
