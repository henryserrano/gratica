import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Evento } from '../components/Evento/Evento';
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import { NotFound } from '../components/NotFound/NotFound';
import Services from '../components/Services/Services';

export const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
  <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/event" element={<Evento />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
    </>
  );

  }
  
