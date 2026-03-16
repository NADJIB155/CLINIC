import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/layouts/DashboardLayout';
import AppointmentCardPatient from '../components/ui/AppointmentCardPatient';
import { useData } from '../context/DataContext';

const PatientDashboard = () => {
  const { appointments, fetchDashboardData, loading } = useData();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout title="Patient Dashboard" userRole="Patient" userName="John Doe" userTitle="Patient ID: #8821">
        <div className="flex h-64 items-center justify-center">
          <p className="text-slate-500 font-medium">Loading your profile...</p>
        </div>
      </DashboardLayout>
    );
  }

  // Find appointments relevant to the patient dashboard view
  const upcomingAppointments = appointments.filter(appt => appt.patientName === 'John Doe');

  return (
    <DashboardLayout 
      title="Patient Dashboard" 
      userRole="Patient" 
      userName="John Doe" 
      userTitle="Patient ID: #8821" 
      avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDfUh8E8JVsDLDEaRLgm1eJ8yZ8X1XRCzyOyt8Wtyn_qbA5gQo_AieDGa_TMyXV9Dj5vT4vxZEY89-cLML48fxMNdogY0ZpNiC2LrxYn6QOKVQAPZsVwbCe5Aezs02HmK538SNRFiRF3NW1AYLKgLb8VhKMD3XBQa8lCdpHyPdN2mfAR4RsaIQGwW4yZz53cuJ2zfYBHRjhJJw-bHMK0pYYFeOPwqQs55NqGaYsuH87O5MpTDSeNOjMiNUVonIMwpZZQRvM8pIORuc"
    >
      <div className="space-y-8">
        
        {/* Welcome Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
          <div className="relative z-10 max-w-lg">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, John!</h1>
            <p className="text-slate-600 mb-6">Your health is our priority. You have {upcomingAppointments.length} appointments scheduled for this week. Stay on top of your medical journey.</p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/patient/booking" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Book New Appointment
              </Link>
              <Link to="/patient/consultations" className="bg-white text-blue-600 px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Consultation History
              </Link>
            </div>
          </div>
          
          {/* Decorative Image */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden md:block">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAScCsMtnZ2-M1Ryar10HRzK2I0UJe0ACuo795Km3KQECriKilSyDx7JF5iC40gVgquHiCoz95Xwz1G-VOGPYOi96v-OvVCc4QOye-yVItFUhtonaVaj_HbZTfjaqOJEfGOLfnYQ027lHOmUD6wKDh2-SRQnvOUlAE85DyX2q8bRIUgdGDyzsGkXvhdMfrjydqRO8z8sDVUUqXk-eHbMHRtVHeSIcAxecjQp_0rqyPOjhof_mGfCXE_KG5pPxgxfYtIc4PYFv22ne8" 
              alt="Medical Professional" 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
            />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Appointments Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Upcoming Appointments</h2>
              <Link to="/patient/consultations" className="text-blue-600 text-sm font-semibold hover:underline">View All</Link>
            </div>
            
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appt) => {
                // Parse the mock "date" into month and day for the specific UI component
                const dateObj = new Date(appt.date);
                const month = dateObj.toLocaleString('en-US', { month: 'short' });
                const day = dateObj.getDate().toString();

                return (
                  <AppointmentCardPatient 
                    key={appt.id}
                    dateMonth={month}
                    dateDay={day}
                    doctorName={appt.doctorName}
                    doctorSpecialty={appt.description}
                    timeRange={appt.time}
                    colorClass={appt.id % 2 === 0 ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}
                  />
                );
              })
            ) : (
                <div className="p-6 text-center text-slate-500 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  No upcoming appointments found.
                </div>
            )}
          </div>

          {/* Quick Stats / Sidebar widgets */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Health Overview</h2>
            
            {/* Health Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-50 text-red-500 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Heart Rate</p>
                  <p className="text-2xl font-bold text-slate-900">72 <span className="text-sm font-normal text-slate-400">bpm</span></p>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Within normal range</p>
            </div>

            {/* Recommendation Widget */}
            <div className="bg-blue-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold mb-2">Premium Support</h3>
                <p className="text-blue-200 text-sm mb-4">Get 24/7 access to medical consultants with Premium.</p>
                <button className="bg-white text-blue-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors">
                  Upgrade Now
                </button>
              </div>
              <svg className="absolute -bottom-8 -right-8 w-32 h-32 text-blue-800 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Featured Doctors */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Top Rated Specialists</h2>
            <Link to="/patient/doctors" className="text-blue-600 text-sm font-semibold hover:underline">See All</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Doctor Card 1 */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all text-center group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzktEfSTC2LzrllruiJHqEeDZvb9JJxNTNpdlKCiWIbHngnTdZfIaYTGg82uOsNf_galkur2o-XN36dgIfutB0Bd2ek-u4uOeuVovEzgwwft2nETKOa3YBCtlbDFhVRzp-AIh8g3TKPMSWUwAwWpdFzGOVdBUJKsbgZS5X0C-N3gYkMoWyuY_4q5rHxFfaloWFDgP-aUH1QPkv7EILG1fFM07-pfVpXpY6qx4v7rCaTfE7bEv9r0NxQBTwIjvImv10Kk8aamXrVUU" alt="Dr. Smith" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-slate-50 group-hover:border-blue-500 transition-colors" />
              <h4 className="font-bold text-slate-900">Dr. Robert Smith</h4>
              <p className="text-xs text-slate-500 mb-4">Neurologist • 12 yrs exp.</p>
              <button className="w-full py-2 bg-slate-50 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
                Book Visit
              </button>
            </div>
            
             {/* Doctor Card 2 */}
             <div className="bg-white p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all text-center group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAn7KqPhv_A7KX1eLXFzvNER_odKwH84apfTcB6ibWCAOheV4dapxLZWlQ-uT_jJhctxbaH_JP_P43IXOgGHhfYo2-h52G8Co05gcKm-tZR68YrGh9op7zJkeqi6qaoJOMtgE-FPHvbkoEYs6VUJ1QtevXfU8h6P7UfiYcbVbvcWZk_Rol3-wwuu9-uklJRY1_-lmtyPYkBs4vBW9MZGwOYRV_AOi0SmIjZ8hmwgFUKo9NhYLQzHQGnUe5fMuKetIC29SWLxfbrcs" alt="Dr. Lee" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-slate-50 group-hover:border-blue-500 transition-colors" />
              <h4 className="font-bold text-slate-900">Dr. Emily Lee</h4>
              <p className="text-xs text-slate-500 mb-4">Pediatrician • 8 yrs exp.</p>
              <button className="w-full py-2 bg-slate-50 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
                Book Visit
              </button>
            </div>

             {/* Doctor Card 3 */}
             <div className="bg-white p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all text-center group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsQRsWC5PI9qE2FzBDI40As1P-3bpu4TAPpw3GW5CugWgX54f3Ayeh5-ebwd-S3dPmoLN-A0xBBDfWQyMaCb-5ZlgBQLeP8xXZMGZ-bJS6eepFhGfI4v0Vn4m4VMLLPXtHeoZRozNuBnOBD4n9pCAkyxDNVgvSl0bPxuoYoaOPuePYmook3KTbAAimCxOOaZhaZF9DIECPJ8_39wPzsfuY5NLKn7jgJG-JOkW5DhLQYjRvQMlTRw2DH5SJ0X6z0Q31znygJ7qzpc0" alt="Dr. Garcia" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-slate-50 group-hover:border-blue-500 transition-colors" />
              <h4 className="font-bold text-slate-900">Dr. Maria Garcia</h4>
              <p className="text-xs text-slate-500 mb-4">Dermatologist • 15 yrs exp.</p>
              <button className="w-full py-2 bg-slate-50 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
                Book Visit
              </button>
            </div>

             {/* Doctor Card 4 */}
             <div className="bg-white p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all text-center group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSNbBX96ct8s-REDf7MS6DkoHQErvywR_JDodfsh73dvBjSZ-Mw1a-LriMCjPDXgPhmZZ1Msms9Fz7fMy4PfN2EWrNoubVAF-jGu95Cd6VlvY5RJ0S3Vd2AbzpiDbGtT4ZBPK1LVArb5RIa0XoZvU42guLczmC5pQ77eaDituIqjlHUkA85Vw5IZUvElj1vWD-iCOExBcotShRY8xujH78JoOwoKvNwFYzPb_d3mejctHQekRZErolwJwFBbEsS80_aKWXesIF1_M" alt="Dr. Chen" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-slate-50 group-hover:border-blue-500 transition-colors" />
              <h4 className="font-bold text-slate-900">Dr. David Chen</h4>
              <p className="text-xs text-slate-500 mb-4">Orthopedic • 10 yrs exp.</p>
              <button className="w-full py-2 bg-slate-50 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
                Book Visit
              </button>
            </div>
            
          </div>
        </section>

      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
