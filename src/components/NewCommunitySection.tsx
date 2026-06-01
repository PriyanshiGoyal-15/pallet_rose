import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const TOP_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1488161628813-04466f872524?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=400&q=80"
];

const BOTTOM_IMAGES = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
];

export const NewCommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const topTrackRef = useRef<HTMLDivElement>(null);
  const bottomTrackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Entrance animation for heading
      gsap.fromTo(headingRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Endless Marquee for Top Images (Moving Left)
      if (topTrackRef.current) {
        gsap.to(topTrackRef.current, {
          xPercent: -50, // Move by 50% of the duplicated track width
          ease: "none",
          duration: 40,
          repeat: -1,
        });
      }

      // Endless Marquee for Bottom Images (Moving Right)
      if (bottomTrackRef.current) {
        gsap.fromTo(bottomTrackRef.current, 
          { xPercent: -50 },
          {
            xPercent: 0,
            ease: "none",
            duration: 45,
            repeat: -1,
          }
        );
      }

      // Wave Animation for all images
      if (sectionRef.current) {
        const images = sectionRef.current.querySelectorAll('.wave-image');
        gsap.fromTo(images,
          { y: -20 },
          {
            y: 20,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            stagger: {
              each: 0.15,
              from: "start"
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef} 
      id="life-at-eloma"
      className="mx-[14px] mb-[14px] bg-[#fdfdfd] rounded-[26px] overflow-hidden relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between min-h-[95vh] px-6 md:px-12 py-[60px] md:py-[80px] gap-8"
    >
      
      {/* Top Floating Images Track (In flow) */}
      <div className="w-full overflow-hidden flex whitespace-nowrap relative z-10">
        <div ref={topTrackRef} className="flex gap-[40px] px-[20px] items-center w-max">
          {/* Double the images for seamless looping */}
          {[...TOP_IMAGES, ...TOP_IMAGES].map((src, i) => (
            <div 
              key={`top-${i}`} 
              className="wave-image w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-[32px] overflow-hidden flex-shrink-0 shadow-lg cursor-pointer"
            >
              <img src={src} alt="Community Avatar" loading="lazy" className="w-full h-full object-cover object-center" />
            </div>
          ))}
        </div>
      </div>

      {/* Center Content (In flow) */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-[800px] my-6" ref={headingRef}>
        
        {/* Small Icon above text */}
        <div className="w-[48px] h-[48px] rounded-full border border-[#eaeaea] bg-white flex items-center justify-center shadow-sm mb-[24px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>

        <h2 className="text-[44px] md:text-[56px] lg:text-[68px] font-bold tracking-[-2px] leading-[1.05] text-[#111] mb-[24px]">
          Life at Eloma
        </h2>
        
        <p className="text-[15px] md:text-[16.5px] text-[#555] font-medium max-w-[620px] leading-[1.65]">
          At Eloma, work is not just about a job. It is about learning, growing, and building something meaningful. We are a team of people who support each other. We believe in simple ideas - respect, trust, and growth. Every day, you get a chance to try new things, learn new skills, and become better.
        </p>

      </div>

      {/* Why Work at Eloma Expansion Grid */}
      <div className="relative z-20 w-full max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 mb-6 text-left">
        
        {/* Left Column: Why Work at Eloma Details */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[28px] font-black tracking-[-1px] text-[#111] mb-4">Why Work at Eloma?</h3>
          <p className="text-[14px] text-[#555] leading-[1.65] mb-5 font-semibold">
            Eloma Group is a growing company based in Australia, India, US, Canada, China, UK, UAE and Singapore. We work across different industries and build strong businesses. We give people real opportunities to grow. Not just in work, but in life too.
          </p>
          
          {/* Glowing Gradient Callout */}
          <div className="p-5 rounded-[16px] bg-gradient-to-tr from-[#1a56ff]/5 to-[#3dbf9e]/5 border border-black/5 shadow-[0_10px_20px_rgba(0,0,0,0.02)]">
            <p className="text-[13.5px] text-[#111] font-bold leading-relaxed italic">
              "Here, your work matters. Your ideas are heard. Your efforts are valued."
            </p>
          </div>
        </div>

        {/* Right Column: Core Beliefs List */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[11px] font-black tracking-[3px] uppercase text-[#888] mb-5">We Believe In:</h3>
          
          <ul className="flex flex-col gap-3.5 list-none p-0">
            {[
              "Fair chances for everyone",
              "Learning by doing",
              "Growing together as a team",
              "A healthy work-life balance"
            ].map((belief, idx) => (
              <li key={idx} className="group flex items-center gap-3.5 p-3.5 rounded-[12px] bg-white border border-black/5 hover:border-black/20 hover:shadow-md transition-all duration-300 hover:-translate-x-1 cursor-pointer">
                <span className="w-6 h-6 rounded-full bg-[#1a56ff]/10 flex items-center justify-center text-[#1a56ff] group-hover:bg-[#1a56ff] group-hover:text-white transition-colors">
                  {idx + 1}
                </span>
                <span className="text-[13.5px] text-[#333] font-bold">{belief}</span>
              </li>
            ))}

            {/* Concluding Badge */}
            <div className="mt-2 p-3.5 rounded-[12px] bg-[#111] text-white text-center text-[12.5px] font-black tracking-wide uppercase shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
              At Eloma, you don’t just work. You build your future.
            </div>
          </ul>
        </div>

      </div>

      {/* Bottom Floating Images Track (In flow) */}
      <div className="w-full overflow-hidden flex whitespace-nowrap relative z-10">
        <div ref={bottomTrackRef} className="flex gap-[40px] px-[20px] items-center w-max">
          {[...BOTTOM_IMAGES, ...BOTTOM_IMAGES].map((src, i) => (
            <div 
              key={`bottom-${i}`} 
              className="wave-image w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-[32px] overflow-hidden flex-shrink-0 shadow-lg cursor-pointer"
            >
              <img src={src} alt="Community Avatar" loading="lazy" className="w-full h-full object-cover object-center" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
