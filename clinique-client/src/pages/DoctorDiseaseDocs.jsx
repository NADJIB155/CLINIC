import React, { useState } from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';

const mockDiseases = [
  {
    id: 1,
    name: 'Type 2 Diabetes Mellitus',
    category: 'Endocrinology',
    icdCode: 'E11.9',
    lastUpdated: 'Oct 12, 2023',
    symptoms: ['Increased thirst', 'Frequent urination', 'Increased hunger', 'Unintended weight loss', 'Fatigue'],
    treatments: ['Metformin', 'Insulin therapy', 'Dietary changes', 'Regular exercise', 'Blood sugar monitoring'],
    notes: 'Standard protocol requires quarterly HbA1c testing. Emphasize lifestyle modifications as primary intervention before escalating medication.'
  },
  {
    id: 2,
    name: 'Hypertension (Primary)',
    category: 'Cardiology',
    icdCode: 'I10',
    lastUpdated: 'Sep 28, 2023',
    symptoms: ['Often asymptomatic', 'Headaches', 'Shortness of breath', 'Nosebleeds', 'Dizziness'],
    treatments: ['ACE inhibitors', 'Diuretics', 'Beta-blockers', 'Calcium channel blockers', 'Sodium-restricted diet'],
    notes: 'Target BP is <130/80 mmHg. Monitor renal function and potassium levels when initiating ACE inhibitors or ARBs.'
  },
  {
    id: 3,
    name: 'Asthma (Moderate Persistent)',
    category: 'Pulmonology',
    icdCode: 'J45.40',
    lastUpdated: 'Nov 05, 2023',
    symptoms: ['Wheezing', 'Chest tightness', 'Shortness of breath', 'Coughing attacks', 'Worse at night/early morning'],
    treatments: ['Inhaled corticosteroids (ICS)', 'Long-acting beta agonists (LABA)', 'Short-acting beta agonists (SABA) - Rescue', 'Leukotriene modifiers'],
    notes: 'Ensure patient demonstrates correct inhaler technique. Discuss Asthma Action Plan and triggers (allergens, cold air, exercise).'
  },
  {
    id: 4,
    name: 'Major Depressive Disorder',
    category: 'Psychiatry',
    icdCode: 'F32.9',
    lastUpdated: 'Aug 17, 2023',
    symptoms: ['Persistent sad mood', 'Loss of interest (anhedonia)', 'Changes in appetite', 'Sleep disturbances', 'Difficulty concentrating'],
    treatments: ['SSRI/SNRIs', 'Cognitive Behavioral Therapy (CBT)', 'Regular counseling', 'Exercise', 'Light therapy (if seasonal pattern)'],
    notes: 'Monitor closely for suicidal ideation, especially during the first few weeks of initiating pharmacological treatment. Follow up weekly initially.'
  }
];

