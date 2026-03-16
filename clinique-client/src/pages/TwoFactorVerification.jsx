import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TwoFactorVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length === 6) {
      alert(`Verifying code: ${code}`);
    } else {
      alert('Please enter a 6-digit code');
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center font-display text-slate-900 dark:text-slate-100 p-4">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white dark:bg-slate-900 shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          {/* Header/Icon Section */}
          <div className="pt-10 pb-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">shield_lock</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Verify Your Identity</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm text-center px-8">
              We've sent a 6-digit code to your registered email address <span className="font-medium text-slate-700 dark:text-slate-200">m***@healthsync.com</span>
            </p>
          </div>

          {/* OTP Input Section */}
          <div className="px-8 py-4">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2 mb-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-12 h-14 text-center text-xl font-bold border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-primary focus:ring-0 bg-transparent outline-none transition-all"
                    maxLength="1"
                    placeholder="·"
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    style={{ WebkitAppearance: 'none', margin: 0 }}
                  />
                ))}
              </div>
              <button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors duration-200 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                type="submit"
              >
                Verify
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </form>

            {/* Resend & Back Actions */}
            <div className="mt-8 flex flex-col items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
              <div className="text-sm">
                <span className="text-slate-500 dark:text-slate-400">Didn't receive the code?</span>
                <button className="text-primary font-semibold hover:underline ml-1">Resend Code</button>
              </div>
              <Link to="/login" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors bg-transparent border-none cursor-pointer">
                <span className="material-symbols-outlined text-sm">keyboard_backspace</span>
                Back to Login
              </Link>
            </div>
          </div>

          {/* Trust Footer */}
          <div className="bg-slate-50 dark:bg-slate-800/50 py-4 px-8 flex justify-center items-center gap-4">
            <div className="flex items-center gap-1.5 opacity-70">
              <span className="material-symbols-outlined text-sm text-slate-600 dark:text-slate-400">lock</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Secure HIPAA Compliant</span>
            </div>
            <div className="w-px h-3 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center gap-1.5 opacity-70">
              <span className="material-symbols-outlined text-sm text-slate-600 dark:text-slate-400">verified_user</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">256-bit AES Encrypted</span>
            </div>
          </div>
        </div>

        {/* App Branding */}
        <div className="mt-8 flex justify-center items-center gap-2 opacity-50">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
          <span className="font-bold text-lg tracking-tight">HealthSync</span>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorVerification;
