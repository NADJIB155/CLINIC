import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MedicalResourceLibraryArticle = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'helpful' or 'not-helpful'

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-4 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-4 text-primary">
              <div className="size-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-black leading-tight tracking-tight">HealthSync</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-9">
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/resources">Library</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/records">My Health</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/patients">Doctors</Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-slate-200 dark:border-slate-700">
                <div className="text-slate-400 flex items-center justify-center pl-4 rounded-l-xl bg-slate-50 dark:bg-slate-800">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border-none bg-slate-50 dark:bg-slate-800 h-full placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-sm font-normal" placeholder="Search resources..." defaultValue="" />
              </div>
            </label>
            <div className="flex gap-2">
              <button 
                className={`flex items-center justify-center rounded-xl h-10 w-10 transition-all ${isBookmarked ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary'}`}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
              </button>
              <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9fdVdTdY3Ztdhs9RfoI0nFGDR2iBM2mfyggmMwSUoK34PHKoAhNn8TZvXnVavV-rxijkV4D2a3HftucV6eqSd-z21zicGDm_UqsgSia6THSozD7XKaSTGVWgnatbsmKaj8kaLO2Bc_EY3-1aUWsFrrEmbDKZjsFqKN3czxU8VKxdy31bQMwYLuSs_o0rx59HAwtBkV0qD2XkYI6mrvKRi4D2sCgUaAVUhLGsawVJTVN6s1kl2wQ3nK4iPBG38cKpuxuwbjD-6AXg")' }}></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <Link className="text-primary text-sm font-medium hover:underline" to="/">Home</Link>
            <span className="text-slate-400 text-sm font-medium">/</span>
            <Link className="text-primary text-sm font-medium hover:underline" to="/resources">Library</Link>
            <span className="text-slate-400 text-sm font-medium">/</span>
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Cardiac Care</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <header className="mb-8">
                <h1 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4">
                  Recovering from Cardiac Surgery: A Comprehensive Guide
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfPNmmWWAiyEmwbeTdyohkD5Z5E3Vs5_j6v15O5DEroX7DMCnmd4KcfVR49q2llbQPRvoUoijMzHcpd0zJxeLp7RyC55-odc6vFxw4NBccKWxsyqH74M-brSmZM4vvhkJPjl3b1ZcWdztPM25ELnuHebPXVqyYxlIlVSikJ5eMyGzI4bERH5068tl_uZOZ7WyiRKutWFMAlfNTsWcKmB7mDywO0wWdTBV--RYJtt2L8HNmuYYC5qQ7bpSZYB907kQbq3n8UCScjss")' }}></div>
                  <div>
                    <p className="text-slate-900 dark:text-slate-100 font-bold">Dr. Elena Rodriguez</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Published Oct 12, 2023 • 12 min read</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm border-t border-slate-100 dark:border-slate-800 pt-4">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <p>Reviewed by the HealthSync Medical Board for clinical accuracy</p>
                </div>
              </header>

              <div className="rounded-2xl overflow-hidden mb-10 shadow-xl shadow-primary/5">
                <div className="w-full bg-center bg-no-repeat bg-cover min-h-[400px]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrexR_q6SJo0yS3vmkM7I_WOigF7QIFxYAx5y0awjAKya3B4Hf22bq94vS122Tj1zpReZ61OL2-tK12cj7nx8gdOGHysXjmvPsnS9i6xlaIXl63hTdqt7EzCVCxQwZXLsvmACO7WgDcKn19pxxK1mA_JpulWZz_dXgN1DTGM2hF396jDvaWeCrGoyIYwrq6n9qZVKsEIjDisp5meQrfrz4enX0LjHE_fKvY-C6KFFvRJVjZKDTX4_Ji7MNkQ6rfbmChUryk3Aig9Y")' }}></div>
              </div>

              <article className="prose max-w-none text-slate-700 dark:text-slate-300">
                <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium italic border-l-4 border-primary pl-6 mb-8">
                  "The recovery period after cardiac surgery is just as critical as the procedure itself. Understanding your body's signals and following a structured rehabilitation plan is key to long-term heart health."
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Initial Recovery: The First 48 Hours</h2>
                <p className="mb-4">
                  Immediately following cardiac surgery, patients are typically monitored in the Cardiovascular Intensive Care Unit (CVICU). During this time, the primary focus is on stabilizing vital signs and ensuring the new heart pathways are functioning correctly. You may feel drowsy and experience some chest discomfort.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Managing Incision Care</h2>
                <p className="mb-4">Keeping your incision clean and dry is vital to preventing infection. Follow these daily guidelines:</p>
                <ul className="list-disc pl-5 mb-4">
                  <li className="mb-2">Wash your hands thoroughly before touching the area.</li>
                  <li className="mb-2">Gently pat the area dry after showering; do not rub.</li>
                  <li className="mb-2">Avoid using lotions, powders, or ointments unless prescribed.</li>
                  <li className="mb-2">Monitor for redness, swelling, or unusual drainage.</li>
                </ul>

                <div className="my-10 p-8 rounded-2xl bg-primary/5 border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined">warning</span> Warning Signs to Watch For
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">Contact your surgical team immediately if you experience:</p>
                  <ul className="grid md:grid-cols-2 gap-2 list-none pl-0">
                    <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary"></span> Fever over 101°F (38.3°C)</li>
                    <li className="flex items-center gap-2"><span class="size-1.5 rounded-full bg-primary"></span> Shortness of breath at rest</li>
                    <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary"></span> Rapid or irregular heartbeat</li>
                    <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary"></span> Increased chest pain</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4">Physical Activity and Cardiac Rehab</h2>
                <p className="mb-4">
                  Movement is medicine. While you must avoid heavy lifting (usually anything over 5-10 lbs) for the first 6-8 weeks, light walking is highly encouraged. Walking helps prevent blood clots and improves lung function.
                </p>
                <p className="mb-4">
                  Most patients will be referred to a formal Cardiac Rehabilitation program. This supervised exercise and education program is proven to improve recovery outcomes and reduce the risk of future cardiac events.
                </p>
              </article>

              <section className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl text-center">
                  <h3 className="text-xl font-bold mb-4">
                    {feedback === 'helpful' ? 'Glad to hear it! Thank you for your feedback.' : 
                     feedback === 'not-helpful' ? 'Thank you for your feedback. We will work to improve this article.' : 
                     'Was this article helpful?'}
                  </h3>
                  {!feedback && (
                    <div className="flex gap-4">
                      <button 
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all group"
                        onClick={() => setFeedback('helpful')}
                      >
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-green-500">thumb_up</span>
                        <span>Yes, thanks!</span>
                      </button>
                      <button 
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all group"
                        onClick={() => setFeedback('not-helpful')}
                      >
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-red-500">thumb_down</span>
                        <span>Not really</span>
                      </button>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="font-bold text-lg mb-4">Patient Tools</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all font-bold">
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-outlined">picture_as_pdf</span>
                      Download PDF Guide
                    </span>
                    <span className="material-symbols-outlined text-sm">download</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all font-semibold">
                    <span className="material-symbols-outlined">print</span>
                    Print Article
                  </button>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="font-bold text-lg mb-6">Related Resources</h3>
                <div className="space-y-6">
                  <Link to="/resources/article" className="group block">
                    <div className="flex gap-4">
                      <div className="size-16 rounded-lg overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlLHBtQcWeEQcaFEaxKw2pmzC9hwlwiko5yBG1lV7FByyYRfraAI4MPaDW2XvOMkl_Kwek_zSyuS5kVuDylK_tvFCdZ0BW3Yaf6LO8mcwKrxwJngaeQoxFJqliHaNeaRwE4VrGbWmOjU5RWqmYEEetnzCj3LLu4qdzPgYMA9KtEHCs_3RwyQObGh45aKb4-zydf8XP9u1p5RPZzUZ5hkqU9RxNs-kI4nLRzd1nwHrfEFIAjCne1IEf7FpzO4YOcl5c_CrhspTlaKQ")' }}></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">Heart-Healthy Diet Post-Surgery</h4>
                        <p className="text-xs text-slate-500 mt-1">8 min read</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/resources/article" className="group block">
                    <div className="flex gap-4">
                      <div className="size-16 rounded-lg overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7fyCQUi2EonY0LdXadfU8TAqBXq2A-obRi5T4JhiaLkF8qN2C3aeSfRQfuh-ArRcj-kwtbwcA9X_eDqTFBz6pmkUZVyYVYArUdyhRr1voCGr65AUAXw1KPW_WcjcLtSn1xJ1ULsX4NJtPsFGx8lsYD6wDXOB1JvBD42XMbmK1MZPD0ztfg-ho2JNed_wa6GwHle9OAn6MOqO5PoEGrcNqvI5upnQy0zpKGZ6AaXQ7dywUkPrmCOsd0GPLjmasmSSbtj2ouOiZ-8Y")' }}></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">Safe Exercises for Heart Patients</h4>
                        <p className="text-xs text-slate-500 mt-1">15 min read</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/resources/article" className="group block">
                    <div className="flex gap-4">
                      <div className="size-16 rounded-lg overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJWrjm-SBelfGJM5t5rBR6axOhPh5c9M77PrE9EHTAdtP0YH346yZqAeQr9qNmFZ7cCNho9X1Wuv5tR12eFrSHA2irDNgYmUlzvYFXM5jwAkv23HrZS4aBtRm1O__qeDlwHPzMsQEdfku9MeMNT6OKNYBeyhmge5vFyp1DXhgwVwKmxnPBEB_IaIrnDtmYZQdt0qJqduWObh0JuaMphLD_aN-oa6t5WbbsbrIbp1FCtV5oCkccbuJCngJHyZOdIdgNwC-hVPC-hoo")' }}></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">Understanding Your Medications</h4>
                        <p className="text-xs text-slate-500 mt-1">10 min read</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <button className="w-full mt-6 py-3 rounded-xl border-2 border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all">
                  View Full Library
                </button>
              </div>

              <div className="p-8 bg-gradient-to-br from-primary to-orange-600 rounded-2xl text-white shadow-lg shadow-primary/20">
                <h3 className="text-xl font-black mb-2">Need Help?</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">Schedule a follow-up consultation with our cardiac specialists directly through the portal.</p>
                <button className="w-full py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors">
                  Book Appointment
                </button>
              </div>
            </aside>
          </div>
        </main>

        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-6 lg:px-20 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-3xl">medical_services</span>
              <span className="text-slate-900 dark:text-white text-xl font-black">HealthSync</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
              <Link className="hover:text-primary" to="#">Privacy Policy</Link>
              <Link className="hover:text-primary" to="#">Terms of Service</Link>
              <Link className="hover:text-primary" to="#">Medical Disclaimer</Link>
              <Link className="hover:text-primary" to="#">Contact Us</Link>
            </div>
            <p className="text-slate-400 text-sm">© 2024 HealthSync Medical Library. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MedicalResourceLibraryArticle;
