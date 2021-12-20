import React, { useState, useEffect } from 'react';
import './Answers.scss';

import correct from './audio/CorrectAnswerSound.mp3';
import incorrect from './audio/IncorrectAnswerSound.mp3';

const classes = new Array(6);
classes.fill("answers-list__indicator");

const Answers = (props) => {

    const {
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
        audioPlayer
    } = props;

    const [classesForIndicators, setClassesForIndicators] = useState(classes);

    useEffect(() => {
        if (rerender) {
            setClassesForIndicators(classes);
            setRerender(false);
        }
    }, [rerender, setRerender]);

    const playAudio = (src) => {
        const audio = new Audio(src);
        audio.play();
    }

    const checkAnswer = (bird) => {
        setSelectedBird(bird);
        if (!correctAnswer) {
            const key = bird.id - 1;
            const tempArr = classesForIndicators.slice();

            if (questionedBird.name === bird.name) {
                setCorrectAnswer(true);
                tempArr[key] = tempArr[key] + ' answers-list__indicator_correct';
                setClassesForIndicators(tempArr);
                setScore(score + levelScore);
                playAudio(correct);
                audioPlayer.current.audio.current.pause();
            } else {
                tempArr[key] = tempArr[key] + ' answers-list__indicator_wrong';
                setClassesForIndicators(tempArr);
                setLevelScore(levelScore - 1);
                playAudio(incorrect);
                audioPlayer.current.audio.current.pause();
            }
        }
    }

    return (
        <ul className="answers-list">
            {birdsList.map((bird) =>
                <li
                    className="answers-list__item"
                    onClick={() => checkAnswer(bird)}
                    key={bird.id}>
                    <div className={classesForIndicators[bird.id - 1]}></div>
                    {bird.name}
                </li>
            )}
        </ul>
    )
}

export default Answers;