import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  correctAnswerSelector,
  levelSelector,
  pureBirdsDataSelector,
} from "../../redux/Selectors";
import {
  setCorrectAnswer,
  setLevel,
  setLevelScore,
  setQuestionedBird,
  setScore,
  setSelectedBird,
} from "../../redux/Actions";

import styles from "./Button.module.scss";

const Button = () => {
  const [resetColorIndicator, setResetColorIndicator] = useState(false); // подумать, как снести

  const correctAnswer = useSelector(correctAnswerSelector);
  const level = useSelector(levelSelector);
  const pureBirdsData = useSelector(pureBirdsDataSelector);

  const dispatch = useDispatch();

  const nextLevel = () => {
    dispatch(setLevel(level + 1));
    if (level < pureBirdsData.length - 1) {
      const randomIndex = Math.floor(
        Math.random() * Math.floor(pureBirdsData.length)
      );
      dispatch(setQuestionedBird(pureBirdsData[level + 1][randomIndex]));
      dispatch(setCorrectAnswer(false));
      dispatch(setSelectedBird(null));
      dispatch(setLevelScore(pureBirdsData[level].length - 1));
      setResetColorIndicator(true);
    }
  };

  const playAgain = () => {
    dispatch(setLevel(0));
    const randomIndex = Math.floor(
      Math.random() * Math.floor(pureBirdsData.length)
    );
    dispatch(setQuestionedBird(pureBirdsData[0][randomIndex]));
    dispatch(setCorrectAnswer(false));
    dispatch(setSelectedBird(null));
    dispatch(setScore(0));
    setLevelScore(pureBirdsData[level].length - 1);
    setResetColorIndicator(true);
  };

  return (
    <button
      disabled={!correctAnswer && level < pureBirdsData.length}
      className={styles.button}
      onClick={level === pureBirdsData.length ? playAgain : nextLevel}
    >
      {level === pureBirdsData.length ? "Попробовать еще раз!" : "Next"}
    </button>
  );
};

export default Button;
