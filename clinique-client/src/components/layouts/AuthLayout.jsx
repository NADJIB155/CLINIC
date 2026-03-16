import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle, bgImageUrl, bgImageAlt }) => {
  return (
    <div className="flex w-full min-h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Left Side: Visual Content */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary/10 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          role="img"
          aria-label={bgImageAlt}
          style={{ backgroundImage: `url("${bgImageUrl}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-background-dark/80"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-between p-16 w-full text-white">
          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary text-3xl font-bold">medical_services</span>
            </div>
            <span className="text-2xl font-black tracking-tight">MedCare</span>
          </div>
          
          <div className="max-w-md">
            <h1 className="text-5xl font-black leading-tight mb-6">{title}</h1>
            <p className="text-lg opacity-90 font-light leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">24/7</span>
              <span className="text-xs uppercase tracking-widest opacity-70">Care Access</span>
            </div>
            <div className="w-px h-10 bg-white/20 self-center"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">100%</span>
              <span className="text-xs uppercase tracking-widest opacity-70">Secure Data</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 md:p-20 bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-[440px] space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <span className="material-symbols-outlined text-primary text-4xl font-bold">medical_services</span>
            <span className="text-2xl font-black tracking-tight dark:text-white">MedCare</span>
          </div>
          
          {children}
          
          <footer className="pt-12 text-center text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} MedCare Health Systems. All rights reserved. <br/>
            <div className="mt-2 space-x-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
