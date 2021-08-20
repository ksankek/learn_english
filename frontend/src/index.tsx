import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import WordsStore from "./store/wordsStrore";

export const Context = createContext({});

ReactDOM.render(
  <Context.Provider
    value={{
      word: new WordsStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
