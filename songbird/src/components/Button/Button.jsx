import React from 'react';
import './Button.scss';

const Button = (props) => {

  const {
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
  } = props;

  const nextLevel = () => {
    setLevel(level + 1);
    if(level < 5) {
      const randomIndex = Math.floor(Math.random() * Math.floor(6));
      setQuestionedBird(birdsData[level + 1][randomIndex]);
      setCorrectAnswer(false);
      setSelectedBird(null);
      setLevelScore(5);
      setRerender(true);
    }
  }

  const playAgain = () => {
    setLevel(0);
    const randomIndex = Math.floor(Math.random() * Math.floor(6));
    setQuestionedBird(birdsData[0][randomIndex]);
    setCorrectAnswer(false);
    setSelectedBird(null);
    setScore(0);
    setLevelScore(5);
    setRerender(true);
  }

  return (
    <button
      disabled={!correctAnswer && level < 6}
      className="button"
      onClick={(level === 6) ? playAgain : nextLevel}>
      {(level === 6) ? 'Попробовать еще раз!' : 'Next'}
    </button>
  )
}

export default Button;
