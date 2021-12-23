import React from "react";

import birdsData from "./../../BirdsData";

import styles from "./Results.module.scss";

const Results = ({ score }) => {
  return (
    <div className={styles.result}>
      {score === birdsData.length * 5 ? ( // подумать о деструктуризации // MAX_SCORE_FOR_ROUND - пока константа, но может быть больше
        <>
          <h2>Поздравляем!</h2>
          <p>Вы прошли викторину и набрали максимум из возможных баллов.</p>
        </>
      ) : (
        <>
          <p>
            Вы набрали {score} баллов из {birdsData.length * 5} возможных.
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
