import React, { useState, useRef } from "react";

const allFaqs = [
  {
    question: "How do I book a trip with your travel service?",
    answer:
      "You can book a trip through our website, by calling our customer service hotline, or by visiting one of our offices.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, PayPal, and bank transfers. More options may be available depending on your region.",
  },
  {
    question: "How do I know if my booking is confirmed?",
    answer:
      "You'll receive an email confirmation with all the booking details once your payment is processed.",
  },
  {
    question: "Do you offer group travel packages?",
    answer:
      "Yes, we offer customizable group travel options for families, friends, and corporate trips.",
  },
  {
    question: "What destinations do you offer?",
    answer:
      "We offer a variety of global destinations including Iceland, Japan, Italy, and more.",
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, travel insurance can be added to any package during checkout.",
  },
  {
    question: "What is included in the travel packages?",
    answer:
      "Our packages typically include accommodation, transport, guided tours, and selected meals.",
  },
  {
    question: "How do I know which package is right for me?",
    answer:
      "Our travel advisors can help you choose based on your interests, budget, and travel style.",
  },
];


const faqsLeft = allFaqs.slice(0, allFaqs.length / 2);
const faqsRight = allFaqs.slice(allFaqs.length / 2);

const FAQColumn = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-xl p-4 shadow-sm transition-all"
        >
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-medium text-lg">{faq.question}</h3>
            <span className="text-xl">{openIndex === index ? "✕" : "+"}</span>
          </div>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight:
                openIndex === index
                  ? contentRefs.current[index]?.scrollHeight + "px"
                  : "0px",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="px-4 md:px-20 py-20 bg-white">
      <div className="md:flex md:justify-between mb-12 gap-10">
        <h2 className="text-3xl md:text-5xl font-semibold md:w-1/2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 md:w-1/2 mt-4 md:mt-0">
          Explore our comprehensive FAQ section, designed to answer all your queries and help you plan a seamless and unforgettable journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <FAQColumn faqs={faqsLeft} />
        <FAQColumn faqs={faqsRight} />
      </div>
    </section>
  );
};

export default FAQSection;
