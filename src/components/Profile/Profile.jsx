import React from "react";

import styles from "src/components/Profile/Profile.module.scss";

const Profile = () => {
  let newValues = JSON.parse(localStorage.getItem("values"));

  const showPassword = () => {
    const input = document.getElementById("showPassword");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  return (
    <div className={styles.container}>
      <h2>Ваш личный кабинент</h2>
      <div>Ваш E-mail: {newValues["email"]}</div>
      <div>
        Ваш пароль:
        <input
          type="password"
          value={newValues["password"]}
          className={styles.password}
          id="showPassword"
        />
        <button className={styles.button} onClick={showPassword}>
          Show
        </button>
      </div>
    </div>
  );
};

export default Profile;
