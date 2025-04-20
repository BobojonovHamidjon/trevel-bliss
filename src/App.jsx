import React, { useEffect, useRef }  from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet, useLocation } from 'react-router-dom';


function App() {
  const { pathname } = useLocation();
  const headerRef = useRef(null); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const headerHeight = useRef(0);

  useEffect(() => {
    if (headerRef.current) {
      headerHeight.current = headerRef.current.offsetHeight; 
    }
  }, []);
 
  return (
    <>
    <Header ref={headerRef} />
    <main
        className="flex-grow"
        style={{
          minHeight: "100vh",
          paddingTop: `${headerHeight.current}px`, 
        }}
      >
    <Outlet/>
      </main>
    <Footer/>
    </>
  )
}

export default App
