import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaYoutube, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="relative text-white">
      
      <div className="absolute inset-0 bg-black/70 z-0" />

      
      <div
        className="relative z-10 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/rectangle.png')` }}
      >
        
        <div className="text-center px-4 pt-16 md:pt-24">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
           {t("footer.title")} <br /> {t("footer.subtitle")}
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-200">
            {t("footer.text")}
          </p>
          <button className="mt-6 mb-5 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
            {t("footer.Button")}
          </button>

        </div>

      
        <div className="container border-t border-gray-500 mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Waymo</h3>
            <p className="text-white">
              {t("footer.text2")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("footer.Navigations")}</h3>
            <ul className="space-y-2 text-white">
              <li><Link to="/destination" className="hover:text-gray-300"> {t('header.Manzil')}</Link></li>
              <li><Link to="/gallery" className="hover:text-gray-300">{t('header.Galereya')}</Link></li>
              <li><Link to="/trevel" className="hover:text-gray-300">  {t('header.Sayohat paketlari')}</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">{t('header.Aloqa')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("footer.Social")}</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-gray-300 flex items-center gap-2"><FaInstagram /> Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300 flex items-center gap-2"><FaTimes /> X</a></li>
              <li><a href="#" className="hover:text-gray-300 flex items-center gap-2"><FaYoutube /> Youtube</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('header.Aloqa')}</h3>
            <ul className="space-y-2 text-white">
              <li>Waymotravel@gmail.com</li>
              <li>(704)-223-0126</li>
              <li>{t("footer.999")}<br />{t("footer.connect")}</li>
            </ul>
          </div>
        </div>

        <div className="text-center my-10">
          <h1 className="text-white text-7xl md:text-9xl font-bold tracking-widest">WAYMO</h1>
        </div>

       
        <div className="border-t border-gray-500 py-6 text-xs text-white">
          <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-4 gap-2">
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300">{t("footer.policy")}</a>
              <a href="#" className="hover:text-gray-300">{t("footer.terms")}</a>
            </div>
            <p>{t("footer.all")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
