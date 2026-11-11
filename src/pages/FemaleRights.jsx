import React, { useEffect } from 'react';
import { BookOpen, Megaphone, Scale, CheckCircle } from 'lucide-react';
import { forbesSummitImg, podiumSpeechImg } from '../assets/images';
import DonateSection from '../components/DonateSection';
import './Pages.css';

const FemaleRights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Advancing Female Rights</h1>
          <p>Education, advocacy, and unwavering support for women's bodily autonomy.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-row">
            <div className="content-image-wrapper">
              <img 
                src={forbesSummitImg} 
                alt="Miss World Somalia speaking at the Forbes Leading Women Summit on ending FGM" 
                className="content-image object-cover"
              />
            </div>
            <div className="content-text">
              <h2>Understanding the Impact</h2>
              <p>
                Female Genital Mutilation is a severe violation of the human rights of girls and women. 
                It reflects deep-rooted inequality between the sexes, and constitutes an extreme form of 
                discrimination against women.
              </p>
              <p>
                The practice violates a person's rights to health, security, and physical integrity, 
                the right to be free from torture and cruel, inhuman or degrading treatment, and the right 
                to life when the procedure results in death.
              </p>
              <ul>
                <li><CheckCircle className="li-icon" size={20} /> Severe physical pain and psychological trauma</li>
                <li><CheckCircle className="li-icon" size={20} /> Increased risk of complications in childbirth</li>
                <li><CheckCircle className="li-icon" size={20} /> Long-term chronic pain and recurrent infections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-light">
        <div className="container">
          <div className="section-header center">
            <h2>Our Advocacy Pillars</h2>
            <p className="subtitle">Demanding accountability, empowering survivors, and driving legislative reform.</p>
          </div>
          
          <div className="mission-stats" style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <Scale className="stat-icon" size={40} />
              <h3>Legal Rights</h3>
              <p>We work with lawmakers to advocate for stronger legislation banning FGM and protecting vulnerable women.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <BookOpen className="stat-icon" size={40} />
              <h3>Health Education</h3>
              <p>Providing accurate medical information to communities to debunk myths surrounding the practice.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <Megaphone className="stat-icon" size={40} />
              <h3>Awareness Campaigns</h3>
              <p>Running national and local campaigns to destigmatize the conversation around women's bodies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-row reverse">
            <div className="content-image-wrapper">
              <img 
                src={podiumSpeechImg} 
                alt="Miss World Somalia delivering keynote address at international conference on bodily autonomy" 
                className="content-image object-cover"
              />
            </div>
            <div className="content-text">
              <h2>Advocacy & Institutional Partnerships</h2>
              <p>
                True, lasting transformation requires engaging at every level of society—from community elders and healthcare providers to national policy makers and international summits.
              </p>
              <p>
                Through sustained advocacy and high-level representation, Female Initiatives Foundation elevates the voices of survivors and underserved women, demanding actionable policies and dedicated resources to end FGM/C permanently.
              </p>
              <ul>
                <li><CheckCircle className="li-icon" size={20} /> High-level representation at global leadership summits</li>
                <li><CheckCircle className="li-icon" size={20} /> Collaboration with qualified medical professionals for survivor reconstruction</li>
                <li><CheckCircle className="li-icon" size={20} /> Partnering with grassroots advocates to enforce legal protections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <DonateSection />
    </div>
  );
};

export default FemaleRights;
