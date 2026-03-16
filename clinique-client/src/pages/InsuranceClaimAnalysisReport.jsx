import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InsuranceClaimAnalysisReport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [payer, setPayer] = useState('All Providers');
  const [status, setStatus] = useState('All Claims');

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">medical_services</span>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">HealthSync <span className="font-normal text-slate-500">Analytics</span></h2>
          </div>
          <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-1.5 w-64 border border-transparent focus-within:border-primary/50">
            <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
            <input 
              className="bg-transparent border-none outline-none focus:ring-0 text-sm w-full placeholder:text-slate-400" 
              placeholder="Search claims or patients..." 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="h-8 w-[1px] bg-slate-200 dark:border-slate-800 mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold">Dr. Sarah Chen</p>
              <p className="text-[10px] text-slate-500 uppercase">Administrator</p>
            </div>
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30" data-alt="User profile avatar circle">SC</div>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hidden lg:flex flex-col p-4 gap-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Main Menu</p>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary text-white font-medium" to="/">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/claims">
            <span className="material-symbols-outlined">description</span>
            <span>Claims History</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/patients">
            <span className="material-symbols-outlined">group</span>
            <span>Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/financial">
            <span className="material-symbols-outlined">bar_chart</span>
            <span>Financial Reports</span>
          </Link>
          <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-4">
            <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/support">
              <span className="material-symbols-outlined">help</span>
              <span>Support Center</span>
            </Link>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Insurance Claim Analysis</h1>
                <p className="text-slate-500 text-sm">Real-time tracking and reimbursement performance metrics for Q3 2024.</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50">
                  <span className="material-symbols-outlined text-sm">download</span>
                  Export PDF
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110">
                  <span className="material-symbols-outlined text-sm">table_view</span>
                  Export CSV
                </button>
              </div>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-slate-400 text-sm">calendar_month</span>
                <select className="bg-transparent border-none text-xs font-semibold focus:ring-0 cursor-pointer pr-2 outline-none text-slate-700 dark:text-slate-300" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
                  <option value="Last 30 Days">Date: Last 30 Days</option>
                  <option value="Last 7 Days">Date: Last 7 Days</option>
                  <option value="This Quarter">Date: This Quarter</option>
                </select>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-slate-400 text-sm">account_balance</span>
                <select className="bg-transparent border-none text-xs font-semibold focus:ring-0 cursor-pointer pr-2 outline-none text-slate-700 dark:text-slate-300" value={payer} onChange={(e) => setPayer(e.target.value)}>
                  <option value="All Providers">Payer: All Providers</option>
                  <option value="BlueCross">BlueCross</option>
                  <option value="Aetna">Aetna</option>
                  <option value="UnitedHealth">UnitedHealth</option>
                </select>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-slate-400 text-sm">filter_alt</span>
                <select className="bg-transparent border-none text-xs font-semibold focus:ring-0 cursor-pointer pr-2 outline-none text-slate-700 dark:text-slate-300" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="All Claims">Status: All Claims</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Denied">Denied</option>
                </select>
              </div>
              <div className="ml-auto flex items-center gap-1 text-slate-400 text-xs">
                <span className="material-symbols-outlined text-sm">info</span>
                Last updated 4 mins ago
              </div>
            </div>
            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Claims Submitted</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-black">1,284</h3>
                  <span className="text-green-500 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 12.5%
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Approval Rate</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-black">92.4%</h3>
                  <span className="text-green-500 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 2.1%
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Avg. Reimbursement</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-black">14 Days</h3>
                  <span className="text-green-500 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-xs">trending_down</span> 3d
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Reimbursement</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-black">$842,500</h3>
                  <span className="text-green-500 text-xs font-bold flex items-center">
                    <span className="material-symbols-outlined text-xs">trending_up</span> 8.4%
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 mt-4 rounded-full overflow-hidden">
                  <div className="bg-primary/60 h-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            {/* Visual Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Claims Over Time (Line Chart Representation) */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-slate-800 dark:text-white">Claims Submissions vs Approvals</h4>
                  <div className="flex gap-4 text-[10px] font-bold uppercase">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> Submissions</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Approvals</span>
                  </div>
                </div>
                <div className="h-64 relative flex items-end justify-between gap-1">
                  {/* Simple Bar representation as placeholder for chart */}
                  <div className="flex-1 bg-primary/20 rounded-t h-[60%] relative group">
                    <div className="absolute bottom-0 w-full bg-green-500/40 h-[80%] rounded-t"></div>
                    <span className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-slate-400">Week 1</span>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t h-[75%] relative">
                    <div className="absolute bottom-0 w-full bg-green-500/40 h-[90%] rounded-t"></div>
                    <span className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-slate-400">Week 2</span>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t h-[90%] relative">
                    <div className="absolute bottom-0 w-full bg-green-500/40 h-[85%] rounded-t"></div>
                    <span className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-slate-400">Week 3</span>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t h-[65%] relative">
                    <div className="absolute bottom-0 w-full bg-green-500/40 h-[70%] rounded-t"></div>
                    <span className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-slate-400">Week 4</span>
                  </div>
                  <div className="flex-1 bg-primary/20 rounded-t h-[80%] relative">
                    <div className="absolute bottom-0 w-full bg-green-500/40 h-[95%] rounded-t"></div>
                    <span className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-slate-400">Week 5</span>
                  </div>
                </div>
              </div>
              {/* Status Distribution (Donut Chart Representation) */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <h4 className="font-bold text-slate-800 dark:text-white mb-6">Status Distribution</h4>
                <div className="flex-1 flex flex-col items-center justify-center relative">
                  <div className="size-40 rounded-full border-[12px] border-slate-100 dark:border-slate-800 relative flex items-center justify-center">
                    {/* Chart Overlay Slices */}
                    <div className="absolute inset-[-12px] rounded-full border-[12px] border-green-500 border-l-transparent border-b-transparent rotate-45"></div>
                    <div className="absolute inset-[-12px] rounded-full border-[12px] border-primary border-t-transparent border-r-transparent border-b-transparent -rotate-12"></div>
                    <div className="text-center">
                      <p className="text-2xl font-black">1.2k</p>
                      <p className="text-[10px] text-slate-500 uppercase">Claims</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-8 w-full">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-green-500"></span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Paid (75%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-primary"></span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Pending (15%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-red-500"></span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Denied (6%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-amber-500"></span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">Review (4%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tables & Denial Reasons */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              {/* Recent Insurance Claims Table */}
              <div className="xl:col-span-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <h4 className="font-bold text-slate-800 dark:text-white">Recent Insurance Claims</h4>
                  <button className="text-primary text-xs font-bold hover:underline">View All Records</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-3">Claim ID</th>
                        <th className="px-6 py-3">Patient</th>
                        <th className="px-6 py-3">Payer</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 text-xs font-bold text-primary">#CLM-8921</td>
                        <td className="px-6 py-4 text-xs font-semibold">Robert Fox</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="size-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px] font-bold">BC</div>
                            <span className="text-xs">BlueCross</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold">$1,450.00</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">Paid</span>
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-500">Oct 12, 2024</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 text-xs font-bold text-primary">#CLM-8922</td>
                        <td className="px-6 py-4 text-xs font-semibold">Jane Cooper</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="size-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[8px] font-bold">A</div>
                            <span className="text-xs">Aetna</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold">$620.00</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">Pending</span>
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-500">Oct 14, 2024</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 text-xs font-bold text-primary">#CLM-8923</td>
                        <td className="px-6 py-4 text-xs font-semibold">Cody Fisher</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="size-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[8px] font-bold">U</div>
                            <span className="text-xs">UnitedHealth</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold">$2,100.00</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">Denied</span>
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-500">Oct 15, 2024</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 text-xs font-bold text-primary">#CLM-8924</td>
                        <td className="px-6 py-4 text-xs font-semibold">Esther Howard</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="size-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[8px] font-bold">K</div>
                            <span className="text-xs">Kaiser</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold">$840.00</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">Review</span>
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-500">Oct 16, 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Common Denial Reasons */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <h4 className="font-bold text-slate-800 dark:text-white mb-4">Common Denials</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">Coding Error (ICD-10)</span>
                      <span className="font-bold">42%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">Missing Information</span>
                      <span className="font-bold">28%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full opacity-80" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">Duplicate Claim</span>
                      <span className="font-bold">18%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full opacity-60" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">Policy Expired</span>
                      <span className="font-bold">12%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full opacity-40" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <div className="p-3 bg-primary/5 rounded-xl border border-primary/20">
                    <p className="text-[10px] text-primary font-bold uppercase mb-1">Recommendation</p>
                    <p className="text-[11px] leading-relaxed">Update ICD-10 coding templates for Cardiology to reduce common errors detected this month.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InsuranceClaimAnalysisReport;
