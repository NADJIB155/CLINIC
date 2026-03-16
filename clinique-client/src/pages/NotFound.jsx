import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-center p-6">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 max-w-lg w-full">
        <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4">404</h1>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Page Not Found</h2>
        <p className="text-slate-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors inline-flex items-center gap-2">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
