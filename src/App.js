import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoPlayer from './componentsapp/VideoPlayer';
import Header from './componentsapp/Header';
import Sections from "./componentsapp/section";
import Menu from "./componentsapp/menu";
import Footer from "./componentsapp/footer";
import BuildPage from './componentsbuild/BuildPage';
import TakuuPage from './takuuapp/TakuuPage';

import ContactPage from './componentscontact/ContactPage'; // Importoi yhteystietosivu

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePageContent />} />
                <Route path="/Build" element={<BuildPage />} />
                <Route path="/Contact" element={<ContactPage />} /> {/* Määritä ContactPage-reitti */}
                <Route path="/TakuuPage" element={<TakuuPage />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

const HomePageContent = () => (
    <React.Fragment>
        <Menu/>
        <div id="esivu">
            <VideoPlayer/>
        </div>
        <div id="lisatietoja">
            <Sections/>
        </div>
    </React.Fragment>
);

export default App;