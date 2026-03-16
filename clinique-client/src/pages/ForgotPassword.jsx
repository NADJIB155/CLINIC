import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending reset link to:', email);
    // TODO: Implement password reset logic
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white dark:bg-stone-900 shadow-xl rounded-xl p-8 border border-stone-200 dark:border-stone-800">
          
          {/* Logo & Brand */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">health_and_safety</span>
            </div>
            <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">HealthSync</h1>
          </div>

          {/* Header Text */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">Forgot Password?</h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-stone-400 text-sm">mail</span>
                </div>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@hospital.com" 
                  required 
                  className="block w-full pl-10 pr-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary text-stone-900 dark:text-stone-100 placeholder-stone-400 transition duration-200" 
                />
              </div>
            </div>
            
            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg shadow-lg shadow-primary/20 transition duration-200 flex items-center justify-center gap-2 group border-none cursor-pointer">
              <span>Send Reset Link</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-8 text-center">
            <Link to="/login" className="inline-flex items-center text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition duration-200">
              <span className="material-symbols-outlined text-base mr-1">chevron_left</span>
              Back to Login
            </Link>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-8 flex justify-center gap-6">
          <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 text-xs text-center">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Secure HIPAA Compliant
          </div>
          <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 text-xs text-center">
            <span className="material-symbols-outlined text-sm">support_agent</span>
            24/7 Support
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 p-12 -z-10 opacity-10 dark:opacity-5">
        <span className="material-symbols-outlined text-[12rem] text-primary">medical_services</span>
      </div>
      <div className="fixed bottom-0 left-0 p-12 -z-10 opacity-10 dark:opacity-5">
        <span className="material-symbols-outlined text-[12rem] text-primary">local_hospital</span>
      </div>
    </div>
  );
};

export default ForgotPassword;
