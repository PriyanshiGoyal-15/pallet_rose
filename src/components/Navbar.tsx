import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <a href="#" className="logo">
        <svg viewBox="0 0 30 30" fill="none">
          <path d="M7 5L19 5L25 15L19 25L7 25L1 15Z" stroke="#3dbf9e" strokeWidth="2.2" fill="none" />
          <path d="M11 10L19 15L11 20" stroke="#1a56ff" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
        Eloma Group
      </a>
      <ul className="nav-links">
        <li><a href="#ecommerce">Who We Are</a></li>
        <li>
          <a href="#reveal-section" className="strategy-link">
            <span className="strategy-dot"></span>Our Verticals
          </a>
        </li>
        <li><a href="#sustainability">Sustainability</a></li>
        <li><a href="#life-at-eloma">Life at Eloma</a></li>
        <li><a href="#pricing">Our Motto</a></li>
        <li><a href="#community">Global Footprint</a></li>
      </ul>
      <div className="nav-actions">
        <button className="nav-icon-btn" aria-label="Profile">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
        </button>
        <button className="nav-icon-btn" aria-label="Settings">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
