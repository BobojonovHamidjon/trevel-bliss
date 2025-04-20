import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const BOT_TOKEN = "7881902618:AAFNdckmXTfKa10-fnCW530OQuph6mpWles"; 
  const CHAT_ID = 5327836577; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `
📩 *Yangi murojaat!*
👤 Ism: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📞 Telefon: ${formData.phone}
📝 Xabar: ${formData.message}
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    alert("Xabaringiz muvaffaqiyatli yuborildi!");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
       <div
  className="h-[320px] bg-cover bg-center flex items-center justify-center relative "
  style={{
    backgroundImage: "url('/images/contact.jpg')",
  }}
>
  <h1 className="text-5xl font-bold text-white drop-shadow-xl">
    Contact Us
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

      <div className="min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto  px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="bg-[#0F2C3F] text-white rounded-xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-6 text-sm">Say something to start a live chat!</p>
          <ul className="space-y-4 text-sm">
            <li>📞 +5013 2456 456</li>
            <li>✉️ demo@gmail.com</li>
            <li>📍 132 Dartmouth Street Boston, MA 02156</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" name="firstName" placeholder="First Name" className="border-b p-2 outline-none" required value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" className="border-b p-2 outline-none" required value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="email" name="email" placeholder="Email" className="border-b p-2 outline-none" required value={formData.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number" className="border-b p-2 outline-none" value={formData.phone} onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Write your message..." className="w-full border-b p-2 outline-none resize-none" rows="5" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="bg-[#0F2C3F] text-white px-6 py-3 rounded-md hover:bg-[#14394f] transition">
            Send Message
          </button>
        </form>
      </div>
      </div>
      <div className="bg-white py-16 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Find Us on Map</h2>
    <p className="text-gray-600 mb-10">
      We are located in the heart of the city, easily accessible by public transport and just a few minutes away from major landmarks. Whether you're traveling by car or train, finding us is simple and straightforward. Use the map below to get directions and plan your visit.
    </p>
    <div className="w-full h-[400px] mt-10 rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47963.63930881949!2d69.1921352837292!3d41.311081481409655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4cdebe9aaf5%3A0xd5a9296aaf55675a!2sTashkent!5e0!3m2!1sen!2s!4v1713457909649!5m2!1sen!2s"
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0 w-full h-full"
  ></iframe>
</div>

  </div>
</div>


    </div>
  );
};

export default ContactUs;
