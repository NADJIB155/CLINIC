import React, { useState } from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';

const PatientReports = () => {
  const [downloading, setDownloading] = useState(null);
  const [viewing, setViewing] = useState(null);

  const reports = [
    { id: 1, name: 'Complete Blood Count (CBC)', date: 'Oct 10, 2023', type: 'Lab Result', status: 'Available', doctor: 'Dr. Sarah Jenkins' },
    { id: 2, name: 'Lipid Panel', date: 'Sep 15, 2023', type: 'Lab Result', status: 'Available', doctor: 'Dr. Robert Smith' },
    { id: 3, name: 'Chest X-Ray', date: 'Aug 02, 2023', type: 'Imaging', status: 'Available', doctor: 'Dr. Emily Lee' },
    { id: 4, name: 'ECG Report', date: 'Jun 20, 2023', type: 'Diagnostic', status: 'Available', doctor: 'Dr. Robert Smith' },
  ];

  const handleDownload = (id) => {
    setDownloading(id);
    setTimeout(() => {
      setDownloading(null);
      setViewing(reports.find(r => r.id === id));
    }, 1200);
  };

  return (
    <DashboardLayout title="My Reports" userRole="Patient" userName="John Doe" userTitle="Patient ID: #8821">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">Lab Results & Imaging</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold hover:underline">Request Records</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
            <tr>
              <th className="p-4 font-semibold">Report Name</th>
              <th className="p-4 font-semibold hidden md:table-cell">Date</th>
              <th className="p-4 font-semibold hidden sm:table-cell">Type</th>
              <th className="p-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
             {reports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-slate-900">{report.name}</p>
                    <p className="text-xs text-slate-500 md:hidden mt-1">{report.date} • {report.type}</p>
                  </td>
                  <td className="p-4 text-sm text-slate-600 hidden md:table-cell">{report.date}</td>
                  <td className="p-4 hidden sm:table-cell">
                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-bold border border-blue-100">{report.type}</span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleDownload(report.id)}
                      disabled={downloading !== null}
                      className={`font-semibold text-sm border px-3 py-1.5 rounded-lg transition-all flex items-center justify-center gap-2 ml-auto w-28
                        ${downloading === report.id ? 'bg-blue-600 text-white border-blue-600' : 
                          downloading ? 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed hidden md:flex' : 
                          'text-blue-600 border-slate-200 hover:border-blue-200 hover:bg-blue-50'}
                      `}
                    >
                      {downloading === report.id ? (
                        <>
                          Processing
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                          View
                        </>
                      )}
                    </button>
                  </td>
                </tr>
             ))}
          </tbody>
        </table>
      </div>

       {/* Document Viewer Modal */}
       {viewing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-4 md:p-6 bg-slate-900 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold truncate pr-4">{viewing.name}</h2>
                  <p className="text-xs text-slate-300">Authorized by {viewing.doctor} • {viewing.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                 <button className="hidden md:flex bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold items-center gap-2 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Download
                 </button>
                 <button onClick={() => setViewing(null)} className="text-slate-400 hover:text-white bg-white/5 hover:bg-red-500/20 p-2.5 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            </div>
            
            {/* Modal Body (Fake PDF Preview) */}
            <div className="p-6 md:p-8 bg-slate-100 flex-1 overflow-y-auto custom-scrollbar">
               <div className="max-w-2xl mx-auto bg-white min-h-[600px] shadow-sm p-8 md:p-12">
                   {/* Clinical Header */}
                   <div className="flex justify-between border-b-2 border-slate-900 pb-6 mb-8">
                      <div>
                         <h1 className="text-2xl font-black text-blue-600 tracking-tight">MedFlow Clinic</h1>
                         <p className="text-sm text-slate-500 mt-1">123 Health Avenue, Medical District</p>
                      </div>
                      <div className="text-right">
                         <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest">{viewing.type}</h2>
                         <p className="text-sm font-medium text-slate-500 mt-1">{viewing.date}</p>
                      </div>
                   </div>

                   {/* Patient Info */}
                   <div className="grid grid-cols-2 gap-8 mb-8">
                       <div>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Patient Information</p>
                          <p className="font-bold text-slate-900">John Doe (ID: #8821)</p>
                          <p className="text-sm text-slate-600">DOB: 11/24/1985 (38y)</p>
                       </div>
                       <div>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Referring Physician</p>
                          <p className="font-bold text-slate-900">{viewing.doctor}</p>
                          <p className="text-sm text-slate-600">Department of {viewing.type === 'Imaging' ? 'Radiology' : 'Pathology'}</p>
                       </div>
                   </div>

                   {/* Fake Results Table */}
                   <div className="mb-8">
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-3">Clinical Findings</p>
                      <table className="w-full text-sm text-left border">
                        <thead className="bg-slate-50 border-b">
                          <tr>
                            <th className="p-3">Test / Measurement</th>
                            <th className="p-3">Result</th>
                            <th className="p-3">Reference Range</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr><td className="p-3 font-medium">Hemoglobin (Hb)</td><td className="p-3 text-green-600 font-bold">14.2 g/dL</td><td className="p-3 text-slate-500">13.8 - 17.2 g/dL</td></tr>
                          <tr><td className="p-3 font-medium">White Blood Cell Count</td><td className="p-3 text-green-600 font-bold">7.5 x10^9/L</td><td className="p-3 text-slate-500">4.5 - 11.0 x10^9/L</td></tr>
                          <tr><td className="p-3 font-medium">Total Cholesterol</td><td className="p-3 text-amber-600 font-bold">210 mg/dL</td><td className="p-3 text-slate-500">&lt; 200 mg/dL</td></tr>
                          <tr><td className="p-3 font-medium">Fasting Glucose</td><td className="p-3 text-green-600 font-bold">92 mg/dL</td><td className="p-3 text-slate-500">70 - 99 mg/dL</td></tr>
                        </tbody>
                      </table>
                   </div>

                   {/* Comments */}
                   <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Physician Notes</p>
                      <p className="text-sm text-slate-700 leading-relaxed italic border-l-4 border-blue-200 pl-4 py-1">
                        Results are generally within normal limits. Slightly elevated cholesterol noted, recommend dietary adjustments and re-test in 6 months.
                      </p>
                   </div>
               </div>
            </div>
            
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default PatientReports;
