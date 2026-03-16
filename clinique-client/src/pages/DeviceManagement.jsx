import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeviceManagement = () => {
  const [otherSessions, setOtherSessions] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro',
      subtitle: 'HealthSync App · iOS 17.4',
      location: 'Los Angeles, USA',
      lastActive: '2 hours ago',
      icon: 'smartphone'
    },
    {
      id: 2,
      name: 'iPad Air',
      subtitle: 'Safari · iPadOS',
      location: 'New York, USA',
      lastActive: '3 days ago',
      icon: 'tablet_mac'
    }
  ]);

  const removeDevice = (id) => {
    setOtherSessions(otherSessions.filter(session => session.id !== id));
  };

  const removeAllOtherSessions = () => {
    if (window.confirm('Are you sure you want to sign out of all other sessions?')) {
      setOtherSessions([]);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <div className="flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">health_and_safety</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">HealthSync</h2>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium" to="/dashboard">Dashboard</Link>
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium" to="/records">Health Records</Link>
                <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium" to="/appointments">Appointments</Link>
                <Link className="text-primary border-b-2 border-primary pb-5 -mb-5 text-sm font-medium" to="/security">Security</Link>
              </nav>
              <div className="flex items-center gap-4">
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg bg-transparent border-none cursor-pointer">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg bg-transparent border-none cursor-pointer">
                  <span className="material-symbols-outlined">settings</span>
                </button>
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30">
                  <img alt="User Profile" className="w-full h-full object-cover" data-alt="User profile avatar photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtGmR8SBxdEW8GQo6-JmSavF8z4uce9vT3RDqs9fr8z-LqKWzcJqtus4_ji1K9KCnqcJm6e_taIdLaHHOFsBGdFcxxY5UcIkZVDDcFW_Ly02zyK1HObWMpwjiC0h1J7gLBaM2LdpNm2pIXK8WYT22nulNMoh5dsuIKQf9MW6OYVfgFxYpVnIFOB_eYFHAxDzN_zLZB-2h8fKuex7ck9aFeOfFJzmzuXEmaKN398mGZIuQeY0sa4S1R0WAr1GfKoJYZk0hsuNZcibw" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Nav */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="flex flex-col gap-1">
                <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" to="/profile">
                  <span className="material-symbols-outlined">person</span>
                  <span className="font-medium">Profile Settings</span>
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" to="/security/password">
                  <span className="material-symbols-outlined">lock</span>
                  <span className="font-medium">Password &amp; 2FA</span>
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg transition-colors" to="/security/devices">
                  <span className="material-symbols-outlined">devices</span>
                  <span className="font-medium">Active Sessions</span>
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" to="/security/history">
                  <span className="material-symbols-outlined">history</span>
                  <span className="font-medium">Login History</span>
                </Link>
                <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" to="/privacy">
                  <span className="material-symbols-outlined">visibility</span>
                  <span className="font-medium">Privacy Settings</span>
                </Link>
              </div>
            </aside>

            {/* Content Area */}
            <div className="flex-grow space-y-8">
              {/* Page Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Security: Active Sessions</h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and sign out of your active sessions on other devices to keep your medical data secure.</p>
                </div>
                <button 
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-colors text-sm border-none cursor-pointer"
                  onClick={removeAllOtherSessions}
                >
                  <span className="material-symbols-outlined text-[20px]">logout</span>
                  Log Out All Other Sessions
                </button>
              </div>

              {/* Current Session */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  Current Session
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </h2>
                <div className="bg-white dark:bg-slate-900 border border-primary/30 rounded-xl p-5 flex items-start sm:items-center justify-between gap-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-3xl">laptop_mac</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">MacBook Pro 14" (This Device)</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">browser_updated</span> Chrome · macOS</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> New York, USA (192.168.1.1)</span>
                      </div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">ACTIVE NOW</span>
                </div>
              </section>

              {/* Other Sessions */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold">Other Active Sessions</h2>
                <div className="grid gap-4">
                  {otherSessions.map(session => (
                    <div key={session.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-3xl">{session.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white">{session.name}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1">{session.subtitle}</span>
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> {session.location}</span>
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> Last active: {session.lastActive}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm bg-transparent cursor-pointer"
                        onClick={() => removeDevice(session.id)}
                      >
                        Remove Device
                      </button>
                    </div>
                  ))}
                  {otherSessions.length === 0 && (
                    <div className="py-8 text-center bg-slate-50 dark:bg-slate-800/20 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
                      <p className="text-slate-500 dark:text-slate-400">No other active sessions found.</p>
                    </div>
                  )}
                </div>
              </section>

              {/* Trusted Devices Section */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Trusted Devices</h2>
                  <button className="text-primary text-sm font-semibold hover:underline flex items-center gap-1 bg-transparent border-none cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Add Trusted Device
                  </button>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-6 border border-dashed border-slate-300 dark:border-slate-700 text-center">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <span className="material-symbols-outlined text-slate-400">verified_user</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Enhanced Security Enabled</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
                    Trusted devices don't require two-factor authentication codes when you log in.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">
                      <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
                      Home Office iMac
                      <button className="material-symbols-outlined bg-transparent border-none text-[14px] ml-1 text-slate-400 hover:text-red-500 cursor-pointer">close</button>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">
                      <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
                      Work Laptop
                      <button className="material-symbols-outlined bg-transparent border-none text-[14px] ml-1 text-slate-400 hover:text-red-500 cursor-pointer">close</button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security Alert */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">info</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Session Security Tip</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Always log out of public computers and use 'Remove Device' for any hardware you no longer own or recognize. For maximum security, we recommend changing your password every 90 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 HealthSync Medical Systems. All sessions are encrypted and monitored for suspicious activity.</p>
            <div className="mt-4 flex justify-center space-x-6 text-xs font-medium text-slate-400">
              <Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
              <Link className="hover:text-primary transition-colors" to="/security-terms">Security Terms</Link>
              <Link className="hover:text-primary transition-colors" to="/support">Support</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DeviceManagement;
