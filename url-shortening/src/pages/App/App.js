import React from 'react';
import '../../styles/base.css';

import Header from '../../components/Header'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;
