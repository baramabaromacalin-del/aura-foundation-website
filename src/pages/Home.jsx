import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Users, Target, Eye } from 'lucide-react';
import { educationSupportImg, communityChildrenImg, forbesSummitImg } from '../assets/images';
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
                Our aim is to improve access to education for girls in underserved communities by helping them attend and remain in school, supporting educational resources and working towards building schools where they are needed.
              </p>
              <p>
                We also aim to protect girls from FGM/C and early and forced marriage through community education and outreach, while ensuring that survivors can access the long-term psychological, emotional and specialist medical care they need. This includes working with qualified healthcare professionals to help make appropriate reconstructive treatment available to those who want it.
              </p>
              <p>
                We want to work closely with families, community leaders, healthcare professionals and local organisations to make these plans a reality.
              </p>
            </div>

            <div className="aim-vision-card">
              <div className="aim-vision-header">
                <div className="aim-vision-icon-wrap">
                  <Eye size={28} />
                </div>
                <h3>Our Vision</h3>
              </div>
              <p>
                We envision a future where no girl is denied an education because of her gender, background or family circumstances.
              </p>
              <p>
                A future where girls can complete their education, make their own choices and build independent lives; where harmful practices such as FGM/C and early marriage are no longer part of their future; and where survivors are listened to, supported and able to access the care they deserve.
              </p>
              <p>
                We want to see communities where girls are encouraged to learn, women are supported to move forward, and every survivor knows that she does not have to face her journey alone.
              </p>
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

      {/* Featured Stories & Field Work */}
      <section className="stories-section section section-light">
        <div className="container">
          <div className="section-header center">
            <h2>Voices of Change</h2>
            <p className="subtitle">Real action in our communities and on global stages for every girl's future.</p>
          </div>
          
          <div className="stories-grid">
            <div className="story-card">
              <div 
                className="story-bg" 
                style={{ backgroundImage: `url(${educationSupportImg})`, backgroundPosition: 'center top' }}
              ></div>
              <div className="story-content">
                <h3>Education & School Access</h3>
                <p>"Equipping young girls in underserved areas with backpacks and school resources so they stay enrolled and protected."</p>
                <Link to="/childrens-rights" className="read-more">Learn About School Initiatives <ArrowRight size={14} /></Link>
              </div>
            </div>

            <div className="story-card">
              <div 
                className="story-bg" 
                style={{ backgroundImage: `url(${communityChildrenImg})`, backgroundPosition: 'center 20%' }}
              ></div>
              <div className="story-content">
                <h3>Community Protection</h3>
                <p>"Working directly with local families, village leaders, and children to create safe havens and end harmful traditions."</p>
                <Link to="/childrens-rights" className="read-more">View Community Action <ArrowRight size={14} /></Link>
              </div>
            </div>

            <div className="story-card">
              <div 
                className="story-bg" 
                style={{ backgroundImage: `url(${forbesSummitImg})`, backgroundPosition: 'center top' }}
              ></div>
              <div className="story-content">
                <h3>Global Leadership & Advocacy</h3>
                <p>"Speaking at the Forbes Leading Women Summit to demand international resources, survivor care, and zero tolerance."</p>
                <Link to="/female-rights" className="read-more">Read Our Advocacy Work <ArrowRight size={14} /></Link>
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
