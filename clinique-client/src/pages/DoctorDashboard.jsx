import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layouts/DashboardLayout';
import StatCard from '../components/ui/StatCard';
import AppointmentCard from '../components/ui/AppointmentCard';
import ValidationCard from '../components/ui/ValidationCard';
import { UsersIcon, CalendarIcon, ClockIcon, DocumentTextIcon, BookOpenIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useData } from '../context/DataContext';

const DoctorDashboard = () => {
  const { stats, appointments, validations, fetchDashboardData, loading } = useData();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading || !stats) {
    return (
      <DashboardLayout title="Medical Dashboard">
        <div className="flex h-64 items-center justify-center">
          <p className="text-slate-500 font-medium">Loading Dashboard Data...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Medical Dashboard">
      {/* Key Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Patients" 
          value={stats.totalPatients} 
          change="+4%" 
          changeType="positive"
          icon={<UsersIcon className="w-6 h-6" />} 
        />
        <StatCard 
          title="Appointments Today" 
          value={stats.appointmentsToday.toString()} 
          change="+12%" 
          changeType="positive"
          icon={<CalendarIcon className="w-6 h-6" />} 
        />
        <StatCard 
          title="Avg. Consultation Time" 
          value={stats.avgConsultationTime} 
          change="Avg" 
          changeType="neutral"
          icon={<ClockIcon className="w-6 h-6" />} 
        />
        <StatCard 
          title="Pending Reports" 
          value={stats.pendingReports.toString()} 
          change="-2%" 
          changeType="negative"
          icon={<DocumentTextIcon className="w-6 h-6" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daily Schedule */}
        <section className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800">Today's Schedule</h2>
              <button className="text-blue-600 text-sm font-medium hover:underline">View Full Calendar</button>
            </div>
            
            <div className="divide-y divide-slate-100">
              {appointments.filter(appt => appt.doctorName === 'Dr. Sarah Jenkins').length > 0 ? (
                appointments.filter(appt => appt.doctorName === 'Dr. Sarah Jenkins').map((appt) => (
                  <AppointmentCard 
                    key={appt.id}
                    time={appt.time} 
                    patientName={appt.patientName} 
                    type={appt.type} 
                    description={appt.description} 
                  />
                ))
              ) : (
                <div className="p-6 text-center text-slate-500">No appointments scheduled for today.</div>
              )}
            </div>
          </div>

          {/* Medical Documentation (Quick Links) */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-800">Quick Access Resources</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/library" className="p-4 border border-slate-200 rounded-lg flex items-center gap-3 hover:bg-slate-50 transition-all group">
                <div className="p-2 bg-slate-100 text-slate-600 rounded group-hover:bg-blue-100 group-hover:text-blue-600">
                  <BookOpenIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Neurology Protocols</p>
                  <p className="text-xs text-slate-500">Latest updated guidelines 2024</p>
                </div>
              </Link>
              
              <Link to="/tools/interactions" className="p-4 border border-slate-200 rounded-lg flex items-center gap-3 hover:bg-slate-50 transition-all group">
                <div className="p-2 bg-slate-100 text-slate-600 rounded group-hover:bg-blue-100 group-hover:text-blue-600">
                  <PlusCircleIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Drug interaction database</p>
                  <p className="text-xs text-slate-500">Real-time prescription checker</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Pending Validations */}
        <section className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800">Pending Validations</h2>
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">3 NEW</span>
            </div>
            
            <div className="flex-1 p-6 space-y-4">
              {validations.length > 0 ? (
                validations.map((val) => (
                  <ValidationCard 
                    key={val.id}
                    id={val.id}
                    patientName={val.patientName}
                    requestTime={val.requestTime}
                    avatarUrl={val.avatarUrl}
                  />
                ))
              ) : (
                <div className="text-center text-slate-500 py-4">All validations processed!</div>
              )}
            </div>
            
            <div className="p-4 border-t border-slate-100">
              <button className="w-full text-center text-sm text-slate-500 hover:text-blue-600 font-medium py-2 transition-colors">
                View all requests
              </button>
            </div>
          </div>
        </section>

      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
