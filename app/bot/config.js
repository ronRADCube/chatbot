// in config.js
// import { createChatBotMessage } from "react-chatbot-kit";
import logo from "../assets/images/profile.jpg"; // Import the image
import GeneralOptions from "./widgets/GeneralOptions";
import YNQuestions from "./widgets/YNQuestions";
import CustomMessage from "./CustomMessage";
import Header from "./Header";

import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
const botName = "OSM Buddy";

const config = {
  initialMessages: [createCustomMessage("Test", "custom")],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#034efc",
    },
    chatButton: {
      backgroundColor: "#e6da85",
    },
  },
  state: {
    page: "Welcome",
    questionList: [
      {
        questionNumber: 1,
        answer: "Unanswered",
        question: "What is your name?",
        skippable: false,
        branching: {
          yes: 2,
          no: 3,
        },
      },
      {
        questionNumber: 2,
        answer: "Unanswered",
        question: "What is your age?",
        skippable: false,
        branching: {},
      },
      {
        questionNumber: 3,
        answer: "Unanswered",
        question: "What is your occupation?",
        skippable: false,
        branching: {},
      },
    ],
    currentQuestion: 1,
  },
  widgets: [
    {
      widgetName: "generalOptions",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "ynQuestion",
      widgetFunc: (props) => <YNQuestions {...props} />,
    },
    {
      widgetName: "customMessage",
      widgetFunc: (props) => <CustomMessage {...props} />,
    },
  ],
  customComponents: {
    // Replaces the default header
    header: (props) => <Header {...props} />,
    //  // Replaces the default bot avatar
    botAvatar: (props) => <></>,
    //  // Replaces the default bot chat message container
    //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    //  // Replaces the default user icon
    //  userAvatar: (props) => <MyCustomAvatar {...props} />,
    //  // Replaces the default user chat message
    //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
};

export default config;
