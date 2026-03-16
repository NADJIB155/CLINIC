import React, { useEffect } from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';
import { useData } from '../context/DataContext';

const PatientConsultationHistory = () => {
  const { appointments, fetchDashboardData, loading } = useData();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout title="Consultation History" userRole="Patient" userName="John Doe" userTitle="Patient ID: #8821">
        <div className="flex h-64 items-center justify-center">
          <p className="text-slate-500 font-medium">Loading history...</p>
        </div>
      </DashboardLayout>
    );
  }

  // Find appointments relevant to the patient
  const history = appointments.filter(appt => appt.patientName === 'John Doe');

  return (
    <DashboardLayout 
      title="Consultation History" 
      userRole="Patient" 
      userName="John Doe" 
      userTitle="Patient ID: #8821" 
      avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDfUh8E8JVsDLDEaRLgm1eJ8yZ8X1XRCzyOyt8Wtyn_qbA5gQo_AieDGa_TMyXV9Dj5vT4vxZEY89-cLML48fxMNdogY0ZpNiC2LrxYn6QOKVQAPZsVwbCe5Aezs02HmK538SNRFiRF3NW1AYLKgLb8VhKMD3XBQa8lCdpHyPdN2mfAR4RsaIQGwW4yZz53cuJ2zfYBHRjhJJw-bHMK0pYYFeOPwqQs55NqGaYsuH87O5MpTDSeNOjMiNUVonIMwpZZQRvM8pIORuc"
    >
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 bg-slate-50 min-h-screen">
        {/* Header Section */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Consultation History</h1>
            <p className="text-slate-500 mt-1">Review your past medical visits and prescriptions.</p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search and Filter Controls */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search visits..." 
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all w-full md:w-64"
              />
              <svg className="h-5 w-5 absolute left-3 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <button className="bg-white border border-slate-300 p-2 rounded-lg hover:bg-slate-50 transition-colors" title="Filter results">
              <svg className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
              </svg>
            </button>
          </div>
        </header>

        {/* Consultation Table */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" id="consultation-table">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider w-32">Date</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Doctor</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Visit Summary</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {history.length > 0 ? (
                  history.map((appt) => {
                    const dateObj = new Date(appt.date);
                    const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                    
                    return (
                      <tr key={appt.id} className="hover:bg-slate-50/80 transition-colors group">
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className="text-sm font-medium text-slate-900 block">{formattedDate}</span>
                          <span className="text-xs text-slate-500">{appt.time}</span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mr-3">
                              {appt.doctorName.substring(0,2).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">{appt.doctorName}</p>
                              <p className="text-xs text-slate-500">{appt.type}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <p className="text-sm text-slate-600 line-clamp-2 max-w-md">
                            {appt.description}
                          </p>
                        </td>
                        <td className="px-6 py-5 text-right whitespace-nowrap">
                          <div className="flex justify-end gap-2">
                            <button className="text-blue-500 hover:text-blue-700 font-medium text-sm px-3 py-1.5 rounded-md hover:bg-blue-50 transition-all">Notes</button>
                            <button className="text-slate-600 hover:text-slate-900 font-medium text-sm px-3 py-1.5 rounded-md hover:bg-slate-100 transition-all">Rx</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-8 text-center text-slate-500">
                      No consultation history found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav aria-label="Pagination" className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
            <div className="hidden sm:block">
              <p className="text-sm text-slate-600">
                Showing <span className="font-semibold">1</span> to <span className="font-semibold">4</span> of <span className="font-semibold">24</span> entries
              </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end gap-3">
              <button disabled className="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors disabled:opacity-50">
                Previous
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                Next
              </button>
            </div>
          </nav>
        </section>

        {/* Footer Summary */}
        <footer className="mt-8 text-center bg-transparent border-none shadow-none">
          <p className="text-xs text-slate-400">
            © 2023 HealthCare Portal. All medical records are encrypted and stored securely.
            <br />
            For emergencies, please call 911 immediately.
          </p>
        </footer>
      </main>
    </DashboardLayout>
  );
};

export default PatientConsultationHistory;
