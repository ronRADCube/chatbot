import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  console.log("GeneralOptionsprops", props);

  const options = [
    {
      name: "Opt In",
      handler: props.actionProvider.handleOptIn,
      id: 1,
    },
    {
      name: "Opt Out",
      handler: props.actionProvider.handleOptOut,
      id: 2,
    },
    {
      name: "Know More",
      handler: props.actionProvider.handleKnowMore,
      id: 3,
    },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
