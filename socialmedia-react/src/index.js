import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import App from './pages/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    <App/>
  </React.StrictMode>
);

reportWebVitals();
