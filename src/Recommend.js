import React from 'react';
import './Recommend.css';

const Recommend = () => {
  return (
    <div className="recommended-channels">
      <h3>Recommended YouTube Channels</h3>

      <div className="subject-section">
        <h4>DSA (Data Structures & Algorithms)</h4>
        <div className="channel-box">
          <a href="https://www.youtube.com/c/CodeWithHarry" target="_blank" rel="noopener noreferrer">
            Code with Harry
          </a>
        </div>
        <div className="channel-box">
          <a href="https://www.youtube.com/c/ApnaCollegeOfficial" target="_blank" rel="noopener noreferrer">
            Apna College
          </a>
        </div>
      </div>

      <div className="subject-section">
        <h4>DBMS (Database Management Systems)</h4>
        <div className="channel-box">
          <a href="https://www.youtube.com/c/GateSmasher" target="_blank" rel="noopener noreferrer">
            Gate Smashers
          </a>
        </div>
        <div className="channel-box">
          <a href="https://www.youtube.com/c/JennysLecturesCSIT" target="_blank" rel="noopener noreferrer">
            Jenny's Lectures
          </a>
        </div>
      </div>

      <div className="subject-section">
        <h4>OS (Operating Systems)</h4>
        <div className="channel-box">
          <a href="https://www.youtube.com/c/NesoAcademy" target="_blank" rel="noopener noreferrer">
            Neso Academy
          </a>
        </div>
        <div className="channel-box">
          <a href="https://www.youtube.com/c/KnowledgeGate" target="_blank" rel="noopener noreferrer">
            Knowledge Gate
          </a>
        </div>
      </div>

      <div className="subject-section">
        <h4>OOP (Object-Oriented Programming)</h4>
        <div className="channel-box">
          <a href="https://www.youtube.com/c/Telusko" target="_blank" rel="noopener noreferrer">
            Telusko
          </a>
        </div>
        <div className="channel-box">
          <a href="https://www.youtube.com/c/SimpleSnippets" target="_blank" rel="noopener noreferrer">
            Simple Snippets
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
