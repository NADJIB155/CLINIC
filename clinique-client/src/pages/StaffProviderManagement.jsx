import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StaffProviderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [deptFilter, setDeptFilter] = useState('All Departments');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-slate-900 dark:bg-black border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-primary rounded-xl p-2 flex items-center justify-center">
              <span className="material-symbols-outlined text-white">medical_services</span>
            </div>
            <div>
              <h1 className="text-white text-lg font-bold leading-tight">HealthSync</h1>
              <p className="text-slate-400 text-xs uppercase tracking-wider">Admin Portal</p>
            </div>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1">
            <Link className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" to="/analytics">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 bg-primary text-white rounded-xl" to="/staff">
              <span className="material-symbols-outlined">badge</span>
              <span className="text-sm font-medium">Staff Management</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" to="/doctor/calendar">
              <span className="material-symbols-outlined">calendar_month</span>
              <span className="text-sm font-medium">Schedules</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" to="/patients">
              <span className="material-symbols-outlined">patient_list</span>
              <span className="text-sm font-medium">Patients</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" to="/reports">
              <span className="material-symbols-outlined">analytics</span>
              <span className="text-sm font-medium">Reports</span>
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors" to="/settings">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Agency Settings</span>
            </Link>
          </nav>

          <div className="p-4 border-t border-slate-800">
            <button className="flex w-full items-center gap-3 px-3 py-2 text-slate-400 hover:text-red-400 transition-colors cursor-pointer bg-transparent border-none text-left">
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Log Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
            <h2 className="text-xl font-bold">Staff Directory</h2>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative bg-transparent border-none cursor-pointer">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
              </button>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold">Sarah Jenkins</p>
                  <p className="text-xs text-slate-500">Administrator</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-200 bg-center bg-cover" data-alt="Portrait of the agency administrator Sarah Jenkins" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfnHz45vqt2k1hcBUaz-ke4VeLvZ9yTc4uo2enCkLUDKDExcYH-SQwCgIdsAvn6jjjtVdd_jtIZiPrmeGBFncnR2izLzUPuIiX7i6UUA2YsNPETU4M2bJ35Mu06xTgQI2xqex2XT0I1LDyb2EtkjjlDhAAl93tE78sJd01YuGSakdSeYdjWkb1XdOzXNryXurguQPfUX-CsrElyPmIvnVO2P2deCS-VjcKAi7gNB0_c64U8GTYsxBUKhveU7qQcTtSEwMC0CY7OVY')" }}></div>
              </div>
            </div>
          </header>

          <div className="p-8 space-y-6">
            {/* Page Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Active Medical Personnel</h3>
                <p className="text-slate-500">Currently managing 142 healthcare professionals.</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer border-none">
                <span className="material-symbols-outlined">add</span>
                Onboard New Staff
              </button>
            </div>

            {/* Filters and Search */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="lg:col-span-2 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:outline-0 text-sm outline-none transition-all" 
                  placeholder="Search by name, specialty, or employee ID..." 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <select 
                  className="w-full pl-3 pr-10 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary focus:outline-0 text-sm appearance-none cursor-pointer outline-none"
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option>All Roles</option>
                  <option>Doctors</option>
                  <option>Nurses</option>
                  <option>Agents</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
              </div>
              <div className="relative">
                <select 
                  className="w-full pl-3 pr-10 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary focus:outline-0 text-sm appearance-none cursor-pointer outline-none"
                  value={deptFilter}
                  onChange={(e) => setDeptFilter(e.target.value)}
                >
                  <option>All Departments</option>
                  <option>Emergency</option>
                  <option>Pediatrics</option>
                  <option>Cardiology</option>
                  <option>Admin</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Staff Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Staff Member</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Role &amp; Specialty</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Current Shifts</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 bg-cover bg-center" data-alt="Portrait of Dr. Elena Rodriguez" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzSNF4bXg7lbujidrwA2FUQMEmsVsid_zDG-Rn-kazjKCW6_RtnLXqJGCLYfjJO0AdwIM00PqEmLvIQqzlEg5vEEoIIa04QGmb9-gdoHrShNcSSi6tjsSyjEq3QkoVzR9Sd6Zto8hY5ip-535ATRykgpv08fsXL5Jlt9S1gBgbwIjvM3phspD4UV6Z3uPt2rcvlijVKwPFzu2uzTAoM5QRBYXVgJEeWqPp_U5ARqLLstWYPQOl4XP2I1wClcKQM0fAal4hyepiXsY')" }}></div>
                          <div>
                            <p className="font-bold text-sm">Dr. Elena Rodriguez</p>
                            <p className="text-xs text-slate-500">ID: HS-9281</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm font-medium">Senior Physician</p>
                        <p className="text-xs text-slate-500">Cardiology Dept.</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-1">
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold" title="Monday">M</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold" title="Tuesday">T</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold" title="Wednesday">W</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold" title="Thursday">T</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold" title="Friday">F</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold" title="Saturday">S</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold" title="Sunday">S</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-slate-400 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 bg-cover bg-center" data-alt="Portrait of Nurse Marcus Chen" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAR6YVIPngWu83QlO9L_kA7KIZvuhl0D8YRW4jt963LRBirv-2QMtJUeNG6FqcPWVeaiYyJp8jIxAk6Rp_76YrhkDoxoKZth8slcbMSeDTrPmhJK_UGXMH3ceDeBih2nfHic8o90Bwf10C7dJ1CctyvQk0573RiNh5-5qamGgXu2l4Vg-8_KRxTfdQw9DQO7bfDiHDWvUSsT2oWV-r4Jt2gPSRyXR1x8hUuPP_j6ytd2s3a3NjKSgbceRAVA5cEqIN5TYD471_NLY')" }}></div>
                          <div>
                            <p className="font-bold text-sm">Marcus Chen</p>
                            <p className="text-xs text-slate-500">ID: HS-8822</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm font-medium">Head Nurse</p>
                        <p className="text-xs text-slate-500">Emergency Services</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                          On Leave
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-1">
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">M</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">T</div>
                          <div class="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">W</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">T</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">F</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">S</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">S</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-slate-400 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 bg-cover bg-center" data-alt="Portrait of Agent Sarah Waters" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYx2BxGRLXgqweNgaOU6Bpr3nvDS9Wkd6UVZ0562NKuO4Zv3TY62E9dkN-tT3m5CMIzxYeCpB58HiOzS9a03WJdECHbkYPNs0AmyJ_Nr0hYXiCMNwnYAt45mHOWrKlmlV5WMr3kdHEM3c8DyJDIfIArD5RMKMcm1TJLbEoQ3vVPL6ERJ5oprIT3AvvdUyA3ek96JrScXLbdCoFNwR1ychTYLochNAyPEhtvrD6SWGW16VJwyM9bvKcysqv4_1OYLmOeHEfB4pROa4')" }}></div>
                          <div>
                            <p className="font-bold text-sm">Sarah Waters</p>
                            <p className="text-xs text-slate-500">ID: HS-7741</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm font-medium">Claims Agent</p>
                        <p className="text-xs text-slate-500">Administration</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-1">
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">M</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">T</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">W</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">T</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">F</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">S</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">S</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-slate-400 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Row 4 */}
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 bg-cover bg-center" data-alt="Portrait of Dr. James Wilson" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA03UiaS9JNreF0rHDsgHFvPJxZgm6k7LYGpK16qTH9iV0_Vxh8ICWiYbzR6j0TYZituE0j_zQ2wJY18olm8zG5U7PuFYk4sGTSiuOCE-r5BVULh_uh_oI3qoA4qqZJEBBOrRFwGLX7rdueDdflRyJKzx3vK08IZti2WxFuaQDPyuBN_cxq7KND85wrxmtiDXzj9iAZkYr4XeVXLLhbNy0-8cJC4cC49GfFSDzYy74KlraKAejrrjaa18sbVfZBi5jWXeMZHYUPTWs')" }}></div>
                          <div>
                            <p className="font-bold text-sm">Dr. James Wilson</p>
                            <p className="text-xs text-slate-500">ID: HS-9205</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm font-medium">Pediatrician</p>
                        <p className="text-xs text-slate-500">Pediatrics Dept.</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-1">
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">M</div>
                          <div className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] flex items-center justify-center font-bold">T</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">W</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">T</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">F</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">S</div>
                          <div className="w-6 h-6 rounded bg-primary text-white text-[10px] flex items-center justify-center font-bold">S</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-slate-400 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button className="p-1.5 text-slate-400 hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-500">Showing 1 to 4 of 142 staff members</p>
                <div className="flex gap-2">
                  <button 
                    className="px-3 py-1 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  >Previous</button>
                  <button className={`px-3 py-1 text-sm border rounded-lg cursor-pointer ${currentPage === 1 ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50'}`} onClick={() => setCurrentPage(1)}>1</button>
                  <button className={`px-3 py-1 text-sm border rounded-lg cursor-pointer ${currentPage === 2 ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50'}`} onClick={() => setCurrentPage(2)}>2</button>
                  <button className={`px-3 py-1 text-sm border rounded-lg cursor-pointer ${currentPage === 3 ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50'}`} onClick={() => setCurrentPage(3)}>3</button>
                  <button 
                    className="px-3 py-1 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >Next</button>
                </div>
              </div>
            </div>

            {/* Agency Statistics Cards (Optional Add-on for context) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Total Staff</p>
                  <p className="text-2xl font-bold">142</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Currently On-Duty</p>
                  <p className="text-2xl font-bold">58</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Pending Appraisals</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StaffProviderManagement;
