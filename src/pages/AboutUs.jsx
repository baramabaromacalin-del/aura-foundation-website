import React, { useEffect } from 'react';
import { GraduationCap, Shield, Heart, Users } from 'lucide-react';
import { ourStoryImg } from '../assets/images';
import DonateSection from '../components/DonateSection';
import './Pages.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div className="container">
          <h1>About Female Initiatives Foundation</h1>
          <p>Every girl deserves the chance to learn, grow, and have a future of her own.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-row">
            <div className="content-text">
              <h2>Our Story & Purpose</h2>
              <p>
                Female Initiatives Foundation was established with a simple belief: every girl deserves the chance to learn, grow and have a future of her own.
              </p>
              <p>
                We are committed to supporting women and girls in underserved communities, with a particular focus on access to education and the prevention of Female Genital Mutilation (FGM/C) and early and forced marriage.
              </p>
              <p>
                We want to help more girls attend school and continue their education, while working with families and communities to challenge the barriers that prevent them from reaching their potential. This includes supporting access to educational resources and working towards the development of schools in communities where they are needed.
              </p>
            </div>
            <div className="content-image-wrapper">
              <img 
                src={ourStoryImg} 
                alt="Representative of Female Initiatives Foundation" 
                className="content-image object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section section section-light">
        <div className="container">
          <div className="section-header center">
            <h2>Our Core Pillars</h2>
            <p className="subtitle">Guided by compassion, listening, and community-led partnership.</p>
          </div>
          
          <div className="mission-stats" style={{flexDirection: 'row', flexWrap: 'wrap', gap: '25px'}}>
            <div className="stat-card" style={{flex: '1', minWidth: '260px'}}>
              <GraduationCap className="stat-icon" size={40} />
              <h3>Access to Education</h3>
              <p>Supporting access to educational resources and working towards the development of schools in underserved communities.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '260px'}}>
              <Shield className="stat-icon" size={40} />
              <h3>Prevention of FGM/C & Forced Marriage</h3>
              <p>Engaging families and local leaders to challenge barriers and protect girls from early and forced marriage.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '260px'}}>
              <Heart className="stat-icon" size={40} />
              <h3>Comprehensive Survivor Care</h3>
              <p>Ongoing emotional, psychological, and specialist medical care—including reconstructive treatment chosen by the individual.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '260px'}}>
              <Users className="stat-icon" size={40} />
              <h3>Community Partnerships</h3>
              <p>Listening to women and girls and building practical alliances with organisations to turn shared aims into real support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-white">
        <div className="container">
          <div className="content-row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="content-text" style={{ maxWidth: '850px', textAlign: 'center' }}>
              <h2>Ongoing Care & Practical Action</h2>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444', marginBottom: '20px' }}>
                We also believe that support for FGM/C survivors must continue long after awareness campaigns have ended. Survivors deserve access to ongoing emotional and psychological care, as well as specialist medical support and reconstructive treatment where appropriate and chosen by the individual.
              </p>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
                Our work will be built around listening to women and girls, working alongside communities and developing partnerships with people and organisations who can help turn these aims into practical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DonateSection />
    </div>
  );
};

export default AboutUs;
