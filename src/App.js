import React, { createRef } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answers from "./components/Answers/Answers";
import Description from "./components/Description/Description";
import Button from "./components/Button/Button";
import Results from "./components/Results/Results";
import { levelSelector, pureBirdsDataSelector } from "./redux/Selectors";

import styles from "./App.module.scss";

const App = () => {
  const pureBirdsData = useSelector(pureBirdsDataSelector);
  const level = useSelector(levelSelector);

  const audioPlayer = createRef();
  const detailsAudioPlayer = createRef();

  return (
    <div className={styles.app}>
      <Header />
      <div>
        {level > pureBirdsData.length - 1 ? (
          <Results />
        ) : (
          <>
            <Question
              audioPlayer={audioPlayer}
              detailsAudioPlayer={detailsAudioPlayer}
            />
            <div className={styles.answersDetails}>
              <Answers
                birdsList={pureBirdsData[level]}
                audioPlayer={audioPlayer}
              />
              <Description
                audioPlayer={audioPlayer}
                detailsAudioPlayer={detailsAudioPlayer}
              />
            </div>
          </>
        )}
        <Button />
      </div>
    </div>
  );
};

export default App;
