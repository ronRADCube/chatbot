import React, { useContext } from "react";
import logo from "../assets/images/profile.jpg"; // Import the image
import { useState } from "react";
import Image from "next/image";
import { usePageContext } from "../PageContext";

const Header = (props) => {
  const botName = "OSMs Buddy";
  const { page, setPage } = usePageContext();
  // const [showToolTip, setShowToolTip] = useState(true);
  let showToolTip = false;
  console.log("Header props", props, "page");
  //   const [page, setPage] = useState("Survey");
  // props.state.page === "welcome"
  const displayToolTip = () => {
    console.log(" displayToolTip showToolTip", showToolTip);
    if (showToolTip) {
      const containerA = document.createElement("div");
      containerA.id = "containerA"; // Assign ID to container A
      const heading = document.createElement("h2");
      heading.id = "heading"; // Assign ID to heading
      const paragraph = document.createElement("div");
      paragraph.id = "paragraph"; // Assign ID to paragraph
      const list = document.createElement("ol");
      list.id = "list"; // Assign ID to paragraph
      const listItem1 = document.createElement("li");
      listItem1.innerHTML =
        "<b>Get started</b> > (Check your chance scores, by answering simply clicking Yes/No/Skip or click on (i) to know more about each question. (More your answer, better linkage, and accurate scoring)  "; // Assign ID to paragraph
      const listItem2 = document.createElement("li");
      listItem2.innerHTML =
        "<b>Act as needed</b> > (Order test kits, get tested)"; // Assign ID to paragraph
      const listItem3 = document.createElement("li");
      listItem3.innerHTML =
        "<b>Stay OSM, know your status</b> > (Talk to peer educator, Stay risk free)"; // Assign ID to paragraph
      const button = document.createElement("button");
      button.id = "button"; // Assign ID to button
      button.addEventListener("click", () => {
        console.log("Button click", showToolTip);
        handleWelcomeToolTip();
      });
      // Set content
      heading.textContent = "How to use?";
      button.textContent = "Dismiss";

      // Append elements to container A
      containerA.appendChild(heading);
      containerA.appendChild(paragraph);
      paragraph.appendChild(list);
      list.appendChild(listItem1);
      list.appendChild(listItem2);
      list.appendChild(listItem3);
      containerA.appendChild(button);

      // Get parent of container B
      const parentOfB = document.getElementsByClassName(
        "react-chatbot-kit-chat-input-container"
      )[0].parentNode;

      // Attach container A after container B
      parentOfB.insertBefore(
        containerA,
        document.getElementsByClassName(
          "react-chatbot-kit-chat-input-container"
        )[0].nextSibling
      );
    } else {
      const containerA = document.getElementById("containerA");

      if (containerA) {
        containerA.parentNode.removeChild(containerA);
      }
    }
  };
  const handleWelcomeToolTip = () => {
    console.log("handleWelcomeToolTip ", showToolTip);
    showToolTip = !showToolTip;
    setTimeout(displayToolTip, 0);

    // setShowToolTip((prevState) => !prevState);

    // Call displayToolTip after state has been updated
  };

  const handleSurveyToolTip = () => {};
  return (
    <>
      {page === "Welcome" ? (
        <div className="header-outer-div-welcome-page">
          <p className="header-para-welcome-page"> {botName} </p>
          <button
            className="tooltip-button-welcome-page"
            onClick={handleWelcomeToolTip}
          >
            🛈
          </button>
        </div>
      ) : (
        <div className="header-outer-div-survey-page">
          <p className="header-para-survey-page"> {botName}</p>
          <button
            className="tooltip-button-survey-page"
            onClick={handleWelcomeToolTip}
          >
            🛈 How to Use?
          </button>
          <div class="image-outer-div-survey-page">
            <Image alt="logo" className="image-survey-page" src={logo}></Image>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
