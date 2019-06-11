import React from 'react';
import './App.css';
import Header from './Home/Header';
import Hero from './Home/Hero/Hero';
import Skills from './Home/Skills/Skills';
import Dashboard from './Home/Dashboard/Dashboard';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Dashboard />
      <Skills />
    </div>
  );
}

export default App;
