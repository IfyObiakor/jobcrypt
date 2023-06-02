import React from "react";
import { FaYoutubeSquare } from "react-icons/fa";

function JobListing() {
  return (
    <div className="second-section">
      <div className="empty-box"></div>
      <div className="box-group">
        <div className="left">
          <h2>About the Role</h2>
        </div>
        <div className="right">
          <div className="box">
            <h4>Key Skills</h4>
            <div className="info">
              <a
                href="https://www.youtube.com/watch?v=uDb__IyBfWs"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutubeSquare />
              </a>
              <p>How to Apply with JobCrypt</p>
            </div>
          </div>
          <div className="box"><h4>Job Categories</h4></div>
        </div>
      </div>

      <button className="back-button"><a href="https://sepoliajobcrypt.on.fleek.co/index.html">Back</a></button>
    </div>
  );
}

export default JobListing;
