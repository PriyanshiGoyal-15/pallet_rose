import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="ft-top">
        <div className="ft-brand">
          <a href="#" className="logo">
            <svg viewBox="0 0 30 30" fill="none" style={{ width: '26px', height: '26px' }}>
              <path d="M7 5L19 5L25 15L19 25L7 25L1 15Z" stroke="#3dbf9e" strokeWidth="2.2" fill="none" />
              <path d="M11 10L19 15L11 20" stroke="#1a56ff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            </svg>
            Eloma Group
          </a>
          <p>A dynamic business group uniting logistics, digital innovation, security, travel and customer solutions - driven by purpose, performance, and sustainability.</p>
        </div>
        <div className="ft-links">
          <div className="ft-col">
            <h4>Verticals</h4>
            <a href="#reveal-section">Logistics</a>
            <a href="#reveal-section">Digital Systems</a>
            <a href="#reveal-section">Virtual Security</a>
            <a href="#reveal-section">Customer Solutions</a>
          </div>
          <div className="ft-col">
            <h4>Company</h4>
            <a href="#ecommerce">Who We Are</a>
            <a href="#pricing">Our Motto</a>
            <a href="#life-at-eloma">Careers</a>
            <a href="#community">Global Footprint</a>
          </div>
          <div className="ft-col">
            <h4>Sustainability</h4>
            <a href="#sustainability">Eco Vision</a>
            <a href="#sustainability">Ethical Growth</a>
            <a href="#sustainability">Community</a>
          </div>
        </div>
      </div>
      <div className="ft-bottom">
        <span>© 2026 Eloma Group. All rights reserved.</span>
        <span>Connecting Australia, Powering the Future.</span>
      </div>
    </footer>
  );
};
