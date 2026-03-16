import React, { useState } from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';

const PatientBooking = () => {
  const [step, setStep] = useState(1);

  return (
    <DashboardLayout title="Book Appointment" userRole="Patient" userName="John Doe" userTitle="Patient ID: #8821">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
        
        {/* Progress Tracker */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-10"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 -z-10 transition-all duration-300" style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}></div>
          
          <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white">1</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white transition-colors duration-300 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 border-2 border-slate-200'}`}>2</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white transition-colors duration-300 ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 border-2 border-slate-200'}`}>3</div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Select a Specialty</h2>
            <div className="grid grid-cols-2 gap-4">
              {['General Practice', 'Cardiology', 'Neurology', 'Dermatology', 'Pediatrics'].map((spec) => (
                <button key={spec} onClick={() => setStep(2)} className="p-4 border border-slate-200 rounded-xl text-left hover:border-blue-500 hover:bg-blue-50 transition-all">
                  <h3 className="font-bold text-slate-800">{spec}</h3>
                  <p className="text-xs text-slate-500 mt-1">Available today</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Select a Time</h2>
            <div className="grid grid-cols-3 gap-3">
              {['09:00 AM', '09:30 AM', '10:00 AM', '11:00 AM', '01:30 PM', '03:00 PM'].map((time) => (
                <button key={time} onClick={() => setStep(3)} className="p-3 border border-slate-200 rounded-lg text-center font-semibold text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                  {time}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="mt-8 text-sm font-semibold text-slate-500 hover:text-slate-800">← Back</button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Booking Confirmed!</h2>
            <p className="text-slate-500 mb-8">We've sent a confirmation email with details.</p>
            <button onClick={() => setStep(1)} className="bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition-colors">Book Another</button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default PatientBooking;
