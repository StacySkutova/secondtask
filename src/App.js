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
  const pureBirdsData = birdsData.map(({ data }) => data);

  const [level, setLevel] = useState(0);
  const [levelScore, setLevelScore] = useState(5);
  const [score, setScore] = useState(0);
  const randomIndex = Math.floor(
    Math.random() * Math.floor(pureBirdsData.length)
  );
  const [questionedBird, setQuestionedBird] = useState(
    pureBirdsData[0][randomIndex]
  );
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [selectedBird, setSelectedBird] = useState(null);
  const [resetColorIndicator, setResetColorIndicator] = useState(false);
  const audioPlayer = createRef();
  const detailsAudioPlayer = createRef();

  return (
    <div className={styles.app}>
      <Header level={level} score={score} birdsData={birdsData} />
      <div>
        {level > pureBirdsData.length - 1 ? (
          <Results score={score} pureBirdsData={pureBirdsData} />
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
                birdsList={pureBirdsData[level]}
                questionedBird={questionedBird}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                setSelectedBird={setSelectedBird}
                levelScore={levelScore}
                setLevelScore={setLevelScore}
                score={score}
                setScore={setScore}
                resetColorIndicator={resetColorIndicator}
                setResetColorIndicator={setResetColorIndicator}
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
          pureBirdsData={pureBirdsData}
          setSelectedBird={setSelectedBird}
          setResetColorIndicator={setResetColorIndicator}
        />
      </div>
    </div>
  );
};

export default App;
