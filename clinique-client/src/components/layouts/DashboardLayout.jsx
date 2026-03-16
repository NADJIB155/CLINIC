import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  CalendarIcon, 
  UsersIcon, 
  DocumentTextIcon, 
  MagnifyingGlassIcon,
  BellIcon
} from '@heroicons/react/24/outline';

const DashboardLayout = ({ children, title = 'Dashboard', userRole = 'Doctor', userName = 'Dr. Sarah Jenkins', userTitle = 'Neurologist', avatarUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjx0sSwr6m_jI0yCXr5_BQ7T8cL-GISzgFKBzmQfMB8dEWl8Q62uXN23r1w7y2FaDP2FEv6TJmuEupajZiP_ty1RkzgiMt1ZU3I2h44OKFUB7sPl-nrkltxMTOX_n_ZuD-PN-BKth3P7QspZ9LbtBgSlIuknwNIDf2ZiIz-9LPBKbKABTNq6PvpB9CnsIkik0l1xwxSyqlli7F1NCGRtupkV_vkdaMwcCiIbKLrkXnOiNpYNmeEn9ACknGk14DnnnNS8oXrs_aFEA' }) => {
  const basePath = userRole.toLowerCase() === 'doctor' ? '/doctor' : '/patient';

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800">
      {/* SideNavigation */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
            <span>MedFlow</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          <NavLink 
            to={`${basePath}/dashboard`} 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <HomeIcon className="w-5 h-5" />
            Dashboard
          </NavLink>
          
          <NavLink 
            to={`${basePath}/${userRole.toLowerCase() === 'doctor' ? 'calendar' : 'health-record'}`} 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <CalendarIcon className="w-5 h-5" />
            {userRole.toLowerCase() === 'doctor' ? 'Schedule' : 'Health Record'}
          </NavLink>
          
          <NavLink 
            to={`${basePath}/${userRole.toLowerCase() === 'doctor' ? 'patients' : 'consultations'}`} 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <UsersIcon className="w-5 h-5" />
            {userRole.toLowerCase() === 'doctor' ? 'Patients' : 'Consultations'}
          </NavLink>

          <NavLink 
            to={`${basePath}/reports`} 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <DocumentTextIcon className="w-5 h-5" />
            Reports
          </NavLink>

          {userRole.toLowerCase() === 'doctor' && (
            <NavLink 
              to={`${basePath}/diseases`} 
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              Knowledge Base
            </NavLink>
          )}
        </nav>
        
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-2">
            <img alt="User Avatar" src={avatarUrl} className="w-10 h-10 rounded-full border border-slate-200 object-cover" />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">{userName}</p>
              <p className="text-xs text-slate-500 truncate">{userTitle}</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-slate-800">{title}</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-blue-500" 
              />
              <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            </div>
            
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <BellIcon className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
