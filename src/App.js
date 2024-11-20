import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoPlayer from './componentsapp/VideoPlayer';
import Header from './componentsapp/Header';
import Sections from "./componentsapp/section";
import Menu from "./componentsapp/menu";
import Contact from "./componentsapp/contact";
import Footer from "./componentsapp/footer";
import Prices from "./componentsapp/prices";

// Tuodaan uusi sivu
import BuildPage from './componentsbuild/BuildPage';

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={
                    <>
                        <Menu/>
                        <div id="esivu">
                            <VideoPlayer/>
                        </div>
                        <div id="lisatietoja">
                            <Sections/>
                        </div>
                        <div id="yhteystiedot">
                            <Contact/>
                        </div>
                        <Prices/>
                    </>
                }/>
                <Route path="/Build" element={<BuildPage />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;