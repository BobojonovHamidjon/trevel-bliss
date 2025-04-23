import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const testimonials = [
    {
      name: t("testimonials.name"),
      text: t("testimonials.text"),
      image: "/images/Alex.png",
    },
    {
      name:t("testimonials.name2"),
      text: t("testimonials.text2"),
      image: "/images/Denise.png",
    },
    {
      name: t("testimonials.name3"),
      text: t("testimonials.text3"),
      image: "/images/Judith.png",
    },
    {
      name: t("testimonials.name4"),
      text: t("testimonials.text4"),
      image: "/images/Michahil.png",
    },
    {
      name:t("testimonials.name5"),
      text: t("testimonials.text5"),
      image: "/images/Liam.png",
    },
    {
      name: t("testimonials.name6"),
      text: t("testimonials.text6"),
      image: "/images/Fram.png",
    },
    {
      name: t("testimonials.name7"),
      text: t("testimonials.text7"),
      image: "/images/Fram.png",
    },
    {
      name: t("testimonials.name8"),
      text: t("testimonials.text8"),
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
        <h2 className="text-3xl font-bold mb-2">{t("testimonials.title")}</h2>
        <p className="text-gray-600 max-w-2xl">
        {t("testimonials.subtitle")}
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
