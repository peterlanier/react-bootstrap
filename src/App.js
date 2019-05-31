import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
