import React, { useEffect, useState } from "react";

const YNOptions = ({ options, onClick }) => {
  const [disabledButtons, setDisabledButtons] = useState({});
  console.log("YNOptions ", options);
  const handleClick = (option) => {
    onClick(option.name);
    setDisabledButtons((prev) => ({ ...prev, [option.id]: true }));
    console.log("disabled buttons", option.name, "---", disabledButtons);
    const button = document.getElementById(option.id);
    if (button) {
      button.removeAttribute("onclick");
      console.log(
        "remove button onclick",
        option.name,
        "---",
        option.id,
        button
      );
    }
  };
  const markup = options.map((option) => (
    <button
      key={option.id}
      id={option.id}
      onClick={() => handleClick(option)}
      disabled={disabledButtons[option.id]}
    >
      {option.name}
    </button>
  ));

  return <div>{markup}</div>;
};

export default YNOptions;
