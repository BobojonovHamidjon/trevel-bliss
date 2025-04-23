import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import i18n from '../i18n'; 
import { useTranslation } from 'react-i18next';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(); 
  const [language, setLanguage] = useState(i18n.language || "uz");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage); 
  };

  useEffect(() => {
    const currentLng = localStorage.getItem("i18nextLng");
    if (currentLng && currentLng !== language) {
      setLanguage(currentLng);
      i18n.changeLanguage(currentLng);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerBg = isHome ? 'bg-[#112426]' : 'bg-white';
  const textColor = isHome ? 'text-white' : 'text-black';
  const linkHighlight = isHome ? 'border-yellow-500' : 'border-gray-800';

  return (
    <header className={`fixed top-0 left-0 w-full ${headerBg} shadow-md py-4 transition-colors duration-300 z-50`}>
      <div className="container mx-auto flex items-center justify-between px-4">
     
        <NavLink to="/" className={`text-2xl font-bold ${textColor}`}>
          Waymo
        </NavLink>

        <nav className="hidden md:flex space-x-6">
          <NavLink to="/destination" className={({ isActive }) => `${textColor} ${isActive ? `border-b-2 ${linkHighlight} pb-1` : ''}`}>
           {t('header.Manzil')}
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `${textColor} ${isActive ? `border-b-2 ${linkHighlight} pb-1` : ''}`}>
          {t('header.Galereya')}
          </NavLink>
          <NavLink to="/trevel" className={({ isActive }) => `${textColor} ${isActive ? `border-b-2 ${linkHighlight} pb-1` : ''}`}>
            {t('header.Sayohat paketlari')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${textColor} ${isActive ? `border-b-2 ${linkHighlight} pb-1` : ''}`}>
            {t('header.Aloqa')}
          </NavLink>
        </nav>

        <div className="ml-6">
          <select
            name="lang"
            onChange={handleLanguageChange}
            value={language}
            className="text-xl font-semibold text-black border py-[0.2rem] px-2 bg-white rounded-lg cursor-pointer"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="eng">ENG</option>
          </select>
        </div>
      
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className={`${textColor} text-3xl focus:outline-none`}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-black">
            <NavLink to="/destination" onClick={toggleMenu}>{t('header.Manzil')}</NavLink>
            <NavLink to="/gallery" onClick={toggleMenu}>{t('header.Galereya')}</NavLink>
            <NavLink to="/trevel" onClick={toggleMenu}>{t('header.Sayohat paketlari')}</NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>{t('header.Aloqa')}</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
