import React, { useEffect } from "react";

const Options = (props) => {
  const { options, setState, state } = props;
  console.log("Options props", props);

  // const handleButton = (buttonValue) => {
  //   // const calculation = useMemo(() => {
  //   //   console.log("Calling the optin from handle yes");
  //   //   handleOptIn();
  //   // }, [state.questionList]);

  //   let yesButton = document.getElementById(
  //     `button_yes_${state.currentQuestion}`
  //   );
  //   let noButton = document.getElementById(
  //     `button_no_${state.currentQuestion}`
  //   );
  //   console.log(
  //     `prebutton exists button_yes_${state.currentQuestion}`,
  //     yesButton
  //   );

  //   if (yesButton) {
  //     yesButton.disabled = true;
  //     yesButton.onclick = null;
  //     yesButton.removeAttribute("onclick");
  //     yesButton.style.opacity = "0.5";
  //     yesButton.style.cursor = "not-allowed";

  //     console.log(
  //       `button exists button_yes_${state.currentQuestion}`,
  //       yesButton
  //     );
  //   }
  //   console.log(
  //     `prebutton exists button_no_${state.currentQuestion}`,
  //     noButton
  //   );

  //   if (noButton) {
  //     noButton.disabled = true;
  //     noButton.onclick = null;
  //     noButton.removeAttribute("onclick");
  //     noButton.style.opacity = "0.5";
  //     noButton.style.cursor = "not-allowed";

  //     console.log(`button exists button_no_${state.currentQuestion}`, noButton);
  //   }
  //   setState((prev) => {
  //     console.log(
  //       "handle yes previous prev",
  //       prev,
  //       `${prev.currentQuestion}_yes`,
  //       `${prev.currentQuestion}_no`
  //     );

  //     const qnIndex = prev.questionList.findIndex(
  //       (x) => x.questionNumber === prev.currentQuestion
  //     );
  //     let updatedQnList = [...prev.questionList];
  //     updatedQnList[qnIndex] = {
  //       ...updatedQnList[qnIndex],
  //       answer: buttonValue,
  //     };

  //     return {
  //       ...prev,
  //       questionList: updatedQnList,
  //       currentQuestion: prev.currentQuestion + 1,
  //     };
  //   });
  //   console.log("Calling the optin from handle yes");
  //   // handleOptIn();
  // };
  const markup = options.map((option) => (
    <button key={option.id} id={option.id} onClick={option.handler}>
      {option.name}
    </button>
  ));

  return <div>{markup}</div>;
};

export default Options;
