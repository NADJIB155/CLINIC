import React, { useState } from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';
import { useData } from '../context/DataContext';

const DoctorSchedule = () => {
  const { appointments, loading } = useData();
  const [view, setView] = useState('list');
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));

  if (loading) {
    return (
      <DashboardLayout title="My Schedule" userRole="Doctor" userName="Dr. Sarah Jenkins" userTitle="Neurologist">
        <div className="flex h-64 items-center justify-center">
          <p className="text-slate-500 font-medium">Loading schedule...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="My Schedule" userRole="Doctor" userName="Dr. Sarah Jenkins" userTitle="Neurologist">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Appointments for {selectedDate}</h2>
            <p className="text-sm text-slate-500">You have {appointments.length} appointments scheduled today.</p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-1 rounded-xl">
            <button 
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${view === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'}`}
              onClick={() => setView('list')}
            >
              List
            </button>
            <button 
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${view === 'calendar' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'}`}
              onClick={() => setView('calendar')}
            >
              Calendar
            </button>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {view === 'list' ? (
            appointments.length > 0 ? (
              appointments.map((appt) => (
                <div key={appt.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow bg-slate-50 dark:bg-slate-800/30 group">
                  <div className="w-full sm:w-24 flex-shrink-0 text-center sm:border-r border-slate-200 dark:border-slate-700 sm:pr-4">
                    <p className="font-bold text-slate-900 dark:text-white">{appt.time.split(' - ')[0]}</p>
                    <p className="text-xs text-slate-500">30 min</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{appt.patientName}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{appt.type}</p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      appt.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                      appt.status === 'No Show' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 
                      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {appt.status || 'Scheduled'}
                    </span>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center p-12 text-slate-500 bg-slate-50 dark:bg-slate-800/20 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-4xl mb-2">event_busy</span>
                <p>No appointments scheduled for today.</p>
              </div>
            )
          ) : (
            <div className="text-center p-12 text-slate-500 bg-slate-50 dark:bg-slate-800/20 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-4xl mb-2">calendar_view_month</span>
              <p>Calendar view is under development.</p>
              <button 
                className="mt-4 text-primary font-bold hover:underline"
                onClick={() => setView('list')}
              >
                Switch back to List View
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorSchedule;
