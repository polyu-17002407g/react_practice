import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1>Good day!</h1>
      <ColoredMessage color="blue">How are you?</ColoredMessage>
      <ColoredMessage color="pink">I am fine</ColoredMessage>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};
