import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MedicalResourceLibraryHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/resources/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">HealthSync</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/">Dashboard</Link>
              <Link className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5" to="/resources">Resources</Link>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/telehealth">Consultations</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-primary transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
              </button>
              <div className="size-10 rounded-full bg-primary/10 border-2 border-primary/20 overflow-hidden">
                <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuRP2u-PNOaY6uS415w-RNkMIqCKi1ZQje8LNC6jggFAAt0qK2TlITdUkzmSgh3zT-fdwR9eMPcTusaT28ds0X5RrAdMx_ku6l3bcjBjRSKQIhPeqzeJC8wLJPF6IELswaBugJh17X8O2I-gm-Yr4qzkM8-bRwaJFp1A7fKQckXv9Bfbyu7w8deLfK8jfCS0N94TN300j5mhw744VpXjhwDoVD-5sBCkoz5QpfOxp9em56xhh350bvT8vWNblETh2aQR4IYA1a1Ik" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section & Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight mb-2">Resource Library</h1>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                Access a curated collection of evidence-based medical information, recovery guides, and wellness tips reviewed by healthcare professionals.
              </p>
            </div>
            <div className="w-full md:max-w-md">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                </div>
                <input 
                  className="block w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm outline-none" 
                  placeholder="Search topics, medicines, or care guides..." 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <button className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg transition-all group">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">medical_services</span>
              </div>
              <span className="text-sm font-semibold">Post-Op Care</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg transition-all group">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">pill</span>
              </div>
              <span className="text-sm font-semibold">Medicine Info</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg transition-all group">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <span className="text-sm font-semibold">Mental Health</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg transition-all group">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">nutrition</span>
              </div>
              <span className="text-sm font-semibold">Nutrition</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg transition-all group">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">spa</span>
              </div>
              <span className="text-sm font-semibold">Wellness</span>
            </button>
          </div>
        </div>

        {/* Featured Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Featured Articles</h2>
            <Link className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline" to="/resources/search">
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Large Featured Card */}
            <Link to="/resources/article" className="relative group h-[400px] rounded-2xl overflow-hidden cursor-pointer block">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
              <img alt="Medicine dosage" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6kf_h5oMKZ2JSBrTj5kWYDhytr-OUL8hA2cDl_rQ8tCTCFxrPjNEYGYVfAc-6di-sFvqoT-yLtu92-TY1XC7Becperp9WpQRB2ZTwc9BjS4jt0cxrvgpTOOTN5oDuiTXnpkDWa4j9x0oRWCfpF96kLSK17fLkmhuYVVyUveJjiitnRQOsJeLsZ5armLHjzLvR6Hsl_dGLFgF6vtjuENNSikKSoajThL9Gmu8SWE3d1hdbSpdC9BFSETo3iCG5sqSwPhCdIXddQ9c" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4 inline-block">POST-OP CARE</span>
                <h3 className="text-2xl font-bold text-white mb-2">Essential Recovery Steps After Knee Surgery</h3>
                <p className="text-slate-200 line-clamp-2 mb-4">A comprehensive 4-week guide to regaining mobility safely and managing pain effectively at home.</p>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>12 min read</span>
                </div>
              </div>
            </Link>

            {/* Secondary Featured Cards */}
            <div className="flex flex-col gap-4">
              <Link to="/resources/article" className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors cursor-pointer block">
                <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img alt="Healthy food" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5_Ai-Kz5NL5KzWKLN903bGyzfQT1xtKbmht0hcFuqS6b-3VCc4zAqb4eSXLjg8ThMI39DO_jGtbiTsbeuJs4Yq4Wx_3P53g_8vTpXFAugAe4HSKLlony1v25eKX2NxlhXPpb6yMzgQJNOa-1c_fYonkMYqBezsFcGjuLCqOaw8YfSsPEAxrdJtzSRL80mrGdX6SRORgJYC1YECFrOVc4rIdZPocBXUNEKZlRD_hWrUXEUUKh-bPc5-AZ33T3ekM3JSen_7j0t1wg" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">Nutrition</span>
                  <h4 className="font-bold text-lg mb-1 leading-tight">Anti-Inflammatory Diet Basics</h4>
                  <p className="text-slate-500 text-sm line-clamp-2">How changing your plate can help manage chronic pain and improve immunity.</p>
                </div>
              </Link>
              <Link to="/resources/article" className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors cursor-pointer block">
                <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img alt="Yoga pose" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gXx7kxgoaSUX1takeqA_rhOXOte4MWqliajDT4kSl5If8ciP0pbIXla4IU1q0bklarUIdu_wnAUvCL4RB8TTdcBtbRGRkiUPz1OZLr_-RO0M6z_8E8VuLCwNbXiHaPu3f-Z24Vvc8P-xM8c0nNdChrS-U12m9bKD33H3Y11Vx45doydyF8JbRRNyHOQJ4Ph1f6Yrq28JYs6uxRay0DNbFEv5CW66roNpqTn2PeVMXDw62GWxdetdFlgu8F6xX3r-rAWPxcdZ3HM" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">Mental Health</span>
                  <h4 className="font-bold text-lg mb-1 leading-tight">5-Minute Mindfulness for Stress</h4>
                  <p className="text-slate-500 text-sm line-clamp-2">Simple breathing techniques to lower cortisol levels during a busy workday.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Recently Added Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Recently Added</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Article Card 1 */}
            <Link to="/resources/article" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer block">
              <div className="h-48 overflow-hidden">
                <img alt="Antibiotics" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZU_oY0qyDYGvovQURKETHVR1Sxz7zr9-PUjXi3RRoOYnWuZF0dnDl6jQpw1nG7yEAP0F4-8oHmxK0HFexSls6d2H2hLTYAfBOtHRFR5lHfpEO0qSMuWLWUCo8lR6sR3c-7x_5m8yXKuh2bdm9qBKvtvwm0wDUBuYI0oDV1SM-IuHArkdw74zRRqgjALTs4Sl8zVgWA3k9kCNhgz8YLI2dTYRi5zM1-4b4x_38EDB-7dwR0H_aUvHkj9qOmF1EIpviGFNJpBOadMg" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-slate-400">MAY 24, 2024</span>
                  <span className="size-1 rounded-full bg-slate-300"></span>
                  <span className="text-[10px] font-bold text-primary uppercase">Medicine Info</span>
                </div>
                <h4 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">Understanding Antibiotic Resistance</h4>
                <p className="text-slate-500 text-xs line-clamp-3">Why it's crucial to finish your entire prescription as directed by your physician.</p>
              </div>
            </Link>

            {/* Article Card 2 */}
            <Link to="/resources/article" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer block">
              <div className="h-48 overflow-hidden">
                <img alt="Stethoscope" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCBmtVSE-9ZzVOinV0N7Z8zaluUcju33orijvDppTQ4dssZeQjEmUHuZCVKMzs4A0x0rFKqnMeJmJA59A5i36Uh1VpF6F2ApQMQSAqyRITrQq_PtR2NKujaLgheANTtd2cRBI7JsrB29EeZDgIoiqosSCiKxd9RHTMTytcUmu0glYkfnKm4nb9LGbrS8UW0hKufeMhmI-dRaCo8lebKdJFiFpxP76AO0lQUjLkxV8QqC3hd6ADJthP2-SLC0nVino-b78HoF_e8kw" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-slate-400">MAY 22, 2024</span>
                  <span className="size-1 rounded-full bg-slate-300"></span>
                  <span className="text-[10px] font-bold text-primary uppercase">Wellness</span>
                </div>
                <h4 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">Preventative Screenings by Age</h4>
                <p className="text-slate-500 text-xs line-clamp-3">A checklist of the essential medical checkups every adult should schedule.</p>
              </div>
            </Link>

            {/* Article Card 3 */}
            <Link to="/resources/article" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer block">
              <div className="h-48 overflow-hidden">
                <img alt="Yoga mat" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTI91QTE9CMio1uVoWKNYHjgN3R1fJ7gS_5eTNGkT-ZXxfWsfUxhJVDa6O6XknPnxcc_pDkIwggrkWgnsqPA_CPyxbmokYRH1j4anX1Xt35I85tiMyN1s2oabQIh8QbafqqbExEEGzUMaqQTM-ZQCNqaDVX6rAv_SFcOs9Gc6CI9lxbZrMFwV7AmGP_4HZkG_BohTqNV6zD_VPjMOn18hnKyxUf9gwjZBJo7Zc-InYaauSbamrsyIrOV7xH5DqxHroaB2hG5OlBec" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-slate-400">MAY 20, 2024</span>
                  <span className="size-1 rounded-full bg-slate-300"></span>
                  <span className="text-[10px] font-bold text-primary uppercase">Mental Health</span>
                </div>
                <h4 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">The Link Between Sleep and Anxiety</h4>
                <p className="text-slate-500 text-xs line-clamp-3">New research suggests improving sleep hygiene can significantly reduce anxiety levels.</p>
              </div>
            </Link>

            {/* Article Card 4 */}
            <Link to="/resources/article" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer block">
              <div className="h-48 overflow-hidden">
                <img alt="Smoothie" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw4hOnA67Xr4ZM-qKI4VoVNCU7HRqgPPoQgkVNueo3Sv0SOMo3Pr4xteKfOUZODfKxoxPlpybCXvgoTMXv0viuRxgDELL0knai9jNiGpBz4yIq0UtyYWXPtSLxZM83y0SZlo1Thwr2ClAR_-tP11sbQIMDrn6b5AjAvbkekEeryolpjhppC79IFjx9d93zhynLxCSQTuELNVb-dk4xXZ2n459Pmos8nggJs-ODPn2u5ta4BVJ8IdQ298MIf0AjVPS_5RCf1tNnGdM" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-slate-400">MAY 18, 2024</span>
                  <span className="size-1 rounded-full bg-slate-300"></span>
                  <span className="text-[10px] font-bold text-primary uppercase">Nutrition</span>
                </div>
                <h4 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">Supplements: Myths vs Facts</h4>
                <p className="text-slate-500 text-xs line-clamp-3">What vitamins you actually need and how to spot marketing gimmicks.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="bg-primary/10 dark:bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Get the latest medical guides and wellness tips delivered to your inbox every week.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input className="flex-grow px-6 py-3 rounded-xl border-none focus:ring-2 focus:ring-primary shadow-sm bg-white dark:bg-slate-900" placeholder="Enter your email" type="email" />
              <button className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">Subscribe Now</button>
            </form>
            <p className="mt-4 text-[10px] text-slate-400">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="text-primary opacity-50">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
              </div>
              <span className="text-slate-400 font-bold text-sm">HealthSync © 2024</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <Link className="hover:text-primary" to="#">Privacy Policy</Link>
              <Link className="hover:text-primary" to="#">Terms of Service</Link>
              <Link className="hover:text-primary" to="#">Medical Disclaimer</Link>
              <Link className="hover:text-primary" to="#">Help Center</Link>
            </div>
            <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">dashboard</span>
              <span className="text-sm font-semibold">Back to Dashboard</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicalResourceLibraryHome;
