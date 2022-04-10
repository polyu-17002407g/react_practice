import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    alert();
    setNum(num + 1);
  };

  return (
    <>
      <h1>Good day!</h1>
      <ColoredMessage color="blue">How are you?</ColoredMessage>
      <ColoredMessage color="pink">I am fine</ColoredMessage>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>

      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <TailwindCss />
    </>
  );
};
