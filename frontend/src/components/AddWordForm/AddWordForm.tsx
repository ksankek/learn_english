import React, { useState } from "react";
import "./AddWordForm.css";
import { addWord } from "../../http/learnEnglishAPI";
import { observer } from "mobx-react-lite";

const AddWordForm = observer(() => {
  const [word, setWord] = useState("");
  const [translate, setTranslate] = useState("");

  return (
    <form>
      <div className="input-wrapper">
        <div className="input-field">
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            id="input_word"
            type="text"
          />
          <label htmlFor="input_word">Input word</label>
        </div>
        <div className="input-field">
          <input
            value={translate}
            onChange={(e) => setTranslate(e.target.value)}
            id="input_translate"
            type="text"
          />
          <label htmlFor="input_translate">Input translate</label>
        </div>
        <button
          onClick={() => {
            addWord({ word, translate })
              .then(() => alert("Word added"))
              .catch((data) => console.log(data));
          }}
          className="waves-effect waves-light btn-small btn"
        >
          <i className="material-icons left">cloud</i>Add word
        </button>
      </div>
    </form>
  );
});

export default AddWordForm;
