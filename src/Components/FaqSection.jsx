import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";


const allFaqs = [
  {
    question: "faq.question",
    answer: "faq.answer",
  },
  {
    question: "faq.question2",
    answer: "faq.answer2",
  },
  {
    question: "faq.question3",
    answer: "faq.answer3",
  },
  {
    question: "faq.question4",
    answer: "faq.answer4",
  },
  {
    question: "faq.question5",
    answer: "faq.answer5",
  },
  {
    question: "faq.question6",
    answer: "faq.answer6",
  },
  {
    question: "faq.question7",
    answer: "faq.answer7",
  },
  {
    question: "faq.question8",
    answer: "faq.answer8",
  },
];


const FAQColumn = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const { t } = useTranslation(); 

  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-xl p-4 shadow-sm transition-all">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-medium text-lg">{t(faq.question)}</h3>  {/* `t`ni ishlatish */}
            <span className="text-xl">{openIndex === index ? "✕" : "+"}</span>
          </div>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight: openIndex === index ? contentRefs.current[index]?.scrollHeight + "px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <p className="text-gray-600 mt-2 text-sm">{t(faq.answer)}</p>  {/* `t`ni ishlatish */}
          </div>
        </div>
      ))}
    </div>
  );
};


const FAQSection = () => {
  const { t } = useTranslation(); 
  const faqsLeft = allFaqs.slice(0, allFaqs.length / 2);
  const faqsRight = allFaqs.slice(allFaqs.length / 2);

  return (
    <section className="px-4 md:px-20 py-20 bg-white">
      <div className="md:flex md:justify-between mb-12 gap-10">
        <h2 className="text-3xl md:text-5xl font-semibold md:w-1/2">{t("faq.title")}</h2>
        <p className="text-gray-500 md:w-1/2 mt-4 md:mt-0">{t("faq.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <FAQColumn faqs={faqsLeft} />
        <FAQColumn faqs={faqsRight} />
      </div>
    </section>
  );
};

export default FAQSection;
