// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Hero from './Pages/Hero/Hero'
// import Navbar from './components/Navbar/Navbar'
// import Services from './Pages/Service_/Services'
// import Welcome from './Pages/Welcome'
// // import Destinations from './Pages/Destinations/Destinations'
// import Benefits from './components/Benefits/Benefits'
// import AboutLanding from './Pages/LandingAbout/About'
// import Footer from './components/Footer/Footer'
// import GetInTouch from './components/GetInTouch/GetInTouch'

// function App() {

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Hero />} />
//       </Routes>
//       <AboutLanding />
//       <Services />
//       <GetInTouch />
//       <Benefits />
//       {/* <Destinations /> */}
//       <Footer />
//       {/* <Welcome /> */}
//     </>
//   )
// }

// export default App

// App.jsx
import React, { useState } from 'react';

function App() {
  const predefinedNumbers = [802,384,'000'];  // Predefined numbers
  const [currentNumber, setCurrentNumber] = useState(null);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (index < predefinedNumbers.length) {
      let i = 0;
      const interval = setInterval(() => {
        setCurrentNumber(Math.floor(Math.random() * 899) + 100);  // Simulate randomness
        i += 1;
        if (i === 16) {  // Show for a short time and stop
          clearInterval(interval);
          setCurrentNumber(predefinedNumbers[index]);
          setIndex(index + 1);
        }
      }, 80);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center -translate-y-14">
        <button 
          onClick={handleClick} 
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate !!
        </button>
      </div>
      <div className="mt-8 -translate-y-14">
        <h2 className="text-9xl font-extrabold text-white">{currentNumber !== null ? currentNumber : '000'}</h2>
      </div>
    </div>
  );
}

export default App;
