import React from "react";
import logo from "../images/jobCrypt_logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import JobListing from "./JobListing";
import MailList from "./MailList";
import Footer from "./Footer";

function Homepage() {
  return (
    <section>
      <div className="first-section">
        <div className="icons-container">
          <div className="logo-container">
            <img src={logo} alt="logo" />
            <h6>Job Crypt</h6>
          </div>
          <div className="links-container">
            <a
              href="https://twitter.com/JobCrypt"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://discord.com/invite/JgBEEtaSmD"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://www.tiktok.com/@jobcrypt"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/channel/UCEX4iMGm6HXD9kP5MiEieAQ"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="dashboard-container">
          <div className="info">
            <a
              href="https://www.youtube.com/watch?v=iW9EAOCsgJc"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutubeSquare />
            </a>
            <p>How to use JobCrypt</p>
          </div>
          <div className="info">
            <a
              href="https://help.optimism.io/hc/en-us/articles/4411903123483-Connecting-your-wallet-to-Optimism"
              target="_blank"
              rel="noreferrer"
            >
              <FaInfoCircle />
            </a>
            <p>Click here to install MetaMask!</p>
          </div>
          <div className="dashboard-box">
            <br></br>
            <br></br>
            <h4>Select Dashboard</h4>
            <p>
              Need Crypto? <span>TEST NET USE FAUCET!!</span>
            </p>
            <div>
              <a href="https://sepoliajobcrypt.on.fleek.co/pages/employer/employer_dashboard.html">
                Employer
              </a>{" "}
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <a href="https://sepoliajobcrypt.on.fleek.co/pages/jobseeker/job_seeker_dashboard.html">
                Job Seeker
              </a>
            </div>
            <br></br>
          </div>
        </div>
      </div>

      <JobListing />

      <MailList />

      <Footer />
      
    </section>
  );
}

export default Homepage;
