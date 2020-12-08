import React from 'react';
import Home from './component/Index'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div >
       <BrowserRouter>
          <Home />
       </BrowserRouter> 
    </div>
  );
}

export default App;
