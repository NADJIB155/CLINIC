import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const ValidationCard = ({ id, patientName, requestTime, avatarUrl }) => {
  const { handleValidationAction } = useData();
  const [loading, setLoading] = useState(false);

  const performAction = async (action) => {
    setLoading(true);
    await handleValidationAction(id, action);
    setLoading(false);
  };

  if (status !== 'pending') {
    return (
      <div className="p-4 bg-slate-50 opacity-50 rounded-lg border border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img alt="Patient" className="w-8 h-8 rounded-full" src={avatarUrl} />
          <div>
            <p className="text-sm font-semibold">{patientName}</p>
            <p className="text-xs text-slate-500 capitalize">{status}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-3">
      <div className="flex items-center gap-3">
        <img alt="Patient" className="w-8 h-8 rounded-full" src={avatarUrl} />
        <div>
          <p className="text-sm font-semibold">{patientName}</p>
          <p className="text-xs text-slate-500">Requested {requestTime}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => performAction('approved')}
          disabled={loading}
          className="flex-1 bg-blue-600 text-white text-xs font-semibold py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Approve'}
        </button>
        <button 
          onClick={() => performAction('declined')}
          disabled={loading}
          className="flex-1 bg-white border border-slate-200 text-slate-600 text-xs font-semibold py-2 rounded hover:bg-slate-50 transition-colors disabled:opacity-50"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default ValidationCard;
