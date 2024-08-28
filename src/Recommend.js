import React from 'react';
import './Recommend.css';

const Recommend = () => {
  return (
    <div className="recommended-channels">
      <h3>Recommended YouTube Channels</h3>

      <div className="subject-section">
        <h4>DSA (Data Structures & Algorithms)</h4>
        <a href="https://www.youtube.com/c/CodeWithHarry" target="_blank" rel="noopener noreferrer">
          <div className="channel-box">
            Code with Harry
          </div>
        </a>
        <a href="https://www.youtube.com/c/ApnaCollegeOfficial" target="_blank" rel="noopener noreferrer">
          <div className="channel-box">
            Apna College
          </div>
        </a>
      </div>

      <div className="subject-section">
        <h4>DBMS (Database Management Systems)</h4>
        <a href="https://www.youtube.com/c/GateSmasher" target="_blank" rel="noopener noreferrer">
          <div className="channel-box">
            Gate Smashers
          </div>
        </a>
        <a href="https://www.youtube.com/c/JennysLecturesCSIT" target="_blank" rel="noopener noreferrer">
          <div className="channel-box">
            Jenny's Lectures
          </div>
        </a>
      </div>

      <div className="subject-section">
        <h4>OS (Operating Systems)</h4>
        <a href="https://www.youtube.com/c/NesoAcademy" target="_blank" rel="noopener noreferrer">
          <div className="channel-box">
            Neso Academy
          </div>
        </a>
        <a href="https://www.youtube.com/c/KnowledgeGate" target="_blank" rel="noopener noreferrer">
          <div className="channel-box">
            Knowledge Gate
          </div>
        </a>
      </div>

      <div className="subject-section">
        <h4>OOP (Object-Oriented Programming)</h4>
        <a href="https://www.youtube.com/c/Telusko" target="_blank" rel="noopener noreferrer">
          <div className="channel-box">
            Telusko
          </div>
        </a>
        <a href="https://www.youtube.com/c/SimpleSnippets" target="_blank" rel="noopener noreferrer">
          <div className="channel-box">
            Simple Snippets
          </div>
        </a>
      </div>
    </div>
  );
};

export default Recommend;
