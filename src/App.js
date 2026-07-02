import React, { useState } from 'react';
import './App.css';

const STUDY_DATA = [
  { id: 1, country: 'Turkey 🇹🇷', title: 'Work & Study Program', details: 'Tuition starts at $600/semester. Invitation letter included. Earn while you learn.' },
  { id: 2, country: 'Malaysia 🇲🇾', title: 'Engineering Special', details: 'Exclusive Offer: Study an Engineering Degree for 4 Years, but pay for only 2 Years!' },
  { id: 3, country: 'Poland 🇵🇱', title: 'European Degree Portal', details: 'Apply straight from O-Level. Direct entry into world-class European universities.' },
  { id: 4, country: 'Cyprus 🇨🇾', title: 'University Placements', details: 'Smooth university enrollment with affordable pathways and seamless visa processing.' }
];

const WORK_DATA = [
  { id: 1, country: 'Canada 🇨🇦', title: 'Skilled Trades & Care', details: 'Plumbers, Welders, Care Workers, and Help Desk Analysts. Salaries start at $28+/hour.' },
  { id: 2, country: 'Turkey 🇹🇷', title: 'Hospitality & Education', details: 'Nanny positions, English Teaching, Hotel, and Retail jobs. Salaries range $1,000 - $1,500 USD/month.' },
  { id: 3, country: 'Poland 🇵🇱', title: 'Industrial Placements', details: 'Warehouse and Food Industry employment packages. Accommodation and daily meals generally provided.' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('study');
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '', service: 'study' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (formStep < 3) setFormStep(formStep + 1);
    else setSubmitted(true);
  };

  return (
    <div className="iasc-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-owl">🦉</div>
          <div className="logo-text">
            <h1>IASC</h1>
            <span>CONSULTANCY</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#opportunities">Opportunities</a>
          <a href="#apply">Portal</a>
          <a href="https://wa.me/263775827371" className="nav-cta">Apply Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-badge">YOUR JOURNEY. OUR GUIDANCE. YOUR FUTURE.</div>
        <h1 className="hero-title">Journey Beyond Borders Easily</h1>
        <p className="hero-subtitle">
          Connecting African students and professionals to premium global opportunities. Study straight from O-Level or transition directly into international career paths.
        </p>
        <div className="hero-ctas">
          <a href="#opportunities" className="btn-primary">View Openings</a>
          <a href="#apply" className="btn-secondary">Start Assessment</a>
        </div>
        
        <div className="stats-bar">
          <div className="stat-item"><h3>$600+</h3><p>Tuition / Sem</p></div>
          <div className="stat-item"><h3>100%</h3><p>Visa Assistance</p></div>
          <div className="stat-item"><h3>4 Years</h3><p>Pay for 2 (Malaysia)</p></div>
        </div>
      </header>

      {/* Opportunities Hub */}
      <section id="opportunities" className="opportunities-section">
        <h2>Explore Global Pathways</h2>
        <div className="tab-switcher">
          <button className={activeTab === 'study' ? 'active' : ''} onClick={() => setActiveTab('study')}>🎓 Study Abroad</button>
          <button className={activeTab === 'work' ? 'active' : ''} onClick={() => setActiveTab('work')}>💼 Work Placements</button>
        </div>

        <div className="cards-grid">
          {(activeTab === 'study' ? STUDY_DATA : WORK_DATA).map(item => (
            <div key={item.id} className="card">
              <span className="card-country">{item.country}</span>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Assessment Wizard */}
      <section id="apply" className="portal-section">
        <div className="portal-container">
          <h2>Secure Assessment Portal</h2>
          <p>Skip the busy Instagram DMs. Submit your profile directly to our verification team.</p>

          {!submitted ? (
            <form onSubmit={handleNextStep} className="wizard-form">
              <div className="step-indicator">
                <span className={formStep >= 1 ? 'active' : ''}>1</span>
                <span className={formStep >= 2 ? 'active' : ''}>2</span>
                <span className={formStep >= 3 ? 'active' : ''}>3</span>
              </div>

              {formStep === 1 && (
                <div className="form-step">
                  <h3>Step 1: Contact Details</h3>
                  <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleInputChange} />
                  <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} />
                  <input type="tel" name="phone" placeholder="WhatsApp Number (With Country Code)" required value={formData.phone} onChange={handleInputChange} />
                </div>
              )}

              {formStep === 2 && (
                <div className="form-step">
                  <h3>Step 2: Destination Preference</h3>
                  <select name="service" value={formData.service} onChange={handleInputChange}>
                    <option value="study">Study Abroad Programs</option>
                    <option value="work">International Work Placement</option>
                  </select>
                  <input type="text" name="country" placeholder="Desired Country (e.g., Canada, Turkey, Poland)" required value={formData.country} onChange={handleInputChange} />
                </div>
              )}

              {formStep === 3 && (
                <div className="form-step">
                  <h3>Step 3: Documents Upload</h3>
                  <div className="file-upload-zone">
                    <span className="upload-icon">📄</span>
                    <p>Drag & drop your Passports, CVs, or Academic Transcripts here</p>
                    <small>Supports PDF, JPG, PNG (Max 10MB)</small>
                    <input type="file" multiple disabled style={{opacity: 0, position: 'absolute'}} />
                  </div>
                </div>
              )}

              <button type="submit" className="btn-submit">
                {formStep === 3 ? 'Submit Secure Profile' : 'Continue'}
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h3>Application Successfully Received!</h3>
              <p>Thank you, <strong>{formData.name}</strong>. Your files and background details have been locked into our database secure pipeline.</p>
              <p className="success-note">An IASC agent from our Bulawayo/Harare or UK branch will review your criteria and reach out on <strong>{formData.phone}</strong> via WhatsApp within 24 hours.</p>
            </div>
          )}
        </div>
      </section>

      {/* Persistent Floating WhatsApp Widget */}
      <div className="whatsapp-widget">
        <a href="https://wa.me/263775827371" target="_blank" rel="noreferrer" className="wa-bubble">
          <span className="wa-icon">💬</span>
          <div className="wa-tooltip">Chat with IASC Agents</div>
        </a>
      </div>
    </div>
  );
}