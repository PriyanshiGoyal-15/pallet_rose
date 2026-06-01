import React from 'react';

export const PricingSection: React.FC = () => {
  return (
    <div className="section-card">
      <style>{`
        @keyframes edgeDash {
          to { stroke-dashoffset: -40; }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.6); opacity: 0.9; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .edge-path {
          stroke-dasharray: 6, 4;
          animation: edgeDash 2.5s linear infinite;
        }
        .pulse-ring {
          transform-origin: center;
          animation: pulseRing 2.5s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
        }
        .hub-node:hover circle:first-child {
          fill: rgba(26, 86, 255, 0.3) !important;
        }
        .hub-node:hover circle:nth-child(2) {
          r: 6px !important;
        }
      `}</style>

      <section id="pricing" className="px-6 md:px-12 py-[80px] md:py-[100px] bg-[#fafafa]">
        
        {/* Split layout: Text on Left, SVG Connected Mesh Dashboard on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full max-w-[1400px] mx-auto">
          
          {/* Left Column: Client Detailed Content (Connecting Australia) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left relative z-20">
            <div className="w-[48px] h-[48px] rounded-full border border-black/5 bg-white flex items-center justify-center shadow-sm mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a56ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
            </div>

            <h2 className="text-[34px] sm:text-[44px] font-black tracking-[-2px] leading-[1.1] text-[#111] mb-2">
              Our Motto –<br />
              <span className="text-[#1a56ff]">Connecting Australia.....</span>
            </h2>

            <p className="text-[15px] text-[#111] leading-[1.7] mb-5 font-bold">
              At Eloma, our motto is simple - Connecting Australia. For us, this is more than just words. It means bringing people, businesses, ideas, and opportunities closer together across the country.
            </p>

            <div className="flex flex-col gap-4 text-[13.5px] text-[#555] leading-[1.7] font-semibold">
              <p>
                Australia is a large nation, with cities and regions spread far apart, and sometimes that distance can make things slow or difficult. Our role is to make those distances feel smaller by creating smooth, reliable connections.
              </p>
              <p>
                We help businesses work better together, make services reach people faster, and ensure communication stays clear and easy. Whether it is through transport, digital solutions, or other services, our focus is always on making things simple and connected. We believe that when people and businesses are well connected, work becomes easier, growth becomes faster, and new opportunities open up for everyone.
              </p>
              
              {/* Highlight Callout */}
              <div className="p-5 rounded-[16px] bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] mt-2">
                <p className="text-[#3dbf9e] font-black tracking-[0.5px] uppercase text-[11px] mb-2">Our Unified Mission</p>
                <p className="text-[#333] font-bold italic leading-relaxed">
                  "At Eloma, we are building strong links across Australia - connecting cities, industries, and ideas every day. Because when Australia is connected, everyone moves forward together."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated SVG Australia Grid */}
          <div className="lg:col-span-6 relative w-full flex flex-col items-center justify-center">
            
            {/* Glassmorphic Map Container Card */}
            <div className="w-full max-w-[500px] bg-white rounded-[24px] p-6 border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col items-center">
              
              {/* Background abstract waves */}
              <div className="absolute inset-0 bg-[radial-gradient(#1a56ff08_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-60"></div>
              
              <div className="w-full flex items-center justify-between mb-6 z-10 border-b border-black/[0.04] pb-4">
                <div>
                  <span className="text-[9px] font-black tracking-[2.5px] uppercase text-[#1a56ff] block mb-1">INTERACTIVE RADAR</span>
                  <span className="text-[14px] font-bold text-[#111]">National Service Mesh</span>
                </div>
                <div className="text-[10px] text-[#3dbf9e] font-bold flex items-center gap-1 bg-[#3dbf9e]/15 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-[#3dbf9e] rounded-full animate-ping"></span> MULTI-HUB SYNC
                </div>
              </div>

              {/* Animated Map Mesh */}
              <div className="relative w-full z-10 flex items-center justify-center">
                <svg viewBox="0 0 500 380" className="w-full h-auto max-w-[450px]">
                  
                  {/* Outer connections / Dotted bezier links */}
                  {/* Perth to Adelaide */}
                  <path d="M 60 220 Q 140 250 220 270" className="edge-path" stroke="#1a56ff" strokeWidth="2.5" fill="none" opacity="0.6" />
                  
                  {/* Adelaide to Melbourne */}
                  <path d="M 220 270 Q 250 295 280 310" className="edge-path" stroke="#3dbf9e" strokeWidth="2.5" fill="none" opacity="0.6" />
                  
                  {/* Melbourne to Sydney */}
                  <path d="M 280 310 Q 310 295 340 280" className="edge-path" stroke="#1a56ff" strokeWidth="2.5" fill="none" opacity="0.6" />
                  
                  {/* Sydney to Brisbane */}
                  <path d="M 340 280 Q 360 235 370 190" className="edge-path" stroke="#3dbf9e" strokeWidth="2.5" fill="none" opacity="0.6" />
                  
                  {/* Adelaide to Sydney */}
                  <path d="M 220 270 Q 280 260 340 280" className="edge-path" stroke="#1a56ff" strokeWidth="2" fill="none" opacity="0.5" />
                  
                  {/* Darwin to Adelaide */}
                  <path d="M 180 80 Q 200 175 220 270" className="edge-path" stroke="#3dbf9e" strokeWidth="2.2" fill="none" opacity="0.5" />
                  
                  {/* Darwin to Brisbane */}
                  <path d="M 180 80 Q 280 125 370 190" className="edge-path" stroke="#1a56ff" strokeWidth="2" fill="none" opacity="0.5" />

                  {/* Darwin to Perth */}
                  <path d="M 180 80 Q 100 150 60 220" className="edge-path" stroke="#3dbf9e" strokeWidth="2" fill="none" opacity="0.4" />

                  {/* ────────────────── HUB NODES ────────────────── */}
                  {/* Darwin (North Hub) */}
                  <g className="hub-node cursor-pointer">
                    <circle cx="180" cy="80" r="10" fill="rgba(26,86,255,0.12)" />
                    <circle cx="180" cy="80" r="4.5" fill="#1a56ff" className="transition-all duration-300" />
                    <circle cx="180" cy="80" r="16" fill="none" stroke="#1a56ff" strokeWidth="1.5" className="pulse-ring" />
                    <text x="180" y="62" textAnchor="middle" fill="#777" fontSize="9" fontWeight="bold" fontFamily="Inter" letterSpacing="1px">DARWIN</text>
                  </g>

                  {/* Perth (West Hub) */}
                  <g className="hub-node cursor-pointer">
                    <circle cx="60" cy="220" r="10" fill="rgba(61,191,158,0.12)" />
                    <circle cx="60" cy="220" r="4.5" fill="#3dbf9e" className="transition-all duration-300" />
                    <circle cx="60" cy="220" r="16" fill="none" stroke="#3dbf9e" strokeWidth="1.5" className="pulse-ring" style={{ animationDelay: '0.6s' }} />
                    <text x="60" y="242" textAnchor="middle" fill="#777" fontSize="9" fontWeight="bold" fontFamily="Inter" letterSpacing="1px">PERTH</text>
                  </g>

                  {/* Adelaide (Central Hub) */}
                  <g className="hub-node cursor-pointer">
                    <circle cx="220" cy="270" r="10" fill="rgba(26,86,255,0.12)" />
                    <circle cx="220" cy="270" r="4.5" fill="#1a56ff" className="transition-all duration-300" />
                    <circle cx="220" cy="270" r="16" fill="none" stroke="#1a56ff" strokeWidth="1.5" className="pulse-ring" style={{ animationDelay: '1.2s' }} />
                    <text x="220" y="292" textAnchor="middle" fill="#777" fontSize="9" fontWeight="bold" fontFamily="Inter" letterSpacing="1px">ADELAIDE</text>
                  </g>

                  {/* Melbourne (South Hub) */}
                  <g className="hub-node cursor-pointer">
                    <circle cx="280" cy="310" r="10" fill="rgba(61,191,158,0.12)" />
                    <circle cx="280" cy="310" r="4.5" fill="#3dbf9e" className="transition-all duration-300" />
                    <circle cx="280" cy="310" r="16" fill="none" stroke="#3dbf9e" strokeWidth="1.5" className="pulse-ring" style={{ animationDelay: '0.3s' }} />
                    <text x="280" y="332" textAnchor="middle" fill="#777" fontSize="9" fontWeight="bold" fontFamily="Inter" letterSpacing="1px">MELBOURNE</text>
                  </g>

                  {/* Sydney (East Hub) */}
                  <g className="hub-node cursor-pointer">
                    <circle cx="340" cy="280" r="10" fill="rgba(26,86,255,0.12)" />
                    <circle cx="340" cy="280" r="4.5" fill="#1a56ff" className="transition-all duration-300" />
                    <circle cx="340" cy="280" r="16" fill="none" stroke="#1a56ff" strokeWidth="1.5" className="pulse-ring" style={{ animationDelay: '0.9s' }} />
                    <text x="340" y="265" textAnchor="middle" fill="#777" fontSize="9" fontWeight="bold" fontFamily="Inter" letterSpacing="1px">SYDNEY</text>
                  </g>

                  {/* Brisbane (Northeast Hub) */}
                  <g className="hub-node cursor-pointer">
                    <circle cx="370" cy="190" r="10" fill="rgba(61,191,158,0.12)" />
                    <circle cx="370" cy="190" r="4.5" fill="#3dbf9e" className="transition-all duration-300" />
                    <circle cx="370" cy="190" r="16" fill="none" stroke="#3dbf9e" strokeWidth="1.5" className="pulse-ring" style={{ animationDelay: '1.5s' }} />
                    <text x="370" y="174" textAnchor="middle" fill="#777" fontSize="9" fontWeight="bold" fontFamily="Inter" letterSpacing="1px">BRISBANE</text>
                  </g>

                </svg>
              </div>

              {/* Status footer inside card */}
              <div className="w-full flex items-center justify-between mt-4 text-[11px] text-[#777] border-t border-black/[0.04] pt-4 z-10 font-medium">
                <span>Active Dotted Links: 8 Lanes</span>
                <span>Signal Quality: Excellent (100%)</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
