import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InsuranceBillingInfo = () => {
  const [activeTab, setActiveTab] = useState('My Insurance');

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-40 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">health_and_safety</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">HealthSync</h2>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>
        <main className="flex-1 px-4 lg:px-40 py-8 max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Insurance &amp; Billing</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your health coverage and payment preferences securely.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Update Insurance</span>
                </button>
              </div>
            </div>
            {/* Tabs Navigation */}
            <div className="border-b border-slate-200 dark:border-slate-800">
              <div className="flex gap-8">
                <button 
                  className={`border-b-2 pb-3 px-1 font-semibold transition-colors ${activeTab === 'My Insurance' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                  onClick={() => setActiveTab('My Insurance')}
                >
                  My Insurance
                </button>
                <button 
                  className={`border-b-2 pb-3 px-1 font-semibold transition-colors ${activeTab === 'Billing History' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                  onClick={() => setActiveTab('Billing History')}
                >
                  Billing History
                </button>
                <button 
                  className={`border-b-2 pb-3 px-1 font-semibold transition-colors ${activeTab === 'Payment Methods' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                  onClick={() => setActiveTab('Payment Methods')}
                >
                  Payment Methods
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Insurance Details */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Digital Insurance Card</h2>
                    <button className="text-primary text-sm font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      Download PDF
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Front Card */}
                    <div className="relative aspect-[1.586/1] rounded-xl overflow-hidden shadow-md group cursor-pointer ring-1 ring-slate-200 dark:ring-slate-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900"></div>
                      <div className="relative p-6 flex flex-col justify-between h-full">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <div className="size-8 bg-blue-600 rounded-md"></div>
                            <span className="font-bold text-slate-800 dark:text-white">BlueCross Shield</span>
                          </div>
                          <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded">PRIMARY</span>
                        </div>
                        <div className="mt-4">
                          <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Member Name</p>
                          <p className="font-semibold text-slate-800 dark:text-white uppercase">JONATHAN R. PATIENT</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Member ID</p>
                            <p className="font-mono text-sm text-slate-800 dark:text-white">XYZ 123456789</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Group #</p>
                            <p className="font-mono text-sm text-slate-800 dark:text-white">G-987654</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="text-white font-semibold">View Front</span>
                      </div>
                      <img className="hidden" alt="Abstract subtle tech background for insurance card front" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT8-O1wqwszXCgb8EVaQW4sqPPU4m-9JTwvVuemGUHcvZ6HwtYQbE5MZIzfLwSwxz8Wlv8nLO8K6m_bI7LooS7lhVUsW3beG3xEkmyEOCxhCIItZexnahu6UwmkJ2qv10NMou8O5UytVgkwK4a7tTvy_fUoy34N5QaDIkeZ1e48mTuCPpaZokVed5yCFd14g9uaPJoSI8QBEDG3n7VH66q0fbd_x4kDDCB4Hc1uzNvywX-GYhyaIEPklc0EI32sqkpCb89qZGg8fw" />
                    </div>
                    {/* Back Card */}
                    <div className="relative aspect-[1.586/1] rounded-xl overflow-hidden shadow-md group cursor-pointer ring-1 ring-slate-200 dark:ring-slate-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"></div>
                      <div className="relative p-6 flex flex-col justify-between h-full">
                        <div className="border-t-4 border-slate-300 dark:border-slate-700 mt-2 mb-4"></div>
                        <div className="space-y-2">
                          <p className="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">For Providers: Electronic claims filing only. Use Payer ID 00123. Customer Service: 1-800-555-0199.</p>
                          <div className="flex justify-between items-end">
                            <div className="bg-white p-1 rounded-sm">
                              <span className="material-symbols-outlined text-slate-800">qr_code_2</span>
                            </div>
                            <p className="text-[9px] font-bold text-slate-800 dark:text-white">BCBS Network</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="text-white font-semibold">View Back</span>
                      </div>
                      <img className="hidden" alt="Abstract subtle tech background for insurance card back" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXIOn5kJ_q-rTbQETFSZb9RaW-TOKlfnRX8UZmZ9T1ROidvJW2ckPlUNzi6zEjxNhT-7tSmPW0Q-xjzQmjBa3054Fzfhh5tK8AES-gyoBLDxDz4LuE_aAaWAEVX_qSLjbpZ2qBzwImeKPktm1kgCFB1h7SgpcUpqMKtNJycUHTuMeyQdpY93oRsFPcaNxFJHVi73ibdZDOBa0udPyV3z9hmLhc_WEuKEYUQVl2rmQoQuAuYXhM4guc9r4PybMdSmy3ViGp-Ue-vV8" />
                    </div>
                  </div>
                </section>
                {/* Policy Details */}
                <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                  <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Policy Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Insurance Carrier</p>
                      <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">BlueCross BlueShield Association</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Plan Type</p>
                      <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">PPO - Preferred Provider Organization</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Effective Date</p>
                      <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">January 1, 2024</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Status</p>
                      <p className="mt-1 font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm filled-icon">check_circle</span>
                        Active Coverage
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              {/* Right Sidebar: Billing & Payments */}
              <div className="flex flex-col gap-6">
                {/* Payment Methods */}
                <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Payment Methods</h2>
                    <button className="text-primary text-sm font-semibold">Edit</button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
                          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">VISA</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 dark:text-white">Visa ending in 4242</p>
                          <p className="text-xs text-slate-500">Exp 12/26</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-emerald-500 filled-icon text-[20px]">verified</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
                          <span className="material-symbols-outlined text-[16px] text-slate-600 dark:text-slate-400">account_balance</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 dark:text-white">Chase Checking</p>
                          <p className="text-xs text-slate-500">**** 8829</p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 py-2 mt-2 text-primary font-semibold text-sm border-2 border-dashed border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">add</span>
                      Add New Method
                    </button>
                  </div>
                </section>
                {/* Quick Links / Billing Summary */}
                <section className="bg-slate-900 text-white rounded-xl p-6 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl">receipt_long</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2 relative z-10">Current Balance</h2>
                  <p className="text-3xl font-bold mb-4 relative z-10">$0.00</p>
                  <p className="text-sm text-slate-400 mb-6 relative z-10">All your bills are paid. Great job!</p>
                  <Link className="flex items-center justify-between group/link relative z-10 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors" to="/billing">
                    <span className="font-medium">View Billing History</span>
                    <span className="material-symbols-outlined transition-transform">chevron_right</span>
                  </Link>
                </section>
                {/* Security Notice */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 rounded-xl flex gap-3">
                  <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">lock</span>
                  <div>
                    <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">Secure Portal</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1">Your data is encrypted with 256-bit SSL and compliant with HIPAA regulations.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Secondary Info Section */}
            <section className="mt-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                  <h3 className="font-semibold text-slate-900 dark:text-white">How do I update my primary insurance?</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Click 'Update Insurance' at the top of this page to upload a new card photo or enter details manually. Updates usually take 24-48 hours to verify.</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                  <h3 className="font-semibold text-slate-900 dark:text-white">When will I be billed for my visit?</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Invoices are generated after your insurance claim has been processed. You will receive an email and notification when a new statement is ready.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
        {/* Bottom Footer */}
        <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-6 lg:px-40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 dark:text-slate-400 text-sm">© 2024 HealthSync Medical. All rights reserved.</p>
            <div className="flex gap-6">
              <Link className="text-sm text-slate-500 hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
              <Link className="text-sm text-slate-500 hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
              <Link className="text-sm text-slate-500 hover:text-primary transition-colors" to="/help">Help Center</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InsuranceBillingInfo;
