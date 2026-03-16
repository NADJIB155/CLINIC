import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt:', formData);
    // TODO: Implement registration
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        {/* Navigation Header */}
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl">medical_services</span>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">HealthSync</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">shield</span>
              HIPAA Compliant
            </div>
            <button className="flex items-center justify-center rounded-xl p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-[520px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 md:p-12">
            
            {/* Form Header */}
            <div className="mb-10">
              <h1 className="text-3xl font-black tracking-tight mb-2">Create Account</h1>
              <p className="text-slate-500 dark:text-slate-400">Join our secure patient portal to manage your health records and appointments.</p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                  <input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white placeholder:text-slate-400 transition-all" 
                    placeholder="John Doe" 
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white placeholder:text-slate-400 transition-all" 
                    placeholder="john@example.com" 
                    required
                  />
                </div>
              </div>

              {/* Phone & DOB Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">call</span>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white placeholder:text-slate-400 transition-all" 
                      placeholder="(555) 000-0000" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Date of Birth</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">calendar_today</span>
                    <input 
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white transition-all" 
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white placeholder:text-slate-400 transition-all" 
                    placeholder="••••••••" 
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-1 ml-1">Must be at least 8 characters with a symbol.</p>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 px-1">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" 
                  required
                />
                <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400 leading-tight">
                  I agree to the <Link to="/terms" className="text-primary font-medium hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary font-medium hover:underline">Privacy Policy</Link> regarding my medical data.
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 active:scale-[0.98]">
                Sign Up
              </button>

              {/* Social Login Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white dark:bg-slate-900 px-4 text-slate-500">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button" 
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-white dark:bg-slate-800 px-3 py-3 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-semibold shadow-sm"
                  onClick={() => console.log('Signup with Google')}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  <span>Google</span>
                </button>
                <button 
                  type="button" 
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-white dark:bg-slate-800 px-3 py-3 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-semibold shadow-sm"
                  onClick={() => console.log('Signup with Apple')}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.004-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.702z"></path>
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

              {/* Footer Links */}
              <div className="text-center mt-8">
                <p className="text-slate-600 dark:text-slate-400">
                  Already have an account? 
                  <Link to="/login" className="text-primary font-bold hover:underline ml-1">Log in instead</Link>
                </p>
              </div>
            </form>
          </div>
        </main>

        {/* Security Footer Badge */}
        <footer className="py-8 px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <span>End-to-end encrypted</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-slate-300 dark:bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">lock</span>
              <span>Secure Server Protocol</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-slate-300 dark:bg-slate-700"></div>
            <p>© {new Date().getFullYear()} HealthSync Medical Systems</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
