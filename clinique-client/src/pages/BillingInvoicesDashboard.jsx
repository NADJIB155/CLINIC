import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BillingInvoicesDashboard = () => {
  const [timeframe, setTimeframe] = useState('Last 6 Months');
  const [invoiceStatus, setInvoiceStatus] = useState('All Status');

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary text-white p-2 rounded-lg">
            <span className="material-symbols-outlined block">health_and_safety</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">HealthSync</h1>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary/10 text-primary font-semibold" to="/invoices">
            <span className="material-symbols-outlined">description</span>
            <span>Invoices</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/claims">
            <span className="material-symbols-outlined">security</span>
            <span>Insurance Claims</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/patients">
            <span className="material-symbols-outlined">group</span>
            <span>Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/financial">
            <span className="material-symbols-outlined">bar_chart</span>
            <span>Financial Reports</span>
          </Link>
          <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Administration</div>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/settings">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/support">
            <span className="material-symbols-outlined">help</span>
            <span>Help Center</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img className="size-10 rounded-full object-cover" alt="Professional doctor profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtQPzS7QjIT2I0VyRaZyg9aUGSB0G83n0rpOBCeD-G6c6kRBhlZvdBkE2lKYVKo5wvXaT1ilVI7AH6bckursSuRBPi6D3vq4H4lsjz6LNksn2a_9Lz3ka0D2m-oN3pYW3NKmPfoVFLcRf1_88sxJ2xedUubHISF2GmYiPVMebGL6r7tCYKpnBY6yi9Ow0Irv7OLlMsfu66AzoaVDMbVBfpyDjI3rehOHnU3Vg3hUHqBkOUmSOkmH47YATUM4SifhEYCECx3KneeT4" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Dr. Sarah Miller</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Administrator</p>
            </div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark scroll-smooth">
        {/* Top Navbar */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary text-sm" placeholder="Search invoices, patients or claims..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>New Invoice</span>
            </button>
          </div>
        </header>
        <div className="p-8 space-y-8">
          {/* Breadcrumbs & Quick Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Billing Dashboard</h2>
              <p className="text-slate-500 dark:text-slate-400">Manage your clinic's financial health and patient accounts.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[20px]">analytics</span>
                <span>Reports</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Date Range</span>
              </button>
            </div>
          </div>
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">+14.2%</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Revenue</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$142,580.00</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg">
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full">+2.4%</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Invoices</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$28,450.00</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded-full">42 New</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Insurance Claims</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">156</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg">
                  <span className="material-symbols-outlined">error</span>
                </div>
                <span className="text-xs font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-full">-5%</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Overdue Payments</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$4,210.00</p>
            </div>
          </div>
          {/* Charts and Actions Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Monthly Billing Trend Chart (Representational) */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Billing Trends</h3>
                <select 
                  className="bg-slate-50 dark:bg-slate-700 border-none rounded-lg text-sm px-3 py-1 focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                >
                  <option value="Last 6 Months">Last 6 Months</option>
                  <option value="Last Year">Last Year</option>
                </select>
              </div>
              <div className="h-48 w-full flex items-end gap-3 px-2">
                <div className="flex-1 bg-primary/20 rounded-t-lg h-[40%] relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$12k</div>
                </div>
                <div className="flex-1 bg-primary/40 rounded-t-lg h-[65%] relative group"></div>
                <div className="flex-1 bg-primary/60 rounded-t-lg h-[55%] relative group"></div>
                <div className="flex-1 bg-primary/80 rounded-t-lg h-[85%] relative group"></div>
                <div className="flex-1 bg-primary rounded-t-lg h-[100%] relative group"></div>
                <div className="flex-1 bg-primary/50 rounded-t-lg h-[75%] relative group"></div>
              </div>
              <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium px-2">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
            {/* Quick Actions */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
              <h3 className="font-bold text-lg mb-2">Quick Actions</h3>
              <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 transition-all text-left">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined">add_circle</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">New Invoice</p>
                    <p className="text-xs text-slate-500">Bill a patient or service</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 transition-all text-left">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined">upload_file</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Submit New Claim</p>
                    <p className="text-xs text-slate-500">To insurance providers</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 transition-all text-left">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-slate-100 text-slate-600 flex items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined">summarize</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Financial Report</p>
                    <p className="text-xs text-slate-500">Monthly revenue summary</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </button>
            </div>
          </div>
          {/* Main Table and Tracker Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Recent Invoices Table */}
            <div className="xl:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="font-bold text-lg">Recent Invoices</h3>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm">filter_list</span>
                    <select 
                      className="pl-8 pr-4 py-1.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-xs font-medium focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
                      value={invoiceStatus}
                      onChange={(e) => setInvoiceStatus(e.target.value)}
                    >
                      <option value="All Status">All Status</option>
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                      <option value="Overdue">Overdue</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Patient Name</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Service</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Amount</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-center">Status</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-sm">James Wilson</p>
                        <p className="text-xs text-slate-500">#INV-8821</p>
                      </td>
                      <td className="px-6 py-4 text-sm">General Checkup</td>
                      <td className="px-6 py-4 text-sm">Oct 24, 2023</td>
                      <td className="px-6 py-4 text-sm font-bold text-right">$120.00</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">Paid</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-sm">Emma Thompson</p>
                        <p className="text-xs text-slate-500">#INV-8822</p>
                      </td>
                      <td className="px-6 py-4 text-sm">Dental cleaning</td>
                      <td className="px-6 py-4 text-sm">Oct 23, 2023</td>
                      <td className="px-6 py-4 text-sm font-bold text-right">$85.00</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">Pending</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-sm">Robert Davis</p>
                        <p className="text-xs text-slate-500">#INV-8823</p>
                      </td>
                      <td className="px-6 py-4 text-sm">Lab Results</td>
                      <td className="px-6 py-4 text-sm">Oct 20, 2023</td>
                      <td className="px-6 py-4 text-sm font-bold text-right">$450.00</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400">Overdue</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-sm">Sophia Martinez</p>
                        <p className="text-xs text-slate-500">#INV-8824</p>
                      </td>
                      <td className="px-6 py-4 text-sm">Physiotherapy</td>
                      <td className="px-6 py-4 text-sm">Oct 19, 2023</td>
                      <td className="px-6 py-4 text-sm font-bold text-right">$150.00</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">Paid</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <button className="w-full text-center text-sm font-bold text-primary hover:underline">View All Invoices</button>
              </div>
            </div>
            {/* Insurance Claims Tracker */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden h-fit">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-lg">Insurance Claims</h3>
                <p className="text-xs text-slate-500">Active status updates</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/20 space-y-4">
                  {/* Claim 1 */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 size-4 rounded-full bg-primary border-4 border-white dark:border-slate-800"></span>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm">BlueShield #C9901</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20">Submitted</span>
                    </div>
                    <p className="text-xs text-slate-500">Patient: Michael Chen • $1,240.00</p>
                    <p className="text-[10px] text-slate-400 mt-1">Today, 10:45 AM</p>
                  </div>
                  {/* Claim 2 */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 size-4 rounded-full bg-amber-500 border-4 border-white dark:border-slate-800"></span>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm">HealthFirst #C9872</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-900/20">In Review</span>
                    </div>
                    <p className="text-xs text-slate-500">Patient: Sarah Jenkins • $550.00</p>
                    <p className="text-[10px] text-slate-400 mt-1">Yesterday, 4:12 PM</p>
                  </div>
                  {/* Claim 3 */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 size-4 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-800"></span>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm">MediLife #C9811</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20">Approved</span>
                    </div>
                    <p className="text-xs text-slate-500">Patient: David Rossi • $2,100.00</p>
                    <p className="text-[10px] text-slate-400 mt-1">Oct 22, 11:30 AM</p>
                  </div>
                  {/* Claim 4 */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 size-4 rounded-full bg-red-500 border-4 border-white dark:border-slate-800"></span>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm">Aetna #C9750</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 dark:bg-red-900/20">Denied</span>
                    </div>
                    <p className="text-xs text-slate-500">Patient: Lisa Wong • $85.00</p>
                    <p className="text-[10px] text-slate-400 mt-1">Oct 21, 09:15 AM</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <button className="w-full text-center text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Go to Claims Tracker</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BillingInvoicesDashboard;
