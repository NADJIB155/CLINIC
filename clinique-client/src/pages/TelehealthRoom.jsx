import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TelehealthRoom = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* Top Navigation Bar */}
      <header className="flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-3xl">medical_services</span>
          </div>
          <div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">HealthSync <span className="text-primary">Live</span></h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Telehealth Session #88291</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end mr-4">
            <p className="text-sm font-semibold">Dr. Sarah Jenkins</p>
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
              <span className="size-2 rounded-full bg-green-500"></span> 00:14:22
            </p>
          </div>
          <button className="flex size-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="flex size-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Records (Doctor View) */}
        <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase text-slate-400 tracking-widest mb-4">Patient Profile</h3>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <div className="size-12 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArbn3x4lH8Idzzgjw9-ldTSYXeFkHre3jWVFvHm2gCIp8AvYAekIosA-k3VZQAz1eBPGwulmNypku_MWutjqUHa9Se341BH83QmbEj8F_MoOXoXmpVRXgg_hTZiChrAEzANfl2eNh0yvKoBo_tFQd16c3pT3O1nP6rOwlACkl6VNADEInuahlzR1VYrXOoR85ys7PUJXe1XHTowE8r2hu_tli5Uz0xSjiva4fMTJqVJV81ZYLdMN4jjzQCQ2RmB-a5YbUBWz_8c1M" alt="Patient profile" />
                </div>
                <div>
                  <p className="font-bold text-sm">Elena Rodriguez</p>
                  <p className="text-xs text-slate-500">Age: 32 | Female</p>
                </div>
              </div>
            </div>
            <nav className="space-y-1">
              <Link className="flex items-center gap-3 px-3 py-3 rounded-xl bg-primary text-white font-medium" to="/records/elena-rodriguez">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>folder_shared</span>
                <span className="text-sm">Medical Records</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium" to="#">
                <span className="material-symbols-outlined">history</span>
                <span className="text-sm">Visit History</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium" to="#">
                <span className="material-symbols-outlined">pill</span>
                <span className="text-sm">Prescriptions</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium" to="#">
                <span className="material-symbols-outlined">monitoring</span>
                <span className="text-sm">Vitals & Labs</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Center: Video Area */}
        <section className="relative flex flex-1 flex-col bg-slate-100 dark:bg-slate-900 p-4">
          <div className="relative flex-1 overflow-hidden rounded-2xl bg-slate-200 dark:bg-black shadow-inner">
            {/* Main Video Feed (Patient) */}
            <img className="absolute inset-0 h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKV0S3AnTe2bOSBwNB7oqmyzBSiryRMi5wgMAVTZzQ3g_NrUPDi_umrBcjN2lHr4W4K2-n7P_AwOejBSuSfaBAXBZItbCyI6xRlT5xlAZuV5E68XrmnpnVDB9XyeFB9BQpThCStOytOlyaAAnJnP8-JEL8zAmafopJ1z77ri7Zu3XObvqbZ-R9I13vJ1GRiKjz4pTGGUJrg2cOCO0lGMedaTGZmFrl16DonV6gSfeAQqOCeOf8pTp7nXJUQw0BrxQl0vfkIhiVgow" alt="Patient video feed" />
            
            {/* Top Overlay Info */}
            <div className="absolute top-4 left-4 z-10">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-white/10">
                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider">Elena Rodriguez (Patient)</span>
              </div>
            </div>
            
            {/* Picture-in-Picture (Provider) */}
            <div className="absolute bottom-6 right-6 w-48 aspect-[3/4] md:w-64 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl z-20 bg-slate-800">
              <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4J3ElGY9qYWr9FAoeCuX1rH_o3VTXxrZ2TuGOW8ytfbs-LoYOxuaThkQKmsWb8AsuZdcrizxiUd2tzLqCWyAUaA1pXrBsinmEVmgem3aJAUh0uehAsUyHV1Nsl7vQmvrYT7FAj7x32XRSFzLrE64zE2HIafeoc2bO7vT6KmPPL8l60FFo7OEnMmbZaayEQtdKbetq1J3JYJDAN3MCoPNjNDotEpbvNYCflDhOiSrsWyZYusX_KBrZtBrohONWd2NvURxy0jtNYlU" alt="Doctor video feed" />
              <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-bold">YOU</div>
            </div>

            {/* Call Controls Floating Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900/80 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/10 z-30">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className={`size-12 flex items-center justify-center rounded-full text-white transition-colors ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-slate-700 hover:bg-slate-600'}`}
              >
                <span className="material-symbols-outlined">{isMuted ? 'mic_off' : 'mic'}</span>
              </button>
              <button 
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`size-12 flex items-center justify-center rounded-full text-white transition-colors ${isVideoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-slate-700 hover:bg-slate-600'}`}
              >
                <span className="material-symbols-outlined">{isVideoOff ? 'videocam_off' : 'videocam'}</span>
              </button>
              <button className="size-12 flex items-center justify-center rounded-full bg-slate-700 text-white hover:bg-slate-600 transition-colors">
                <span className="material-symbols-outlined">present_to_all</span>
              </button>
              <button className="size-12 flex items-center justify-center rounded-full bg-slate-700 text-white hover:bg-slate-600 transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
              <div className="h-8 w-px bg-slate-700 mx-2"></div>
              <button className="h-12 px-6 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors font-bold gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call_end</span>
                <span className="hidden sm:inline">End Session</span>
              </button>
            </div>
          </div>
        </section>

        {/* Right Sidebar: Interaction Tabs */}
        <aside className="hidden xl:flex w-80 flex-col border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
          <div className="flex border-b border-slate-200 dark:border-slate-800 shrink-0">
            <button className="flex-1 py-4 text-sm font-bold border-b-2 border-primary text-primary">Chat</button>
            <button className="flex-1 py-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">Info</button>
            <button className="flex-1 py-4 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">Notes</button>
          </div>

          {/* Chat View */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Incoming */}
              <div className="flex flex-col gap-1 items-start">
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm max-w-[85%]">
                  Hello Dr. Jenkins, I've been feeling a bit of chest tightness since this morning.
                </div>
                <span className="text-[10px] text-slate-400 ml-1">10:02 AM</span>
              </div>
              {/* Outgoing */}
              <div className="flex flex-col gap-1 items-end">
                <div className="bg-primary/10 border border-primary/20 text-slate-800 dark:text-slate-100 p-3 rounded-2xl rounded-tr-none text-sm max-w-[85%]">
                  I understand. Have you experienced any dizziness or nausea alongside the tightness?
                </div>
                <span className="text-[10px] text-slate-400 mr-1">10:05 AM</span>
              </div>
            </div>

            {/* Quick Note Entry (Always visible for doctor) */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
              <p className="text-[10px] font-bold uppercase text-primary mb-2 tracking-widest">Live Consultation Notes</p>
              <textarea className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm p-3 focus:ring-primary focus:border-primary resize-none" placeholder="Type clinical notes here..." rows={4}></textarea>
            </div>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-1">
                <input className="flex-1 bg-transparent border-none text-sm focus:ring-0 py-2" placeholder="Type a message..." type="text" />
                <button className="text-primary p-1 hover:bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default TelehealthRoom;
