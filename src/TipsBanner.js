import React from 'react';
import './TipsBanner.css';
import YouTubeLogo from './YoutubeLogo.js'; // Import the YouTube logo component

const TipsBanner = () => {
  return (
    <div className="tips-banner">
      <div className="tips-slider">
        <div className="tip-category">
          <h3>Mid Exam Tips</h3>
          <div className="tip-box">📖 Focus on understanding key concepts.</div>
          <div className="tip-box">📝 Practice past papers to identify common questions.</div>
          <div className="tip-box">⏰ Manage your time efficiently during the exam.</div>
        </div>
        <div className="tip-category">
          <h3>Final Exam Tips</h3>
          <div className="tip-box">📚 Review all chapters, focusing on weak areas.</div>
          <div className="tip-box">🔍 Create a quick revision guide for important formulas and concepts.</div>
          <div className="tip-box">💡 Take breaks and stay positive during your preparation.</div>
        </div>
      </div>

      {/* Recommended YouTube Channels Section */}
      {/* <div className="recommended-channels">
        <h3>Recommended YouTube Channels</h3>

        <div className="subject-section">
          <h4>DSA (Data Structures & Algorithms)</h4>
          <div className="channel-box">
            <p>Channel 1: Code with Harry</p>
            <a href="https://www.youtube.com/c/CodeWithHarry" target="_blank" rel="noopener noreferrer">
              <YouTubeLogo />
            </a>
          </div>
          <div className="channel-box">
            <p>Channel 2: Apna College</p>
            <a href="https://www.youtube.com/c/ApnaCollegeOfficial" target="_blank" rel="noopener noreferrer">
              <YouTubeLogo />
            </a>
          </div>
        </div>

        <div className="subject-section">
          <h4>DBMS (Database Management Systems)</h4>
          <div className="channel-box">
            <p>Channel 1: Gate Smashers</p>
            <a href="https://www.youtube.com/c/GateSmasher" target="_blank" rel="noopener noreferrer">
              <YouTubeLogo />
            </a>
          </div>
          <div className="channel-box">
            <p>Channel 2: Jenny's Lectures</p>
            <a href="https://www.youtube.com/c/JennysLecturesCSIT" target="_blank" rel="noopener noreferrer">
              <YouTubeLogo />
            </a>
          </div>
        </div>

        <div className="subject-section">
          <h4>OS (Operating Systems)</h4>
          <div className="channel-box">
            <p>Channel 1: Neso Academy</p>
            <a href="https://www.youtube.com/c/NesoAcademy" target="_blank" rel="noopener noreferrer">
              <YouTubeLogo />
            </a>
          </div>
          <div className="channel-box">
            <p>Channel 2: Knowledge Gate</p>
            <a href="https://www.youtube.com/c/KnowledgeGate" target="_blank" rel="noopener noreferrer">
              <YouTubeLogo />
            </a>
          </div>
        </div>

        <div className="subject-section">
          <h4>OOP (Object-Oriented Programming)</h4>
          <div className="channel-box">
            <p>Channel 1: Telusko</p>
            <a href="https://www.youtube.com/c/Telusko" target="_blank" rel="noopener noreferrer">
              <YouTubeLogo />
            </a>
          </div>
          <div className="channel-box">
            <p>Channel 2: Simple Snippets</p>
            <a href="https://www.youtube.com/c/SimpleSnippets" target="_blank" rel="noopener noreferrer">
              <YouTubeLogo />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TipsBanner;
