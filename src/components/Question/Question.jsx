import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import bird from "../../assets/images/DefaultBirdPicture.jpg";

import styles from "./Question.module.scss";

const Question = ({
  correctAnswer,
  questionedBird,
  audioPlayer,
  detailsAudioPlayer,
}) => {
  return (
    <div className={styles.question}>
      <img
        className={styles.image}
        src={correctAnswer ? questionedBird.image : bird}
        alt="bird"
      />
      <div className={styles.details}>
        <div className={styles.heading}>
          {correctAnswer ? questionedBird.name : "******"}
        </div>
        <AudioPlayer
          width="100%"
          height="40px"
          src={questionedBird.audio}
          ref={audioPlayer}
          autoPlayAfterSrcChange={false}
          onPlay={() => {
            if (detailsAudioPlayer.current)
              detailsAudioPlayer.current.audio.current.pause();
          }}
        />
      </div>
    </div>
  );
};

export default Question;
