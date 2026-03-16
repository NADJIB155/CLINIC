import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: 'Alex Johnson',
    dob: '1992-05-15',
    gender: 'Male',
    bloodGroup: 'O Positive',
    streetAddress: '123 Medical Plaza, Suite 400',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    emergencyContact: 'Sarah Johnson',
    relationship: 'Spouse',
    emergencyPhone: '+1 (555) 012-3456'
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Profile updated successfully!');
    }, 1000);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-4 md:px-10 py-3 bg-white dark:bg-slate-900 sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">health_and_safety</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">HealthSync</h2>
          </div>
          <div className="flex flex-1 justify-end gap-4 md:gap-8">
            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 transition-colors border-none cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="User profile picture of a male patient" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVouV_zyg7gR_IHZDDwANIPtil_2Yard9etQgkYWc4JwQzn9M6mjHtKtXZfCuHhP4L3uyvIuzQ2Bm6Npv5lUJU0BWDnjKeh859ePDI3G6jjla-0rR0W11Zq4vex5TzFs-B2_chACjsFcU6y6-C8-fT1vWzuuyL7EeGZWAcwxLfTvTbjacg8Oq-BZajULKbAd6W8-W7iOVo51SyyrSND5wtdvf2eEeYe8LDVwwD2zNqanzuES8bo0m63trVIBdA8dFUcL6XLTY5zno")' }}>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 lg:min-h-screen p-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-xl cursor-pointer">
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-medium">Dashboard</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-xl cursor-pointer">
                <span className="material-symbols-outlined">calendar_month</span>
                <p className="text-sm font-medium">Appointments</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-xl cursor-pointer">
                <span className="material-symbols-outlined">description</span>
                <p className="text-sm font-medium">Health Records</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-xl cursor-pointer">
                <span className="material-symbols-outlined">mail</span>
                <p className="text-sm font-medium">Messages</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary text-white cursor-pointer">
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium">Settings</p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="bg-primary/5 rounded-xl p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">HealthSync Premium</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Get 24/7 access to tele-health services.</p>
                <button className="text-primary text-sm font-bold flex items-center gap-1 bg-transparent border-none cursor-pointer p-0">
                  Upgrade Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-background-light dark:bg-background-dark p-4 md:p-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Profile Settings</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your personal information, address, and preferences.</p>
              </div>

              {/* Personal Information Section */}
              <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 md:size-32 ring-4 ring-primary/10" data-alt="Detailed view of patient profile avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcTshp5JaGAAJR7o9hPg-GJ4fZhwj8T93-2LBDztrNsckB9fmCmDuGy5JxHkRmua4aCtpHn7w5cc0V1zZwOkdJT--F2YbmfxHjxAzKFuXHyumX4Q-DyXbzJh-C3I14l9_BztWDAezlwyUSmZVTBDq-_cbeOzebNDT6CUa3HjQmz78wvV5XrPezk9nICbkMJP03HdHfQ8m0I4ZA0EwgxVgCbqhMm0OkkvYvl2OiAxKMay8PlOP9MA4i47PEDNq2-ASVVjdwPcAc_Go")' }}>
                    </div>
                    <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg border-4 border-white dark:border-slate-900 cursor-pointer">
                      <span className="material-symbols-outlined text-base">photo_camera</span>
                    </button>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Alex Johnson</h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-4">Patient ID: HS-8821 • Joined Oct 2023</p>
                    <div className="flex gap-3">
                      <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors border-none cursor-pointer">Change Photo</button>
                      <button className="border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors bg-transparent cursor-pointer">Remove</button>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">person</span>
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                    <input 
                      className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-0 px-4 py-2.5 outline-none transition-all" 
                      type="text" 
                      name="fullName"
                      value={formData.fullName} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Date of Birth</label>
                    <input 
                      className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-0 px-4 py-2.5 outline-none transition-all" 
                      type="date" 
                      name="dob"
                      value={formData.dob} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Gender</label>
                    <select 
                      className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-0 px-4 py-2.5 outline-none transition-all"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Blood Group</label>
                    <input 
                      className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-0 px-4 py-2.5 outline-none transition-all" 
                      type="text" 
                      name="bloodGroup"
                      value={formData.bloodGroup} 
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </section>

              {/* Address Management Section */}
              <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  Address Management
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Street Address</label>
                    <input 
                      className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-0 px-4 py-2.5 outline-none transition-all" 
                      type="text" 
                      name="streetAddress"
                      value={formData.streetAddress} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">City</label>
                      <input className="bg-slate-50 dark:bg-slate-800 border-none border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary focus:outline-0 px-4 py-2.5" type="text" defaultValue="New York" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">State</label>
                      <input className="bg-slate-50 dark:bg-slate-800 border-none border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary focus:outline-0 px-4 py-2.5" type="text" defaultValue="NY" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Zip Code</label>
                      <input className="bg-slate-50 dark:bg-slate-800 border-none border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary focus:outline-0 px-4 py-2.5" type="text" defaultValue="10001" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Emergency Contact Section */}
              <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">contact_emergency</span>
                  Emergency Contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Contact Name</label>
                    <input className="bg-slate-50 dark:bg-slate-800 border-none border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary focus:outline-0 px-4 py-2.5" type="text" defaultValue="Sarah Johnson" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Relationship</label>
                    <input className="bg-slate-50 dark:bg-slate-800 border-none border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary focus:outline-0 px-4 py-2.5" type="text" defaultValue="Spouse" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input className="bg-slate-50 dark:bg-slate-800 border-none border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary focus:outline-0 px-4 py-2.5" type="tel" defaultValue="+1 (555) 012-3456" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Alt Phone (Optional)</label>
                    <input className="bg-slate-50 dark:bg-slate-800 border-none border-slate-200 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-primary focus:outline-0 px-4 py-2.5" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                </div>
              </section>

              {/* Communication Preferences Section */}
              <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 mb-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">notifications_active</span>
                  Communication Preferences
                </h3>
                <div className="space-y-4">
                  
                  {/* Option 1 */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-primary">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Email Notifications</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Receive appointment reminders via email</p>
                      </div>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input 
                        className="sr-only peer" 
                        type="checkbox" 
                        checked={notifications.email} 
                        onChange={() => handleNotificationToggle('email')} 
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </div>
                  </div>

                  {/* Option 2 */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-primary">
                        <span className="material-symbols-outlined">sms</span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">SMS Alerts</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Get text message alerts for critical updates</p>
                      </div>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input 
                        className="sr-only peer" 
                        type="checkbox" 
                        checked={notifications.sms} 
                        onChange={() => handleNotificationToggle('sms')} 
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </div>
                  </div>

                  {/* Option 3 */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-primary">
                        <span className="material-symbols-outlined">vibration</span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Push Notifications</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Real-time alerts directly on your device</p>
                      </div>
                    </div>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input 
                        className="sr-only peer" 
                        type="checkbox" 
                        checked={notifications.push} 
                        onChange={() => handleNotificationToggle('push')} 
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end border-t border-slate-200 dark:border-slate-800 pt-8 pb-12">
                <button className="px-6 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors bg-transparent cursor-pointer">Cancel</button>
                <button 
                  className="px-6 py-2.5 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all border-none cursor-pointer flex items-center justify-center gap-2 min-w-[140px]"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Saving...
                    </>
                  ) : 'Save Changes'}
                </button>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileSettings;
