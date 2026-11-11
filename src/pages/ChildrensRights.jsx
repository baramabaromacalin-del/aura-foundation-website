import React, { useEffect } from 'react';
import { Home as HomeIcon, GraduationCap, Users, CheckCircle } from 'lucide-react';
import { communityChildrenImg, educationSupportImg } from '../assets/images';
import DonateSection from '../components/DonateSection';
import './Pages.css';

const ChildrensRights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Protecting Children's Rights</h1>
          <p>Ensuring every girl grows up safe, healthy, and empowered to reach her full potential.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-row reverse">
            <div className="content-image-wrapper">
              <img 
                src={communityChildrenImg} 
                alt="Miss World Somalia interacting with children in local community" 
                className="content-image object-cover"
              />
            </div>
            <div className="content-text">
              <h2>A Childhood Free from Fear</h2>
              <p>
                FGM is mostly carried out on young girls between infancy and age 15. The protection of girls 
                is therefore at the very center of our mission. It is a fundamental child rights issue.
              </p>
              <p>
                Through community-led initiatives, we focus on prevention. By keeping girls in school and 
                providing safe spaces, we significantly reduce the risk of them undergoing the procedure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-light">
        <div className="container">
          <div className="section-header center">
            <h2>Our Core Programs</h2>
            <p className="subtitle">Actionable pathways to protect young girls and nurture their potential.</p>
          </div>
          
          <div className="mission-stats" style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <GraduationCap className="stat-icon" size={40} />
              <h3>Education Access</h3>
              <p>Providing scholarships and school supplies to keep girls enrolled in formal education.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <HomeIcon className="stat-icon" size={40} />
              <h3>Safe Havens</h3>
              <p>Establishing secure shelters for girls fleeing the threat of FGM in high-risk areas.</p>
            </div>
            <div className="stat-card" style={{flex: '1', minWidth: '300px'}}>
              <Users className="stat-icon" size={40} />
              <h3>Youth Clubs</h3>
              <p>Creating peer-to-peer support networks where girls can learn about their rights safely.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-row">
            <div className="content-image-wrapper">
              <img 
                src={educationSupportImg} 
                alt="Miss World Somalia providing backpacks and educational support to schoolgirls" 
                className="content-image object-cover"
              />
            </div>
            <div className="content-text">
              <h2>Empowering Girls Through Education</h2>
              <p>
                Our aim is to improve access to education for girls in underserved communities by helping them attend and remain in school, supporting educational resources and working towards building schools where they are needed.
              </p>
              <p>
                When a girl has access to books, backpacks, and an encouraging learning environment, she is far less vulnerable to early forced marriage and FGM/C. We work directly with schools and local families to turn educational opportunity into practical, lasting reality.
              </p>
              <ul>
                <li><CheckCircle className="li-icon" size={20} /> Backpacks, stationery, and learning resource distribution</li>
                <li><CheckCircle className="li-icon" size={20} /> Community dialogues to keep girls enrolled past primary school</li>
                <li><CheckCircle className="li-icon" size={20} /> Working towards building and upgrading schools in remote communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <DonateSection />
    </div>
  );
};

export default ChildrensRights;
