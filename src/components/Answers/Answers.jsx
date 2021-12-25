import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import correctAudio from "../../assets/media/CorrectAnswerSound.mp3";
import incorrectAudio from "../../assets/media/IncorrectAnswerSound.mp3";
import {
  correctAnswerSelector,
  levelScoreSelector,
  questionedBirdSelector,
  scoreSelector,
} from "../../redux/Selectors";
import {
  setCorrectAnswer,
  setLevelScore,
  setScore,
  setSelectedBird,
} from "../../redux/Actions";

import styles from "./Answers.module.scss";

const initialClasses = new Array(6);
initialClasses.fill(styles.indicator);

const Answers = ({
  resetColorIndicator,
  setResetColorIndicator,
  birdsList,
  audioPlayer,
}) => {
  const questionedBird = useSelector(questionedBirdSelector);
  const score = useSelector(scoreSelector);
  const levelScore = useSelector(levelScoreSelector);
  const correctAnswer = useSelector(correctAnswerSelector);

  const dispatch = useDispatch();

  const [classesForIndicators, setClassesForIndicators] =
    useState(initialClasses);

  useEffect(() => {
    if (resetColorIndicator) {
      setClassesForIndicators(initialClasses);
      setResetColorIndicator(false);
    }
  }, [resetColorIndicator, setResetColorIndicator]);

  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const checkAnswer = (bird) => {
    dispatch(setSelectedBird(bird));
    if (!correctAnswer) {
      const key = bird.id - 1;
      const tempArr = classesForIndicators.slice();

      if (questionedBird.name === bird.name) {
        dispatch(setCorrectAnswer(true));
        tempArr[key] = tempArr[key] && styles.correct; // как с модификаторами, чтобы не дублировать код
        setClassesForIndicators(tempArr);
        dispatch(setScore(score + levelScore));
        playAudio(correctAudio);
        audioPlayer.current.audio.current.pause();
      } else {
        tempArr[key] = tempArr[key] && styles.wrong; // как с модификаторами, чтобы не дублировать код
        setClassesForIndicators(tempArr);
        dispatch(setLevelScore(levelScore - 1));
        playAudio(incorrectAudio);
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