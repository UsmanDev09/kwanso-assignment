import { useState, useEffect, ChangeEvent, useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { ThemeProvider } from "./context/ThemeContext"

import ViewProfiles from "./components/Profiles"
import ViewProfile from "./components/Profile"
import LandingPage from "./components/LandingPage"

import Navbar from "./components/Navbar"

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const htmlRef = useRef(document.querySelector('html'));

  const darkTheme = () => {
    setThemeMode('dark');
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  const onChangeMode = (event: ChangeEvent<HTMLInputElement>) => {
    const darkModeStatus = event.currentTarget.checked;

    if(darkModeStatus) {
      darkTheme()
    } else {
      lightTheme()
    }
  }

  useEffect(() => {
    const htmlElement = htmlRef.current;

    if(htmlElement) {
      htmlElement.classList.remove('dark', 'light');
      htmlElement.classList.add(themeMode);
    }
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <ToastContainer />
        
      <Router>
        <div className="dark:bg-gray-700 h-screen  flex flex-col justify-center items-center">
          <Navbar onChangeMode={onChangeMode} themeMode={themeMode} />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/profiles" element={<ViewProfiles />} />
              <Route path="/profiles/:id" element={<ViewProfile />} />
            </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
