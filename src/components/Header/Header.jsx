import React from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import birdsData from "./../../reduxtoolkit/BirdsData";
import {
  levelSelector,
  scoreSelector,
} from "../../reduxtoolkit/Selectors" /*"../../redux/Selectors"*/;

import styles from "./Header.module.scss";

const Header = () => {
  const categoriesData = birdsData.map(({ category }) => category);

  const score = useSelector(scoreSelector);
  const level = useSelector(levelSelector);

  return (
    <div className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.logo}>
          Song<span>bird</span>
        </div>
        <div className={styles.score}>Score: {score}</div>
      </div>
      <ul className={styles.categoryList}>
        {categoriesData.map((category, index) => (
          <li
            key={category}
            className={cn([styles.item, { [styles.active]: index === level }])}
            /*{index === level ? styles.active : styles.item}*/
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
