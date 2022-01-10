import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Evento } from '../components/Evento/Evento';
import Home from '../components/Home/Home';
import Services from '../components/Services/Services';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/event" element={<Evento />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  )
}
