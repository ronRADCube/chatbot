import React, { useContext } from "react";
import logo from "../assets/images/profile.jpg"; // Import the image
import trash from "../assets/images/trash.jpg"; // Import the image
import translate from "../assets/images/translate.png"; // Import the image
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePageContext } from "../PageContext";
// import { Trash2 } from "lucide-react";

const Header = (props) => {
  const botName = "OSMs Buddy";
  const { page, setPage } = usePageContext();
  // const [showToolTip, setShowToolTip] = useState(true);
  let showToolTip = false;
  let showTranslateToolTip = false;
  let showTrashToolTip = false;
  console.log("Header props", props, "page");
  //   const [page, setPage] = useState("Survey");
  // props.state.page === "welcome"
  useEffect(() => {
    if (page === "Welcome") {
      displayTrash();
      displayTranslate();
    }
  }, [page]);

  const displayTrash = () => {
    console.log("Calling Display Trash");
    console.log("doc trash", document);
    // if (document.getElementsByClassName("trash-button").length !== 0) {
    console.log("Creating trash button");
    // const trashButton = document.createElement("button");
    const trashButton = document.getElementsByClassName("trash-button")[0];
    console.log("trashButton", trashButton);
    // trashButton.className = "trash-button";
    trashButton.addEventListener("click", () => {
      console.log("Trash Button click", showTrashToolTip);
      handleTrashToolTip();
    });
    // const trashImage = document.createElement("img");
    // trashImage.src = "../assets/images/trash.jpg";
    // trashImage.className = "trash-button-icon";

    // trashButton.appendChild(trashImage);
    // const translateButton =      document.getElementsByClassName("translate-button")[0];
    const chatInput = document.getElementsByClassName(
      "react-chatbot-kit-chat-input-form"
    )[0];
    console.log("chatinput", chatInput);
    chatInput.parentNode.insertBefore(trashButton, chatInput);
    // }
  };
  const displayTranslate = () => {
    console.log("Calling Display Translate");
    console.log("doc2", document);
    // if (document.getElementsByClassName("translate-button").length === 0) {
    console.log("Creating translate button");
    // const translateButton = document.createElement("button");
    const translateButton =
      document.getElementsByClassName("translate-button")[0];
    // translateButton.className = "translate-button";
    console.log("translateButton", translateButton);
    translateButton.addEventListener("click", () => {
      console.log("Translate Button click", showTranslateToolTip);
      handleTranslateToolTip();
    });
    // const translateImage = document.createElement("img");
    // translateImage.src = translate;
    // translateImage.className = "translate-button-icon";

    // translateButton.appendChild(translateImage);
    // const translateButton =      document.getElementsByClassName("translate-button")[0];
    const chatInput = document.getElementsByClassName(
      "react-chatbot-kit-chat-input-form"
    )[0];
    console.log("chatinput", chatInput);
    chatInput.insertAdjacentElement("afterEnd", translateButton);
    // }
  };
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
  const displayTrashToolTip = () => {
    console.log(" displayToolTip showTrashToolTip", showTrashToolTip);
    if (showTrashToolTip) {
      const toolTipButton = document.getElementsByClassName(
        "tooltip-button-welcome-page"
      )[0];
      toolTipButton.disabled = true;
      const translateButton =
        document.getElementsByClassName("translate-button")[0];
      translateButton.disabled = true;
      const knowMoreButton = document.getElementById("know-more");
      knowMoreButton.disabled = true;
      const getStartedButton =
        document.getElementsByClassName("get-started-class")[0];
      getStartedButton.disabled = true;

      const containerA = document.createElement("div");
      containerA.id = "containerA"; // Assign ID to container A
      // const heading = document.createElement("h2");
      // heading.id = "know-more-heading"; // Assign ID to heading
      const paragraph = document.createElement("div");
      paragraph.id = "paragraph"; // Assign ID to paragraph
      const paragraphElement = document.createElement("p");
      paragraphElement.id = "know-more-paragraph-element";
      paragraphElement.innerHTML = `<b>Alright, let’s delete the chat!</b> <br /><br />Deleting the chat will clear your progress, including your Chance Score and Earned Points.  <br /><br />After getting your score, remember to click “Get Report” to save. If not, no worries! You can always retake the Chance Score anytime, anywhere. <br /><br /><b>Bye and Stay OSM!</b>`;
      const button = document.createElement("button");
      button.id = "trash-dismiss-button"; // Assign ID to button
      button.addEventListener("click", () => {
        console.log("Button click", showTrashToolTip);
        handleTrashToolTip();
      });
      const button2 = document.createElement("button");
      button2.id = "trash-delete-button"; // Assign ID to button
      button2.addEventListener("click", () => {
        console.log("Button click", showTrashToolTip);
        handleTrashToolTip();
      });
      // Set content
      // heading.textContent = "What is OSM Chance Score?";
      button.textContent = "Dismiss";
      button2.textContent = "Delete";

      // Append elements to container A
      // containerA.appendChild(heading);
      paragraph.appendChild(paragraphElement);
      containerA.appendChild(paragraph);
      containerA.appendChild(button);
      containerA.appendChild(button2);

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
      const toolTipButton = document.getElementsByClassName(
        "tooltip-button-welcome-page"
      )[0];
      toolTipButton.disabled = false;

      const translateButton =
        document.getElementsByClassName("translate-button")[0];
      translateButton.disabled = false;
      const knowMoreButton = document.getElementById("know-more");
      knowMoreButton.disabled = false;
      const getStartedButton =
        document.getElementsByClassName("get-started-class")[0];
      getStartedButton.disabled = false;
      const containerA = document.getElementById("containerA");

      if (containerA) {
        containerA.parentNode.removeChild(containerA);
      }
    }
  };
  const displayTranslateToolTip = () => {
    console.log(
      " displayTranslateToolTip showTranslateTooltip",
      showTranslateToolTip
    );
    if (showTranslateToolTip) {
      const toolTipButton = document.getElementsByClassName(
        "tooltip-button-welcome-page"
      )[0];
      toolTipButton.disabled = true;
      const trashButton = document.getElementsByClassName("trash-button")[0];
      trashButton.disabled = true;
      const knowMoreButton = document.getElementById("know-more");
      knowMoreButton.disabled = true;
      const getStartedButton =
        document.getElementsByClassName("get-started-class")[0];
      getStartedButton.disabled = true;
      const containerA = document.createElement("div");
      containerA.id = "containerA"; // Assign ID to container A
      // const heading = document.createElement("h2");
      // heading.id = "know-more-heading"; // Assign ID to heading
      const paragraph = document.createElement("div");
      paragraph.id = "paragraph"; // Assign ID to paragraph
      const paragraphElement = document.createElement("p");
      paragraphElement.id = "know-more-paragraph-element";
      paragraphElement.innerHTML = `<b>Hey there!</b> <br /><br />I'm currently in "beta phase" and can only chat in English. But don't worry, in the future, I'll be speaking all sorts of languages to chat about OSM topics!<br /><br /><b>¡Hola!</b><br /><br />Solo para informarte, actualmente estoy en la fase beta y solo puedo chatear en inglés. Pero no te preocupes, ¡en el futuro hablaré todo tipo de idiomas para conversar sobre temas de OSM! `;
      const button = document.createElement("button");
      button.id = "translate-dismiss-button"; // Assign ID to button
      button.addEventListener("click", () => {
        console.log("Button click", showTranslateToolTip);
        handleTranslateToolTip();
      });
      // Set content
      // heading.textContent = "What is OSM Chance Score?";
      button.textContent = "Dismiss";

      // Append elements to container A
      // containerA.appendChild(heading);
      paragraph.appendChild(paragraphElement);
      containerA.appendChild(paragraph);
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
      const toolTipButton = document.getElementsByClassName(
        "tooltip-button-welcome-page"
      )[0];
      toolTipButton.disabled = false;
      const trashButton = document.getElementsByClassName("trash-button")[0];
      trashButton.disabled = false;
      const knowMoreButton = document.getElementById("know-more");
      knowMoreButton.disabled = false;
      const getStartedButton =
        document.getElementsByClassName("get-started-class")[0];
      getStartedButton.disabled = false;
      const containerA = document.getElementById("containerA");

      if (containerA) {
        containerA.parentNode.removeChild(containerA);
      }
    }
  };

  const handleTrashToolTip = () => {
    console.log("handleTranslate ", showTrashToolTip);
    showTrashToolTip = !showTrashToolTip;
    setTimeout(displayTrashToolTip, 0);

    // setShowToolTip((prevState) => !prevState);

    // Call displayToolTip after state has been updated
  };
  const handleTranslateToolTip = () => {
    console.log("handleTranslate ", showTranslateToolTip);
    showTranslateToolTip = !showTranslateToolTip;
    setTimeout(displayTranslateToolTip, 0);

    // setShowToolTip((prevState) => !prevState);

    // Call displayToolTip after state has been updated
  };

  const handleWelcomeToolTip = () => {
    console.log("handleWelcomeToolTip ", showToolTip);
    showToolTip = !showToolTip;
    setTimeout(displayToolTip, 0);

    // setShowToolTip((prevState) => !prevState);

    // Call displayToolTip after state has been updated
  };

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
          <button className="trash-button">
            <Image alt="logo" className="trash-button-icon" src={trash}></Image>
          </button>
          <button className="translate-button">
            <Image
              alt="logo"
              className="translate-button-icon"
              src={translate}
            ></Image>
          </button>
          {/* <Trash2 /> */}
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
            {/* <Image alt="logo" className="image-survey-page" src={logo}></Image>{" "} */}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
