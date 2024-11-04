import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import LayoutBoxes from "./LayoutBoxes";
import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Map from "./pages/Map";
import Employees from "./pages/Employees";
import Gallery from './pages/Gallery';
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  /*Links and paths to all of the different areas of the site*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
        </Route>

        <Route path="/" element={(<LayoutBoxes />)}>
          <Route path="about" element={(<About />)} />
          <Route path="contact" element={(<Contact />)} />
          <Route path="employees" element={(<Employees />)} />
          <Route path="training" element={(<Training />)} />
          <Route path="gallery" element={(<Gallery />)} />
          <Route path="map" element={(<Map />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
 <App />
);