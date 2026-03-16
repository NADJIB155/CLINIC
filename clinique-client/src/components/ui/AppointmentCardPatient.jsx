import React from 'react';

const AppointmentCardPatient = ({ dateMonth, dateDay, doctorName, doctorSpecialty, timeRange, colorClass }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
      <div className={`w-16 h-16 ${colorClass} rounded-xl flex items-center justify-center`}>
        <div className="text-center">
          <span className="block text-xs font-bold uppercase">{dateMonth}</span>
          <span className="block text-xl font-bold">{dateDay}</span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-slate-900 truncate">{doctorName}</h3>
        <p className="text-sm text-slate-500">{doctorSpecialty}</p>
        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {timeRange}
        </p>
      </div>
      <div className="flex gap-2">
        <button className="p-2 text-slate-400 hover:text-medical-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        </button>
        <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default AppointmentCardPatient;
