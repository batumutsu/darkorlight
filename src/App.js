import React from "react"
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
function App() {
  const [darker, setDarker] = React.useState("dark")
    
    function toggleDarkMode() {
        setDarker(prevDarker => !prevDarker)
    }
    
    return (
        <div className="container">
            <Navbar darkMode={darker} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darker}/>
        </div>
    )
}

export default App;
