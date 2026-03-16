import React from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';
import { useData } from '../context/DataContext';

const DoctorPatients = () => {
  const { appointments, loading } = useData();

  if (loading) {
    return (
      <DashboardLayout title="My Patients" userRole="Doctor" userName="Dr. Sarah Jenkins" userTitle="Neurologist">
        <div className="flex h-64 items-center justify-center">
          <p className="text-slate-500 font-medium">Loading patients...</p>
        </div>
      </DashboardLayout>
    );
  }

  // Get unique patients from appointments mock data
  const uniquePatients = [...new Map(appointments.map(item => [item.patientName, item])).values()];

  return (
    <DashboardLayout title="My Patients" userRole="Doctor" userName="Dr. Sarah Jenkins" userTitle="Neurologist">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">Patient Directory</h2>
          <div className="relative">
            <input type="text" placeholder="Search patients..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            <span className="material-symbols-outlined absolute left-3 top-2 text-slate-400">search</span>
          </div>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500 uppercase">
              <th className="p-4 font-semibold">Patient Name</th>
              <th className="p-4 font-semibold">Last Visit</th>
              <th className="p-4 font-semibold">Condition</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uniquePatients.map((patient, index) => (
              <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-slate-900">{patient.patientName}</div>
                  <div className="text-xs text-slate-500">ID: #{8000 + index}</div>
                </td>
                <td className="p-4 text-sm text-slate-600">{patient.date || 'Oct 12, 2024'}</td>
                <td className="p-4 text-sm text-slate-600">{patient.description || 'General Checkup'}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Active</span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold hover:underline">View Record</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default DoctorPatients;
