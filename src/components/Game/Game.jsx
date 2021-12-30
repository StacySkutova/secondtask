import React, { createRef } from "react";
import { useSelector } from "react-redux";

import Results from "./../Results/Results";
import Question from "./../Question/Question";
import Answers from "./../Answers/Answers";
import Description from "./../Description/Description";
import Button from "./../Button/Button";
import {
  levelSelector,
  pureBirdsDataSelector,
} from "./../../reduxtoolkit/Selectors";

import styles from "./Game.module.scss";

const Game = () => {
  const pureBirdsData = useSelector(pureBirdsDataSelector);
  const level = useSelector(levelSelector);

  const audioPlayer = createRef();
  const detailsAudioPlayer = createRef();

  return (
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
  );
};

export default Game;
