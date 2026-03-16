import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientLoginSocial = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-0 m-0 font-display">
      <div className="flex w-full min-h-screen overflow-hidden">
        {/* Left Side: Visual Content */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-primary/10 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center" data-alt="Modern medical professional using a digital tablet in a clean clinic" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0Xh8qT6Gt1Xi52wYwGJl1aceiNmNujeIim_BLDwR6FQhDK3-NdBAR76GPfOIHJWHzDImgmMy_pzOdQmtrbr_u2aLv_p46GzzgW4QyxpkfrGhuUdBzciOGgtnufqJOp9dJj0A3NkWG2VdIjm3GNIFAqkzHzVXOIjzkuHAMgYFeB6rGWvymRMUqRSpEE3qtVXZ9djMywA9TAhps6tZ3PLvpddtWTMJ_ZPtvFF2psCg8DQ1sXWd1mcPbjawYL8O3gMGCGciyu4tt3tw")' }}>
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
              <h1 className="text-5xl font-black leading-tight mb-6">Your health journey starts here.</h1>
              <p className="text-lg opacity-90 font-light leading-relaxed">
                Access your medical records, book appointments with top specialists, and manage your prescriptions in one secure place.
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

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 md:p-20 bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-[440px] space-y-8">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
              <span className="material-symbols-outlined text-primary text-4xl font-bold">medical_services</span>
              <span className="text-2xl font-black tracking-tight dark:text-white">MedCare</span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">Sign In</h2>
              <p className="text-slate-500 dark:text-slate-400">Welcome back! Please enter your details.</p>
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
                  <input 
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" 
                    placeholder="name@example.com" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                  <Link className="text-sm font-bold text-primary hover:underline" to="/forgot-password">Forgot Password?</Link>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                  <input 
                    className="w-full pl-12 pr-12 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 outline-none" 
                    placeholder="••••••••" 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 outline-none" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-1">
                <input 
                  className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800" 
                  id="remember" 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember">Remember me for 30 days</label>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2" type="submit">
                <span>Sign In</span>
                <span className="material-symbols-outlined text-xl">login</span>
              </button>
            </form>
            
            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">Or continue with</span>
              <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <img alt="Google Logo" className="w-5 h-5" data-alt="Google colorful logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXZHa6NllHUT9mJaFxgmGrd1iNLAyAuMoYjmFNVZifqyKm7tpBIMVbp03F7kEHAAiqXbDoTDrqEF6p6TbGtCCRH0ALqRr_X2UmOfWT2YBPoxMsn_f5Jtem7U2qae-HOmVhUfBVhYsUcXerJwR-P7z9AzYVTtJP4pSlS9xR53NWht7ok6RszaXiITTan2vMlO7uWHdQDa-S5iB0A_-EkzKjF0tfFmFz0GXVThJJy2sURc-XksFcEvB3zzTtv4unYqwlUIbtbnwemHE" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <img alt="Apple Logo" className="w-5 h-5 dark:invert" data-alt="Apple brand logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq6OVKNzvCBSwYWgWZH3Hg4lcBaAjyaGantcYP-iW61uROcaSpFJukF69C4iiw34C-bCIWM02-Ap03h040Ru0DnRembVpQCQ3E5X9DMYz4o-HcD4mZgLQ6ShvW6k5gIMueI7hWGbLcQN2xaeyK39TNpRwxpou6MdrcP4OO24GmMH2uXAJKZemUGVqJYgmTORVVJElrF9Ugexmz1Sr4Q9tbvlwx-W3pHfWqZvuc8CWER1NqcopMMCNJOSA4w9Y7r1031nF2sVcbCbs" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Apple</span>
              </button>
            </div>
            
            <p className="text-center text-slate-600 dark:text-slate-400 text-sm pt-4">
              Don't have an account? 
              <Link className="text-primary font-bold hover:underline ml-1" to="/signup">Create an account</Link>
            </p>
            
            <footer className="pt-12 text-center text-xs text-slate-400 font-medium">
              © 2024 MedCare Health Systems. All rights reserved. <br/>
              <div className="mt-2 space-x-4">
                <Link className="hover:text-primary transition-colors" to="#">Privacy Policy</Link>
                <Link className="hover:text-primary transition-colors" to="#">Terms of Service</Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLoginSocial;
