import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from './store';
import reportWebVitals from './reportWebVitals';
import {AuthContextProvider} from "./contexts/AuthContext"
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapProvider } from "./hooks/maphook";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
       <Provider store={store}>
          <MapProvider>
   <App />
   </MapProvider>
       </Provider>
       </AuthContextProvider>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
