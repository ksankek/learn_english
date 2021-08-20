import React, { useContext, useEffect, useState } from "react";
import "materialize-css";
import WordCard from "../components/WordCard";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { fetchWords } from "../http/learnEnglishAPI";

const MainPage = observer(() => {
  const { word }: any = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWords()
      .then((data) => word.setWords(data))
      .finally(() => setLoading(false));
  }, [word]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <WordCard word={word.words} />;
});

export default MainPage;
