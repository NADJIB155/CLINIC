import React from 'react';

const StatCard = ({ title, value, change, changeType, icon }) => {
  const getChangeColor = () => {
    switch(changeType) {
      case 'positive': return 'text-emerald-500';
      case 'negative': return 'text-rose-500';
      case 'neutral': default: return 'text-slate-400';
    }
  };

  const getIconBg = () => {
    switch(title) {
      case 'Total Patients': return 'bg-blue-50 text-blue-600';
      case 'Appointments Today': return 'bg-purple-50 text-purple-600';
      case 'Avg. Consultation Time': return 'bg-amber-50 text-amber-600';
      case 'Pending Reports': return 'bg-rose-50 text-rose-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg ${getIconBg()}`}>
          {icon}
        </div>
        <span className={`${getChangeColor()} text-sm font-semibold`}>{change}</span>
      </div>
      <p className="text-slate-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
    </div>
  );
};

export default StatCard;
