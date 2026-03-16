import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SecurityActivityLog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('All Time');
  const [activityType, setActivityType] = useState('All Activities');

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 px-4 md:px-10 py-3">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">health_and_safety</span>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-tight">HealthSync</h2>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/dashboard">Dashboard</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/patients">Patients</Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" to="/settings">Settings</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <span className="material-symbols-outlined">search</span>
              </button>
              <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
              </button>
              <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-slate-100 dark:border-slate-800" data-alt="Medical professional profile picture" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDe_i_lYlEcFcv0hlRu6gzKrkLRvUcVUe3lyJvTl49kD0j12cnAmC_mUQO41xVtzUs6Vqh1W-HSVMfbmM83ZHxYHkqS8xJn4ouKUfooOuaPq4X8aRsH9SwAkFE8X5971TmRepEtUuXhJlvQyHmzN4JjXV6yK2naSf7SOIieFtDTFoh4Pz1XA6Yy7jfzQAjtDqEG85zzSLxZdjhZrEGw2fvFr03swP6akk7qNyziDejfZwJ4Rtb_1SxqZmyI-UrES0qmbFfOladsfzc')" }}></div>
                <div className="hidden lg:block">
                  <p className="text-xs font-bold leading-none">Dr. Sarah Smith</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Admin Account</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Security Activity Log</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              Review and manage security-related events for your account. Protecting patient data starts with monitoring access and account modifications.
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-white dark:bg-background-dark/50 rounded-xl border border-slate-200 dark:border-slate-800 p-4 mb-6 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  <input 
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-0 text-sm transition-all outline-none" 
                    placeholder="Search by activity, IP address, or device..." 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative group">
                  <select 
                    className="appearance-none flex items-center gap-2 pl-4 pr-10 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors border-none cursor-pointer outline-none"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                  >
                    <option value="All Time">All Time</option>
                    <option value="Last 24 Hours">Last 24 Hours</option>
                    <option value="Last 7 Days">Last 7 Days</option>
                    <option value="Last 30 Days">Last 30 Days</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                </div>
                <div className="relative group">
                  <select 
                    className="appearance-none flex items-center gap-2 pl-4 pr-10 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors border-none cursor-pointer outline-none"
                    value={activityType}
                    onChange={(e) => setActivityType(e.target.value)}
                  >
                    <option value="All Activities">All Activities</option>
                    <option value="Login">Login</option>
                    <option value="Password Change">Password Change</option>
                    <option value="Failed Attempt">Failed Attempt</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">expand_more</span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90 transition-opacity ml-auto lg:ml-0">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Activity Table */}
          <div className="bg-white dark:bg-background-dark/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Activity &amp; Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date &amp; Time</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Location / IP</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Device Details</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {/* Entry 1 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Successful Login</span>
                        <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 w-fit">SUCCESS</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-300">Oct 24, 2023</span>
                        <span className="text-xs text-slate-500">09:15:42 AM</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-300">San Francisco, CA</span>
                        <span className="text-xs text-slate-500">192.168.1.1</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">desktop_windows</span>
                        <div className="flex flex-col">
                          <span className="text-sm text-slate-700 dark:text-slate-300">Chrome / macOS</span>
                          <span className="text-xs text-slate-500">Version 118.0.0</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-primary hover:underline text-xs font-bold">Report</button>
                    </td>
                  </tr>
                  {/* Entry 2 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Failed Attempt</span>
                        <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 w-fit">FAILED</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-300">Oct 23, 2023</span>
                        <span className="text-xs text-slate-500">11:02:15 PM</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-300">London, UK</span>
                        <span className="text-xs text-slate-500">45.22.112.5</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">public</span>
                        <div className="flex flex-col">
                          <span className="text-sm text-slate-700 dark:text-slate-300">Firefox / Windows</span>
                          <span className="text-xs text-slate-500">Unknown Version</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-primary hover:underline text-xs font-bold">Report Activity</button>
                    </td>
                  </tr>
                  {/* Entry 3 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">Password Changed</span>
                        <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary w-fit">MODIFIED</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-300">Oct 22, 2023</span>
                        <span className="text-xs text-slate-500">02:30:00 PM</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-300">San Francisco, CA</span>
                        <span className="text-xs text-slate-500">192.168.1.1</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">smartphone</span>
                        <div className="flex flex-col">
                          <span className="text-sm text-slate-700 dark:text-slate-300">Safari / iPhone</span>
                          <span className="text-xs text-slate-500">iOS 17.0.1</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right space-x-4">
                      <button className="text-slate-400 hover:text-slate-600 text-xs font-semibold mr-4">Recognize?</button>
                      <button className="text-primary hover:underline text-xs font-bold">Report</button>
                    </td>
                  </tr>
                  {/* Entry 4 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">New Device Recognized</span>
                        <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 w-fit">WARNING</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-300">Oct 15, 2023</span>
                        <span className="text-xs text-slate-500">05:20:10 PM</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-700 dark:text-slate-300">New York, NY</span>
                        <span className="text-xs text-slate-500">10.0.0.1</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">tablet_mac</span>
                        <div className="flex flex-col">
                          <span className="text-sm text-slate-700 dark:text-slate-300">HealthSync App / iPad</span>
                          <span className="text-xs text-slate-500">v2.4.1</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right space-x-4">
                      <button className="text-slate-400 hover:text-slate-600 text-xs font-semibold mr-4">Recognize?</button>
                      <button className="text-primary hover:underline text-xs font-bold">Report</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <p className="text-xs text-slate-500">Showing 4 of 128 recent activities</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">Load More</button>
              </div>
            </div>
          </div>

          {/* Warning/Alert Section */}
          <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-start gap-4">
            <span className="material-symbols-outlined text-primary">security</span>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Don't recognize an activity?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                If you see a login or modification you don't remember, please secure your account immediately by changing your password and enabling 2FA.
                <Link className="text-primary font-bold ml-1 hover:underline" to="/settings">Security Settings →</Link>
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-background-dark/80 border-t border-slate-200 dark:border-slate-800 mt-12 py-12">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-sm">health_and_safety</span>
                  </div>
                  <span className="font-bold text-lg">HealthSync</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                  HIPAA-compliant medical management platform for modern clinics. Securely manage patients, records, and billing in one unified interface.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-slate-400">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><Link className="hover:text-primary transition-colors" to="#">Privacy Policy</Link></li>
                  <li><Link className="hover:text-primary transition-colors" to="#">Terms of Service</Link></li>
                  <li><Link className="hover:text-primary transition-colors" to="#">Security Overview</Link></li>
                  <li><Link className="hover:text-primary transition-colors" to="#">Cookie Policy</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-slate-400">Support</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><Link className="hover:text-primary transition-colors" to="#">Help Center</Link></li>
                  <li><Link className="hover:text-primary transition-colors" to="#">Contact Support</Link></li>
                  <li><Link className="hover:text-primary transition-colors" to="#">Status Page</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-400">© 2023 HealthSync Inc. All rights reserved.</p>
              <div className="text-[10px] text-slate-400 text-center md:text-right max-w-md italic">
                Disclaimer: This platform is for healthcare professionals. All patient data is strictly confidential and protected by HIPAA regulations.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SecurityActivityLog;
