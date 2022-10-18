// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import store from "./storeConfig";
import { Provider } from "react-redux";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>  
  </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
