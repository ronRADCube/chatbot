import React from "react";
import Image from "next/image";
import smileyPic from "../assets/images/smiley-pic.png"; // Import the image
import versaLogo from "../assets/images/versa-logo.png"; // Import the image
import "../styles/styles.css";
const ProgressHeader = () => {
  return (
    <div className="outer-wrapper">
      <div className="outer-container">
        <div className="image-container">
          <Image alt="versaLogo" src={versaLogo}></Image>
        </div>
        <div className="chat-body-container">
          <div className="profile-image-container">
            <Image alt="versaLogo" src={smileyPic}></Image>
          </div>
          <div className="welcome-card">
            <h3>Today Let&apos;s get you started</h3>
            <p>
              I will help you check your Oral, Sexual and Mental health
              interconnections, and it&apos;s
              <q>chance scores</q> for guided testing and care connections.
              <br></br>
              Spend only 6-10 minutes with me to get your chance score.
              Although, some questions may require more time and attention.
            </p>
            <button
              key="get-started"
              id="get-started"
              className="get-started-class"
            >
              Get your Chance Score now
            </button>
            <button key="know-more" id="know-more" className="know-more-class">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressHeader;
