import React, { useState } from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';

const DoctorReports = () => {
  const [generating, setGenerating] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeReport, setActiveReport] = useState(null);

  const handleGenerate = (reportName) => {
    setGenerating(reportName);
    // Simulate API delay
    setTimeout(() => {
      setGenerating(null);
      setActiveReport(reportName);
      setShowModal(true);
    }, 1500);
  };

  const reports = [
    {
      id: 'outcomes',
      title: 'Patient Outcomes',
      desc: 'Monthly aggregate of patient recovery rates, readmissions, and satisfaction scores.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>,
      colorClass: 'bg-blue-50 text-blue-600',
      mockData: 'Overall recovery rate increased by 4.2% this month. Patient satisfaction averages 4.8/5 stars across 124 recorded surveys. Readmission rate holding stable at 1.1%.'
    },
    {
      id: 'inventory',
      title: 'Inventory Usage',
      desc: 'Clinic supplies, medication distribution, and reordering history limits.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>,
      colorClass: 'bg-green-50 text-green-600',
      mockData: 'Critical alert: Level 1 Trauma supplies at 14% capacity. Regular reorder processed for Amoxicillin and Ibuprofen. Monthly budget variance: -2.3%.'
    },
    {
      id: 'revenue',
      title: 'Revenue Analytics',
      desc: 'Financial overview of consultations, diagnostics, and periodic billing cycles.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>,
      colorClass: 'bg-purple-50 text-purple-600',
      mockData: 'Q3 Diagnostics revenue up 12% YoY. Outstanding patient balances reduced by $4,200 via automated follow-ups. Insurance claim rejection rate dropped to 3%.'
    },
    {
      id: 'compliance',
      title: 'Compliance & Audits',
      desc: 'Status of staff certifications, internal policies, and clinical standard audits.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>,
      colorClass: 'bg-orange-50 text-orange-600',
      mockData: 'All active staff HIPAA certifications verified. 3 nurses require BLS renewal within 30 days. Quarterly hygiene audit passed with 98% compliance.'
    }
  ];

  return (
    <DashboardLayout title="Clinical Reports" userRole="Doctor" userName="Dr. Sarah Jenkins" userTitle="Neurologist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${report.colorClass}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {report.icon}
                </svg>
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">{report.title}</h3>
            <p className="text-sm text-slate-500 mb-6 flex-1 min-h-[40px]">{report.desc}</p>
            
            <button 
              onClick={() => handleGenerate(report.id)}
              disabled={generating !== null}
              className={`w-full border py-2.5 rounded-xl font-bold text-sm transition-all focus:outline-none flex items-center justify-center gap-2
                ${generating === report.id ? 'bg-blue-600 text-white border-blue-600 opacity-90 cursor-wait' : 
                  generating ? 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed hidden md:flex' : 
                  'bg-slate-50 text-blue-600 border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600'}
              `}
            >
              {generating === report.id ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Data...
                </>
              ) : 'Generate Report'}
            </button>
          </div>
        ))}
      </div>

      {/* Report Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {reports.filter(r => r.id === activeReport).map(report => (
              <div key="modal-content">
                <div className={`p-6 md:p-8 ${report.colorClass.split(' ')[0]} border-b border-black/5`}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center ${report.colorClass.split(' ')[1]}`}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{report.icon}</svg>
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-slate-900">{report.title}</h2>
                        <p className="text-sm font-medium text-slate-700 mt-1">Generated: {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                    <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-700 bg-white/50 hover:bg-white p-2 rounded-full transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3">Executive Summary</h4>
                    <p className="text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100">{report.mockData}</p>
                  </div>
                  
                  {/* Fake visualization blocks */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="h-24 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-slate-800">14%</span>
                      <span className="text-xs font-semibold text-slate-500">Variance</span>
                    </div>
                    <div className="h-24 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-slate-800">12</span>
                      <span className="text-xs font-semibold text-slate-500">Incidents</span>
                    </div>
                     <div className="h-24 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center">
                      <span className={`text-2xl font-black ${report.colorClass.split(' ')[1]}`}>98%</span>
                      <span className="text-xs font-semibold text-slate-500">Health</span>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-slate-100">
                    <button onClick={() => setShowModal(false)} className="px-6 py-2.5 font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">Close</button>
                    <button className="px-6 py-2.5 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-200 flex items-center gap-2">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                       Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DoctorReports;
