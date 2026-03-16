import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const { login, authLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      // Navigate based on simulated role
      if (user.role === 'doctor') {
        navigate('/doctor/dashboard');
      } else {
        navigate('/patient/dashboard');
      }
    } catch (err) {
      // Error is handled by context and displayed in UI below
    }
  };

  return (
    <AuthLayout
      title="Your health journey starts here."
      subtitle="Access your medical records, book appointments with top specialists, and manage your prescriptions in one secure place."
      bgImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Xh8qT6Gt1Xi52wYwGJl1aceiNmNujeIim_BLDwR6FQhDK3-NdBAR76GPfOIHJWHzDImgmMy_pzOdQmtrbr_u2aLv_p46GzzgW4QyxpkfrGhuUdBzciOGgtnufqJOp9dJj0A3NkWG2VdIjm3GNIFAqkzHzVXOIjzkuHAMgYFeB6rGWvymRMUqRSpEE3qtVXZ9djMywA9TAhps6tZ3PLvpddtWTMJ_ZPtvFF2psCg8DQ1sXWd1mcPbjawYL8O3gMGCGciyu4tt3tw"
      bgImageAlt="Modern medical professional using a digital tablet in a clean clinic"
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">Sign In</h2>
        <p className="text-slate-500 dark:text-slate-400">Welcome back! Please enter your details.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-100 font-medium">
            {error}
          </div>
        )}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" 
              placeholder="name@example.com" 
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
            <Link to="/forgot-password" className="text-sm font-bold text-primary hover:underline">Forgot Password?</Link>
          </div>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
            <input 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" 
              placeholder="••••••••" 
              required
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-1">
          <input 
            type="checkbox" 
            id="remember" 
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800" 
          />
          <label htmlFor="remember" className="text-sm text-slate-600 dark:text-slate-400">Remember me for 30 days</label>
        </div>

        <button 
          type="submit" 
          disabled={authLoading}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{authLoading ? 'Signing In...' : 'Sign In'}</span>
          {!authLoading && <span className="material-symbols-outlined text-xl">login</span>}
        </button>
      </form>

      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
        <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">Or continue with</span>
        <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXZHa6NllHUT9mJaFxgmGrd1iNLAyAuMoYjmFNVZifqyKm7tpBIMVbp03F7kEHAAiqXbDoTDrqEF6p6TbGtCCRH0ALqRr_X2UmOfWT2YBPoxMsn_f5Jtem7U2qae-HOmVhUfBVhYsUcXerJwR-P7z9AzYVTtJP4pSlS9xR53NWht7ok6RszaXiITTan2vMlO7uWHdQDa-S5iB0A_-EkzKjF0tfFmFz0GXVThJJy2sURc-XksFcEvB3zzTtv4unYqwlUIbtbnwemHE" alt="Google Logo" className="w-5 h-5" />
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Google</span>
        </button>
        <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq6OVKNzvCBSwYWgWZH3Hg4lcBaAjyaGantcYP-iW61uROcaSpFJukF69C4iiw34C-bCIWM02-Ap03h040Ru0DnRembVpQCQ3E5X9DMYz4o-HcD4mZgLQ6ShvW6k5gIMueI7hWGbLcQN2xaeyK39TNpRwxpou6MdrcP4OO24GmMH2uXAJKZemUGVqJYgmTORVVJElrF9Ugexmz1Sr4Q9tbvlwx-W3pHfWqZvuc8CWER1NqcopMMCNJOSA4w9Y7r1031nF2sVcbCbs" alt="Apple Logo" className="w-5 h-5 dark:invert" />
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Apple</span>
        </button>
      </div>

      <p className="text-center text-slate-600 dark:text-slate-400 text-sm pt-4">
        Don't have an account?{' '}
        <Link to="/signup" className="text-primary font-bold hover:underline">Create an account</Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
