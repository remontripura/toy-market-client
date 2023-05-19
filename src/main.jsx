import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto bg-slate-100'>
    <React.StrictMode>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
  </div>
)
