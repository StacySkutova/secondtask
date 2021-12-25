import React from "react";
import { useSelector } from "react-redux";

import { pureBirdsDataSelector, scoreSelector } from "../../redux/Selectors";

import styles from "./Results.module.scss";

const Results = () => {
  const MAX_SCORE_FOR_ROUND = 5;

  const score = useSelector(scoreSelector);
  const pureBirdsData = useSelector(pureBirdsDataSelector);

  return (
    <div className={styles.result}>
      {score === pureBirdsData.length * MAX_SCORE_FOR_ROUND ? (
        <>
          <h2>Поздравляем!</h2>
          <p>Вы прошли викторину и набрали максимум из возможных баллов.</p>
        </>
      ) : (
        <>
          <p>
            Вы набрали {score} баллов из{" "}
            {pureBirdsData.length * MAX_SCORE_FOR_ROUND} возможных.
          </p>
          <p>
            Для прохождения викторины необходимо ответить верно на все вопросы и
            набрать максимальное количество баллов.
          </p>
          <p>Желаете пройти еще раз?</p>
        </>
      )}
    </div>
  );
};

export default Results;
