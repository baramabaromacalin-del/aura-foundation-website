import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Users, Target, Eye } from 'lucide-react';
import DonateSection from '../components/DonateSection';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Eliminating Female Genital Mutilation:<br/>
              <span className="hero-subtitle">One Purposeful Step at a Time</span>
            </h1>
            <p className="hero-text">
              We are dedicated to protecting women and girls, fostering bodily autonomy, 
              and empowering communities to break the cycle. Join us in making a difference.
            </p>
            <div className="hero-buttons">
              <Link to="/about-us" className="btn-primary hero-btn">
                Learn More <ArrowRight size={18} />
              </Link>
              <button 
                className="btn-donate hero-btn" 
                onClick={() => document.getElementById('donate').scrollIntoView({ behavior: 'smooth' })}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section section-white">
        <div className="container mission-container">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Female Initiatives Foundation was established with a simple belief: every girl deserves 
              the chance to learn, grow and have a future of her own. We are committed to supporting 
              women and girls in underserved communities, with a particular focus on access to education 
              and the prevention of Female Genital Mutilation (FGM/C) and early and forced marriage.
            </p>
          </div>
          <div className="mission-stats">
            <div className="stat-card">
              <Shield className="stat-icon" size={40} />
              <h3>Protection</h3>
              <p>Creating safe spaces for girls at risk</p>
            </div>
            <div className="stat-card">
              <Heart className="stat-icon" size={40} />
              <h3>Healing</h3>
              <p>Medical and psychological support for survivors</p>
            </div>
            <div className="stat-card">
              <Users className="stat-icon" size={40} />
              <h3>Education</h3>
              <p>Community outreach to change deep-rooted norms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aim & Vision Section */}
      <section className="aim-vision-section section-light" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-header center">
            <h2>Our Aim & Vision</h2>
            <p className="subtitle">Working towards systemic change, quality education, and lasting dignity.</p>
          </div>

          <div className="aim-vision-grid">
            <div className="aim-vision-card">
              <div className="aim-vision-header">
                <div className="aim-vision-icon-wrap">
                  <Target size={28} />
                </div>
                <h3>Our Aim</h3>
              </div>
              <p>
                To improve access to education for girls in underserved communities by helping them attend and remain in school, supporting educational resources and working towards building schools where they are needed.
              </p>
              <p>
                Protecting girls from FGM/C and early and forced marriage through community education and outreach, while ensuring survivors access long-term psychological, emotional, and specialist medical care—including reconstructive treatment.
              </p>
              <Link to="/about-us" className="read-more" style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-color)', fontWeight: '600' }}>
                Learn more about our aim <ArrowRight size={16} />
              </Link>
            </div>

            <div className="aim-vision-card">
              <div className="aim-vision-header">
                <div className="aim-vision-icon-wrap">
                  <Eye size={28} />
                </div>
                <h3>Our Vision</h3>
              </div>
              <p>
                A future where no girl is denied an education because of her gender, background or family circumstances—where girls complete their education, make their own choices, and build independent lives.
              </p>
              <p>
                Communities where girls are encouraged to learn, women are supported to move forward, and every survivor knows that she does not have to face her journey alone.
              </p>
              <Link to="/about-us" className="read-more" style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-color)', fontWeight: '600' }}>
                Explore our full vision <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="stats-banner section-dark">
        <div className="container stats-inner">
          <div className="stat-item">
            <span className="stat-number">200M+</span>
            <span className="stat-label">Women & Girls Affected Globally</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30</span>
            <span className="stat-label">Countries Where FGM Is Concentrated</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2030</span>
            <span className="stat-label">Our Goal for Zero Tolerance (SDGs)</span>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="stories-section section section-light">
        <div className="container">
          <div className="section-header center">
            <h2>Voices of Strength</h2>
            <p className="subtitle">Stories from the brave women leading change in their communities.</p>
          </div>
          
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-bg story-bg-1"></div>
              <div className="story-content">
                <h3>Amina's Journey</h3>
                <p>"Education gave me the voice I needed. Now, I educate other mothers in my village about the dangers of FGM."</p>
                <Link to="/about-us" className="read-more">Read Full Story <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="story-card">
              <div className="story-bg story-bg-2"></div>
              <div className="story-content">
                <h3>Championing Change</h3>
                <p>"When community leaders stand up against the practice, the entire village listens. We are seeing a new dawn."</p>
                <Link to="/about-us" className="read-more">Read Full Story <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section Component */}
      <DonateSection />
      
    </div>
  );
};

export default Home;
