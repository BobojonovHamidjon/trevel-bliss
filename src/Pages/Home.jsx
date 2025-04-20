import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa'
import TravelPackages from '../Components/TravelPackage'
import FAQSection from '../Components/FaqSection'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
          
      <section className="relative w-full h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url('/images/hero.jpg')` }}>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 flex flex-col justify-between h-full">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-5xl font-bold leading-tight">
                Weaving Your Dreams<br />
                Into Unforgettable<br />
                Adventures
              </h2>
              <div className="mt-6">
  <button className="bg-white text-black font-semibold py-2 px-4 rounded-full flex items-center gap-2">
    Booking Now
    <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
      →
    </span>
  </button>
</div>

              <p className="mt-4 max-w-md text-sm">
                Discover the magic of remote destinations, where nature's beauty meets cultural richness, offering a journey that will stay with you forever.
              </p>
            </div>

          
            <div className="hidden md:flex flex-col items-center gap-4">
              <div className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
                <FaInstagram />
              </div>
              <div className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
                <FaTimes />
              </div>
              <div className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className=" text-gray-600 text-4xl leading-relaxed">
            Our adventure started with a deep love for travel and a mission to share the world's beauty with others.
            Over the years, we've grown into a trusted travel agency, celebrated for our dedication, expertise,
            and commitment to delivering exceptional experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-yellow-500 mb-2">200+</div>
            <h3 className="text-lg font-medium text-gray-700">Happy Customer</h3>
          </div>
          <div>
            <div className="text-5xl font-bold text-green-500 mb-2">40+</div>
            <h3 className="text-lg font-medium text-gray-700">Top Hotels</h3>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-500 mb-2">World</div>
            <h3 className="text-lg font-medium text-gray-700">Top Class Destination</h3>
          </div>
        </div>
      </div>
    </section>
    <Marquee speed={100} className="mt-6 mb-20">
  <div className="mx-10">
    <img src="/images/Company logo.jpg" alt="Company logo" />
  </div>
  <div className="mx-10">
    <img src="/images/Company log.jpg" alt="Company logo" />
  </div>
  <div className="mx-10">
    <img src="/images/Company logo.jpg" alt="Company logo" />
  </div>
  <div className="mx-10">
    <img src="/images/Company log.jpg" alt="Company logo" />
  </div>
  <div className="mx-10">
    <img src="/images/Company logo.jpg" alt="Company logo" />
  </div>
</Marquee>
<section className="w-full max-w-[1440px] mx-auto px-6 py-[90px]">
<div className="mb-10 flex flex-col md:flex-row justify-between items-start gap-8">
  <h2 className="text-4xl font-semibold leading-snug md:max-w-md">
    A seamless blend of adventure, 
    culture, and natural wonders
  </h2>
  <p className="text-gray-500 max-w-xl md:text-right">
    Explore a blend of adventure, rich culture, and breathtaking landscapes across our diverse destinations, where every journey promises unforgettable memories.
  </p>
</div>



<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

  <div className="w-full h-[648px] rounded-2xl overflow-hidden relative">
    <img
      src="/images/destination1.jpg"
      alt="Comprehensive Travel Support"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-5 left-5 text-white">
      <h3 className="text-lg font-semibold">Comprehensive Travel Support</h3>
      <p className="text-sm">
        24/7 customer service to assist you before, during, and after your trip
      </p>
    </div>
  </div>


  <div className="flex flex-col justify-between h-[649px] gap-5">
    <div className="h-[317px] rounded-2xl overflow-hidden relative">
      <img
        src="/images/destination2.jpg"
        alt="Expert Travel Advice"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-5 left-5 text-white">
        <h3 className="text-lg font-semibold">Expert Travel Advice</h3>
        <p className="text-sm">Tips and guides to enhance your travel experience</p>
      </div>
    </div>
    <div className="h-[317px] rounded-2xl overflow-hidden relative">
      <img
        src="/images/destination3.jpg"
        alt="Diverse Destinations"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-5 left-5 text-white">
        <h3 className="text-lg font-semibold">Diverse Destinations</h3>
        <p className="text-sm">
          Access to a wide range of domestic and international locations
        </p>
      </div>
    </div>
  </div>
</div>

</section>

<TravelPackages/>
<FAQSection/>
<Testimonials/>
    </div>
  )
}

export default Home