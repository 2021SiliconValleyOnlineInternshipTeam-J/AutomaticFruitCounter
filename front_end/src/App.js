import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; //React-Router import
// import pages
import Home from './pages/Home'
import SelectUploadPage from './pages/SelectUploadPage'
import ResultPage from './pages/ResultPage'
import ImageUploadPage from './pages/ImageUploadPage'
import WebCamPage from './pages/WebCamPage'
import EndPage from './pages/EndPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/selectupload' component={SelectUploadPage} />
        <Route path='/imageupload' component={ImageUploadPage} />
        <Route path='/webcam' component={WebCamPage} />
        <Route path='/result' component={ResultPage} />
        <Route path='/end' component={EndPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
