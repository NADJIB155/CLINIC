import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AnalyticsDashboard = () => {
  const [timeframe, setTimeframe] = useState('Last 30 Days');

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  const handleExport = () => {
    alert(`Exporting Analytics Report for ${timeframe}...`);
  };

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 bg-white dark:bg-background-dark border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen sticky top-0">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 rounded-xl p-2 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">health_metrics</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">HealthSync</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Medical Office Admin</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors" to="/">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors" to="/patients">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors" to="/appointments">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-sm font-medium">Appointments</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/10 text-primary transition-colors" to="/analytics">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm font-semibold">Analytics</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors" to="/billing">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-sm font-medium">Billing</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors" to="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>
        <div className="p-4 mt-auto">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-white py-2.5 px-4 text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all cursor-pointer border-none">
            <span className="material-symbols-outlined text-lg">support_agent</span>
            <span>Support</span>
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Analytics Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-1.5 gap-2 border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-slate-400 text-sm">calendar_month</span>
              <select 
                className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer pr-8 text-slate-700 dark:text-slate-300 outline-none"
                value={timeframe}
                onChange={handleTimeframeChange}
              >
                <option value="Last 30 Days">Last 30 Days</option>
                <option value="Last 7 Days">Last 7 Days</option>
                <option value="This Quarter">This Quarter</option>
                <option value="Year to Date">Year to Date</option>
              </select>
            </div>
            <button onClick={handleExport} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-lg">download</span>
              <span>Export Report</span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <button className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden border-2 border-primary/20">
              <img className="w-full h-full object-cover" alt="User profile avatar of a doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEbcFqp5aGzFvkqE7P7m0TD45LqlbH_j0TS7ikFkZG1a-bEJOUgwOKIvHyHB1816304yGQlQLeb3Z5T4hUJoAbjXZGLnFsL-IsIQpcLGBORfZukfareRgymYcCw8AIA7CwOeiZN4Nx6HToTZORhPn947FVO6bLDfIef3eKdJmFPE_TOaM3LPK1xn95Vf0cRsU1HCfTWYElUQz1uah4aG8N5et-riZ60Wh3hOG3ftYExL2fK0AWJ8nzF1YYA7QU4eBXv4d9wk2EuNA" />
            </div>
          </div>
        </header>
        {/* Dashboard Body */}
        <div className="p-8 space-y-8">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <span className="text-green-500 text-xs font-bold flex items-center bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-xs mr-1">trending_up</span>+12.5%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Patients</p>
              <h3 className="text-2xl font-bold mt-1">1,284</h3>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-emerald-600 dark:text-emerald-400">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <span className="text-green-500 text-xs font-bold flex items-center bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-xs mr-1">trending_up</span>+5.2%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Completed Appts</p>
              <h3 className="text-2xl font-bold mt-1">856</h3>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <span className="text-red-500 text-xs font-bold flex items-center bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-xs mr-1">trending_down</span>-2.1%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg. Consult Time</p>
              <h3 className="text-2xl font-bold mt-1">24 mins</h3>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <span className="material-symbols-outlined">monetization_on</span>
                </div>
                <span className="text-green-500 text-xs font-bold flex items-center bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-xs mr-1">trending_up</span>+18.3%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Monthly Revenue</p>
              <h3 className="text-2xl font-bold mt-1">$142,500</h3>
            </div>
          </div>
          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Appointment Trends Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-lg">Appointment Trends</h4>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary"></span> New
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span> Follow-up
                  </span>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between gap-2">
                <div className="flex-1 bg-primary/20 h-[60%] rounded-t relative group">
                  <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary/20 h-[80%] rounded-t relative group">
                  <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary/20 h-[45%] rounded-t relative group">
                  <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary/20 h-[90%] rounded-t relative group">
                  <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary/20 h-[70%] rounded-t relative group">
                  <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary/20 h-[55%] rounded-t relative group">
                  <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary/20 h-[85%] rounded-t relative group">
                  <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
              </div>
              <div className="flex justify-between mt-4 px-2">
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Mon</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Tue</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Wed</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Thu</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Fri</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Sat</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Sun</span>
              </div>
            </div>
            {/* Patient Demographics (Donut Chart Visual) */}
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <h4 className="font-bold text-lg mb-6">Patient Demographics</h4>
              <div className="relative flex-1 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-[16px] border-slate-100 dark:border-slate-800 relative">
                  <div className="absolute inset-[-16px] rounded-full border-[16px] border-primary border-t-transparent border-l-transparent rotate-[45deg]"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">1.2k</span>
                    <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Total</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Age 18-35</span>
                  </div>
                  <span className="text-sm font-bold">42%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Age 36-55</span>
                  </div>
                  <span className="text-sm font-bold">35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800"></span>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Age 55+</span>
                  </div>
                  <span className="text-sm font-bold">23%</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Department Performance */}
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="font-bold text-lg mb-6">Department Performance</h4>
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">General Practice</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Cardiology</span>
                    <span className="font-bold">62%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Pediatrics</span>
                    <span className="font-bold">91%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '91%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Orthopedics</span>
                    <span className="font-bold">45%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Top Performers Table */}
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-lg">Top Providers</h4>
                <button className="text-xs font-bold text-primary hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-slate-100 dark:border-slate-800">
                      <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Provider</th>
                      <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Patient Volume</th>
                      <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Satisfaction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold overflow-hidden">
                            <img className="w-full h-full object-cover" alt="Avatar of Dr. Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTLFfrYIryfKJnuIK7COP_b5dMgzmZqhYYLUFcJ0K51Nigvmc0TCrdSNWBDfFGoYiyeCs9kP_T2Y6pJXfbZRGvQ1mp50-wOYZSnszhpLsy71VwO3kgNvtckiI8NErbIAxDPZ2qM1l2AOWGXeuBD2QEZ7-mp9P_FwH6a_iL_09IVU3pY2FVIkZ5o1yzFs3QckbJtYg2MyEOULBf53OnYmQ-8GMEAsBSxdGLwr0hsZjZ3UKQU5KBr2r__dVazLHbMPFPfJg2IR3Obn0" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold">Dr. Sarah Jenkins</span>
                            <span className="text-xs text-slate-500">Cardiology</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-medium">152</td>
                      <td className="py-4">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-amber-400 text-sm fill-current">star</span>
                          <span className="text-sm font-bold">4.9</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold overflow-hidden">
                            <img className="w-full h-full object-cover" alt="Avatar of Dr. Michael Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC66Upku8YZkfri1a0UQY8XLxUGZP3h7evV4V8nZzMKBcUe4caep_zUma-tNRKbB_Wx1rpTOCUZJ2ZpU84rWrV3uDhfGR-DOshdxqeYWzlC-xMlZhOb7Sf0hCoc58w4acvtV6fHYk0src0yMKWfab7tpV4ZxjkLidFYl1XsZhA9MpSFSknDtOvWm5UrFKxRRk-lJRu55iUXb8kFDjwZugYx6fJ4hmbcaiH93GtNHDmMZajkj0hUqZcH2mVdOcJMTkaiCTgnDd4tlvY" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold">Dr. Michael Chen</span>
                            <span className="text-xs text-slate-500">Pediatrics</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-medium">138</td>
                      <td className="py-4">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-amber-400 text-sm fill-current">star</span>
                          <span className="text-sm font-bold">4.8</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold overflow-hidden">
                            <img className="w-full h-full object-cover" alt="Avatar of Dr. Elena Rossi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCAY3WuqRH1bL5wNRxjBC66-xIKS342aQSoS_VxFN45VMQMNh5aJGbXvgd-X4rEKl3r4-ScYuoPoPvxwYK9FW9NfTKAfayfrbj1fKJTocwiDCTznPYrWLWmJTvTxOftbm9h9y9Wn_56fvUfa4DtyqINkWQZ0N5pNc4xMzXW7u3wDqYN8DyDClFkAYKpfWmbhd44KHTF9B3Bi02PuSv6OgOpe922OaG5S9k3NF-0t3F251QdVeA6tfDI-NTk1m6mgfk4tnE85y_0R8" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold">Dr. Elena Rossi</span>
                            <span className="text-xs text-slate-500">General Practice</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-medium">124</td>
                      <td className="py-4">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-amber-400 text-sm fill-current">star</span>
                          <span className="text-sm font-bold">4.7</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;
