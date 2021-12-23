import React, { useState, useEffect } from "react";

import correctAudio from "../../assets/media/CorrectAnswerSound.mp3";
import incorrectAudio from "../../assets/media/IncorrectAnswerSound.mp3";

import styles from "./Answers.module.scss";

const initialClasses = new Array(6);
initialClasses.fill(styles.indicator);

const Answers = ({
  birdsList,
  questionedBird,
  correctAnswer,
  setCorrectAnswer,
  setSelectedBird,
  levelScore,
  setLevelScore,
  score,
  setScore,
  rerender,
  setRerender,
  audioPlayer,
}) => {
  const [classesForIndicators, setClassesForIndicators] =
    useState(initialClasses);

  useEffect(() => {
    if (rerender) {
      setClassesForIndicators(initialClasses);
      setRerender(false);
    }
  }, [rerender, setRerender]);

  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const checkAnswer = (bird) => {
    setSelectedBird(bird);
    if (!correctAnswer) {
      const key = bird.id - 1;
      const tempArr = classesForIndicators.slice();

      if (questionedBird.name === bird.name) {
        setCorrectAnswer(true);
        tempArr[key] = tempArr[key] + styles.correct; //" answers-list__indicator_correct";
        setClassesForIndicators(tempArr);
        setScore(score + levelScore);
        playAudio(correctAudio);
        audioPlayer.current.audio.current.pause();
      } else {
        tempArr[key] = tempArr[key] + styles.wrong; //" answers-list__indicator_wrong";
        setClassesForIndicators(tempArr);
        setLevelScore(levelScore - 1);
        playAudio(incorrectAudio);
        audioPlayer.current.audio.current.pause();
      }
    }
  };

  return (
    <ul className={styles.answersList}>
      {birdsList.map((bird) => (
        <li
          className={styles.item}
          onClick={() => checkAnswer(bird)}
          key={bird.id}
        >
          <div className={classesForIndicators[bird.id - 1]}></div>
          {bird.name}
        </li>
      ))}
    </ul>
  );
};

export default Answers;
