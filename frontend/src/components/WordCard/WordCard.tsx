import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import "./WordCard.css";
import { knowWord, fetchWords } from "../../http/learnEnglishAPI";

const WordCard = observer(({ word }: any) => {
  const [countWord, setCountWord] = useState(0);
  const [arrayOfWord, setArrayOfWord] = useState(word);
  const [loading, setLoading] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);

  if (loading) {
    fetchWords()
      .then((data) => setArrayOfWord(data))
      .finally(() => {
        setShowTranslate(false);
        setLoading(false);
      });
  }

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-content white-text">
          <span className="card-title">{arrayOfWord[countWord].word}</span>
          <p>
            {showTranslate ? (
              arrayOfWord[countWord].translate
            ) : (
              <i
                onClick={() => setShowTranslate(true)}
                className="material-icons"
              >
                visibility
              </i>
            )}
          </p>
        </div>
        <div className="card-action">
          <button
            className="btn"
            onClick={() => {
              if (countWord === arrayOfWord.length - 1) {
                knowWord(arrayOfWord[countWord].word);
                setLoading(true);
                setCountWord(0);
              } else {
                knowWord(arrayOfWord[countWord].word);
                setLoading(true);
              }
            }}
          >
            I know
          </button>
          <button
            className="btn"
            onClick={() => {
              if (countWord === arrayOfWord.length - 1) {
                setCountWord(0);
                setShowTranslate(false);
              } else {
                setCountWord(countWord + 1);
                setCountWord(countWord + 1);
                setShowTranslate(false);
              }
            }}
          >
            I don't know
          </button>
        </div>
      </div>
    </div>
  );
});

export default WordCard;
