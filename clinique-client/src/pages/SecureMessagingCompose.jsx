import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SecureMessagingCompose = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white">health_and_safety</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">HealthSync</h1>
        </div>
        <div className="px-4 mb-6">
          <div className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <img alt="Dr. Smith" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcGo6sQ4ZsZDGjYqquoa_l427B17DqSMZ415Lpn27hmK_7a5oaX98r6vNnJ4BptvdPRyu-0j77TOh8rsVYeWIRkQZeNqIjzu6YKtiZjnrOneK1eSJ2IMuqhmHNH6HY1eLRpKvA0npO5FE8O-2xLBwKLUmOB94-0QeeDeSaSSDtq7o5nIHjcLVgNJ11Z2EVtmM4yyfIJGpKVMjfGgx5EGJECywp8l254Kn89SYfkUH-jh2x8vfGRRaX9znSWUzO2sJNh7q0oWOjYjw" />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">Dr. Julian Smith</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Cardiologist</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-2 space-y-1">
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" to="/">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" to="/patients">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-medium">Patients</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-primary bg-primary/10 border-l-4 border-primary rounded-r-lg transition-colors" to="/messages">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
            <span className="font-medium">Messages</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" to="/schedule">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-medium">Schedule</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" to="/reports">
            <span className="material-symbols-outlined">description</span>
            <span className="font-medium">Reports</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Link to="/messages/compose" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all">
            <span className="material-symbols-outlined text-sm">edit</span>
            New Message
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Link to="/messages" className="hover:text-primary transition-colors">Messages</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-slate-900 dark:text-white font-medium">New Message</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Search records..." type="text" />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative flex items-center justify-center">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Compose Secure Message</h2>
                <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-lg">lock</span>
                  End-to-end encrypted medical communication
                </p>
              </div>
            </div>

            {/* Composition Form */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              {/* Recipient Selection */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Recipient</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person_search</span>
                    <select 
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer outline-none" 
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                    >
                      <option disabled value="">Search patient by name or medical record number (MRN)</option>
                      <option value="1">Sarah Jenkins (MRN: 4829-X)</option>
                      <option value="2">Michael Chen (MRN: 9931-A)</option>
                      <option value="3">Robert Wilson (MRN: 1102-L)</option>
                      <option value="4">Elena Rodriguez (MRN: 7754-C)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                  <input 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="e.g., Follow-up on recent Lab Results" 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>

              {/* Formatting Toolbar */}
              <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-1 border-b border-slate-100 dark:border-slate-800">
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">format_bold</span>
                </button>
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">format_italic</span>
                </button>
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">format_list_bulleted</span>
                </button>
                <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">attach_file</span>
                </button>
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">image</span>
                </button>
              </div>

              {/* Message Body */}
              <div className="p-6">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 block">Message Body</label>
                <textarea 
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-none rounded-xl focus:ring-0 transition-all resize-none text-slate-800 dark:text-slate-200 outline-none" 
                  placeholder="Write your secure message here..." 
                  rows="12"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors">Discard</button>
                  <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors">Save Draft</button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 mr-4">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    HIPAA Compliant
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20 transition-all">
                    Send Message
                    <span className="material-symbols-outlined text-lg">send</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Sidebar/Context Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-primary/10 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <h4 className="font-bold text-slate-900 dark:text-white">Message Guidelines</h4>
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
                  <li>Always verify the patient identity via MRN before sending.</li>
                  <li>Include clear instructions for follow-up actions.</li>
                  <li>Avoid sharing unconfirmed results via message.</li>
                </ul>
              </div>
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary">history</span>
                  <h4 className="font-bold text-slate-900 dark:text-white">Recent Contacts</h4>
                </div>
                <div className="flex gap-2">
                  <img alt="Sarah J." className="w-10 h-10 rounded-full border-2 border-primary/10 cursor-pointer hover:border-primary transition-all object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcI11TDlUuoBCIqf3yvlpjcNqYuxVk0qTd4X0wUD9tKUW-u4KfavkHDpBgtOdEUrWRcl1DZwpdX81DFyUhtBtpKhvXMltsOziIOzlpuqkjzyBH43V27lFEMUbzmlaPuJnlD6fBmMKkMagZXCFgkkPC40clbEuSlVoNx-y0OL61REEq5Nh61zsvQyvB6nQpwdZtb7Hz-LWIKYYeeLMAFJBdxs1ia8UtiYMFbB1gIMzedCb2LXO8l774zY-b19TY5TWlLD_3hjO2VPI" />
                  <img alt="Michael C." className="w-10 h-10 rounded-full border-2 border-primary/10 cursor-pointer hover:border-primary transition-all object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD38zZzPZA8wzQhbAxz5KrGev2xNm7b8nw9CCrIsmI4dTfbuJtJImlU1F5-BGOnSTZWJDVkugKMMWGR5jINfgfgUQJcCoq3nyROjtK5w3UCi4SBZOhMymos_rGMgpO5YdxyyVqKNc93MyeWvo4falkqCbVmOcTcochCzG_jNPMfifJYFm5kgg6OPSC43XCAsQZGN197UZ0tOg2WOONLUfB0PHvLS5ZvlLUXeyk7N5fCEpZX4gBWyK_H5rBLEuAS9SrNEJzhm_N1_hw" />
                  <img alt="Robert W." className="w-10 h-10 rounded-full border-2 border-primary/10 cursor-pointer hover:border-primary transition-all object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj_Pw2iU_1gemy3Rqd9l24KiKdI2hs6lJaxq-OrojFdA799ms4esZuAfez4kVYy3yyCPeSCr3JDywUIOGj7BqzkcfYkW4AA1XWkiPIPNR6Tro2LQMpVRdPHrl6FsZGe-uA0kwY2gDVy5pjKHo3P9vAeY_BChRjt9LV0vT4Wcc4tZhpRDXyzgcf-RNEzJLQ8JNfWH1AM1cl9a-Z_O0fxbDoUtt5mnPytHgUNFd12R2gHij_T76jmEhxyxrMA--fLAZcn0CyNUuhDj4" />
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-200 transition-all">
                    <span className="material-symbols-outlined text-lg">add</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default SecureMessagingCompose;
