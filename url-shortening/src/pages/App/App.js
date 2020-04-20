import React from 'react';
import '../../styles/base.css';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
