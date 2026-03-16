import React from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';

const PatientDoctors = () => {
  const doctors = [
    { name: 'Dr. Sarah Jenkins', spec: 'Neurology', exp: '15 Yrs' },
    { name: 'Dr. Robert Smith', spec: 'Cardiology', exp: '12 Yrs' },
    { name: 'Dr. Emily Lee', spec: 'Pediatrics', exp: '8 Yrs' },
    { name: 'Dr. Maria Garcia', spec: 'Dermatology', exp: '10 Yrs' },
    { name: 'Dr. David Chen', spec: 'Orthopedics', exp: '20 Yrs' },
  ];

  return (
    <DashboardLayout title="Find a Doctor" userRole="Patient" userName="John Doe" userTitle="Patient ID: #8821">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Search Specialists</h2>
        <div className="flex gap-4">
          <input type="text" placeholder="Specialty, Name, or Condition" className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">Search</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {doctors.map((doc, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-slate-200 rounded-full mb-4 border-4 border-blue-50 overflow-hidden flex items-center justify-center text-slate-400 font-bold text-2xl">
              {doc.name.substring(4,6).toUpperCase()}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{doc.name}</h3>
            <p className="text-sm font-semibold text-blue-600 mb-1">{doc.spec}</p>
            <p className="text-xs text-slate-500 mb-6">{doc.exp} Experience</p>
            <button className="w-full py-2.5 bg-slate-50 text-blue-700 rounded-xl text-sm font-bold border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default PatientDoctors;