const DoctorDiseaseDocs = () => {
  const [diseases, setDiseases] = useState(mockDiseases);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState(null);

  const categories = ['All', ...new Set(mockDiseases.map(d => d.category))];

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          disease.icdCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || disease.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout title="Disease Knowledge Base" userRole="Doctor" userName="Dr. Sarah Jenkins" userTitle="Neurologist">
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)]">
        
        {/* Left Panel: Search & List */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden shrink-0">
          <div className="p-4 border-b border-slate-100 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Protocols & Docs</h2>
              <button 
                onClick={() => { setIsAddingNew(true); setSelectedDisease(null); }}
                className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded-lg transition-colors"
                title="Add New Protocol"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              </button>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search disease or ICD-10..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              />
              <svg className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === cat ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2 bg-slate-50/50">
            {filteredDiseases.map(disease => (
              <button
                key={disease.id}
                onClick={() => { setSelectedDisease(disease); setIsAddingNew(false); }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedDisease?.id === disease.id 
                    ? 'bg-blue-50/50 border-blue-200 shadow-sm' 
                    : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-900 line-clamp-1 pr-2">{disease.name}</h3>
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{disease.icdCode}</span>
                </div>
                <p className="text-xs font-medium text-blue-600 mb-2">{disease.category}</p>
                <p className="text-xs text-slate-500 line-clamp-2">{disease.notes}</p>
              </button>
            ))}
            
            {filteredDiseases.length === 0 && (
              <div className="text-center p-8 text-slate-400 text-sm">
                No matching protocols found.
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Content Viewer / Editor */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          {isAddingNew ? (
            <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
               <h2 className="text-2xl font-black text-slate-900 mb-6">Create New Disease Protocol</h2>
               <div className="space-y-6 max-w-2xl">
                 <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-sm font-bold text-slate-700 mb-2">Disease Name</label>
                     <input type="text" className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm" placeholder="e.g. Osteoarthritis" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-slate-700 mb-2">ICD-10 Code</label>
                     <input type="text" className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm" placeholder="e.g. M19.9" />
                   </div>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Category (Specialty)</label>
                   <select className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-white">
                     {categories.filter(c => c !== 'All').map(cat => <option key={cat}>{cat}</option>)}
                     <option>Rheumatology</option>
                     <option>Gastroenterology</option>
                     <option>Other / General</option>
                   </select>
                 </div>

                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Common Symptoms (Comma separated)</label>
                    <textarea className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm h-24" placeholder="Joint pain, Stiffness, Swelling..." />
                 </div>

                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Standard Treatments (Comma separated)</label>
                    <textarea className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm h-24" placeholder="NSAIDs, Physical Therapy, Corticosteroid Injections..." />
                 </div>

                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Clinical Notes & Protocol Guidelines</label>
                    <textarea className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm h-32" placeholder="Enter detailed guidelines, target metrics, or contraindications here..." />
                 </div>

                 <div className="flex gap-4 pt-4 border-t border-slate-100">
                   <button onClick={() => setIsAddingNew(false)} className="px-6 py-3 font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">Cancel</button>
                   <button className="px-8 py-3 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-200 flex-1">Save Protocol to Database</button>
                 </div>
               </div>
            </div>
          ) : selectedDisease ? (
            <>
              <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50 flex justify-between items-start shrink-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-700 font-bold px-2.5 py-1 rounded text-xs">{selectedDisease.category}</span>
                    <span className="font-mono text-xs font-bold text-slate-500 bg-slate-200 px-2 py-1 rounded">ICD-10: {selectedDisease.icdCode}</span>
                  </div>
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">{selectedDisease.name}</h1>
                  <p className="text-sm text-slate-500 mt-2 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Last updated: {selectedDisease.lastUpdated}
                  </p>
                </div>
                <button className="text-slate-400 hover:text-blue-600 bg-white border border-slate-200 p-2.5 rounded-xl transition-all shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                </button>
              </div>

              <div className="p-6 md:p-8 flex-1 overflow-y-auto custom-scrollbar">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Symptoms */}
                  <div className="bg-orange-50/50 border border-orange-100 p-6 rounded-2xl">
                    <h3 className="text-orange-800 font-bold text-lg mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                      Common Symptoms
                    </h3>
                    <ul className="space-y-2">
                      {selectedDisease.symptoms.map((sym, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                          {sym}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Treatments */}
                  <div className="bg-green-50/50 border border-green-100 p-6 rounded-2xl">
                    <h3 className="text-green-800 font-bold text-lg mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                      Standard Treatments
                    </h3>
                    <ul className="space-y-2">
                      {selectedDisease.treatments.map((trt, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                          {trt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <h3 className="text-slate-800 font-bold text-lg mb-4 border-b border-slate-200 pb-2">Clinical Protocol & Notes</h3>
                  <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm leading-relaxed text-slate-700">
                    {selectedDisease.notes}
                  </div>
                </div>

              </div>
            </>
          ) : (
             <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50/30">
               <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex justify-center items-center mb-6">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Knowledge Base</h3>
               <p className="text-slate-500 max-w-sm">Select a disease protocol from the left panel to view its details, or click the + button to document a new condition.</p>
             </div>
          )}
        </div>

      </div>
    </DashboardLayout>
  );
};

export default DoctorDiseaseDocs;
