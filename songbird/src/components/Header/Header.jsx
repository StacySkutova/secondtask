import React from "react";

import styles from "./Header.module.scss";

const Header = ({ level, score }) => {
  const categoriesData = [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы",
  ];

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
            className={index === level ? styles.active : styles.item} // как с модификаторами, чтобы не дублировать код
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
