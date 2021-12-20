import React from 'react';
import './Question.scss';
import bird from './DefaultBirdPicture.jpg'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './../AudioPlayerCorrectedStyle.scss';

const Question = (props) => {

    const {
        correctAnswer,
        questionedBird,
        audioPlayer,
        detailsAudioPlayer
    } = props;

    return (
        <div className="question">
            <img
                className="question__image"
                src={(correctAnswer) ? questionedBird.image : bird}
                alt="bird" />
            <div className="question__details">
                <div className="question__heading">
                    {(correctAnswer) ? questionedBird.name : '******'}
                </div>
                <AudioPlayer width="100%" height="40px"
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
    )
}

export default Question;
