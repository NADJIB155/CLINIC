import React from 'react';

const AppointmentCard = ({ time, patientName, type, description }) => {
  const getTypeColor = () => {
    switch(type.toLowerCase()) {
      case 'check-up': return 'bg-blue-100 text-blue-700';
      case 'consultation': return 'bg-purple-100 text-purple-700';
      case 'urgent': return 'bg-amber-100 text-amber-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors">
      <div className="w-20 text-sm font-medium text-slate-400 pt-1">{time}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-slate-800">{patientName}</h4>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor()}`}>{type}</span>
        </div>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-colors" title="Edit Appointment">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
