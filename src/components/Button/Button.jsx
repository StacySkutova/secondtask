import React from "react";

import styles from "./Button.module.scss";

const Button = ({
  correctAnswer,
  setCorrectAnswer,
  level,
  setLevel,
  setScore,
  setLevelScore,
  setQuestionedBird,
  pureBirdsData,
  setSelectedBird,
  setResetColorIndicator,
}) => {
  const nextLevel = () => {
    setLevel(level + 1);
    if (level < pureBirdsData.length - 1) {
      const randomIndex = Math.floor(
        Math.random() * Math.floor(pureBirdsData.length)
      );
      setQuestionedBird(pureBirdsData[level + 1][randomIndex]);
      setCorrectAnswer(false);
      setSelectedBird(null);
      setLevelScore(pureBirdsData[level].length - 1);
      setResetColorIndicator(true);
    }
  };

  const playAgain = () => {
    setLevel(0);
    const randomIndex = Math.floor(
      Math.random() * Math.floor(pureBirdsData.length)
    );
    setQuestionedBird(pureBirdsData[0][randomIndex]);
    setCorrectAnswer(false);
    setSelectedBird(null);
    setScore(0);
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
