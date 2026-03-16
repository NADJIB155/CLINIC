import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientOutcomesReport = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex min-h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 dark:bg-black text-white flex flex-col flex-shrink-0 border-r border-slate-200 dark:border-slate-800">
        <div className="p-6 flex flex-col gap-8 h-full">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-lg p-2 text-white flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined">health_metrics</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-lg font-bold leading-none">HealthSync</h1>
              <p className="text-primary text-xs font-medium uppercase tracking-wider">Medical Admin</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1 grow">
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors" to="/">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Overview</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors" to="/reports">
              <span className="material-symbols-outlined">description</span>
              <span className="text-sm font-medium">Patient Reports</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20" to="/outcomes">
              <span className="material-symbols-outlined">trending_up</span>
              <span className="text-sm font-medium">Clinical Outcomes</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors" to="/staff">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-medium">Staff Performance</span>
            </Link>
            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-1">
              <Link className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors" to="/settings">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold tracking-tight">Patient Outcomes Analysis</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Comprehensive performance reporting across departments</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-sm">
              <span className="material-symbols-outlined text-slate-400 mr-2 text-xl">calendar_today</span>
              <span className="text-sm font-medium pr-4">Oct 1, 2023 - Oct 31, 2023</span>
              <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer">expand_more</span>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm cursor-pointer border-none outline-none">
                <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm cursor-pointer border-none outline-none">
                <span className="material-symbols-outlined text-lg">csv</span>
                CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 cursor-pointer border-none outline-none">
                <span className="material-symbols-outlined text-lg">share</span>
                Share Report
              </button>
            </div>
          </div>
        </header>
        {/* Content Area */}
        <div className="p-8 flex flex-col gap-8 max-w-[1400px]">
          {/* Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Overall Recovery Rate</span>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-lg">trending_up</span>
                </div>
              </div>
              <p className="text-3xl font-bold">94%</p>
              <p className="text-green-500 text-sm font-semibold flex items-center gap-1">
                +2.1% <span className="font-normal text-slate-400">vs last month</span>
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Avg. Improvement Score</span>
                <div className="bg-primary/10 text-primary p-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-lg">bolt</span>
                </div>
              </div>
              <p className="text-3xl font-bold">8.2/10</p>
              <p className="text-green-500 text-sm font-semibold flex items-center gap-1">
                +0.4 <span className="font-normal text-slate-400">vs last month</span>
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Patient Satisfaction Index</span>
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-lg">mood</span>
                </div>
              </div>
              <p className="text-3xl font-bold">4.8/5</p>
              <p className="text-green-500 text-sm font-semibold flex items-center gap-1">
                +0.2 <span className="font-normal text-slate-400">vs last month</span>
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Treatment Success Rate</span>
                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 p-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-lg">verified</span>
                </div>
              </div>
              <p className="text-3xl font-bold">89%</p>
              <p className="text-green-500 text-sm font-semibold flex items-center gap-1">
                +1.5% <span className="font-normal text-slate-400">vs last month</span>
              </p>
            </div>
          </div>
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recovery by Department */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-lg">Recovery Rates by Department</h3>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer">more_horiz</span>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Cardiology</span>
                    <span>96%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Pediatrics</span>
                    <span>92%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>General Practice</span>
                    <span>88%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Neurology</span>
                    <span>91%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '91%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Orthopedics</span>
                    <span>85%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Health Progress Trend */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-lg">Patient Health Progress Trend</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs text-slate-500">Current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    <span className="text-xs text-slate-500">Benchmark</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-[250px] relative flex items-end justify-between gap-2 px-2 pb-6 border-b border-slate-100 dark:border-slate-800">
                {/* Simulated Line Chart with SVG */}
                <div className="absolute inset-0 pt-8 flex items-end">
                  <svg className="w-full h-4/5" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <path d="M0 35 L10 32 L20 34 L30 25 L40 28 L50 18 L60 20 L70 12 L80 15 L90 5 L100 8" fill="none" stroke="#ec5b13" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                    <path d="M0 35 L10 32 L20 34 L30 25 L40 28 L50 18 L60 20 L70 12 L80 15 L90 5 L100 8 V40 H0 Z" fill="url(#gradient)" opacity="0.1"></path>
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ec5b13"></stop>
                        <stop offset="100%" stopColor="#ec5b13" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-bold uppercase z-10">Week 1</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase z-10">Week 2</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase z-10">Week 3</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase z-10">Week 4</span>
              </div>
            </div>
          </div>
          {/* Treatment Effectiveness Heatmap */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-lg mb-6">Treatment Effectiveness by Condition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Hypertension</p>
                <p className="text-2xl font-bold">94.2%</p>
                <p className="text-xs text-slate-500 mt-1">High Effectiveness</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Diabetes Type II</p>
                <p className="text-2xl font-bold">88.5%</p>
                <p className="text-xs text-slate-500 mt-1">Optimal Management</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Chronic Pain</p>
                <p className="text-2xl font-bold">76.8%</p>
                <p className="text-xs text-slate-500 mt-1">Moderate Control</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Respiratory</p>
                <p className="text-2xl font-bold">91.0%</p>
                <p className="text-xs text-slate-500 mt-1">Stable Outcomes</p>
              </div>
            </div>
          </div>
          {/* Detailed Outcomes Table */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-lg">Recent Clinical Outcomes</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                  <input 
                    className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm w-64 focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
                    placeholder="Filter by patient or diagnosis..." 
                    type="text" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Patient ID</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Diagnosis</th>
                    <th className="px-6 py-4">Outcome Status</th>
                    <th className="px-6 py-4">Satisfaction</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold">#HS-8821</td>
                    <td className="px-6 py-4 text-sm">Cardiology</td>
                    <td className="px-6 py-4 text-sm">Post-Myocardial Infarction</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        Recovered
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm text-slate-300">star</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">open_in_new</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold">#HS-9042</td>
                    <td className="px-6 py-4 text-sm">Neurology</td>
                    <td className="px-6 py-4 text-sm">Migraine Management</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                        Improving
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">open_in_new</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold">#HS-7731</td>
                    <td className="px-6 py-4 text-sm">General Practice</td>
                    <td className="px-6 py-4 text-sm">Seasonal Influenza</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        Recovered
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm text-slate-300">star</span>
                        <span className="material-symbols-outlined text-sm text-slate-300">star</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">open_in_new</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold">#HS-6629</td>
                    <td className="px-6 py-4 text-sm">Orthopedics</td>
                    <td className="px-6 py-4 text-sm">ACL Post-Op Recovery</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                        Stable
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm">star</span>
                        <span className="material-symbols-outlined text-sm text-slate-300">star</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">open_in_new</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm text-slate-500">
              <p>Showing 1 to 4 of 128 outcomes</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50">Previous</button>
                <button className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientOutcomesReport;
