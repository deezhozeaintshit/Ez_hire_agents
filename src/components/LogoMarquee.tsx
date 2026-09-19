import React from 'react';

interface Brand {
  name: string;
  badge: string;
  industry: string;
}

const BRANDS: Brand[] = [
  { name: 'Samsara', badge: 'samsara', industry: 'IoT & Fleet' },
  { name: 'Lyft', badge: 'lyft', industry: 'Mobility' },
  { name: 'Zoom', badge: 'zoom', industry: 'Communications' },
  { name: 'Hilton', badge: 'Hilton', industry: 'Hospitality' },
  { name: 'HashiCorp', badge: 'HashiCorp', industry: 'Cloud Infrastructure' },
  { name: 'Postman', badge: 'POSTMAN', industry: 'API Platform' },
  { name: 'Fortinet', badge: 'FORTINET', industry: 'Cybersecurity' },
  { name: 'Wayfair', badge: 'wayfair', industry: 'E-Commerce' },
  { name: 'Grab', badge: 'Grab', industry: 'Superapp' },
  { name: 'MGM Resorts', badge: 'MGM RESORTS', industry: 'Entertainment' },
  { name: 'Okta', badge: 'okta', industry: 'Identity' },
  { name: 'PwC', badge: 'pwc', industry: 'Consulting' },
  { name: 'General Dynamics', badge: 'GENERAL DYNAMICS', industry: 'Aerospace & Defense' },
  { name: 'Booking.com', badge: 'Booking.com', industry: 'Travel' },
  { name: 'Viasat', badge: 'Viasat', industry: 'Satellite Telecom' },
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="relative py-12 border-y border-white/[0.06] bg-[#090D16]/60 overflow-hidden">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-7">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
          Trusted by talent acquisition teams at global industry leaders
        </p>
      </div>

      {/* Marquee Container with fade masks on left and right */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right fade gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-10 pointer-events-none bg-gradient-to-r from-[#090D16] via-[#090D16]/90 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-10 pointer-events-none bg-gradient-to-l from-[#090D16] via-[#090D16]/90 to-transparent" />

        {/* Marquee Row */}
        <div className="flex animate-marquee py-2 select-none">
          {[...BRANDS, ...BRANDS].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-3 px-6 py-2.5 mx-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all group shrink-0"
            >
              {/* Geometric brand mark */}
              <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/15 transition-colors">
                <span className="text-[10px] font-bold font-mono">
                  {brand.name.charAt(0)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-slate-300 group-hover:text-white tracking-tight transition-colors">
                  {brand.badge}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold group-hover:text-slate-400">
                  {brand.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
