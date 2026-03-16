import React from 'react';

const PatientHealthRecord = () => {
  return (
    <div className="min-h-screen text-slate-800 bg-slate-50">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white px-6 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight">HealthSecure portal</span>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <span className="text-slate-400">Dr. Sarah Richardson</span>
          <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md transition-colors border border-slate-700">Logout</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Patient Header Profile */}
        <header className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center space-x-5">
              <div className="relative">
                <img alt="Patient Avatar" className="w-20 h-20 rounded-full border-2 border-slate-100 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgyDVRhG3nDa6gmXrmJwdWFcFofXeeXEQarMcmlN8XC8NRwst5uWOw5qVHahvOEIA71OgGZcn_PHWQT7iVwLkXkotY1aQVTFLLjg8UM9AVaB3lboTNiPZKkdaWFtckKcQhiHUrv23y-cb_N4-jzCU8AxsUBYdWoVKvB7nBPRJAWJU6Xkqs4b3hAvw-fNzqxiWRcnQJqK9sEzf33GdEgpsdLNMuet_yeHxutelVA8UMuXTTPg2iv3bO3Q5OJcp06YXTBxIOwPdYZlY" />
                <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 border-2 border-white"></span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 leading-tight">Robert J. Sterling</h1>
                <p className="text-slate-500 font-medium">Patient ID: #DH-99201</p>
                <div className="flex items-center mt-1 space-x-3 text-sm">
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold">Male, 42 yrs</span>
                  <span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-semibold">O+ Positive</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:flex gap-4 md:gap-8 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
              <div className="text-center md:text-left">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Weight</p>
                <p className="text-lg font-semibold text-slate-700">82 kg</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Height</p>
                <p className="text-lg font-semibold text-slate-700">185 cm</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">BP</p>
                <p className="text-lg font-semibold text-slate-700">120/80</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">HR</p>
                <p className="text-lg font-semibold text-slate-700">72 bpm</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (Consultation & Prescription) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Consultation Notes */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-100 px-6 py-4 flex justify-between items-center bg-slate-50/50">
                <h2 className="font-bold text-slate-800 flex items-center">
                  <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  Consultation Notes
                </h2>
                <span className="text-xs font-medium text-slate-400 italic">Auto-saving...</span>
              </div>
              <div className="p-6">
                <textarea className="w-full h-48 p-4 text-slate-700 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all" placeholder="Start typing clinical observations, symptoms, and diagnosis..."></textarea>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded transition-colors">+ Add Symptom Tag</button>
                  <button className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded transition-colors">+ Add Lab Request</button>
                </div>
              </div>
            </section>

            {/* Prescription */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-100 px-6 py-4 flex justify-between items-center bg-slate-50/50">
                <h2 className="font-bold text-slate-800 flex items-center">
                  <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                  Prescription
                </h2>
                <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded-md transition-colors shadow-sm">
                  Add Medication
                </button>
              </div>
              <div className="p-0">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="px-6 py-3">Medicine</th>
                      <th className="px-6 py-3">Dosage</th>
                      <th className="px-6 py-3">Duration</th>
                      <th className="px-6 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900">Amoxicillin 500mg</p>
                        <p className="text-xs text-slate-500 italic">Oral Capsule</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">1-0-1 (After Meals)</td>
                      <td className="px-6 py-4 text-sm text-slate-600">7 Days</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-red-600 transition-colors">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900">Paracetamol 650mg</p>
                        <p className="text-xs text-slate-500 italic">Oral Tablet</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">When needed (SOS)</td>
                      <td className="px-6 py-4 text-sm text-slate-600">3 Days</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-red-600 transition-colors">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Right Column (Medical History) */}
          <aside className="space-y-6">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-100 px-6 py-4 bg-slate-50/50">
                <h2 className="font-bold text-slate-800 flex items-center">
                  <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Medical History
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  
                  {/* History Items */}
                  <div className="relative flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 border-4 border-white z-10 shrink-0">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    </div>
                    <div>
                      <time className="text-xs font-bold text-slate-400">OCT 12, 2023</time>
                      <p className="font-semibold text-slate-800">Acute Bronchitis</p>
                      <p className="text-sm text-slate-500 mt-1">Prescribed Azithromycin. Patient reported heavy chest and productive cough.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border-4 border-white z-10 shrink-0">
                      <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                    </div>
                    <div>
                      <time className="text-xs font-bold text-slate-400">MAY 04, 2023</time>
                      <p className="font-semibold text-slate-800">Annual Physical Exam</p>
                      <p className="text-sm text-slate-500 mt-1">All vitals within normal range. Recommended cholesterol screening.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border-4 border-white z-10 shrink-0">
                      <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                    </div>
                    <div>
                      <time className="text-xs font-bold text-slate-400">JAN 20, 2022</time>
                      <p className="font-semibold text-slate-800">Seasonal Allergy</p>
                      <p className="text-sm text-slate-500 mt-1">Treated with antihistamines. Identified pollen sensitivity.</p>
                    </div>
                  </div>

                </div>
                <button className="w-full mt-6 text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors py-2 border border-blue-100 rounded-lg hover:bg-blue-50">
                  View All History
                </button>
              </div>
            </section>

            {/* Allergy Alert */}
            <section className="bg-red-50 border border-red-100 rounded-xl p-6">
              <h3 className="text-red-800 font-bold flex items-center mb-3">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"></path>
                </svg>
                Critical Allergies
              </h3>
              <ul className="space-y-2">
                <li className="bg-white/80 px-3 py-1.5 rounded-md text-sm font-bold text-red-700 border border-red-200">Penicillin</li>
                <li className="bg-white/80 px-3 py-1.5 rounded-md text-sm font-bold text-red-700 border border-red-200">Latex</li>
              </ul>
            </section>
          </aside>
        </div>

        {/* Action Footer */}
        <footer className="sticky bottom-6 bg-white border border-slate-200 rounded-xl shadow-lg p-4 flex justify-between items-center z-50 mt-10">
          <div className="flex items-center space-x-2 text-slate-500 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Secure connection established</span>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2 rounded-lg font-semibold text-slate-600 hover:bg-slate-100 transition-colors border border-slate-200">
              Save Draft
            </button>
            <button className="px-8 py-2 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md active:scale-95">
              Submit & Finalize Record
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PatientHealthRecord;
