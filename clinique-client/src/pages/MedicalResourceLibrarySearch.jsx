import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MedicalResourceLibrarySearch = () => {
  const [searchTerm, setSearchTerm] = useState('cardiac health');
  const [selectedCategories, setSelectedCategories] = useState(['Cardiology']);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8 flex-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined block">emergency</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-primary">HealthSync</h1>
            </Link>
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input 
                  className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-sm outline-none" 
                  placeholder="Search resources..." 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
              <span className="material-symbols-outlined">bookmarks</span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
            <div className="flex items-center gap-3 pl-1">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">account_circle</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Filters</h2>
              <div className="space-y-1">
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-primary/10 text-primary font-medium">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined">category</span>
                    <span className="text-sm">Category</span>
                  </div>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
                <div className="mt-2 pl-10 space-y-2 pb-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      checked={selectedCategories.includes('Cardiology')} 
                      className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" 
                      type="checkbox" 
                      onChange={() => toggleCategory('Cardiology')}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Cardiology</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      checked={selectedCategories.includes('Prevention')} 
                      className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" 
                      type="checkbox" 
                      onChange={() => toggleCategory('Prevention')}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Prevention</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      checked={selectedCategories.includes('Research')} 
                      className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" 
                      type="checkbox" 
                      onChange={() => toggleCategory('Research')}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Research</span>
                  </label>
                </div>
              </div>
              <div className="space-y-1 mt-4">
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined">article</span>
                    <span className="text-sm">Content Type</span>
                  </div>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
              <div className="space-y-1 mt-2">
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined">calendar_month</span>
                    <span className="text-sm">Date Published</span>
                  </div>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
            </div>
            <div className="pt-4">
              <button className="w-full py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors text-sm">
                Apply Filters
              </button>
              <button 
                className="w-full mt-2 py-2 text-slate-500 hover:text-primary text-xs font-semibold uppercase tracking-wide transition-colors"
                onClick={() => setSelectedCategories([])}
              >
                Reset All
              </button>
            </div>
          </aside>

          <section className="flex-1">
            <div className="mb-8">
              <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-3">
                <Link className="hover:text-primary" to="/resources">Library</Link>
                <span className="material-symbols-outlined !text-xs">chevron_right</span>
                <span className="text-slate-600 dark:text-slate-300">Search Results</span>
              </nav>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Results for 'cardiac health'</h2>
              <p className="text-slate-500 mt-1">Showing 128 resources found across all departments</p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Result Card 1 */}
              <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row hover:shadow-lg transition-shadow">
                <div className="w-full md:w-64 h-48 flex-shrink-0 bg-slate-200 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIQkX9a1lY1eEcpxa86FSTDYhews6Q0G-vPZmBcVH5ycfp4rEV4bvDjxFwl8R12J503R9kO5gkgmLAN9yf4spnW8EbvQVUFOEabVK-OK-yyA91NkjFM-vgHTjGuS4xFeCBKgrNigynhMBr4_Zs5PyvTwxyMit9sAwDQ-7cX4iCdjREI5J82ppkde87wRb_Pr5g3_W1xmbnpC6dh1mP7EoAipnH06p29ysdeBlWBQ7eZT5DU0iqZjsmqiivwxZ3nbmYniaxDp6XRgg" alt="Heart model" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">Cardiology</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <span className="material-symbols-outlined !text-xs">schedule</span>
                        8 min read
                      </span>
                    </div>
                    <Link to="/resources/article">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary cursor-pointer mb-2 leading-tight">Modern Approaches to Preventive Cardiology and Risk Management</h3>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">Recent clinical guidelines emphasize the importance of early intervention and personalized lipid-lowering therapy in high-risk patients...</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5s5Uk06TV0rOMhlxkYh02W9DW9apIZnzOUbIcEj38q__j7klGJKJ1gxgdWykPI0v6jj1wuotZTNToYDbDVTemOTGHmx2HCaCrMrKzYOYQSgHa8t57MdtHWVWN7HiYA6FCHoecC65q-e6zw-yLgVvArf0E2OCEQ5YlGhn9Q7E1iBmBXqp0N4-EAXi1wSa6fueoXtN-ERWudpR_TULts30Tv4SeEqVwvX0x0C87RW9XP_5Qp485ea7DRJvvjdzhl71Hrlm3MB3lEiY" alt="Dr" />
                      </div>
                      <span className="text-xs font-medium text-slate-500">Dr. Sarah Mitchell</span>
                    </div>
                    <Link to="/resources/article" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                      Read Article <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* Result Card 2 */}
              <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row hover:shadow-lg transition-shadow">
                <div className="w-full md:w-64 h-48 flex-shrink-0 bg-slate-200 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC54JyWRW3TbEUKR_F9BiWjz-ZxOIzPhVnQXpoKfYu8F8H4CJwoIYX2uY1CjW_A8H3JiXeE_btZf11fffCF8boNcpIUaa1nA9_KSqrYLlUFqVI2k1TtfStG4Snu7UQfwxinwZlmc2jTiOG23NYgNVUt08gVflB_Cbdp81j5IclDnn18bYNZZpNeSGrl2Hn79v6WNhP0Gp8eWOK4s79lrzhWHtSmjDTZM49283R0JdH2qdju4uar2JEAHR2e2C1_87Wtqqo1PyBWwuY" alt="Stethoscope" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-[10px] font-bold uppercase rounded-full">Research Paper</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <span className="material-symbols-outlined !text-xs">schedule</span>
                        15 min read
                      </span>
                    </div>
                    <Link to="/resources/article">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary cursor-pointer mb-2 leading-tight">New Findings in Congestive Heart Failure: A 2024 Meta-Analysis</h3>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">This comprehensive review examines over 40 clinical trials conducted in the last decade regarding SGLT2 inhibitors and their impact on heart health...</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4_YDKivUfXOT3nTMPHCbdTMRPhYXLlgu6ELEjBNNZNi9iuhQB7p1oVmsh_RtugLLHPCvwVT51ldb3m_IK2DiIK_540xhQFAkyPWv_SF2wzqdT2XEDRyENqBu4W48h3lFl2OBhZiyrZ_AFhmCt_q1B6L-S5NmtiESTWVi5j5mKXqPVZHbTVwxYyaJs7LYDh_Jvx-dSQS4c-yN0tuGI0Dvr7RRJbsw1OuzjQ8UTc_NCXfvy7lSjde8XClSWBX4w7sp89z0G9qrDP-k" alt="Dr" />
                      </div>
                      <span className="text-xs font-medium text-slate-500">James Aris, PhD</span>
                    </div>
                    <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                      Download PDF <span className="material-symbols-outlined !text-sm">download</span>
                    </button>
                  </div>
                </div>
              </article>

              {/* Result Card 3 */}
              <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row hover:shadow-lg transition-shadow">
                <div className="w-full md:w-64 h-48 flex-shrink-0 bg-slate-200 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXfp5K9sliGu6l9kQofMmNu3z9XtRK1m9zJzN6IOA_CH7lhBa-c1Xc_6eTmzUWCU6KnvQO2WRa9FfHwHpbFyF-T1tKqMY0LAzpx2EL2OEi4Atz69vYdfk39GWD1cidzPqQGlUduiqCfmYQxkoFpRhuVcQ0Xw4b3EefcN8uNw9PEAwHNrxsbFVfHYnclGdQAeTCZsuE4-tVvyfsMHEMPseSTnhlhr9UD3-jqPTdoxxsELeyV4BiUE885DPMAATnUe9PWw4STiZP_pg" alt="Diet" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-green-100 text-green-600 text-[10px] font-bold uppercase rounded-full">Wellness</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <span className="material-symbols-outlined !text-xs">schedule</span>
                        5 min read
                      </span>
                    </div>
                    <Link to="/resources/article">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary cursor-pointer mb-2 leading-tight">Dietary Habits for a Stronger Heart: Beyond the Mediterranean Diet</h3>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">Practical nutrition advice for patients looking to improve their cardiovascular outcomes through sustainable lifestyle changes and whole foods...</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGf0WHA3JysXZoQ34qxWmYnB3IKHWHkbZ9ScYfoiETI85AS1VcvkB7UP11vIgMPHqnucH42GLkX69zeDp_wEa_HXyjTIGhNe5QgjFlOjkv58uNf7mU-W5VkZwy-ycw2gpGgydC72SiId3AWeEm_pts61jce2TTbHyUBgNe5U80MM5HL5OlEI79cyzj4A9neKDjBJQQ9Egkw65329f8c2Z2_Ecf4YcU6Ki5aYq1iU8gs-yTOfxJ6LmpfeDNZd8RX5p5EBgAqIsWQZg" alt="Dr" />
                      </div>
                      <span className="text-xs font-medium text-slate-500">RD. Maria Gonzalez</span>
                    </div>
                    <Link to="/resources/article" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                      Read Article <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
              <span className="px-2 text-slate-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">12</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined block">emergency</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">HealthSync</h2>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <Link className="hover:text-primary" to="#">About</Link>
              <Link className="hover:text-primary" to="#">Directory</Link>
              <Link className="hover:text-primary" to="#">Terms</Link>
              <Link className="hover:text-primary" to="#">Privacy</Link>
            </div>
            <p className="text-xs text-slate-400">© 2024 HealthSync Medical Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicalResourceLibrarySearch;
