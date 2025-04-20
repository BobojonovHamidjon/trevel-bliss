import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Buckmaster",
      text: "Traveling with this service was a game-changer for me. The customized itinerary perfectly matched my interests, and I was able to explore hidden gems.",
      image: "/images/Alex.png",
    },
    {
      name: "Dennis Callis",
      text: "The flexibility and range of options offered by this service were impressive. I was able to customize my trip to fit my schedule perfectly.",
      image: "/images/Denise.png",
    },
    {
      name: "Judith Rodriguez",
      text: "The best part about booking with this service was the ease and convenience. From start to finish, everything was seamless.",
      image: "/images/Judith.png",
    },
    {
      name: "Michael Harris",
      text: "What I loved the most was how responsive the team was. I had some last-minute changes, and they handled everything quickly and professionally.",
      image: "/images/Michahil.png",
    },
    {
      name: "Liam Johnson",
      text: "Booking a group trip was never this easy! The service tailored an itinerary that catered to everyone in our group. We made memories that will last a lifetime!",
      image: "/images/Liam.png",
    },
    {
      name: "Mia Carter",
      text: "The service made planning my trip effortless. The personalized suggestions were spot-on, and I felt like everything was taken care of.",
      image: "/images/Fram.png",
    },
    {
      name: "Mia Carter",
      text: "The service made planning my trip effortless. The personalized suggestions were spot-on, and I felt like everything was taken care of.",
      image: "/images/Fram.png",
    },
    {
      name: "Mia Carter",
      text: "The service made planning my trip effortless. The personalized suggestions were spot-on, and I felt like everything was taken care of.",
      image: "/images/Fram.png",
    },
  ];

  const topTestimonials = testimonials.slice(0, 4);
  const bottomTestimonials = testimonials.slice(4, 8);

  const Card = ({ item }) => (
    <div className="min-w-[280px] max-w-sm border rounded-lg p-4 shadow-sm mx-2 bg-white">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h3 className="font-semibold">{item.name}</h3>
      </div>
      <p className="text-sm text-gray-700">{item.text}</p>
    </div>
  );

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="md:flex md:justify-between md:items-start mb-12 gap-10">
        <h2 className="text-3xl font-bold mb-2">What Our Customers Are Saying</h2>
        <p className="text-gray-600 max-w-2xl">
          Our customers’ experiences help us continually improve our services.
          Here’s what some of them have to say about their travels with us.
        </p>
      </div>

     
      <Marquee direction="left" speed={40}  className="mb-8">
        {topTestimonials.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Marquee>

      
      <Marquee direction="right" speed={40} >
        {bottomTestimonials.map((item, index) => (
          <Card item={item} key={index + 4} />
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Testimonials;
