import React, { useState, createRef } from "react";

import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Answers from "./components/Answers/Answers";
import Description from "./components/Description/Description";
import Button from "./components/Button/Button";
import Results from "./components/Results/Results";
import birdsData from "./BirdsData";

import styles from "./App.module.scss";

const App = () => {
  const [level, setLevel] = useState(0);
  const [levelScore, setLevelScore] = useState(5);
  const [score, setScore] = useState(0);
  const randomIndex = Math.floor(Math.random() * Math.floor(6));
  const [questionedBird, setQuestionedBird] = useState(
    birdsData[0][randomIndex]
  );
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [selectedBird, setSelectedBird] = useState(null);
  const [rerender, setRerender] = useState(false);
  const audioPlayer = createRef();
  const detailsAudioPlayer = createRef();

  return (
    <div className={styles.app}>
      <Header level={level} score={score} />
      <div>
        {level > 5 ? (
          <Results score={score} />
        ) : (
          <>
            <Question
              correctAnswer={correctAnswer}
              questionedBird={questionedBird}
              audioPlayer={audioPlayer}
              detailsAudioPlayer={detailsAudioPlayer}
            />
            <div className={styles.answersDetails}>
              <Answers
                birdsList={birdsData[level]}
                questionedBird={questionedBird}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                setSelectedBird={setSelectedBird}
                levelScore={levelScore}
                setLevelScore={setLevelScore}
                score={score}
                setScore={setScore}
                rerender={rerender}
                setRerender={setRerender}
                audioPlayer={audioPlayer}
              />
              <Description
                selectedBird={selectedBird}
                audioPlayer={audioPlayer}
                detailsAudioPlayer={detailsAudioPlayer}
              />
            </div>
          </>
        )}
        <Button
          correctAnswer={correctAnswer}
          setCorrectAnswer={setCorrectAnswer}
          level={level}
          setLevel={setLevel}
          setScore={setScore}
          setLevelScore={setLevelScore}
          setQuestionedBird={setQuestionedBird}
          birdsData={birdsData}
          setSelectedBird={setSelectedBird}
          setRerender={setRerender}
        />
      </div>
    </div>
  );
};

export default App;
