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
  birdsData,
  setSelectedBird,
  setRerender,
}) => {
  const nextLevel = () => {
    setLevel(level + 1);
    if (level < birdsData.length - 1) {
      const randomIndex = Math.floor(
        Math.random() * Math.floor(birdsData.length) // подумать о деструкторизации
      );
      setQuestionedBird(birdsData[level + 1][randomIndex]);
      setCorrectAnswer(false);
      setSelectedBird(null);
      setLevelScore(birdsData.length - 1); // подумать о деструкторизации
      setRerender(true);
    }
  };

  const playAgain = () => {
    setLevel(0);
    const randomIndex = Math.floor(
      Math.random() * Math.floor(birdsData.length) // подумать о деструкторизации
    );
    setQuestionedBird(birdsData[0][randomIndex]);
    setCorrectAnswer(false);
    setSelectedBird(null);
    setScore(0);
    setLevelScore(birdsData.length - 1); // подумать о деструкторизации
    setRerender(true);
  };

  return (
    <button
      disabled={!correctAnswer && level < birdsData.length}
      className={styles.button}
      onClick={level === birdsData.length ? playAgain : nextLevel}
    >
      {level === birdsData.length ? "Попробовать еще раз!" : "Next"}
    </button>
  );
};

export default Button;
